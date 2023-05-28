/**
 * @param {string} input
 * @param {import("./types").TextOperation} operation
 */
export const applyTextOperation = (input, operation) => {
  const operator = operators[operation];

  return operator(input);
};

/** @type {import("./types").TextOperator} */
const lower = (input) => {
  return input.toLowerCase();
};

/** @type {import("./types").TextOperator} */
const upper = (input) => {
  return input.toUpperCase();
};

/** @internal */
export const operators = { lower, upper };
