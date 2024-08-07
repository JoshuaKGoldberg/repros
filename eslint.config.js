import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";

export default tseslint.config(
  { ignores: ["*.mjs"] },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  perfectionist.configs["recommended-natural"],
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js"],
          defaultProject: "tsconfig.json"
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
