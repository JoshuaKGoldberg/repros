module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    allowDefaultProjectForFiles: [".eslintrc.cjs"],
    EXPERIMENTAL_useProjectService: true,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unnecessary-condition": "error",
  },
};
