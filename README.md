# Repro: Vitest expect `any`s and `@typescript-eslint/no-unsafe-assignment`

Reproduction case showing uses of Vitest's [`expect.any()`](https://vitest.dev/api/expect#expect-any) and [`expect.anything()`](https://vitest.dev/api/expect#expect-anything) triggering [`@typescript-eslint/no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment) in some cases.

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/src/index.test.ts
  10:5  error  Unsafe assignment of an `any` value  @typescript-eslint/no-unsafe-assignment
  14:5  error  Unsafe assignment of an `any` value  @typescript-eslint/no-unsafe-assignment
```

The offending lines are the `value: ...`s:

```ts
expect(logger).toHaveBeenCalledWith({
  value: expect.any(Number),
});

expect(logger).toHaveBeenCalledWith({
  value: expect.anything(),
});
```
