# ESLint `eslint/config` & `eslint-plugin-import`

```shell
npm i
npm run lint
```

```plaintext
.../repros/eslint.config.js
  2:45  error  Unable to resolve path to module 'eslint/config'  import/no-unresolved

✖ 1 problem (1 error, 0 warnings)
```

This is due to [import-js/eslint-plugin-import#1810 `no-unresolved` is not aware of `exports` definition in `package.json`](https://github.com/import-js/eslint-plugin-import/issues/1810).

It will be resolved by the `resolve` package adding support for `exports`.
[browserify/resolve#224 add support for the exports package.json attribute](https://github.com/browserify/resolve/pull/224) is not yet ready for merge.
