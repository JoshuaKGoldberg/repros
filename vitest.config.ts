import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["console-fail-test/setup"],
  },
});
