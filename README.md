# Repros

Reproduction cases for open source issues I find online.
See [branches](https://github.com/JoshuaKGoldberg/repros/branches).

## TypeScript Call Signature Overloads Repro

Displaying that TypeScript will pick the first matching function overload signature, even if a later signature is a more precise match.

Given a call that provides a `() => Promise<void>` to a Mocha-like `it`:

```ts
declare const it: {
  (name: string, callback: () => void, extra?: unknown): void;
  (name: string, callback: () => Promise<void>, extra?: unknown): void;
};

it("", async () => {});
```

1. `() => void` matches first and is used
2. `() => Promise<void>` is ignored, even though it should be used

```shell
npm i
npm run compile
npm run repro
```
