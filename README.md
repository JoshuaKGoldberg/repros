# Repro: `@typescript-eslint/no-floating-promises` allowing `react-router`'s `useNavigate`

```shell
npm i
npm run lint
```

```plaintext
.../repros/index.ts
  4:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```

Shouldn't this have been allowed per `eslint.config.js`?

> ```js
> "@typescript-eslint/no-floating-promises": ["error", {
>   "allowForKnownSafeCalls": [
>       { "from": "package", "name": "useNavigate", "package": "react-router" }
>   ]
> }]
> ```
