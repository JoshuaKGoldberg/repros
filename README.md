# Comparison: Mocha dependencies with and without `glob`

Reproduction with a copy & paste of Mocha's `dependencies` to see how including the `glob` dependency changes end-user `node_modules/` size.

Tl;dr:

- Without: **4.9M**
- With: **10M**

## Reproduction

Without `glob`:

```shell
$ npm un glob
$ du -sh node_modules
4.9M    node_modules
```

With `glob`:

```shell
$ npm i glob
$ du -sh node_modules
10M    node_modules
```
