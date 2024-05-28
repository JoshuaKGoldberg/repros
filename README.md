# Reproduction: Missing `src/util` import in `@typescript-eslint/eslint-plugin@rc-v8`

```shell
npm i
npm run tsc
```

```plaintext
> tsc

node_modules/@typescript-eslint/eslint-plugin/rules.d.ts:40:63 - error TS2307: Cannot find module './src/util' or its corresponding type declarations.

40 import type { ESLintPluginDocs, ESLintPluginRuleModule } from './src/util';
                                                                 ~~~~~~~~~~~~


Found 1 error in node_modules/@typescript-eslint/eslint-plugin/rules.d.ts:40
```
