import { expect, describe, it } from "vitest";
import { sayHello } from ".";

describe("sayHello", () => {
  it("says hello", () => {
    expect(sayHello()).toEqual("Hello");
  });
});
