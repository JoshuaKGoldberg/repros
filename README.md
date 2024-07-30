# Repro: `projectService`'s `allowDefaultProject` No Longer Applying

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/eslint.config.js
  0:0  error  Parsing error: /Users/josh/repos/repros/eslint.config.js was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject
```
