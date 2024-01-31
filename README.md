# Repro: typescript-eslint consistent-type-imports and React

Reproduction case for [`@typescript-eslint/consistent-type-imports`](https://typescript-eslint.io/rules/consistent-type-imports) not respecting TypeScript compiler options indicating a global `React` value is unnecessary.

```shell
npm i
npm run lint
```

**Expected:** the `React` and `useEffect` import should be reported on.

**Actual:** only the `useEffect` import is reported on.

```plaintext
> npx eslint index.tsx

/Users/josh/repos/repros/index.tsx
  1:1  error  Import "useEffect" is only used as types  @typescript-eslint/consistent-type-imports

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

Note the options set in `.eslintrc.cjs` and `tsconfig.json` to tell the lint rule that JSX factory/pragma is not React.
