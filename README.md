# Repro: typescript-eslint Single-Run Inference Introducing Bugs in `--fix`

Reproduction case showing that running ESLint's `--fix` on the command-line can trigger faulty type information in typescript-eslint's [single-run inference](https://typescript-eslint.io/packages/parser/#allowautomaticsingleruninference).

```shell
npm i
npx eslint --fix
```

```plaintext
/Users/josh/repos/repros/src/index.ts
  2:15  error  'Undefined' is defined but never used               @typescript-eslint/no-unused-vars
  4:36  error  'any' overrides all other types in this union type  @typescript-eslint/no-redundant-type-constituents
```

See [@bradzacher's typescript-eslint/typescript-eslint#9344 (comment)](https://github.com/typescript-eslint/typescript-eslint/issues/9344#issuecomment-2164736588) for a full explanation.
