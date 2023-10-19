/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage-jest",
  coverageProvider: "v8",
  preset: "ts-jest",
  testEnvironment: "node",
};
