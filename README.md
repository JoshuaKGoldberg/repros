# Barrel vs. Direct File Testing

Simulated reproduction for [Speeding up the JavaScript ecosystem - The barrel file debacle](https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-7).

```shell
npm i
npm run test:barrel
npm run test:direct
```

Results with [hyperfine](https://github.com/sharkdp/hyperfine) from an M1 Ultra Mac Mini:

| Barrel               | Direct                |
| -------------------- | --------------------- |
| `7.684 s ±  0.410 s` | `504.2 ms ±  11.2 ms` |

```plaintext
$ hyperfine "npm run test:barrel"
Benchmark 1: npm run test:barrel
  Time (mean ± σ):      7.684 s ±  0.410 s    [User: 9.023 s, System: 2.358 s]
  Range (min … max):    7.258 s …  8.436 s    10 runs
```

```plaintext
$ hyperfine "npm run test:direct"
Benchmark 1: npm run test:direct
  Time (mean ± σ):     504.2 ms ±  11.2 ms    [User: 1034.4 ms, System: 183.7 ms]
  Range (min … max):   491.4 ms … 527.4 ms    10 runs
```
