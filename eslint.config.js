import tseslint from "typescript-eslint";

const typedLinting = process.env.TYPED_LINTING;

export default tseslint.config(tseslint.configs.base, {
  files: ["**/*.ts"],
  languageOptions: typedLinting
    ? {
        parserOptions: {
          disallowAutomaticSingleRunInference: true,
          project: true,
          tsconfigRootDir: import.meta.dirname,
        },
      }
    : {},
  rules: {
    "@typescript-eslint/array-type": "error",
    ...(typedLinting
      ? {
          "@typescript-eslint/no-floating-promises": "error",
        }
      : {}),
  },
});
