# typescript-eslint project: [string, true] repro

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/tseslinttemp/src/a.js
  1:7  error  'a' is assigned a value but never used  @typescript-eslint/no-unused-vars

/Users/josh/repos/tseslinttemp/src/b.ts
  0:0  error  Parsing error: ESLint was configured to run on `<tsconfigRootDir>/src/b.ts` using `parserOptions.project`: /users/josh/repos/tseslinttemp/tsconfig.eslint.json
However, that TSConfig does not include this file. Either:
- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
```
