import axios from "axios";
import { writeFileSync, mkdirSync } from "fs";
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
const MDX_FILE = join(__dirname, "../docs/content/docs/components.mdx");

function sanitizeComponentName(name: string) {
  name = name
    .replace(/^1/, "One")
    .replace(/\s+(.)/g, (_, c) => c.toUpperCase())
    .replace(/\./g, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\+/g, "")
    .replace(/\/(.)/g, (_, c) => c.toUpperCase())
    .replace(/\#/g, "Sharp");

  return name.charAt(0).toUpperCase() + name.slice(1);
}

async function fetchSVGData(): Promise<ISVG[]> {
  const { data } = await axios.get(SVGS_URL);
  const match = data.match(/export const svgs[^=]+=\s*(\[[\s\S]*?\]);/s);
  if (match) {
    const svgsArrayString = match[1];
    const svgs: ISVG[] = eval(svgsArrayString);
    return svgs;
  } else {
    throw new Error("Failed to fetch SVG data");
  }
}

async function processSVG(url: string, componentName: string) {
  const { data: svg } = await axios.get(url);
  const jsCode = await transform(
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
  writeFileSync(join(OUTPUT_DIR, `${componentName}.tsx`), jsCode);
}

function generateMDXFile(
  componentsList: {
    title: string;
    components: { light?: string; dark?: string; default?: string };
  }[],
) {
  const header = `---
title: Svgl Components
description: Explore the full collection of React Svgl components. Instantly search, preview, and copy import statements for your favorite SVG icons.
---

`;

  const body = componentsList
    .map(({ title, components }) => {
      const sectionHeader = `## ${title.charAt(0).toUpperCase() + title.slice(1)}\n\n`;
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
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const svgs = await fetchSVGData();

  const componentsList = await Promise.all(
    svgs.map(async (svg) => {
      console.log(`Adding ${svg.title} Component`);
      const components: { light?: string; dark?: string; default?: string } =
        {};

      const routes =
        typeof svg.route === "string" ? { default: svg.route } : svg.route;

      await Promise.all(
        Object.entries(routes).map(async ([variant, route]) => {
          let componentName = sanitizeComponentName(svg.title);
          if (variant === "light") componentName += "Light";
          if (variant === "dark") componentName += "Dark";

          const svgUrl = `https://raw.githubusercontent.com/pheralb/svgl/refs/heads/main/static${route}`;
          await processSVG(svgUrl, componentName);

          if (variant === "default") {
            components.default = componentName;
          } else {
            components[variant as "light" | "dark"] = componentName;
          }
        }),
      );

      return { title: svg.title, components };
    }),
  );

  generateMDXFile(componentsList);
}

fetchAndProcessSVGs().catch(console.error);
