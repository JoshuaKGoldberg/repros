import tseslint from "typescript-eslint";
import expectType from "eslint-plugin-expect-type/configs/recommended";

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  expectType
);
