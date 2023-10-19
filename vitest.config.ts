import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      all: true,
      provider: "v8",
      reportsDirectory: "coverage-vitest",
    },
    globals: true,
    exclude: ["coverage*", "node_modules"],
  },
});
