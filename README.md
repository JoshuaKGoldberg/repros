# Repro: `@eslint-community/eslint-plugin-eslint-comments` crash when `require.cache` is falsy

Loading `@eslint-community/eslint-plugin-eslint-comments` via an ESM `import()` throws when any [`node:module` load hook](https://nodejs.org/api/module.html#moduleregisterhooksoptions) is active, because the synthesized ESM-to-CJS interop `require` has no `cache` property and the plugin's load-time `Linter` patch calls `Object.keys(require.cache)`.

## Setup

```sh
npm install
node repro.mjs    # throws
node control.mjs  # ok
```

## Expected

Both scripts log `ok`.

## Actual

`repro.mjs` throws:

```
TypeError: Cannot convert undefined or null to object
    at Object.keys (<anonymous>)
    at module.exports (.../lib/internal/get-linters.js:12:16)
    at module.exports (.../lib/utils/patch.js:158:26)
    at Object.<anonymous> (.../lib/rules/no-unused-disable.js:8:26)
    at loadCJSModule (node:internal/modules/esm/translators:166:3)
    ...
    at Object.<anonymous> (.../lib/rules.js:10:26)
```

This blocks importing the plugin from any tool that registers a `node:module` load hook before importing it, including Vitest projects that use `module.registerHooks` in a setup file, Node `--import` loaders that install hooks, etc.
