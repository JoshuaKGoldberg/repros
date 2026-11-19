// Does @biomejs/js-api match `overrides[].includes` for different spellings of the same file path?
// The override in biome.json (`src/**` => indentWidth 8) is only visible if the path matched.
import { Biome } from "@biomejs/js-api/nodejs";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

const config = JSON.parse(readFileSync("biome.json", "utf8"));
const code = "function f(){return 1}\n";
const abs = path.resolve("src", "a.js");

const biome = new Biome();
const { projectKey } = biome.openProject(process.cwd());
biome.applyConfiguration(projectKey, config);

const indentOf = (out) => out.split("\n")[1].match(/^ */)[0].length;

console.log(`platform=${process.platform} path.sep=${JSON.stringify(path.sep)}`);
console.log(`path.relative(cwd, abs) = ${JSON.stringify(path.relative(process.cwd(), abs))}`);
console.log("\n== JS API: formatContent(filePath) ==  (indent 8 = override matched, 2 = not)");
const inputs = {
  "forward-slash relative": "src/a.js",
  "path.relative() (native)": path.relative(process.cwd(), abs),
  "backslash relative": "src\\a.js",
  "absolute (native)": abs,
  "absolute (forward slashes)": abs.replaceAll("\\", "/"),
};
for (const [label, filePath] of Object.entries(inputs)) {
  const { content } = biome.formatContent(projectKey, code, { filePath });
  console.log(`${label.padEnd(28)} ${JSON.stringify(filePath).padEnd(48)} indent=${indentOf(content)}`);
}

console.log("\n== CLI: biome format --stdin-file-path ==");
const cli = path.resolve("node_modules", "@biomejs", "biome", "bin", "biome");
for (const [label, filePath] of Object.entries(inputs)) {
  const out = execFileSync(process.execPath, [cli, "format", `--stdin-file-path=${filePath}`], { input: code, encoding: "utf8" });
  console.log(`${label.padEnd(28)} ${JSON.stringify(filePath).padEnd(48)} indent=${indentOf(out)}`);
}
