# formatly-biome-windows-backslash-paths

On Windows, [formatly](https://github.com/JoshuaKGoldberg/formatly) 0.11.4 ignores Biome config globs when it formats text in-process with `@biomejs/js-api`:

- `overrides[].includes` don't apply, so `src/a.js` gets the root `indentWidth` 2 instead of the `src/**` override's 8.
- `files.includes` exclusions don't apply, so `ignored/a.js` gets formatted.

formatly passes Biome the file's `path.relative()` from the config directory, which is `src\a.js` on Windows.
`@biomejs/js-api` only matches config globs against forward-slash relative paths ([repro](https://github.com/JoshuaKGoldberg/repros/tree/biome-js-api-windows-backslash-paths)).

Run `npm install && npm run repro`, or see the GitHub Actions runs on `ubuntu-latest` (passes) and `windows-latest` (fails).
