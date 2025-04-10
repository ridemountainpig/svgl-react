import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const logoDir = join(__dirname, "../src/components");
const files = readdirSync(logoDir).sort();

const exportStatements = files
  .map((f) => {
    const name = f.replace(".tsx", "");
    return `export { default as ${name} } from './components/${name}';`;
  })
  .join("\n");

writeFileSync(join(__dirname, "../src/index.ts"), exportStatements);
