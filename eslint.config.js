import tseslint from "typescript-eslint";
import importAccess from "eslint-plugin-import-access/flat-config";

export default tseslint.config({
  files: ["**/*.ts"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      jsDocParsingMode: "none",
      sourceType: "module",
    },
  },
  plugins: {
    "import-access": importAccess,
  },
  rules: {
    "import-access/jsdoc": ["error"],
  },
});
