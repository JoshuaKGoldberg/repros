import * as ts from "typescript";
import * as path from "path";

function compile(fileNames: string[], options: ts.CompilerOptions): void {
  const program = ts.createProgram(fileNames, options);
  program.emit();

  const typeChecker = program.getTypeChecker();
  const file = program.getSourceFile("./src/index.ts")!;

  const itStatement = file.statements[2] as ts.ExpressionStatement;
  const itExpression = itStatement.expression as ts.CallExpression;
  const signature = typeChecker.getResolvedSignature(itExpression);
  const declarationText = signature?.getDeclaration().getText();

  // Should be:
  // '(name: string, callback: () => Promise<void>): void;'
  // ...but actually is:
  // '(name: string, callback: () => void, extra?: unknown): void;'
  console.log({ declarationText });
}

compile(["./src/index.ts"], {
  module: ts.ModuleKind.CommonJS,
  noEmitOnError: true,
  noImplicitAny: true,
  skipLibCheck: true,
  strict: true,
  target: ts.ScriptTarget.Latest,
});
