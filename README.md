# Repro: `eslint-plugin-perfectionist` and Enum Member References

Reproduction showing `perfectionist/order-enums` asking to reorder an enum's members in a way that breaks TypeScript's required member ordering.

```shell
npm i
```

```plaintext
$ npm run lint

> repros@1.0.0 lint
> eslint index.ts


/Users/josh/repos/repros/index.ts
  4:3  error  Expected "Both" to come before "Second"  perfectionist/sort-enums

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

```
$ npm run lint -- --fix

> repros@1.0.0 lint
> eslint index.ts --fix

$ npm run tsc

> repros@1.0.0 tsc
> tsc index.ts

index.ts:2:10 - error TS2651: A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums.

2   Both = First | RegExp,
           ~~~~~

index.ts:2:18 - error TS2651: A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums.

2   Both = First | RegExp,
                   ~~~~~~


Found 2 errors in the same file, starting at: index.ts:2
```
