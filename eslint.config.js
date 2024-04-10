import * as parserJsonc from "jsonc-eslint-parser";
import tseslint from "typescript-eslint";

export default tseslint.config(
    tseslint.configs.base,
    {
        files: ["**/package.json"],
        languageOptions: {
            parser: parserJsonc
        }
    },
    {
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
        rules: {
            "@typescript-eslint/consistent-type-assertions": "error"
        }
    },
);
