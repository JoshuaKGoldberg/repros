# Repro: `eslint-plugin-import-access` and `parserOptions.jsDocParsingMode`

Reproduction showing [`eslint-plugin-import-access`](https://github.com/uhyo/eslint-plugin-import-access) working regardless of [`parserOptions.jsDocParsingMode](https://typescript-eslint.io/packages/parser#jsdocparsingmode).

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/baz.ts
  3:10  error  Cannot import a package-private export 'fooPackageVariable'  import-access/jsdoc
```

That rule report is expected and good.
It happens even with `parserOptions.jsDocParsingMode` set to `"none"`.
