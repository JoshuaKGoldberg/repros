import * as ts from "typescript";

export type ExtensionlessExportOrImport = {
  moduleSpecifier: ts.StringLiteral;
} & (ts.ExportDeclaration | ts.ImportDeclaration);
