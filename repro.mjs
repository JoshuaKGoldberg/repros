// formatly formats Biome projects in-process with @biomejs/js-api, which only
// matches config globs against forward-slash paths. On Windows, formatly
// passes it path.relative() results such as "src\\a.js", so the globs don't match.
import { format } from "formatly";

const text = "function f(){return 1}\n";

const cases = [
  {
    expected: "function f() {\n        return 1;\n}\n",
    filePath: "src/a.js",
    reason: 'the "src/**" override sets indentWidth 8',
  },
  {
    expected: text,
    filePath: "ignored/a.js",
    reason: 'files.includes "!ignored/**" excludes it',
  },
];

for (const { expected, filePath, reason } of cases) {
  const report = await format(text, { filePath });
  const actual = report.formatted ?? report.error ?? report.message;
  const matched = actual === expected;

  console.log(`${matched ? "✅" : "❌"} ${filePath}: expected ${reason}`);

  if (!matched) {
    console.log(`  expected: ${JSON.stringify(expected)}`);
    console.log(`  actual:   ${JSON.stringify(actual)}`);
    process.exitCode = 1;
  }
}
