# consistent-type-assertions Type Information

Following up on https://github.com/typescript-eslint/typescript-eslint/pull/6885.

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/index.ts
  1:5   error  'value' is never reassigned. Use 'const' instead  prefer-const
  1:5   error  'value' is assigned a value but never used        @typescript-eslint/no-unused-vars
  1:13  error  Use 'as number' instead of '<number>'             @typescript-eslint/consistent-type-assertions
```
