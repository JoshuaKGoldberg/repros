import { expect } from "chai";

describe("reporter", function () {
  it("should log without colon", function () {
    expect(1, "Expected something").to.equal(2);
  });

  it("should log with colon", function () {
    expect(1, "Test: expected something").to.equal(2);
  });
});
