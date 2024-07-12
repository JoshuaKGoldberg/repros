# Repro: Vitest `Proxy` Conflict

Reproduction case for using Vitest with an npm package that uses a [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

## Setup

```shell
npm i
npm run test
```

[`not-a-log`](https://www.npmjs.com/package/not-a-log) is used as an example package that uses a `Proxy`.

## Test Results

`index.test.js` shows what happens when importing the package:

```plaintext
 FAIL  index.test.js [ index.test.js ]
TypeError: Cannot create proxy with a non-object as target or handler
 ❯ Object.get node_modules/not-a-log/not-a-log.js:9:12
 ❯ index.test.js:1:1
      1| import logger from "not-a-log";
       | ^
      2|
```

`logStackTrace.test.js` logs a full stack trace:

```plaintext
stderr | logStackTrace.test.js
TypeError: Cannot create proxy with a non-object as target or handler
    at Object.get (file:///Users/josh/repos/repros/node_modules/not-a-log/not-a-log.js:9:12)
    at Object.get (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:429:77)
    at VitestExecutor.interopedImport (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:424:12)
    at VitestExecutor.directRequest (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:278:24)
    at VitestExecutor.cachedRequest (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:204:14)
    at VitestExecutor.dependencyRequest (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:257:12)
    at /Users/josh/repos/repros/logStackTrace.test.js:5:3
    at VitestExecutor.runModule (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:397:5)
    at VitestExecutor.directRequest (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:379:5)
    at VitestExecutor.cachedRequest (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:204:14)
    at VitestExecutor.executeId (file:///Users/josh/repos/repros/node_modules/vite-node/dist/client.mjs:171:12)
    at collectTests (file:///Users/josh/repos/repros/node_modules/@vitest/runner/dist/index.js:743:7)
    at startTests (file:///Users/josh/repos/repros/node_modules/@vitest/runner/dist/index.js:1158:17)
    at file:///Users/josh/repos/repros/node_modules/vitest/dist/chunks/runtime-runBaseTests.DJ9UidQ0.js:122:11
    at withEnv (file:///Users/josh/repos/repros/node_modules/vitest/dist/chunks/runtime-runBaseTests.DJ9UidQ0.js:84:5)
    at run (file:///Users/josh/repos/repros/node_modules/vitest/dist/chunks/runtime-runBaseTests.DJ9UidQ0.js:107:3)
    at runBaseTests (file:///Users/josh/repos/repros/node_modules/vitest/dist/vendor/base.pB8aBRcE.js:31:3)
    at ForksBaseWorker.executeTests (file:///Users/josh/repos/repros/node_modules/vitest/dist/workers/forks.js:25:7)
    at execute (file:///Users/josh/repos/repros/node_modules/vitest/dist/worker.js:116:5)
    at onMessage (file:///Users/josh/repos/repros/node_modules/tinypool/dist/entry/process.js:54:20)
```

`importsAlsoProxy.test.js` imports a local proxy file, `alsoProxy.js`, that has the same contents as `node_modules/not-a-log/not-a-log.js`.
This does not crash.

Reproduction cases for open source issues I find online.
See [branches](https://github.com/JoshuaKGoldberg/repros/branches).
