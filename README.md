# Repro: `eslint-plugin-import-access` and `parserOptions.jsDocParsingMode`

Reproduction showing [`eslint-plugin-import-access`](https://github.com/uhyo/eslint-plugin-import-access) working regardless of [`parserOptions.jsDocParsingMode](https://typescript-eslint.io/packages/parser#jsdocparsingmode).

```shell
npm i
npm run lint
```

This report is what should happen:

```plaintext
/Users/josh/repos/repros/baz.ts
  3:10  error  Cannot import a package-private export 'fooPackageVariable'  import-access/jsdoc
```

...but doesn't.