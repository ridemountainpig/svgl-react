import { writeFileSync, mkdirSync, rmSync, appendFileSync } from "fs";
import { join } from "path";
import { transform } from "@svgr/core";

interface ISVG {
  title: string;
  category: string;
  route: string | { light: string; dark: string };
  wordmark?: string | { light: string; dark: string };
  brandUrl: string;
  url: string;
}

const SVGS_URL =
  "https://raw.githubusercontent.com/pheralb/svgl/main/src/data/svgs.ts";
const OUTPUT_DIR = join(__dirname, "../src/components");
const URLS_FILE = join(__dirname, "../src/urls.ts");
const MDX_FILE = join(__dirname, "../docs/content/docs/components.mdx");

// Simple semaphore: throttle concurrent fn() invocations to `max`.
// Used to keep concurrent GitHub raw fetches well below rate limits.
function createLimiter(max: number) {
  let active = 0;
  const queue: (() => void)[] = [];
  return async <T>(fn: () => Promise<T>): Promise<T> => {
    if (active >= max) {
      await new Promise<void>((resolve) => queue.push(resolve));
    }
    active++;
    try {
      return await fn();
    } finally {
      active--;
      queue.shift()?.();
    }
  };
}

// Wrap `fetch` with exponential-backoff retry for transient errors.
// Retries on network errors and on 429/5xx; gives up immediately on other
// non-OK statuses (e.g. 404) since retrying won't help.
async function fetchWithRetry(
  url: string,
  init: RequestInit = {},
  {
    retries = 3,
    baseDelayMs = 500,
  }: { retries?: number; baseDelayMs?: number } = {},
): Promise<Response> {
  let lastErr: Error | null = null;
  for (let attempt = 0; attempt <= retries; attempt++) {
    let retryable = true;
    try {
      const res = await fetch(url, init);
      if (res.ok) return res;
      retryable = res.status === 429 || (res.status >= 500 && res.status < 600);
      lastErr = new Error(`HTTP ${res.status} for ${url}`);
    } catch (e) {
      lastErr = e instanceof Error ? e : new Error(String(e));
      retryable = true;
    }
    if (!retryable || attempt === retries) throw lastErr;
    const delay = baseDelayMs * 2 ** attempt + Math.random() * 250;
    await new Promise((r) => setTimeout(r, delay));
  }
  throw lastErr ?? new Error(`Failed to fetch ${url}`);
}

function sanitizeComponentName(name: string | unknown) {
  return String(name)
    .replace(/^1/, "One")
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/\./g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\+/g, "Plus")
    .replace(/\/(.)/g, (_, c) => c.toUpperCase())
    .replace(/\#/g, "Sharp")
    .replace(/\s/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/^./, (c) => c.toUpperCase());
}

