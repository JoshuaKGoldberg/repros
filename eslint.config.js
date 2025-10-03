import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import n from "eslint-plugin-n";
import * as regexp from "eslint-plugin-regexp";

export default defineConfig([
  {
    extends: [
      "js/recommended",
      tseslint.configs.recommended,
      n.configs["flat/recommended"],
      regexp.configs["flat/recommended"],
    ],
    files: ["**/*.js"],
    languageOptions: { globals: globals.node },
    plugins: { js },
    rules: {
      "n/no-unpublished-import": "off",
    },
  },
]);
