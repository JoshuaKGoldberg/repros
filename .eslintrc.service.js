module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    EXPERIMENTAL_useProjectService: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
  },
};
