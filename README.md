# Repro: Performance Benefit from Deferring ESLint Scope Analysis

Corresponding issue for [typescript-eslint/typescript-eslint#9575 ⚡️ Performance: Overhead of populateGlobalsFromLib in scope-manager](https://github.com/typescript-eslint/typescript-eslint/issues/9575) -> [issuecomment-2248255834](https://github.com/typescript-eslint/typescript-eslint/issues/9575#issuecomment-2248255834):

> By the way, another direction we could take is to have ESLint lazily create+analyze with scope managers. Why both making them at all for files that don't need scope analysis?
>
> Skipping ScopeManager analysis wouldn't remove overhead for files that actually are linted with scope. But it would help greatly with the case of projects that don't use it in some files. I'll file an issue over on ESLint core.

This reproduction shows the difference in running ESLint + `@typescript-eslint/parser` in two ways:

- Traditional: just using the parser to parse TypeScript code
- Typed: additionally enabling a rule with [typed linting](https://typescript-eslint.io/getting-started/typed-linting)

Typed linting incurs more overhead because TypeScript's type information is used to automatically populate globals.
See [typescript-eslint/typescript-eslint/issues/9575 ⚡️ Performance: Overhead of populateGlobalsFromLib in scope-manager > #issuecomment-2234876685](https://github.com/typescript-eslint/typescript-eslint/issues/9575#issuecomment-2234876685) for more information.

## Measurements

Runs were taken with [hyperfine](https://github.com/sharkdp/hyperfine):

- Baseline: after an `npm install`
- Deferred: after applying the patches in `patches/` with [`patch-package`](https://www.npmjs.com/package/patch-package)

> | Lint Form       | Baseline | Deferred | Improvement |
> | --------------- | -------- | -------- | ----------- |
> | **Traditional** | 738.5 ms | 681.0 ms | **~7.7%**   |
> | **Typed**       | 2.006 s  | 1.322 s  | **~34%**    |
>
> These results show noticeable improvements for projects that:
>
> 1. Don't utilize scope analysis in any enabled lint rules
> 2. Use a parser such as `@typescript-eslint/parser` with longer scope analysis times

## Raw Data

To measure, use 0-2 of the following environment variables:

- `DEFERRED_ANALYSIS=1`: to defer scope analysis creation until it's needed (which does not happen in these cases)
- `TYPED_LINTING=1`: to enable typed linting

### Traditional Linting

#### Traditional Linting Baseline

```plaintext
$ hyperfine "node_modules/eslint/bin/eslint.js" --warmup 1
Benchmark 1: node_modules/eslint/bin/eslint.js
  Time (mean ± σ):     738.5 ms ±   4.5 ms    [User: 1245.5 ms, System: 138.8 ms]
  Range (min … max):   731.1 ms … 746.0 ms    10 runs
```

#### Traditional Linting Deferred

```plaintext
$ hyperfine "DEFERRED_ANALYSIS=1 node_modules/eslint/bin/eslint.js" --warmup 1
Benchmark 1: DEFERRED_ANALYSIS=1 node_modules/eslint/bin/eslint.js
  Time (mean ± σ):     681.0 ms ±   8.9 ms    [User: 1150.4 ms, System: 132.6 ms]
  Range (min … max):   669.1 ms … 701.2 ms    10 runs
```

### Typed Linting

#### Typed Linting Baseline

```plaintext
$ hyperfine "TYPED_LINTING=1 node_modules/eslint/bin/eslint.js" --warmup 1
Benchmark 1: TYPED_LINTING=1 node_modules/eslint/bin/eslint.js
  Time (mean ± σ):      2.006 s ±  0.035 s    [User: 3.095 s, System: 0.392 s]
  Range (min … max):    1.961 s …  2.061 s    10 runs
```

#### Typed Linting Deferred

```plaintext
$ hyperfine "DEFERRED_ANALYSIS=1 TYPED_LINTING=1 node_modules/eslint/bin/eslint.js" --warmup 1
Benchmark 1: DEFERRED_ANALYSIS=1 TYPED_LINTING=1 node_modules/eslint/bin/eslint.js
  Time (mean ± σ):      1.322 s ±  0.016 s    [User: 2.141 s, System: 0.281 s]
  Range (min … max):    1.307 s …  1.354 s    10 runs
```
