# Repro: Outdated typescript-eslint error without type information

```shell
npm i
npm run lint
```

```plaintext
joshgoldberg ~/repos/repros $ npm run lint

> lint
> eslint .


Oops! Something went wrong! :(

ESLint: 9.11.0

Error: Error while loading rule '@typescript-eslint/await-thenable': You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.
Parser: typescript-eslint/parser
Occurred while linting /Users/josh/repos/repros/eslint.config.js
    at throwError (/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:38:11)
    at getParserServices (/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js:27:9)
    at create (/Users/josh/repos/repros/node_modules/@typescript-eslint/eslint-plugin/dist/rules/await-thenable.js:46:55)
    at Object.create (/Users/josh/repos/repros/node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js:31:20)
    at createRuleListeners (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:943:21)
    at /Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1068:84
    at Array.forEach (<anonymous>)
    at runRules (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:999:34)
    at #flatVerifyWithoutProcessors (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1914:31)
    at Linter._verifyWithFlatConfigArrayAndWithoutProcessors (/Users/josh/repos/repros/node_modules/eslint/lib/linter/linter.js:1995:49)
joshgoldberg ~/repos/repros $

```
