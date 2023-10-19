# Expanded Project Service Without Opened File Repro

Expanded reproduction for my fix to <https://github.com/typescript-eslint/typescript-eslint/issues/7435>: <https://github.com/typescript-eslint/typescript-eslint/pull/7752>.
Shows that removing the `opened` check allows non-program files to be linted properly.

Additionally shows that while the _project_ is reused when `useSingleInferredProject` is enabled, each .js file gets a new _program_ created anew.

## With `useSingleInferredProject`

Similarly turning `useSingleInferredProject` and `useInferredProjectPerProjectRoot` on:

```shell
TSESLINT_UNIFIED_PROJECTS=true npm run lint
```

```plaintext
> lint
> eslint greet*.ts vanilla*.js

useSingleInferredProject true

🆕 Default project for /Users/josh/repos/repros/greet-a.ts didn't already exist.
🆕 Program for /Users/josh/repos/repros/greet-a.ts didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/greet-c.ts'
]

✔️ Default project for /Users/josh/repos/repros/greet-b.ts already exists.
✔️ Program for /Users/josh/repos/repros/greet-b.ts already exists.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/greet-c.ts'
]

✔️ Default project for /Users/josh/repos/repros/greet-c.ts already exists.
✔️ Program for /Users/josh/repos/repros/greet-c.ts already exists.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/greet-c.ts'
]

🆕 Default project for /Users/josh/repos/repros/vanilla-a.js didn't already exist.
🆕 Program for /Users/josh/repos/repros/vanilla-a.js didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/vanilla-a.js'
]

✔️ Default project for /Users/josh/repos/repros/vanilla-b.js already exists.
🆕 Program for /Users/josh/repos/repros/vanilla-b.js didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/vanilla-a.js',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/vanilla-b.js'
]

✔️ Default project for /Users/josh/repos/repros/vanilla-c.js already exists.
🆕 Program for /Users/josh/repos/repros/vanilla-c.js didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/vanilla-a.js',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/vanilla-b.js',
  '/Users/josh/repos/repros/greet-c.ts',
  '/Users/josh/repos/repros/vanilla-c.js'
]

/Users/josh/repos/repros/vanilla-a.js
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

/Users/josh/repos/repros/vanilla-b.js
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

/Users/josh/repos/repros/vanilla-c.js
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 6 problems (6 errors, 0 warnings)
```

## Without `useSingleInferredProject`

```shell
npm i
npm run lint
```

```plaintext
> lint
> eslint greet*.ts vanilla*.js

useSingleInferredProject false

🆕 Default project for /Users/josh/repos/repros/greet-a.ts didn't already exist.
🆕 Program for /Users/josh/repos/repros/greet-a.ts didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/greet-c.ts'
]

✔️ Default project for /Users/josh/repos/repros/greet-b.ts already exists.
✔️ Program for /Users/josh/repos/repros/greet-b.ts already exists.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/greet-c.ts'
]

✔️ Default project for /Users/josh/repos/repros/greet-c.ts already exists.
✔️ Program for /Users/josh/repos/repros/greet-c.ts already exists.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/greet-c.ts'
]

🆕 Default project for /Users/josh/repos/repros/vanilla-a.js didn't already exist.
🆕 Program for /Users/josh/repos/repros/vanilla-a.js didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-a.ts',
  '/Users/josh/repos/repros/vanilla-a.js'
]

🆕 Default project for /Users/josh/repos/repros/vanilla-b.js didn't already exist.
🆕 Program for /Users/josh/repos/repros/vanilla-b.js didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-b.ts',
  '/Users/josh/repos/repros/vanilla-b.js'
]

🆕 Default project for /Users/josh/repos/repros/vanilla-c.js didn't already exist.
🆕 Program for /Users/josh/repos/repros/vanilla-c.js didn't already exist.
Program file names: [
  '/Users/josh/repos/repros/greet-c.ts',
  '/Users/josh/repos/repros/vanilla-c.js'
]

/Users/josh/repos/repros/vanilla-a.js
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

/Users/josh/repos/repros/vanilla-b.js
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

/Users/josh/repos/repros/vanilla-c.js
  5:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
  9:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises

✖ 6 problems (6 errors, 0 warnings)
```
