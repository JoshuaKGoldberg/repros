import { SingleBar } from 'cli-progress';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import ts from 'typescript';

import { ServiceApiData } from '../types';

import { getImportPath } from './parsing';

const NON_DESTRUCTIVE_CALLS = new Set(['getOne', 'getAll', 'subscribe']);

interface ServiceApiResourceMap {
  [resourceApi: string]: {
    [nodeName: string]: {
      [memberName: string]: {
        [type: string]: ServiceApiData | string;
      };
    };
  };
}

export function updateServiceApis(rootPath: string, serviceApisFile: string): void {
  const resourceMap: ServiceApiResourceMap = {};
  const mapping = new Set();
  const resourceApis = readdirSync(rootPath);

  const format = 'Service APIs: [{bar}] {percentage}% | ETA: {eta}s | {value}/{total} | {api}';
  const progress = new SingleBar({ format });
  progress.start(resourceApis.length, 0, { api: 'loading...' });

  for (const resourceApi of resourceApis) {
    progress.increment({ api: resourceApi });

    const inputFile = [rootPath, resourceApi, 'services.gen.ts'].join('/');

    if (existsSync(inputFile)) {
      resourceMap[resourceApi] = {};
      const sourceCode = readFileSync(inputFile, 'utf-8');
      const sourceFile = ts.createSourceFile(inputFile, sourceCode, ts.ScriptTarget.ESNext);

      for (const node of sourceFile.statements) {
        if (ts.isClassDeclaration(node)) {
          if (node.name?.escapedText && node.name.escapedText !== 'GrpcWebImpl') {
            resourceMap[resourceApi][node.name.escapedText] = {};
            mapping.add(node.name.escapedText);
          }
        }
      }

      for (const node of sourceFile.statements) {
        if (
          ts.isInterfaceDeclaration(node) &&
          node.name.escapedText &&
          mapping.has(node.name.escapedText)
        ) {
          const currentService = resourceMap[resourceApi][node.name.escapedText];

          for (const member of node.members) {
            const memberName =
              member.name && 'escapedText' in member.name ? member.name.escapedText : undefined;

            if (memberName && NON_DESTRUCTIVE_CALLS.has(memberName)) {
              currentService[memberName] = {};

              if (member.kind === ts.SyntaxKind.MethodSignature) {
                const memberMethod = member as ts.MethodSignature;
                for (const parameter of memberMethod.parameters) {
                  if (parameter.type?.kind === ts.SyntaxKind.TypeReference) {
                    const parameterType = parameter.type as ts.NodeWithTypeArguments;

                    for (const typeArgument of parameterType.typeArguments ?? []) {
                      const typeName = (typeArgument as ts.TypeReferenceNode).typeName;

                      if ('escapedText' in typeName) {
                        const importPath = getImportPath(typeName.escapedText as string, inputFile);

                        if (importPath) {
                          currentService[memberName].requestType = importPath;
                        }
                      }
                    }
                  }
                }

                const memberMethodType = memberMethod.type as ts.NodeWithTypeArguments;

                for (const typeArgument of memberMethodType.typeArguments ?? []) {
                  if (typeArgument.kind === ts.SyntaxKind.ArrayType) {
                    const elementType = (typeArgument as ts.ArrayTypeNode).elementType;

                    if (elementType.kind === ts.SyntaxKind.TypeReference) {
                      const typeName = (elementType as ts.TypeReferenceNode).typeName;

                      if ('escapedText' in typeName) {
                        currentService[memberName].responseType = typeName.escapedText as string;
                      }
                    }
                  } else if (typeArgument.kind === ts.SyntaxKind.TupleType) {
                    const elements = (typeArgument as ts.TupleTypeNode).elements;

                    for (const element of elements) {
                      if (element.kind === ts.SyntaxKind.NamedTupleMember) {
                        const type = (element as ts.NamedTupleMember).type;
                        const typeArguments = (type as ts.NodeWithTypeArguments).typeArguments;

                        for (const nextTypeArgument of typeArguments ?? []) {
                          if (nextTypeArgument.kind === ts.SyntaxKind.TypeReference) {
                            const typeName = (nextTypeArgument as ts.TypeReferenceNode).typeName;

                            if ('escapedText' in typeName) {
                              currentService[memberName].responseType =
                                typeName.escapedText as string;
                            }
                          } else if (nextTypeArgument.kind === ts.SyntaxKind.ArrayType) {
                            const elementType = (nextTypeArgument as ts.ArrayTypeNode).elementType;
                            const typeName = (elementType as ts.TypeReferenceNode).typeName;

                            if ('escapedText' in typeName) {
                              currentService[memberName].responseType =
                                typeName.escapedText as string;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  writeFileSync(serviceApisFile, JSON.stringify(resourceMap, null, 2) + '\n');

  progress.stop();
}
