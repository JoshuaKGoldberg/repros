import { expect, test, vi } from "vitest";
import { logsSomething } from "./index.js";

test("curry", () => {
  const logger = vi.fn();

  logsSomething(logger);

  // These don't trigger no-unsafe-assignment, because
  // toHaveBeenCalledWith() already takes in any
  expect(logger).toHaveBeenCalledWith(expect.any(Object));
  expect(logger).toHaveBeenCalledWith(expect.anything());

  // These *do* trigger no-unsafe-assignment, because
  // the `any` is nested inside an object literal, turning
  // toHaveBeenCalledWith's E type parameter into not a pure any

  expect(logger).toHaveBeenCalledWith({
    value: expect.any(Object),
  });

  expect(logger).toHaveBeenCalledWith({
    value: expect.anything(),
  });
});
