# Comparison: Minimal ESLint usage with `empathic`

## Initialization

First set the version of `eslint` you want in `package.json`:

1. Before: `"eslint": "9.36.0"`
2. After: `"eslint": "JoshuaKGoldberg/eslint#01ca356fe1ec374ad67b59bf332ec4d47cf327df"`

Then install dependencies and run the initialization script that populates mock files to be linted:

```shell
npm i
npm run init
```

## Results

Taken on a Apple M1 Max 2022 Mac Mini with Node.js 24.3.0.

| Metric                                | Before            | After     | Change       |
| ------------------------------------- | ----------------- | --------- | ------------ |
| `du -s node_modules`                  | 26696             | 26592     | -104 (0.39%) |
| `hyperfine "npm run lint" --warmup 2` | 281.5 ms ± 2.9 ms | _(tbd\*)_ | _(tbd\*)_    |

\*I don't yet have a version of ESLint working with `empathic/find`:

```plaintext
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received an instance of Array
    at join (node:path:1277:7)
    at Object.up (/Users/josh/repos/repros/node_modules/empathic/find.js:14:9)
    at ConfigLoader.locateConfigFileToUse (/Users/josh/repos/repros/node_modules/eslint/lib/config/config-loader.js:542:32)
    at #locateConfigFileToUse (/Users/josh/repos/repros/node_modules/eslint/lib/config/config-loader.js:714:40)
    at LegacyConfigLoader.loadConfigArrayForDirectory (/Users/josh/repos/repros/node_modules/eslint/lib/config/config-loader.js:778:37)
    at directoryFilter (/Users/josh/repos/repros/node_modules/eslint/lib/eslint/eslint-helpers.js:308:24)
    at NodeHfs.<anonymous> (file:///Users/josh/repos/repros/node_modules/@humanfs/core/src/hfs.js:584:32)
    at async NodeHfs.walk (file:///Users/josh/repos/repros/node_modules/@humanfs/core/src/hfs.js:614:3)
    at async globSearch (/Users/josh/repos/repros/node_modules/eslint/lib/eslint/eslint-helpers.js:363:20)
    at async Promise.allSettled (index 0)
```
