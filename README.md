# Repro: typescript-eslint allowDefaultProject mismatched with ESLint config

```shell
npm i
npm run lint
```

```shell
/Users/josh/repos/repros/eslint.config.mjs
  0:0  error  Parsing error: /Users/josh/repos/repros/eslint.config.mjs was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject
```
