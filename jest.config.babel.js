/** @type {import("jest").Config} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/*.ts"],
  coverageDirectory: "coverage-jest",
  coverageProvider: "v8",
  testEnvironment: "node",
};
