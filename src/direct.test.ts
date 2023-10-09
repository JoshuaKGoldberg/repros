import { expect, test } from "vitest";

import { value7 } from "./source-7";

test("value seven", () => {
  expect(value7).toBe(7);
});
