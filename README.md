# Repro: Mocha skipping text execution after uncaught exception

```shell
npm i
npx mocha
```

```plaintext
 $ npx mocha


  a
    ✔ should pass

  b
    ✔ should pass, then fail
    1) should pass, then fail


  2 passing (3ms)
  1 failing

  1) b
       should pass, then fail:
     Uncaught Error: uncaught!!
      at /Users/josh/repos/repros/test/example-b.js:4:15
      at process.processTicksAndRejections (node:internal/process/task_queues:77:11)
```

Mocha reports `2 passing` even though it never ran `c`.
