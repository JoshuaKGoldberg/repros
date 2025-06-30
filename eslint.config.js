import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: ["css/recommended"],
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
  },
]);
