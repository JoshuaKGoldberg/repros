# `@actions/workflow-parser` Module Import Issues

Reproduction of [`@actions/workflow-parser`](https://www.npmjs.com/package/@actions/workflow-parser) not being importable in CJS or ESM code.

```shell
npm i
```

This reproduces equivalently in Node.js 18.20.3 and 22.12.0.

Relevant issues:

* [actions/languageservices#50 No "exports" main defined](https://github.com/actions/languageservices/issues/50)
* [actions/languageservices#64 expressions: ERR_MODULE_NOT_FOUND attempting to run example demo script](https://github.com/actions/languageservices/issues/64)

## CommonJS

```shell
node cjs.cjs
```

```plaintext
node:internal/modules/cjs/loader:647
      throw e;
      ^

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: No "exports" main defined in /Users/josh/repos/repros/node_modules/@actions/workflow-parser/package.json
    at exportsNotFound (node:internal/modules/esm/resolve:314:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:605:13)
    at resolveExports (node:internal/modules/cjs/loader:640:36)
    at Function._findPath (node:internal/modules/cjs/loader:748:31)
    at Function._resolveFilename (node:internal/modules/cjs/loader:1235:27)
    at Function._load (node:internal/modules/cjs/loader:1075:27)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:219:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:138:16) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
```

## ESM

```shell
node esm.js
```

```plaintext
'node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/josh/repos/repros/node_modules/@actions/workflow-parser/dist/model/convert' imported from /Users/josh/repos/repros/node_modules/@actions/workflow-parser/dist/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:932:10)
    at defaultResolve (node:internal/modules/esm/resolve:1056:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:654:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:603:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:586:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:242:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///Users/josh/repos/repros/node_modules/@actions/workflow-parser/dist/model/convert'
}
```
