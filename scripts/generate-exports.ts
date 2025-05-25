import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const logoDir = join(__dirname, "../src/components");
const files = readdirSync(logoDir).sort();

const componentNames: string[] = [];

const exportStatements = files.map((f) => {
  const name = f.replace(".tsx", "");

  const relativePath = `./components/${name}`;

  componentNames.push(`"${name}"`);

  return `export { default as ${name} } from "${relativePath}";`;
});

exportStatements.push(`export * from "./urls";`);

const typeName = "SvglComponentName";
const typeUnionString = componentNames.join(" | ");
const typeExportStatement = `export type ${typeName} = ${typeUnionString};`;

exportStatements.push(typeExportStatement);

writeFileSync(join(__dirname, "../src/index.ts"), exportStatements.join("\n"));
