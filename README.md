# Repro: npm publish and multi-period README extensions

Reproduction showing that `npm publish` allows README file extensions with multiple periods in them.

The `package.json` contains `"files": ["a.js"]`, yet all `README.*` files in this repository are published:

```shell
npm publish --dry-run
```

```plaintext
npm notice Tarball Contents
npm notice 1.0kB LICENSE.md
npm notice 16B README.a-b.md
npm notice 16B README.a.b.md
npm notice 14B README.a.md
npm notice 618B README.md
npm notice 13B README.txt
npm notice 15B README.x-y-z
npm notice 18B a.js
npm notice 107B package.json
```

See <https://github.com/JoshuaKGoldberg/eslint-plugin-package-json/issues/763>.
