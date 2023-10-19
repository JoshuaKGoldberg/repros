/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/*.ts"],
  coverageDirectory: "coverage-jest",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
};
