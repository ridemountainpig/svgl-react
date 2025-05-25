import { writeFileSync, mkdirSync, rmSync } from "fs";
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

function sanitizeComponentName(name: string) {
  return name
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

async function fetchSVGData(): Promise<ISVG[]> {
  const res = await fetch(SVGS_URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch SVG data");

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
  const res = await fetch(svgUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${svgUrl}`);

  const svg = await res.text();
  const svgContent = typeof svg === "string" ? svg : JSON.stringify(svgUrl);

  if (!svgContent || svgContent.trim() === "") {
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

  const body = componentsList
    .map(({ title, category, components }) => {
      const sectionHeader = `## ${title.charAt(0).toUpperCase() + title.slice(1)} [${category}]\n\n`;
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

  const componentsList = await Promise.all(
    svgs.map(async (svg) => {
      console.log(`Adding ${svg.title} Component`);
      const components: { light?: string; dark?: string; default?: string } =
        {};

      const routes =
        typeof svg.route === "string" ? { default: svg.route } : svg.route;

      await Promise.all(
        Object.entries(routes).map(async ([variant, route]) => {
          let baseName = svg.title;

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
          await processSVG(svgUrl, componentName, filePath);

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

  const urlsContent = urls.sort().join("\n");
  writeFileSync(URLS_FILE, urlsContent);

  generateMDXFile(componentsList);
}

fetchAndProcessSVGs().catch(console.error);
