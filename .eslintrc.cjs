module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    jsxPragma: null,
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
  },
};
