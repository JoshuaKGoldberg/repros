import { AddOptions } from "./types";

export function add({ values }: AddOptions) {
  return values.reduce((a, b) => a + b);
}
