# Repro: typescript-eslint and Yarn PnP

```plaintext
corepack enable
yarn set version stable
yarn
yarn explain peer-requirements | grep ✘
```

```plaintext
pd8845 → ✘ @typescript-eslint/type-utils@npm:8.13.0 [b380a] doesn't provide eslint to @typescript-eslint/utils@npm:8.13.0 [05736] and 1 other dependency
p3012b → ✘ @typescript-eslint/utils@npm:8.13.0 [05736] doesn't provide typescript to @typescript-eslint/typescript-estree@npm:8.13.0 [d2ba4] and 1 other dependency
p7d77a → ✘ typescript-eslint@npm:8.13.0 [3712b] doesn't provide eslint to @typescript-eslint/eslint-plugin@npm:8.13.0 [05736] and 3 other dependencies
```
