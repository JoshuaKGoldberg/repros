# Repro: `jsdoc/informative-docs` and `@category` tag

Reproduction case showing [`jsdoc/informative-docs`](https://github.com/gajus/eslint-plugin-jsdoc/blob/783b4e96eef457715a0bce234730da7bb5ec1a3b/docs/rules/informative-docs.md) reporting on a `@category` JSDoc tag.

```shell
npm i
npm run lint
```

```plaintext
  3:1  error  This tag description only repeats the name it describes  jsdoc/informative-docs
```
