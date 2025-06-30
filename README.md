# `@eslint/css` and Cross-File Variable Tracking

Reproductions of `@eslint/css`'s current & proposed variable tracking not able to understand cross-file information.
Two reproductions are provided:

- [False Positive](#false-positive): a rule reporting because it doesn't understand variables defined across files
- [False Negative](#false-negative): a rule reporting because it doesn't understand which element(s) variables apply to

```shell
npm i
npm run lint
```

```plaintext
/Users/josh/repos/repros/src/false-positive/index.css
  2:21  error  Can't validate with unknown variable '--colorBackground'  css/no-invalid-properties
  3:16  error  Can't validate with unknown variable '--colorForeground'  css/no-invalid-properties
```

## False Positive

> `src/false-positive/index.html`

This reproduction is set up in simplified common HTML+CSS structure:

1. `tokens.css` defines CSS variables
1. `index.css` uses them for `index.html`

`index.css` refers to variables defined in `tokens.css`.
Those variables are not tracked in the single-file-at-a-time tracker.

The [`css/no-invalid-properties` option `allowUnknownVariables`](https://github.com/eslint/css/blob/162f6e5bd2f3cd2a26f90eef44fa85be6c5a5c93/docs/rules/no-invalid-properties.md#options) is effectively required to use the rule in this structure of source code.

## False Negative

> `src/false-negative/index.html`

This reproduction defines:

- In `index.css`: a `--colorForeground` variable inside a `.apply-variable` container, then usage of that variable for `<p>`s.
- In `index.html`: one `<p>` inside the `.apply-variable` container and one `<p>` outside the container

`css/no-invalid-properties` does not report an error because it has no way of knowing which element(s) contain the defined variable.
