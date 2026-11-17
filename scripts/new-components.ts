/**
 * List the components added between two git refs and print a Markdown report.
 *
 *   bun scripts/new-components.ts                      # previous tag..HEAD
 *   bun scripts/new-components.ts --from v1.0.18 --to v1.0.19
 *   bun scripts/new-components.ts --from origin/main --to HEAD \
 *     --previews-dir previews/pr-12 \
 *     --preview-base-url https://raw.githubusercontent.com/o/r/previews/pr-12
 *
 * Options:
 *   --from <ref>              base ref (default: latest tag reachable from --to,
 *                             excluding --to itself)
 *   --to <ref>                head ref (default: HEAD)
 *   --out <file>              write Markdown to a file instead of stdout
 *   --title <text>            heading (default: "New logos")
 *   --previews-dir <dir>      render one light/dark preview SVG per logo here
 *   --preview-base-url <url>  public URL of --previews-dir, used for <img> tags
 *
 * Rendering previews executes the component code, so only pass
 * --previews-dir for refs you trust.
 */
import { execFileSync } from "child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { gzipSync } from "zlib";

const COMPONENTS_DIR = "src/components";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

function git(...args: string[]): string {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

function previousTag(ref: string): string {
  // Tags pointing at `ref` itself are skipped so `--to v1.0.19` compares
  // against v1.0.18, not against itself.
  const own = new Set(
    git("tag", "--points-at", ref).split("\n").filter(Boolean),
  );
  const tags = git("tag", "--merged", ref, "--sort=-v:refname")
    .split("\n")
    .filter((t) => t && !own.has(t));
  if (!tags.length) throw new Error(`No tag found before ${ref}`);
  return tags[0];
}

function listComponents(ref: string): Set<string> {
  const out = git("ls-tree", "--name-only", `${ref}:${COMPONENTS_DIR}`);
  return new Set(
    out
      .split("\n")
      .filter((f) => f.endsWith(".tsx"))
      .map((f) => f.replace(/\.tsx$/, "")),
  );
}

type Logo = {
  name: string;
  // Unique per entry: a single `Pi` and a themed `PiLight`/`PiDark` can
  // both exist, so the display name alone is not enough.
  id: string;
  light?: string;
  dark?: string;
  default?: string;
};

// fetch-svgs.ts names themed variants `<Name>Light` / `<Name>Dark`.
// Pair them up so a logo with both themes shows as one entry.
function groupLogos(added: string[], all: Set<string>): Logo[] {
  const logos = new Map<string, Logo>();
  for (const c of added) {
    const m = c.match(/^(.+?)(Light|Dark)$/);
    const sibling = m && `${m[1]}${m[2] === "Light" ? "Dark" : "Light"}`;
    if (m && sibling && all.has(sibling)) {
      const id = `${m[1]}Light`;
      const logo = logos.get(id) ?? { name: m[1], id };
      logo[m[2].toLowerCase() as "light" | "dark"] = c;
      logo[(m[2] === "Light" ? "dark" : "light") as "light" | "dark"] = sibling;
      logos.set(id, logo);
    } else {
      logos.set(c, { name: c, id: c, default: c });
    }
  }
  return [...logos.values()].sort(
    (a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" }) ||
      Number(Boolean(b.default)) - Number(Boolean(a.default)),
  );
}

// Write every needed component source at `ref` into a temp dir so the
// report reflects that ref even when it is not checked out.
function exportSources(ref: string, names: string[], dir: string) {
  for (const n of names) {
    const src = git("show", `${ref}:${COMPONENTS_DIR}/${n}.tsx`);
    writeFileSync(join(dir, `${n}.tsx`), src);
  }
}

// Size of `import { Name } from "@ridemountainpig/svgl-react"` after
// tree-shaking: the component alone, minified, React left external.
async function measure(dir: string, name: string) {
  const result = await Bun.build({
    entrypoints: [join(dir, `${name}.tsx`)],
    external: ["react", "react/jsx-runtime"],
    minify: true,
    target: "browser",
    format: "esm",
  });
  if (!result.success) {
    throw new Error(`Failed to bundle ${name}: ${result.logs.join("\n")}`);
  }
  const code = await result.outputs[0].text();
  return { min: Buffer.byteLength(code), gzip: gzipSync(code).length };
}

function formatBytes(n: number) {
  return n < 1024 ? `${n} B` : `${(n / 1024).toFixed(1)} kB`;
}

const PANEL = 120;
const PAD = 20;

// One SVG with the light variant on a white panel and the dark variant on a
// near-black panel, so both themes are visible wherever the image is shown.
async function renderPreview(dir: string, logo: Logo): Promise<string> {
  const React = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const render = async (name: string, x: number) => {
    const mod = await import(join(dir, `${name}.tsx`));
    const el = React.createElement(mod.default, {
      x: x + PAD,
      y: PAD,
      width: PANEL - PAD * 2,
      height: PANEL - PAD * 2,
    });
    return renderToStaticMarkup(el);
  };
  const light = await render(logo.light ?? logo.default!, 0);
  const dark = await render(logo.dark ?? logo.default!, PANEL);
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${PANEL * 2}" height="${PANEL}" viewBox="0 0 ${PANEL * 2} ${PANEL}">`,
    `<rect width="${PANEL}" height="${PANEL}" fill="#ffffff"/>`,
    `<rect x="${PANEL}" width="${PANEL}" height="${PANEL}" fill="#0a0a0a"/>`,
    light,
    dark,
    `</svg>`,
  ].join("");
}

async function main() {
  const to = arg("to") ?? "HEAD";
  const from = arg("from") ?? previousTag(to);
  const title = arg("title") ?? "New logos";
  const previewsDir = arg("previews-dir");
  const previewBaseUrl = arg("preview-base-url")?.replace(/\/$/, "");

  const before = listComponents(from);
  const after = listComponents(to);
  const added = [...after].filter((c) => !before.has(c));
  const removed = [...before].filter((c) => !after.has(c)).sort();
  const logos = groupLogos(added, after);

  const lines: string[] = [`## ${title}`, ""];
  lines.push(
    `Compared \`${from}\` → \`${to}\`: **${logos.length}** new logo${logos.length === 1 ? "" : "s"} (${added.length} component${added.length === 1 ? "" : "s"}).`,
    "",
  );

  if (logos.length) {
    const tmp = mkdtempSync(join(tmpdir(), "svgl-new-"));
    try {
      const needed = [
        ...new Set(
          logos.flatMap((l) => [l.light, l.dark, l.default].filter(Boolean)),
        ),
      ] as string[];
      exportSources(to, needed, tmp);
      if (previewsDir) mkdirSync(previewsDir, { recursive: true });

      const showPreview = Boolean(previewsDir && previewBaseUrl);
      lines.push(
        showPreview
          ? "| Preview (light / dark) | Logo | Components | Size (min / gzip) |"
          : "| Logo | Theme | Components | Size (min / gzip) |",
        showPreview
          ? "| :---: | --- | --- | --- |"
          : "| --- | --- | --- | --- |",
      );

      for (const logo of logos) {
        const variants = logo.default
          ? [logo.default]
          : [logo.light!, logo.dark!];
        const sizes = await Promise.all(variants.map((v) => measure(tmp, v)));
        const components = variants.map((v) => `\`<${v} />\``).join("<br>");
        const size = sizes
          .map((s) => `${formatBytes(s.min)} / ${formatBytes(s.gzip)}`)
          .join("<br>");
        const theme = logo.default ? "single" : "light + dark";

        if (previewsDir) {
          writeFileSync(
            join(previewsDir, `${logo.id}.svg`),
            await renderPreview(tmp, logo),
          );
        }
        if (showPreview) {
          const img = `<img src="${previewBaseUrl}/${logo.id}.svg" alt="${logo.name}" width="240">`;
          lines.push(
            `| ${img} | **${logo.name}**<br>${theme} | ${components} | ${size} |`,
          );
        } else {
          lines.push(
            `| **${logo.name}** | ${theme} | ${components} | ${size} |`,
          );
        }
      }
      lines.push(
        "",
        "<sub>Size is the single component minified, React external — what `import { Name }` adds after tree-shaking.</sub>",
      );
    } finally {
      rmSync(tmp, { recursive: true, force: true });
    }
  }

  if (removed.length) {
    lines.push(
      "",
      `<details><summary>${removed.length} removed component${removed.length === 1 ? "" : "s"}</summary>`,
      "",
      removed.map((r) => `\`${r}\``).join(", "),
      "",
      "</details>",
    );
  }

  const md = lines.join("\n") + "\n";
  const out = arg("out");
  if (out) writeFileSync(out, md);
  else process.stdout.write(md);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
