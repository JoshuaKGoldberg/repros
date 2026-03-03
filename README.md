# TSESLint `RuleTester` Testing and `jest-environment-jsdom`

Reproduction showing that (TS)ESLint `RuleTester` testing requires a full Node.js environment, which `jest-environment-jsdom` does not satisfy.

```shell
npm i
npx jest
```

```plaintext
 FAIL  ./index.test.js
  ...
    valid
      ✕  (9 ms)

  ● ... › valid ›

    ConfigError: Config (unnamed): Key "rules": Key "@rule-tester/validate-ast": structuredClone is not defined
```

There are two areas of Node.js globals required in these tests:

- `structuredClone`: required in ESLint itself
- `clearImmediate` and `setImmediate`: required for typescript-eslint typed parserServices

Run with `PROVIDE_IMMEDIATES` and `PROVIDE_STRUCTURED_CLONE` to provide both:

```shell
PROVIDE_IMMEDIATES=1 PROVIDE_STRUCTURED_CLONE=1 npx jest
```

```plaintext
 PASS  ./index.test.js
  ...
    valid
      ✓  (483 ms)
```
