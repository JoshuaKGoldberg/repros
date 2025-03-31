# ESLint defineConfig with typescript-eslint

```shell
npm i
npm run tsc
```

```plaintext
eslint.config.mjs:4:29 - error TS2345: Argument of type 'ConfigArray' is not assignable to parameter of type 'InfiniteArray<ConfigWithExtends>'.
  Type 'Config[]' is not assignable to type 'InfiniteArray<ConfigWithExtends>[]'.
    Type 'Config' is not assignable to type 'InfiniteArray<ConfigWithExtends>'.
      Type 'Config' is not assignable to type 'ConfigWithExtends'.
        Types of property 'languageOptions' are incompatible.
          Type 'import("/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/ts-eslint/Config").FlatConfig.LanguageOptions | undefined' is not assignable to type 'import("/Users/josh/repos/repros/node_modules/eslint/lib/types/index").Linter.LanguageOptions | undefined'.
            Type 'import("/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/ts-eslint/Config").FlatConfig.LanguageOptions' is not assignable to type 'import("/Users/josh/repos/repros/node_modules/eslint/lib/types/index").Linter.LanguageOptions'.
              Types of property 'parser' are incompatible.
                Type 'LooseParserModule | undefined' is not assignable to type 'Parser | undefined'.
                  Type '{ meta?: { name?: string | undefined; version?: string | undefined; } | undefined; parseForESLint(text: string, options?: unknown): { ast: unknown; scopeManager?: unknown; services?: unknown; visitorKeys?: unknown; }; }' is not assignable to type 'Parser | undefined'.
                    Type '{ meta?: { name?: string | undefined; version?: string | undefined; } | undefined; parseForESLint(text: string, options?: unknown): { ast: unknown; scopeManager?: unknown; services?: unknown; visitorKeys?: unknown; }; }' is not assignable to type 'Omit<ESTreeParser, "parseForESLint"> & { parseForESLint(text: string, options?: any): Omit<ESLintParseResult, "ast" | "scopeManager"> & { ...; }; }'.
                      Type '{ meta?: { name?: string | undefined; version?: string | undefined; } | undefined; parseForESLint(text: string, options?: unknown): { ast: unknown; scopeManager?: unknown; services?: unknown; visitorKeys?: unknown; }; }' is not assignable to type '{ parseForESLint(text: string, options?: any): Omit<ESLintParseResult, "ast" | "scopeManager"> & { ast: unknown; scopeManager?: unknown; }; }'.
                        The types returned by 'parseForESLint(...)' are incompatible between these types.
                          Type '{ ast: unknown; scopeManager?: unknown; services?: unknown; visitorKeys?: unknown; }' is not assignable to type 'Omit<ESLintParseResult, "ast" | "scopeManager"> & { ast: unknown; scopeManager?: unknown; }'.
                            Type '{ ast: unknown; scopeManager?: unknown; services?: unknown; visitorKeys?: unknown; }' is not assignable to type 'Omit<ESLintParseResult, "ast" | "scopeManager">'.
                              Types of property 'visitorKeys' are incompatible.
                                Type 'unknown' is not assignable to type 'VisitorKeys | undefined'.

4 export default defineConfig(tseslint.configs.recommended);
                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
