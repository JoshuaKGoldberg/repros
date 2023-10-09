import { expect, test } from "vitest";

import { value7 } from "./index.js";

test("value seven", () => {
  expect(value7).toBe(7);
});
