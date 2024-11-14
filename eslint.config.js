import epAstro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

export default [
  ...epAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        projectService: true,
      },
    },
  },
];
