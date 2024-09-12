# Repro: `eslint-plugin-expect-type` and ESLint configs

```shell
npm i
npm run lint:flat
npm run lint:legacy
```

Both lint commands should output:

```plaintext
/Users/josh/repos/repros/index.ts
  2:1  error  Expected type to be: number, got: 9001  expect-type/expect
```
