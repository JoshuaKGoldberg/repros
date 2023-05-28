export type TextOperation = keyof typeof operators;

export type TextOperator = (input: string) => string;

export const applyTextOperation = (input: string, operation: TextOperation) => {
  const operator = operators[operation];

  return operator(input);
};

const lower: TextOperator = (input) => {
  return input.toLowerCase();
};

const upper: TextOperator = (input) => {
  return input.toUpperCase();
};

const operators = { lower, upper };
