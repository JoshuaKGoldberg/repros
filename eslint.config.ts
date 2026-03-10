// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import expectType from "eslint-plugin-expect-type/configs/recommended";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  expectType,
);
