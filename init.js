import fs from "node:fs/promises";
import path from "node:path";

const src = "src";

await fs.rm(src, { force: true, recursive: true });
await fs.mkdir(src);

for (let i = 0; i < 100; i += 1) {
  await fs.writeFile(
    path.join(src, `file-${i}.js`),
    `export const value = ${i};`
  );
}
