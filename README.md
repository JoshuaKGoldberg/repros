# Repro: Fastify Types, no-floating-promises, and allowForKnownSafePromises

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/index.ts
  17:1  error  Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator  @typescript-eslint/no-floating-promises
```
