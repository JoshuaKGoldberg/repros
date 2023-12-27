# Repro: `node:test` and `@typescript-eslint/no-floating-promises`

Reproduction for the [`node:test`](https://nodejs.org/api/test.html) module's common functions triggering [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises) by design.

## Context

This is a combination of parts from two tools:

- [`node:test`](https://nodejs.org/api/test.html) is a built-in [Node.js](https://nodejs.org) module. It exposes a set of functions (`describe`, `it`, `test`) that each return a `Promise` indicating whether their tests passed.
- [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises) is an [ESLint](https://eslint.org) rule provided by [typescript-eslint](https://typescript-eslint.io). It flags created Promises that are not "handled" (awaited, try/caught, assigned to a variable, etc.).

The `node:test` functions by design create Promises that aren't always meant to be handled.
That means they'll be reported on by `@typescript-eslint/no-floating-promises`.

```js
import { it } from "node:test";

it("", () => {});
// Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
// eslint(@typescript-eslint/no-floating-promises)
```

> Aside: that lint message is a little imprecise and long.
> https://github.com/typescript-eslint/typescript-eslint/issues/8088 tracks improving it.

## Repro

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/index.js
   9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  11:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  13:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  15:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  17:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  19:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  21:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  23:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  25:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  27:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  29:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  31:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```
