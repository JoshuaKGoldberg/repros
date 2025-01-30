# Repro: Mocha reporting a cyclic import for missing module

```shell
npm i
npm run test
```

On macOS with Node `<=22.11.0`:

```plaintext
 Exception during run: Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lodash-es' imported from /Users/josh/repos/repros/index.js
    at packageResolve (node:internal/modules/esm/resolve:842:9)
    at moduleResolve (node:internal/modules/esm/resolve:915:18)
    at defaultResolve (node:internal/modules/esm/resolve:1132:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:557:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:526:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:249:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:126:49) {
  code: 'ERR_MODULE_NOT_FOUND'
}
```

On macOS with Node `>=22.12.0`:

```plaintext
 Exception during run: Error [ERR_REQUIRE_CYCLE_MODULE]: Cannot require() ES Module /Users/josh/repos/repros/test/test.js in a cycle. (from /Users/josh/repos/repros/node_modules/mocha/lib/nodejs/esm-utils.js)
    at ModuleLoader.importSyncForRequire (node:internal/modules/esm/loader:315:15)
    at loadESMFromCJS (node:internal/modules/cjs/loader:1414:24)
    at Module._compile (node:internal/modules/cjs/loader:1547:5)
    at Object..js (node:internal/modules/cjs/loader:1677:16)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:138:16)
    at exports.requireOrImport (/Users/josh/repos/repros/node_modules/mocha/lib/nodejs/esm-utils.js:53:16)
    at async exports.loadFilesAsync (/Users/josh/repos/repros/node_modules/mocha/lib/nodejs/esm-utils.js:100:20)
    at async singleRun (/Users/josh/repos/repros/node_modules/mocha/lib/cli/run-helpers.js:162:3)
    at async exports.handler (/Users/josh/repos/repros/node_modules/mocha/lib/cli/run.js:375:5) {
  code: 'ERR_REQUIRE_CYCLE_MODULE'
}
```
