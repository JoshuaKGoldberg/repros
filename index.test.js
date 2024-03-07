const { example } = require(".");

describe("index", () => {
  it("equals true", () => {
    expect(example()).toBe(true);
  });
});
