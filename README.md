# Repros

Reproduction cases for open source issues I find online.
See [branches](https://github.com/JoshuaKGoldberg/repros/branches).

# Repro: typescript-eslint allowDefaultProject local relative path

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/eslint.config.js
  0:0  error  Parsing error: /Users/josh/repos/repros/eslint.config.js was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject
```
