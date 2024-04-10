# Repro: Confusing ts-eslint Error on Unknown Parser in Flat Config

Showing that using a typescript-eslint rule with `getParserServices(context, true)` with an unknown parser gives a misleading error message.

```shell
npm i
npm run lint
```

```plaintext
Oops! Something went wrong! :(

ESLint: 8.57.0

Error: Error while loading rule '@typescript-eslint/consistent-type-assertions': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
Parser: undefined
Note: detected a parser other than @typescript-eslint/parser. Make sure the parser is configured to forward "parserOptions.project" to @typescript-eslint/parser.
Occurred while linting /Users/josh/repos/repros/package.json
    at throwError (/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:40:11)
    at getParserServices (/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:20:9)
    at create (/Users/josh/repos/repros/node_modules/@typescript-eslint/eslint-plugin/dist/rules/consistent-type-assertions.js:88:61)
    at Object.create (/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js:38:20)
    at createRuleListeners (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:895:21)
    at /Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1066:110
    at Array.forEach (<anonymous>)
    at runRules (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1003:34)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1730:31)
    at Linter._verifyWithFlatConfigArray (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1861:21)
```
