# Repro: Biome no-floating-promises and a mapped key

Reproduction of [Biome's `noFloatingPromises`](https://next.biomejs.dev/linter/rules/no-floating-promises) rule not (yet?) being able to handle complex TypeScript types.
Specifically, a conditionally remapped key in a mapped type.

```shell
npm i
npm lint
```

There should be two floating promises detected.
Instead:

```shell
Found 1 error.
```
