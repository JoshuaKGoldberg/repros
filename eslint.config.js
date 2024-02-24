import importPlugin from "eslint-plugin-import";

export default [
  {
    files: ["src/*.js"],
    ignores: ["src/ignored.js"],
    plugins: { import: importPlugin },
    rules: {
      "import/no-unused-modules": ["error", { unusedExports: true }],
    },
  },
];
