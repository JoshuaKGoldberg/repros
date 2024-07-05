# Repro: next-i18next and no-unnecessary-type-assertion

Showing that `t("what_needs_to_be_done")` is type `string` in this isolated reproduction...

```ts
const value = t("what_needs_to_be_done");
//    ^? const value: string
```

...even though in trpc it's showing as `string | null` to TypeScript:

```tsx
<input
  placeholder={t("what_needs_to_be_done")}
  // ~~~~~~~~
  // Type 'DefaultTFuncReturn' is not assignable to type 'string | undefined'.
  //   Type 'null' is not assignable to type 'string | undefined'.
/>
```

...but just `string` to typescript-eslint:

```tsx
<input
  placeholder={t("what_needs_to_be_done") as string}
  //           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // This assertion is unnecessary since it does not change the type of the expression.
  // eslint@typescript-eslint/no-unnecessary-type-assertion
/>
```

## Setup

```shell
npm i
npm run lint
```
