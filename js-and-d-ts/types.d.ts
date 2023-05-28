import { operators } from "./operations";

export type TextOperation = keyof typeof operators;

export type TextOperator = (input: string) => string;
