import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  setupFiles: ["./setup.js"],
  testEnvironment: "jsdom",
};

export default config;
