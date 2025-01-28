# Repro: Mocha Chokidar v4 PR Watching

## Setup

```shell
npm i
```

Then in two terminals, run:

* `npx mocha "*.test.js" --watch
* `node /path/to/your/local/mocha/bin/mocha.js "*.test.js" --watch

Both of those should show `a` and `b` passing.

## Reproduction

Then, rename `b.test.js` to `z.test.js`.
The two will differ:

* The current version of Mocha experiences a 0ms delay between full test re-runs
* The PR's version of Mocha experiences a >200ms delay between full test re-runs

Current output:

```plaintext
joshgoldberg ~/repos/repros $ npx mocha "*.test.js" --watch


  a
    ✔ passes

  b
    ✔ passes


  2 passing (2ms)

ℹ [mocha] waiting for changes...


  a


  0 passing (2ms)



  a
    ✔ passes

  b
    ✔ passes


  2 passing (1ms)

ℹ [mocha] waiting for changes...
```

Output from the PR:

```plaintext
joshgoldberg ~/repos/repros $ node ~/repos/mocha/bin/mocha.js "*.test.js" --watch


  a
    ✔ passes

  b
    ✔ passes


  2 passing (2ms)

ℹ [mocha] waiting for changes...



  0 passing (209ms)



  a
    ✔ passes

  b
    ✔ passes


  2 passing (1ms)

ℹ [mocha] waiting for changes...
```
