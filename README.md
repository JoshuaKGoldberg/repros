# Vitest hanging with `sinon.useFakeTimers()`

Running Vitest with a test that calls `sinon.useFakeTimers()` causes Vitest to hang indefinitely:

```shell
npm i
npm run test
```

```plaintext
> test
> vitest


 DEV  v3.1.1 /Users/josh/repos/repros


 ❯ index.test.js 0/1

 Test Files 0 passed (1)
      Tests 0 passed (1)
   Start at 09:26:11
   Duration 12.34s
```

After a minute it exits with an error:

```plaintext

 DEV  v3.1.1 /Users/josh/repos/repros

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

Vitest caught 1 unhandled error during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Error ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Error: [vitest-worker]: Timeout calling "snapshotSaved"
 ❯ Object.onTimeoutError node_modules/vitest/dist/chunks/rpc.DGgL5dw7.js:62:10
 ❯ Timeout._onTimeout node_modules/vitest/dist/chunks/index.68735LiX.js:55:41
 ❯ listOnTimeout node:internal/timers:594:17
 ❯ processTimers node:internal/timers:529:7

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯


 Test Files   (1)
      Tests   (1)
     Errors  1 error
   Start at  09:27:40
   Duration  60.19s (transform 11ms, setup 0ms, collect 17ms, tests 0ms, environment 0ms, prepare 36ms)
```
