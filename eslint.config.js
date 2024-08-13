import tseslint from "typescript-eslint";

export default [
  {
    files: ["src/index.astro"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
