# Repro: `eslint-plugin-es-x` namespace import

Reproduction case for `type: module` package not working with a namespace import of `eslint-plugin-es-x`.

```shell
npm i
npm run lint
```

```plaintext
Oops! Something went wrong! :(

ESLint: 9.1.1

TypeError: Key "rules": Key "es-x/no-async-iteration": Could not find "no-async-iteration" in plugin "es-x".
    at throwRuleNotFoundError (/Users/josh/repos/repros/node_modules/eslint/lib/config/rule-validator.js:66:11)
    at RuleValidator.validate (/Users/josh/repos/repros/node_modules/eslint/lib/config/rule-validator.js:147:17)
    at [finalizeConfig] (/Users/josh/repos/repros/node_modules/eslint/lib/config/flat-config-array.js:317:23)
    at FlatConfigArray.getConfig (/Users/josh/repos/repros/node_modules/@humanwhocodes/config-array/api.js:1036:55)
    at FlatConfigArray.isFileIgnored (/Users/josh/repos/repros/node_modules/@humanwhocodes/config-array/api.js:1060:15)
    at /Users/josh/repos/repros/node_modules/eslint/lib/eslint/eslint-helpers.js:346:57
    at Array.reduce (<anonymous>)
    at /Users/josh/repos/repros/node_modules/eslint/lib/eslint/eslint-helpers.js:333:36
    at /Users/josh/repos/repros/node_modules/eslint/lib/eslint/eslint-helpers.js:296:32
    at Object.isAppliedFilter (/Users/josh/repos/repros/node_modules/@nodelib/fs.walk/out/readers/common.js:12:31)
```

To fix the issue, change `eslint.config.js`:

```diff
- import * as pluginESx from "eslint-plugin-es-x";
+ import pluginESx from "eslint-plugin-es-x";
```

```plaintext
/Users/josh/repos/repros/index.js
  2:3  error  ES2018 async iteration is forbidden  es-x/no-async-iteration
```
