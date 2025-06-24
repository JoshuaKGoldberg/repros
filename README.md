# Repro: Mocha and TLA in Setup File

```shell
npm i
npm run test
```

When run with `"type": "module"`, tests pass:

```plaintext
> test
> mocha --require 'setup.js' index.test.js

setup.js worked.


  example
    ✔ should pass


  1 passing (1ms)
```

When run with `"type": "commonjs"`, tests fail:

```plaintext

> test
> mocha --require 'setup.js' index.test.js

(node:14989) Warning: Failed to load the ES module: /Users/josh/repos/repros/setup.js. Make sure to set "type": "module" in the nearest package.json file or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
(node:14989) Warning: Failed to load the ES module: /Users/josh/repos/repros/setup.js. Make sure to set "type": "module" in the nearest package.json file or use the .mjs extension.

✖ ERROR: /Users/josh/repos/repros/setup.js:1
import { use } from "chai";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (node:internal/modules/cjs/loader:1666:18)
    at Module._compile (node:internal/modules/cjs/loader:1708:20)
    at Object..js (node:internal/modules/cjs/loader:1899:10)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Module._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at cjsLoader (node:internal/modules/esm/translators:316:5)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:208:7)
    at ModuleJob.run (node:internal/modules/esm/module_job:358:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:665:26)
    at async formattedImport (/Users/josh/repos/repros/node_modules/mocha/lib/nodejs/esm-utils.js:9:14)
    at async requireModule (/Users/josh/repos/repros/node_modules/mocha/lib/nodejs/esm-utils.js:97:28)
    at async exports.handleRequires (/Users/josh/repos/repros/node_modules/mocha/lib/cli/run-helpers.js:97:28)
    at async /Users/josh/repos/repros/node_modules/mocha/lib/cli/run.js:358:25
```

This behavior is consistent across:

- Mocha versions: 11.6.0, 11.7.0, 11.7.1
- Node.js versions: 18.20.3, 20.19.2, 22.16.0, 24.2.0
