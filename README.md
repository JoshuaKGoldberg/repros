# Repro: @antfu/eslint-config and @typescript-eslint/ prefix

Reproduction case for using `@antfu/eslint-config` with the `@typescript-eslint/` prefix for typescript-eslint rules.

## Setup

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/index.ts
  1:23  error  The array literal notation [] is preferable  @typescript-eslint/no-array-constructor

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```
