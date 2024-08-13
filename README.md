# PoC: Optimizing ESLint Reruns Based On Rule Categories

Point of comparison accompanying [eslint/eslint#18642 Change Request: Optimize --fix reruns based on time spent per meta.type](https://github.com/eslint/eslint/issues/18642).

To prepare the repo, install dependencies:

```shell
npm i
```

[`patch-package`](https://www.npmjs.com/package/patch-package) will patch `node_modules/eslint`.

> This is, of course, a very hacky point of comparison (PoC).
> An actual implementation would more dynamically handle rule groups and not change anything if `--fix` is not enabled.

## Performance

All measurements taken on an M1 Max Mac Studio.

| Measurement          | Approximate Speed |
| -------------------- | ----------------- |
| Baseline             | 28 seconds        |
| Patched: Skip 1 of 3 | 18 seconds        |
| Patched: Skip 2 of 3 | 9 seconds         |

## Baseline

Linting with `--fix` goes through three cycles, each of which call:

- Two formatting rules from `@stylistic/`: fast 🍏
- One logical rules from `@typescript-eslint/`: slow 🍌

```plaintext
$ time npm run lint:fix

> repros@1.0.0 lint:fix
> eslint src/index.ts --fix

[runRules]
[runRules]
[runRules]

/Users/josh/repos/repros/src/index.ts
   8:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  11:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  16:14  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  17:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  20:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 5 problems (5 errors, 0 warnings)

npm run lint:fix  27.68s user 2.20s system 141% cpu 21.096 tota
```

## Patched: Skip 1 of 3

With `ESLINT_POC_OPTIMIZE_RERUNS=true`, the patched `node_modules/eslint` will:

1. In the initial run, still include all rules
1. In subsequent runs:
   1. Add `@stylistic/` rule listeners first
   2. Skip `@typescript-eslint/` rule listeners if a `@stylistic/` rule had previously reported

This simulates the [proposal in #18642](https://github.com/eslint/eslint/issues/18642).
The 🍌 slow rule is only run twice, instead of three times.

```plaintext
$ time ESLINT_POC_OPTIMIZE_RERUNS=true npm run lint:fix

> repros@1.0.0 lint:fix
> eslint src/index.ts --fix

[runRules]
[runRules]

/Users/josh/repos/repros/src/index.ts
   8:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  11:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  16:14  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  17:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  20:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 5 problems (5 errors, 0 warnings)

ESLINT_POC_OPTIMIZE_RERUNS=true npm run lint:fix  18.06s user 1.49s system 143% cpu 13.582 total
```

## Patched: Skip 2 of 3

With `ESLINT_POC_OPTIMIZE_RERUNS_FULL=true`, the patched `node_modules/eslint` will additionally skip running `@typescript-eslint/` rules the _first_ iteration.

This augments the [proposal in #18642](https://github.com/eslint/eslint/issues/18642) by preemptively assuming formatting rules should run first.
The 🍌 slow rule is only run once, instead of two or three times.

```plaintext
$ time ESLINT_POC_OPTIMIZE_RERUNS=FULL npm run lint:fix

> repros@1.0.0 lint:fix
> eslint src/index.ts --fix

[runRules]
[runRules]

/Users/josh/repos/repros/src/index.ts
   8:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  11:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  16:14  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  17:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  20:5   error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 5 problems (5 errors, 0 warnings)

ESLINT_POC_OPTIMIZE_RERUNS=FULL npm run lint:fix  9.10s user 0.79s system 150% cpu 6.581 total
```
