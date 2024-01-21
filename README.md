# Repro: Mocha `afterEach` Hides Error With Retries

Standalone reproduction for <https://github.com/mochajs/mocha/issues/5007>.

## Setup

```shell
npm i
```

## Running

Running on the CLI with no retries correctly logs both errors:

```plaintext
$ npx mocha index.js


  test after each error
    1) test one
    2) "after each" hook for "test one"


  0 passing (3ms)
  2 failing

  1) test after each error
       test one:
     Error: Error from test
      at Context.<anonymous> (index.js:7:11)
      at process.processImmediate (node:internal/timers:478:21)

  2) test after each error
       "after each" hook for "test one":
     Error: Error from after each
      at Context.<anonymous> (index.js:3:11)
      at process.processImmediate (node:internal/timers:478:21)
```

...but adding `--retries 1` causes the actual test's error to disappear:

```plaintext
$ npx mocha --retries 1 index.js


  test after each error
    1) "after each" hook for "test one"


  0 passing (2ms)
  1 failing

  1) test after each error
       "after each" hook for "test one":
     Error: Error from after each
      at Context.<anonymous> (index.js:3:11)
      at process.processImmediate (node:internal/timers:478:21)
```
