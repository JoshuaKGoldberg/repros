# formatly-biome-windows-backslash-paths

On Windows, [formatly](https://github.com/JoshuaKGoldberg/formatly) 0.11.4's in-process Biome formatter (`@biomejs/js-api` 6.1.0 with `@biomejs/biome` and `@biomejs/wasm-nodejs` 2.6.8) doesn't apply config globs to files in subdirectories:

- `overrides[].includes` doesn't apply, so `src/a.js` gets the root `indentWidth` 2 instead of the `src/**` override's 8.
- `files.includes` exclusions don't apply, so `ignored/a.js` gets formatted.

formatly [passes Biome the file's `path.relative()`](https://github.com/JoshuaKGoldberg/formatly/blob/0.11.4/src/formatters/formatTextBiome.ts#L96) from the config directory, which is `src\a.js` on Windows.
`@biomejs/js-api` only matches `overrides[].includes` against forward-slash relative paths ([repro](https://github.com/JoshuaKGoldberg/repros/tree/biome-js-api-windows-backslash-paths)), and this repro shows `files.includes` is affected too.
With [formatly#755](https://github.com/JoshuaKGoldberg/formatly/pull/755) applied, which converts the path to forward slashes, both cases pass on Windows ([branch](https://github.com/JoshuaKGoldberg/repros/tree/formatly-biome-windows-backslash-paths-patched), [run](https://github.com/JoshuaKGoldberg/repros/actions/runs/44463492484)).

Run `npm install && npm run repro`, or see the GitHub Actions runs on `ubuntu-latest` (passes) and `windows-latest` (fails).

> The exclusion is `!ignored/**` rather than `!ignored` because, with Biome 2.6.8, `!ignored` doesn't exclude the folder's files through js-api's `fileFeatures`, even on macOS.
