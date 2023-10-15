# Project Service Without Opened File Repro

Reproduction for my fix to <https://github.com/typescript-eslint/typescript-eslint/issues/7435>: <https://github.com/typescript-eslint/typescript-eslint/pull/7752>.
Shows that removing the `opened` check allows non-program files to be linted properly.

```shell
npm i
npm run lint
```

```plaintext
> lint
> eslint greet.ts vanilla.js


/Users/josh/repos/repros/vanilla.js
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 2 problems (2 errors, 0 warnings)
```
