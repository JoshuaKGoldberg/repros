import { readFileSync } from 'fs';
import _ from 'lodash';
import ts from 'typescript';

import { ServiceApiData } from '../types';

function getImportPathHelper(
  target: string,
  inputFile: string,
  node: ts.Statement | undefined,
): ServiceApiData | undefined {
  if (!node) {
    return undefined;
  }

  if (node.kind === ts.SyntaxKind.ImportDeclaration) {
    const moduleSpecifier = (node as ts.ImportDeclaration).moduleSpecifier;

    if (moduleSpecifier.kind === ts.SyntaxKind.StringLiteral) {
      const inputFileSplit = inputFile.split('/');
      const text = (moduleSpecifier as ts.StringLiteral).text;
      const splitPath = text.split('../');
      const finalPath = [
        ...inputFileSplit.slice(0, inputFileSplit.length - splitPath.length),
        ...splitPath,
      ].join('/');

      const newCode = readFileSync(`${finalPath}.ts`, 'utf-8');
      const newFile = ts.createSourceFile(`${finalPath}.ts`, newCode, ts.ScriptTarget.ESNext);

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return parse(target, newFile.statements, `${finalPath}.ts`);
    }
  }

  return undefined;
}

export function getImportPath(target: string, inputFile: string): ServiceApiData | undefined {
  const sourceFile = ts.createSourceFile(
    inputFile,
    readFileSync(inputFile, 'utf-8'),
    ts.ScriptTarget.ESNext,
  );

  return (
    getImportPathHelper(
      target,
      inputFile,
      sourceFile.statements.find((node) => {
        const allElements: (ts.__String | ts.ImportSpecifier)[] = [];

        if (node.kind === ts.SyntaxKind.ImportDeclaration) {
          const importClause = (node as ts.ImportDeclaration).importClause;
          const escapedText = importClause?.name?.escapedText;
          const namedBindings = importClause?.namedBindings;
          const elements =
            namedBindings && 'elements' in namedBindings ? namedBindings.elements : undefined;

          if (escapedText) {
            allElements.push(escapedText);
          }

          if (elements) {
            allElements.push(...elements.slice());
          }
        }

        return allElements.some((element) => {
          const name = _.isObject(element) && 'name' in element ? element?.name : undefined;
          return element === target || name?.escapedText === target;
        });
      }),
    ) ??
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    parse(target, sourceFile.statements, inputFile)
  );
}

function getName(kind: ts.SyntaxKind): string {
  return ts.SyntaxKind[kind].toString();
}

function getNameOrImportPath(
  condition: boolean,
  arg1: [string, string],
  arg2: [ts.SyntaxKind, {}],
): ServiceApiData | undefined {
  return condition
    ? getImportPath(...arg1)
    : {
        _type: getName(arg2[0]),
        // @ts-expect-error: TypeScript types are missing the `jsDoc` property
        jsDoc: 'jsDoc' in arg2[1] ? arg2[1].jsDoc[0].comment : '',
      };
}

function parseObjectType(
  statement: ts.InterfaceDeclaration,
  rootFile: string,
): Record<string, ServiceApiData> {
  const retObj: Record<string, ServiceApiData> = {};

  for (const member of statement.members) {
    if (member.kind === ts.SyntaxKind.PropertySignature) {
      const memberType = (member as ts.PropertySignature).type;

      if (memberType?.kind === ts.SyntaxKind.UnionType) {
        const types = (memberType as ts.UnionTypeNode).types;

        for (const type of types) {
          if (type.kind !== ts.SyntaxKind.UndefinedKeyword) {
            const memberName = member.name;
            const memberEscapedText =
              memberName && 'escapedText' in memberName
                ? (memberName.escapedText as string)
                : undefined;

            if (memberEscapedText && type.kind === ts.SyntaxKind.TypeReference) {
              const typeName = (type as ts.TypeReferenceNode).typeName;
              const typeNameEscapedText =
                'escapedText' in typeName ? typeName.escapedText : undefined;

              if (typeNameEscapedText) {
                const nameOrImportPath = getNameOrImportPath(
                  Boolean(typeName),
                  [typeNameEscapedText, rootFile],
                  [ts.SyntaxKind.TypeReference, member],
                );

                if (nameOrImportPath) {
                  retObj[memberEscapedText] = nameOrImportPath;
                }
              }
            }
          }
        }
      }
    } else {
      const escapedText =
        member.name && 'escapedText' in member.name
          ? (member.name.escapedText as string)
          : undefined;

      if (escapedText) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const parseResult = parse(escapedText, [statement], rootFile);

        if (parseResult) {
          retObj[escapedText] = parseResult;
        }
      }
    }
  }

  return retObj;
}

// Convert all the nodes in the AST to the right format for JSON.
export function parse(
  target: string,
  statements: ts.NodeArray<ts.Statement> | ts.Statement[],
  rootFile: string,
): ServiceApiData | undefined {
  for (const statement of statements) {
    let statementWithName: ts.FunctionDeclaration | ts.InterfaceDeclaration | undefined;

    // Add more kinds/types to this switch (and the type annotation above) if more statement
    // types need to be supported.
    switch (statement.kind) {
      case ts.SyntaxKind.FunctionDeclaration: {
        statementWithName = statement as ts.FunctionDeclaration;
        break;
      }

      case ts.SyntaxKind.InterfaceDeclaration: {
        statementWithName = statement as ts.InterfaceDeclaration;
        break;
      }

      default: {
        statementWithName = undefined;
      }
    }

    if (statementWithName && statementWithName.name?.escapedText === target) {
      if ('members' in statementWithName && statementWithName.members) {
        console.log(statementWithName);
        return {
          _type: parseObjectType(statementWithName, rootFile),
          jsDoc: 'jsDoc' in statementWithName ? statementWithName.jsDoc[0].comment : '',
        };
      }
    }
  }

  return undefined;
}
