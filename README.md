# Comparison: ESLint & plugins usage with `empathic`

## Initialization

First set the version of `eslint` you want in `package.json`:

1. Before: `"eslint": "9.36.0"`
2. After: `"eslint": "JoshuaKGoldberg/eslint#09cb11aae0185db6a62b5200af91507a63ceb5cf"`

Then install dependencies and run the initialization script that populates mock files to be linted:

```shell
npm i
npm run init
```

## Results

Taken on a Apple M1 Max 2022 Mac Mini with Node.js 24.3.0.

| Metric                                | Before             | After              | Change         |
| ------------------------------------- | ------------------ | ------------------ | -------------- |
| `du -ks node_modules`                 | 53972              | 53920              | -52 (0.096%)   |
| `hyperfine "npm run lint" --warmup 2` | 710.1 ms ± 11.6 ms | 707.8 ms ± 14.6 ms | _(within std)_ |
