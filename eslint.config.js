// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticTs from "@stylistic/eslint-plugin-ts";

export default tseslint.config(
  tseslint.configs.base,
  {
    files: ["src/index.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      "@stylistic/ts": stylisticTs,
    },
    rules: {
      "@stylistic/ts/lines-around-comment": "error",
      "@stylistic/ts/indent": "error",
      "@typescript-eslint/no-floating-promises": "error",
    },
  }
);
