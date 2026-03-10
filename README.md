# eslint-plugin-expect-type Config Type Errors

Reproduction for [JoshuaKGoldberg/eslint-plugin-expect-type#830 🐛 Bug: Type error when using recommended config in typechecked flat config file].

```shell
npm i
npm run tsc
```

```plaintext
eslint.config.ts:11:3 - error TS2345: Argument of type '{ plugins: { "expect-type": { meta: { name: string; version: string; }; rules: Record<string, RuleModule<string, unknown[], unknown, RuleListener>>; }; }; rules: { [k: string]: "error"; }; }' is not assignable to parameter of type 'InfiniteArray<ConfigWithExtends>'.
  Type '{ plugins: { "expect-type": { meta: { name: string; version: string; }; rules: Record<string, RuleModule<string, unknown[], unknown, RuleListener>>; }; }; rules: { [k: string]: "error"; }; }' is not assignable to type 'ConfigWithExtends'.
    Types of property 'plugins' are incompatible.
      Type '{ "expect-type": { meta: { name: string; version: string; }; rules: Record<string, RuleModule<string, unknown[], unknown, RuleListener>>; }; }' is not assignable to type 'Record<string, Plugin>'.
        Property '"expect-type"' is incompatible with index signature.
          Type '{ meta: { name: string; version: string; }; rules: Record<string, RuleModule<string, unknown[], unknown, RuleListener>>; }' is not assignable to type 'Plugin'.
            Types of property 'rules' are incompatible.
              Type 'Record<string, RuleModule<string, unknown[], unknown, RuleListener>>' is not assignable to type 'Record<string, RuleDefinition<RuleDefinitionTypeOptions>>'.
                'string' index signatures are incompatible.
                  Type 'RuleModule<string, unknown[], unknown, RuleListener>' is not assignable to type 'RuleDefinition<RuleDefinitionTypeOptions>'.
                    Types of property 'create' are incompatible.
                      Type '(context: Readonly<RuleContext<string, unknown[]>>) => RuleListener' is not assignable to type '(context: RuleContext<{ LangOptions: LanguageOptions; Code: SourceCode<{ LangOptions: LanguageOptions; RootNode: unknown; SyntaxElementWithLoc: unknown; ConfigNode: unknown; }>; RuleOptions: unknown[]; Node: unknown; MessageIds: string; }>) => RuleVisitor'.
                        Types of parameters 'context' and 'context' are incompatible.
                          Type 'RuleContext<{ LangOptions: LanguageOptions; Code: SourceCode<{ LangOptions: LanguageOptions; RootNode: unknown; SyntaxElementWithLoc: unknown; ConfigNode: unknown; }>; RuleOptions: unknown[]; Node: unknown; MessageIds: string; }>' is missing the following properties from type 'Readonly<RuleContext<string, unknown[]>>': parserOptions, parserPath, getAncestors, getDeclaredVariables, and 6 more.

11   expectType,
     ~~~~~~~~~~
```
