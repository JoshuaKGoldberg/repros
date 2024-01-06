# Repo: typescript-eslint Project Service Compiler Options on Non-Included Files

This reproduction shows that using the [new typescript-eslint `EXPERIMENTAL_useProjectService`](https://typescript-eslint.io/packages/parser/#experimental_useprojectservice) to lint a non-included file doesn't receive `tsconfig.json` compiler options.

```shell
npm i
cp tsconfig.baseline.json tsconfig.json
npm run lint
```

```plaintext
/Users/josh/repos/repros/.eslintrc.cjs
  0:1  error  This rule requires the `strictNullChecks` compiler option to be turned on to function correctly  @typescript-eslint/no-unnecessary-condition
```

Two steps must be done in the `tsconfig.json` to include a `.eslintrc.cjs`:

- Enable `compilerOptions.allowJs`: because it's a JavaScript extension
- Add `"./.*"` or similar to `include`: because it's a dot-file

Changing `tsconfig.json` in those two ways allows the project service to pick up the compiler options for the file:

```plaintext
cp tsconfig.working.json tsconfig.json
npm run lint
```
