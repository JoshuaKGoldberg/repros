# biome-js-api-windows-backslash-paths

`@biomejs/js-api` (6.1.0, latest) with `@biomejs/wasm-nodejs` (2.6.8, latest) does not match `overrides[].includes` for a backslash path such as `src\a.js` (what `path.relative()` returns on Windows), nor for absolute paths.
The `biome` CLI (2.6.8) matches both on Windows.

Run `npm install && npm run repro`, or see the GitHub Actions run on `windows-latest` and `ubuntu-latest`.
`indent=8` means the `src/**` override matched; `indent=2` means it did not.

Also observed (any separator, any OS): `formatContent` does not consult `files.includes` or `formatter.enabled: false` at all.
