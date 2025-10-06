# Comparison: Minimal ESLint usage with `empathic`

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

| Metric                                | Before            | After             | Change         |
| ------------------------------------- | ----------------- | ----------------- | -------------- |
| `du -ks node_modules`                 | 13348             | 13296             | -52 (0.39%)    |
| `hyperfine "npm run lint" --warmup 2` | 280.4 ms ± 4.3 ms | 281.8 ms ± 3.8 ms | _(within std)_ |
