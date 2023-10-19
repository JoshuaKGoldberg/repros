import { add } from "./index";

describe(add, () => {
  it("adds two numbers", () => {
    expect(add({ values: [1, 2] })).toBe(3);
  });
});
