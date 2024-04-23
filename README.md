# Repro: File-Based Rule Overrides in ESLint Flat Config

Reproducing using a file-specific object in [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files) to override a rule.

```shell
npm i
npm run lint
```

- `index.js` should have a `no-console` report
- `override.js` should be overridden to not have a report

```plaintext
/Users/josh/repos/repros/index.js
  1:1  error  Unexpected console statement  no-console
```
