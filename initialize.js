import fs from "node:fs/promises";

const count = 9001;

await fs.mkdir("src", { recursive: true });

for (let i = 0; i < count; i += 1) {
  await fs.writeFile(`src/source-${i}.ts`, `export const value${i} = ${i}`);
}

await fs.writeFile(
  "src/index.ts",
  new Array(count)
    .fill()
    .map((_, i) => `export { value${i} } from "./source-${i}";`)
    .join("\n")
);

await fs.writeFile(
  "src/index.test.ts",
  `
import { expect, test } from "vitest";
import { value7 } from "./index.js";

test("value seven", () => {
    expect(value7).toBe(7);
})
`.trimStart()
);
