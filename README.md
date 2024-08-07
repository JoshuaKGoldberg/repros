# Repro: `eslint-plugin-perfectionist` and Default Export Types

See: <https://github.com/azat-io/eslint-plugin-perfectionist/issues/177>.

```shell
pnpm install
pnpm run tsc
pnpm run lint
```

```shell
> tsc

index.ts:8:17 - error TS2339: Property 'configs' does not exist on type 'typeof import("/Users/josh/repos/repros/node_modules/.pnpm/eslint-plugin-perfectionist@3.1.2_eslint@9.8.0_typescript@5.5.4/node_modules/eslint-plugin-perfectionist/dist/index")'.

8   perfectionist.configs["recommended-natural"],
                  ~~~~~~~


Found 1 error in index.ts:8

 ELIFECYCLE  Command failed with exit code 2.
```

```shell
> eslint .

/Users/josh/repos/repros/eslint.config.js
  3:1   error  Expected "eslint-plugin-perfectionist" to come before "typescript-eslint"          perfectionist/sort-imports
  9:3   error  Unsafe argument of type `any` assigned to a parameter of type `ConfigWithExtends`  @typescript-eslint/no-unsafe-argument
  9:25  error  Unsafe member access ["recommended-natural"] on an `error` typed value             @typescript-eslint/no-unsafe-member-access

/Users/josh/repos/repros/index.ts
  8:3   error  Unsafe argument of type `any` assigned to a parameter of type `ConfigWithExtends`  @typescript-eslint/no-unsafe-argument
  8:25  error  Unsafe member access ["recommended-natural"] on an `error` typed value             @typescript-eslint/no-unsafe-member-access

✖ 5 problems (5 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.

 ELIFECYCLE  Command failed with exit code 1.
```
