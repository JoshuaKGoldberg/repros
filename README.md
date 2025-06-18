# Repro: Mocha 11.7.0 and `@swc-node/register`

```shell
npm i
npm run test
```

```plaintext
✖ ERROR: Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './esm-register' is not defined by "exports" in /Users/josh/repos/repros/node_modules/@swc-node/register/package.json
    at exportsNotFound (node:internal/modules/esm/resolve:313:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:603:13)
    at resolveExports (node:internal/modules/cjs/loader:661:36)
    at Module._findPath (node:internal/modules/cjs/loader:753:31)
    at Module._resolveFilename (node:internal/modules/cjs/loader:1391:27)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1061:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1066:22)
    at Module._load (node:internal/modules/cjs/loader:1215:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1491:12)
    at require (node:internal/modules/helpers:135:16)
    at requireModule (/Users/josh/repos/repros/node_modules/mocha/lib/nodejs/esm-utils.js:94:12)
    at exports.handleRequires (/Users/josh/repos/repros/node_modules/mocha/lib/cli/run-helpers.js:97:34)
    at async /Users/josh/repos/repros/node_modules/mocha/lib/cli/run.js:358:25 {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
```
