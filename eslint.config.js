import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    extends: ["js/recommended"],
    files: ["**/*.js"],
    languageOptions: { globals: globals.node },
    plugins: { js },
  },
]);
