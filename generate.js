import fs from "node:fs/promises";
import prettier from "prettier";

const filesCount = 9001;

const template = (i) => `
export type ExampleType${i} =
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | {
        [K in 'a' | 'b' | ' c' | 'd']: ${i};
    };

export function identity${i}<T extends ExampleType${i}>(value: T) {
  return value;
}
`;

async function writeFile(filePath, source) {
  await fs.writeFile(
    filePath,
    await prettier.format(source, { parser: "typescript" }),
  );
}

await fs.rm("src", { force: true, recursive: true });
await fs.mkdir("src", { recursive: true });

await writeFile(
  "src/index.ts",
  new Array(filesCount)
    .fill()
    .flatMap((_, i) => [
      `import { identity${i} } from "./file${i}.js";`,
      `identity${i}(0);`,
      "",
    ])
    .join("\n"),
);

for (let i = 0; i < filesCount; i += 1) {
  await writeFile(`src/file${i}.ts`, template(i));
}
