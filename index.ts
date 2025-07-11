import traverse from "ts-ast-to-literal";
import type ts from "typescript";

declare const node: ts.ObjectLiteralExpression;

console.log(traverse(node));
