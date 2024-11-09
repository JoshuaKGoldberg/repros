# Repro: `parse-package-name` and Node module export types

```shell
npm i
npm run tsc
```

```plaintext
index.ts:1:23 - error TS7016: Could not find a declaration file for module 'parse-package-name'. '/Users/josh/repos/repros/node_modules/parse-package-name/dist/index.mjs' implicitly has an 'any' type.
  There are types at '/Users/josh/repos/repros/node_modules/parse-package-name/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'parse-package-name' library may need to update its package.json or typings.

1 import { parse } from "parse-package-name";
                        ~~~~~~~~~~~~~~~~~~~~
```
