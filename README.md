# Repro: Mocha with ESM Reporter and/or UI

See [mochajs/mocha#5562 🐛 Bug: Can't import custom ESM interfaces and reporters](https://github.com/mochajs/mocha/issues/5562).

```shell
npm i
```

Running:

- Baseline (neither): `npm run test:baseline`
- With the custom `--reporter`: `npm run test:reporter`
- With the custom `--ui`: `npm run test:ui`
- With both options: `npm run test:both`
