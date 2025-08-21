# Repro: typescript-eslint allowDefaultProject not including dot files by default

Reproduction for [typescript-eslint/typescript-eslint#11494 Enhancement: Match filenames starting with a period when using glob in allowDefaultProject](https://github.com/typescript-eslint/typescript-eslint/issues/11494) showing `allowDefaultProject` not including dot files by default.
Two `.js` files are present that should be linted with the default project:

* ❌ `.prettierrc.js`: reports an unexpected error about not being found by the project service
* ✅ `index.js`: reports an expected rule complaint

```shell
npm i
npm run lint
```

```shell
~~~/repros/.prettierrc.js
  0:0  error  Parsing error: ~~~/repros/.prettierrc.js was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject

~~~/repros/index.js
  1:5  error  'unused' is assigned a value but never used  @typescript-eslint/no-unused-vars
```
