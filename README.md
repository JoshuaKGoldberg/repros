# ts-node ERR_REQUIRE_ESM in Node.js 20.19

Reproduction showing [ts-node](https://github.com/TypeStrong/ts-node) throwing its own `ERR_REQUIRE_ESM` error even when on Node.js 20.19, which natively supports require(ESM).

```shell
npm i
node --version
node index.cjs
```

```plaintext
josh ~/repos/repros $ node --version
v20.19.1
josh ~/repos/repros $ node index.cjs
/Users/josh/repos/repros/node_modules/ts-node/dist-raw/node-internal-errors.js:46
  const err = new Error(getErrRequireEsmMessage(filename, parentPath, packageJsonPath))
              ^
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /Users/josh/repos/repros/file.ts
require() of ES modules is not supported.
require() of /Users/josh/repos/repros/file.ts from /Users/josh/repos/repros/index.cjs is an ES module file as it is a .ts file whose nearest parent package.json contains "type": "module" which defines all .ts files in that package scope as ES modules.
Instead change the requiring code to use import(), or remove "type": "module" from /Users/josh/repos/repros/package.json.

    at createErrRequireEsm (/Users/josh/repos/repros/node_modules/ts-node/dist-raw/node-internal-errors.js:46:15)
    at assertScriptCanLoadAsCJSImpl (/Users/josh/repos/repros/node_modules/ts-node/dist-raw/node-internal-modules-cjs-loader.js:584:11)
    at Object.require.extensions.<computed> [as .ts] (/Users/josh/repos/repros/node_modules/ts-node/src/index.ts:1610:5)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1096:12)
    at Module.require (node:internal/modules/cjs/loader:1298:19)
    at require (node:internal/modules/helpers:182:18)
    at Object.<anonymous> (/Users/josh/repos/repros/index.cjs:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1529:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1613:10) {
  code: 'ERR_REQUIRE_ESM'
}
```
