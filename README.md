# Repro: `eslint-plugin-import`, ESLint Flat Config, and `FileEnumerator`(`ish`)

## Setup

First have `eslint` and `eslint-plugin-import` installed and built locally on the following two branch commits:

- https://github.com/eslint/eslint/compare/issue18087-poc (4c4c1f4b973b3f2039813025d047a98801c95c59)
- https://github.com/JoshuaKGoldberg/eslint-plugin-import/tree/file-enumerator-ish (9d677dbd939041e8295d41bad8cc32de299c1639)

Then, on this reproduction branch, install dependencies and link the two relevant repositories:

```shell
npm i
npm link eslint eslint-plugin-import
```

## Usage

Now, running ESLint will _sometimes_ show that the exported `logIgnored` function is correctly seen as unused:

```plaintext
$ npx eslint src

/Users/josh/repos/repros/src/index.js
  1:1  error  exported declaration 'logIgnored' not used within other modules  import/no-unused-modules

✖ 1 problem (1 error, 0 warnings)
```

However, sometimes you'll see that the `ignored.js` file isn't ignored as it should be:

```plaintext
$ npx eslint src

/Users/josh/repos/repros/src/index.js
  1:1  error  exported declaration 'logIgnored' not used within other modules  import/no-unused-modules
  5:1  error  exported declaration 'logUsed' not used within other modules     import/no-unused-modules

✖ 2 problems (2 errors, 0 warnings)
```

This is either a bug with `isFileIgnored` and/or with the iteration logic in the rule.
