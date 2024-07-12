import { test } from "vitest";
import logger from "./alsoProxy";

test("logger", () => {
  console.log(logger.log());
});
