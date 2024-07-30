# Repro: `@typescript-eslint/rule-tester` crashing on ESLint >=9.5.0

## Setup

```shell
npm i
```

## Reproduction

Passing:

```shell
npm i eslint@9.4.0 -D
npm run test run
```

Failing:

```shell
npm i eslint@9.5.0 -D
npm run test run
```

```plaintext
 FAIL  src/no-loop-over-enum.test.ts > no-loop-over-enum > invalid >
          enum Values { value }
          for (const a in Values) {}

TypeError: Cannot read properties of undefined (reading 'parse')
 ❯ parse node_modules/eslint/lib/linter/linter.js:906:29
 ❯ Linter._verifyWithFlatConfigArrayAndWithoutProcessors node_modules/eslint/lib/linter/linter.js:1660:33
 ❯ Linter._verifyWithFlatConfigArray node_modules/eslint/lib/linter/linter.js:2017:21
 ❯ Linter.verify node_modules/eslint/lib/linter/linter.js:1492:61
 ❯ RuleTester.runRuleForItem node_modules/@typescript-eslint/rule-tester/src/RuleTester.ts:710:33
 ❯ RuleTester.#testInvalidTemplate node_modules/@typescript-eslint/rule-tester/src/RuleTester.ts:862:25
 ❯ node_modules/@typescript-eslint/rule-tester/src/RuleTester.ts:513:40
```
