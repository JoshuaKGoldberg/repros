# Coverage of types with v8 in Jest vs. Vitest

Showing how test runners display v8 code coverage of a types-only file:

- [Jest with Babel](https://jestjs.io/docs/getting-started#using-typescript): ✅ excludes the file
- [Jest with ts-jest](https://github.com/kulshekhar/ts-jest): ✅ excludes the file
- [Vitest](https://www.npmjs.com/package/@vitest/coverage-v8): ❌ factors in the file

```shell
npm i
```

## Results

### Jest with Babel

```shell
npm run test:jest:babel
```

```plaintext
> repros@1.0.0 test:jest:babel
> jest --config jest.config.babel.js

 PASS  src/index.test.ts
  add
    ✓ adds two numbers (1 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.603 s, estimated 3 s
Ran all test suites.
```

### Jest with ts-jest

```shell
npm run test:jest:ts-jest
```

```plaintext

> repros@1.0.0 test:jest:ts-jest
> jest --config jest.config.ts-jest.js

 PASS  src/index.test.ts (8.88 s)
  add
    ✓ adds two numbers (2 ms)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        9.328 s
Ran all test suites.
```

### Vitest

```shell
npm run test:vitest
```

```plaintext
> repros@1.0.0 test:vitest
> vitest run --coverage


 RUN  v0.34.6 /Users/josh/repos/repros
      Coverage enabled with v8

 ✓ src/index.test.ts (1)
   ✓ add (1)
     ✓ adds two numbers

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  17:02:26
   Duration  4.04s (transform 193ms, setup 0ms, collect 85ms, tests 9ms, environment 0ms, prepare 1.21s)

 % Coverage report from v8
------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |    62.5 |    66.66 |      50 |    62.5 |
 repros     |       0 |        0 |       0 |       0 |
  types.ts  |       0 |        0 |       0 |       0 | 1-3
 repros/src |     100 |      100 |     100 |     100 |
  index.ts  |     100 |      100 |     100 |     100 |
------------|---------|----------|---------|---------|-------------------
```