// Replace non-ASCII characters only inside places that hold an SVG id, so
// that ids and their references end up identical without mangling text
// content (e.g. <text> labels in non-Latin scripts).
function sanitizeNonAsciiIds(svg: string): string {
  const stripNonAscii = (s: string) => s.replace(/[^\x00-\x7F]/g, "_");
  return (
    svg
      // id="..." / id='...'
      .replace(
        /(\bid\s*=\s*)(['"])([^'"]*)\2/g,
        (_, prefix, q, val) => `${prefix}${q}${stripNonAscii(val)}${q}`,
      )
      // url(#...) — local-id references
      .replace(
        /url\(\s*#([^)\s]*)\s*\)/g,
        (_, val) => `url(#${stripNonAscii(val)})`,
      )
      // (xlink:)?href="#..." — only fragment refs, leave full URLs alone
      .replace(
        /((?:xlink:)?href\s*=\s*)(['"])#([^'"]*)\2/g,
        (_, prefix, q, val) => `${prefix}${q}#${stripNonAscii(val)}${q}`,
      )
  );
}

// Flatten nested <svg> elements into <g transform="..."> so that SVGR's
// `svgProps` (width/height/...) and `expandProps` only apply to the root.
// Without this, an inner <svg width="360" height="360" x="76" y="76"
// viewBox="0 0 256 256"> gets its width/height clobbered to "100%" and
// renders at the wrong size.
function flattenNestedSvgs(svg: string): string {
  // Repeatedly replace the innermost <svg>...</svg> (one with no nested <svg>
  // inside) with a <g transform="..."> wrapper, leaving the root <svg> intact.
  while (true) {
    const svgOpenCount = (svg.match(/<svg\b/g) ?? []).length;
    if (svgOpenCount <= 1) break;
    const next = svg.replace(
      /<svg\b([^>]*)>((?:(?!<svg\b)[\s\S])*?)<\/svg>/,
      (_, attrs: string, inner: string) => {
        // Read an attribute value, supporting both single and double quotes.
        const attr = (name: string) => {
          const m = attrs.match(
            new RegExp(`\\b${name}\\s*=\\s*(['"])([^'"]*)\\1`),
          );
          return m ? m[2] : null;
        };
        const x = parseFloat(attr("x") ?? "0") || 0;
        const y = parseFloat(attr("y") ?? "0") || 0;
        const w = parseFloat(attr("width") ?? "0");
        const h = parseFloat(attr("height") ?? "0");
        const vb = attr("viewBox");
        let scaleX = 1;
        let scaleY = 1;
        if (vb && w && h) {
          const parts = vb.split(/[\s,]+/).map(parseFloat);
          if (parts.length === 4 && parts[2] && parts[3]) {
            scaleX = w / parts[2];
            scaleY = h / parts[3];
          }
        }
        // Compose new transform = layout (translate/scale) + existing transform.
        // SVG applies the leftmost transform last, so layout wraps the
        // original transform's local coords, matching nested-<svg> semantics.
        const existingTransform = attr("transform") ?? "";
        const transforms: string[] = [];
        if (x || y) transforms.push(`translate(${x} ${y})`);
        if (scaleX !== 1 || scaleY !== 1)
          transforms.push(`scale(${scaleX} ${scaleY})`);
        if (existingTransform) transforms.push(existingTransform);
        // Strip layout + transform + xmlns attrs (transform is rebuilt above);
        // keep fill/stroke/style/etc. so child inheritance still works.
        const carriedAttrs = attrs.replace(
          /\s+(?:x|y|width|height|viewBox|xmlns|xmlns:xlink|preserveAspectRatio|version|transform)\s*=\s*(['"])[^'"]*\1/g,
          "",
        );
        const transform = transforms.length
          ? ` transform="${transforms.join(" ")}"`
          : "";
        return `<g${transform}${carriedAttrs}>${inner}</g>`;
      },
    );
    if (next === svg) break;
    svg = next;
  }
  return svg;
}

function addViewBoxIfMissing(svg: string): string {
  const hasViewBox = svg.includes("viewBox");
  if (hasViewBox) return svg;

  const widthMatch = svg.match(/width="([\d.]+)"/);
  const heightMatch = svg.match(/height="([\d.]+)"/);

  if (widthMatch && heightMatch) {
    const width = parseFloat(widthMatch[1]);
    const height = parseFloat(heightMatch[1]);

    if (!isNaN(width) && !isNaN(height)) {
      return svg.replace(
        /<svg([^>]*)>/,
        `<svg$1 viewBox="0 0 ${width} ${height}">`,
      );
    }
  }

  return svg;
}

async function fetchSVGData(): Promise<ISVG[]> {
  const res = await fetchWithRetry(SVGS_URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    },
  });

  const data = await res.text();
  const match = data.match(/export const svgs[^=]+=\s*(\[[\s\S]*?\]);/s);
  if (match) {
    const svgsArrayString = match[1];
    const svgs: ISVG[] = eval(svgsArrayString);
    return svgs;
  } else {
    throw new Error("Failed to fetch SVG data");
  }
}

async function processSVG(
  svgUrl: string,
  componentName: string,
  filePath: string,
) {
  const res = await fetchWithRetry(svgUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    },
  });

  const svgRaw = await res.text();
  const svg = addViewBoxIfMissing(
    flattenNestedSvgs(sanitizeNonAsciiIds(svgRaw)),
  );

  if (!svg || svg.trim() === "") {
    console.warn(
      `Warn: Empty SVG content received for ${componentName} from ${svgUrl}`,
    );
    return;
  }

  let jsCode = await transform(
    svg,
    {
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      typescript: true,
      jsxRuntime: "classic",
      expandProps: "end",
      svgProps: {
        width: "100%",
        height: "100%",
        preserveAspectRatio: "xMidYMid meet",
      },
      dimensions: false,
      svgoConfig: {
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
          {
            name: "prefixIds",
            params: {
              prefix: `${componentName}`,
            },
          },
        ],
      },
    },
    { componentName },
  );

  writeFileSync(filePath, jsCode);
}

function generateMDXFile(
  componentsList: {
    title: string;
    category: string;
    components: { light?: string; dark?: string; default?: string };
  }[],
) {
  const header = `---
title: Svgl Components
description: Explore the full collection of React Svgl components. Instantly search, preview, and copy import statements for your favorite SVG icons.
---

`;

  const sortedList = [...componentsList].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
  );

  const body = sortedList
    .map(({ title, category, components }) => {
      const sortedCategory = (
        Array.isArray(category) ? category : String(category).split(",")
      )
        .map((c) => String(c).trim())
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
        .join(",");
      const sectionHeader = `## ${title.charAt(0).toUpperCase() + title.slice(1)} [${sortedCategory}]\n\n`;
      let codeBlock = "";

      if (components.light && components.dark) {
        codeBlock += `\`\`\`ts tab="light"\n<${components.light} />\n\`\`\`\n\n`;
        codeBlock += `\`\`\`ts tab="dark"\n<${components.dark} />\n\`\`\`\n\n`;
      } else if (components.default) {
        codeBlock += `\`\`\`ts\n<${components.default} />\n\`\`\`\n\n`;
      }

      return "\n---\n" + sectionHeader + codeBlock;
    })
    .join("");

  writeFileSync(MDX_FILE, header + body);
}

async function fetchAndProcessSVGs() {
  rmSync(OUTPUT_DIR, { recursive: true, force: true });
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const svgs = await fetchSVGData();
  const usedNames = new Set<string>();
  const urls: string[] = [];
  const limit = createLimiter(10);

  type FailedItem = {
    svgUrl: string;
    componentName: string;
    filePath: string;
    error: Error;
  };
  const failed: FailedItem[] = [];

  const componentsList = await Promise.all(
    svgs.map(async (svg) => {
      console.log(`Adding ${svg.title} Component`);
      const components: { light?: string; dark?: string; default?: string } =
        {};

      const routes =
        typeof svg.route === "string" ? { default: svg.route } : svg.route;

      await Promise.all(
        Object.entries(routes).map(async ([variant, route]) => {
          let baseName = String(svg.title);

          if (svg.title === "JetBrains") {
            baseName = svg.brandUrl ? "JetBrainsColorful" : "JetBrainsMono";
          } else if (svg.title === "CSS (New)") {
            baseName = "CSSNew";
          }

          let componentName = sanitizeComponentName(baseName);
          const exportUrlString = `export const ${componentName}${svg.title == "Arc" ? svg.category : ""}Url = "${svg.url}"`;

          if (!urls.includes(exportUrlString)) {
            urls.push(exportUrlString);
          }

          if (variant === "light") componentName += "Light";
          if (variant === "dark") componentName += "Dark";

          if (usedNames.has(componentName)) {
            componentName += sanitizeComponentName(svg.category);
          }

          usedNames.add(componentName);

          const svgUrl = `https://raw.githubusercontent.com/pheralb/svgl/refs/heads/main/static${route}`;
          const filePath = join(OUTPUT_DIR, `${componentName}.tsx`);
          try {
            await limit(() => processSVG(svgUrl, componentName, filePath));
          } catch (e) {
            const err = e instanceof Error ? e : new Error(String(e));
            console.warn(
              `Fetch failed for ${componentName}: ${err.message} — will retry`,
            );
            failed.push({ svgUrl, componentName, filePath, error: err });
          }

          if (variant === "default") {
            components.default = componentName;
          } else {
            components[variant as "light" | "dark"] = componentName;
          }
        }),
      );

      return { title: svg.title, category: svg.category, components };
    }),
  );

  if (failed.length > 0) {
    console.log(`\nRetrying ${failed.length} failed SVG fetches...`);
    const stillFailed: FailedItem[] = [];
    for (const item of failed) {
      try {
        await processSVG(item.svgUrl, item.componentName, item.filePath);
        console.log(`Retry OK: ${item.componentName}`);
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        console.error(`Retry failed: ${item.componentName} — ${err.message}`);
        stillFailed.push({ ...item, error: err });
      }
    }
    if (stillFailed.length > 0) {
      throw new Error(
        `Failed to fetch ${stillFailed.length} SVG(s) after retry:\n` +
          stillFailed
            .map(
              (s) => `  - ${s.componentName} (${s.svgUrl}): ${s.error.message}`,
            )
            .join("\n"),
      );
    }
  }

  const urlsContent = urls.sort().join("\n");
  writeFileSync(URLS_FILE, urlsContent);

  generateMDXFile(componentsList);
}

fetchAndProcessSVGs().catch((e) => {
  console.error(e);
  // Signal failure via a GitHub Actions step output so the workflow can skip
  // downstream steps (and not open a PR) without showing the run as failed.
  // Locally (no GITHUB_OUTPUT env var) we still exit non-zero so it's loud.
  const ghOutput = process.env.GITHUB_OUTPUT;
  if (ghOutput) {
    appendFileSync(ghOutput, "had_failures=true\n");
    process.exit(0);
  }
  process.exit(1);
});
