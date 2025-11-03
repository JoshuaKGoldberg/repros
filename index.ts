import { analyze } from "@typescript-eslint/scope-manager";
import { parse } from "@typescript-eslint/typescript-estree";

const code = `
undefined;
globalThis;
NaN;
Object;
Boolean;
String;
Math;
Date;
Array;
Map;
Set;
var foo;
foo;
`;

const variableNames = new Set(
  code
    .split(";")
    .map((line) => line.trim())
    .filter((line) => !line.includes(" ") && !!line)
    .sort()
);

const ast = parse(code, { range: true });
const scope = analyze(ast, { sourceType: "module" });
const seen = new Set<string>();

console.log("| Name       | Scope  | isTypeVariable | isValueVariable |");
console.log("| ---------- | ------ | -------------- | --------------- |");

for (const variableName of variableNames) {
  for (const innerScope of scope.scopes) {
    const scopeVariable = innerScope.set.get(variableName);
    if (scopeVariable) {
      seen.add(variableName);
      console.log(
        "|",
        variableName.padEnd(10, " "),
        "|",
        innerScope.type,
        "|",
        `${scopeVariable.isTypeVariable}`.padEnd(14, " "),
        "|",
        `${scopeVariable.isValueVariable}`.padEnd(15, " "),
        "|"
      );
    }
  }
}

for (const variableName of variableNames) {
  if (!seen.has(variableName)) {
    console.log(
      "|",
      variableName.padEnd(10, " "),
      "| (none) |                |                 |"
    );
  }
}
