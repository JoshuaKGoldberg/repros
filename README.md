# Repro: `@typescript-eslint/scope-manager` and implicit global references

This corresponds to [typescript-eslint/typescript-eslint#11714 Scope Manager fails to pick up references to implicit globals](https://github.com/typescript-eslint/typescript-eslint/issues/11714).

```shell
npm i
node index.ts
```

| Name       | Scope  | isTypeVariable | isValueVariable |
| ---------- | ------ | -------------- | --------------- |
| Array      | global | true           | false           |
| Boolean    | global | true           | true            |
| Date       | global | true           | false           |
| Map        | global | true           | false           |
| Math       | global | true           | false           |
| Object     | global | true           | true            |
| Set        | global | true           | false           |
| String     | global | true           | false           |
| foo        | module | false          | true            |
| NaN        | (none) |                |                 |
| globalThis | (none) |                |                 |
| undefined  | (none) |                |                 |
