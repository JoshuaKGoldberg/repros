import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": [
        "error",
        {
          allowForKnownSafePromises: [
            { from: "package", name: "FastifyReply", package: "fastify" },
            { from: "package", name: "SafePromiseLike", package: "fastify" },
          ],
        },
      ],
    },
  }
);
