# `eslint-plugin-unicorn` Repro: `number-literal-case` Conflicts With Prettier

`unicorn/number-literal-case` is enabled in `unicorn.configs.unopinionated` and defaults to uppercase hexadecimal digits (`0xFF`), but Prettier always lowercases them (`0xff`).
The two tools fix each other's output back and forth forever.

```shell
npm i
npx prettier --check index.js  # passes
npx eslint index.js            # fails
```

```plaintext
index.js
  1:22  error  Invalid number literal casing  unicorn/number-literal-case
```

Running `npx eslint index.js --fix` changes `0xff` to `0xFF`, which then fails `npx prettier --check index.js`.
Running `npx prettier --write index.js` changes it back to `0xff`.

Context: https://github.com/flint-fyi/flint/pull/3109#discussion_r4093956811
