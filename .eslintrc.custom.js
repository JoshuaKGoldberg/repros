module.exports = {
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.custom.json",
    tsconfigRootDir: __dirname,
  },
  root: true,
  rules: {
    "@typescript-eslint/no-floating-promises": "error",
  },
};
