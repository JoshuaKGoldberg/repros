# Emojilib <> Platforms Keywords Comparison

Comparing the 🆔 _identity_ and 🔗 _relation_ keywords between [`emojipedia`](https://github.com/JoshuaKGoldberg/emojipedia) and the platforms from [`emoji-platform-data`](https://github.com/JoshuaKGoldberg/emoji-platform-data) for the emojis referenced in [emojilib#194 What constitutes an acceptable keyword?](https://github.com/muan/emojilib/issues/194).

> Warning: there is some minor vulgarity inside.
> Reader beware.

[Preview the full proposal of changes here: `Proposed-all.html`](https://html-preview.github.io/?url=https://github.com/JoshuaKGoldberg/repros/blob/emojilib-platforms-keywords-comparison/Proposed-all.html)!

## Setup

Install dependencies with [pnpm](https://pnpm.io), then generate `.md` files:

```shell
pnpm i
pnpm run build
```

To continuously rebuild `.md` files while working:

```shell
npx tsx --watch src/index.ts
```

## Generated Tables

The `src/index.ts` script generates two `.md` files:

- _[Comparison.md](./Comparison.md)_: keywords separated into the classifications as defined in [emojilib#194 What constitutes an acceptable keyword? #issuecomment-2004763885](https://github.com/muan/emojilib/issues/194#issuecomment-2004763885).
- _[Proposed.md](./Proposed.md)_: compares the keywords currently in `emojilib` with the combined set of keywords from all the platforms.

> 💡 The keywords I'm proposing being added to `emojilib` in _[Proposed.md](./Proposed.md)_ are the same as the _[Comparison.md](./Comparison.md)_ **Platforms** > **Any** column.

`src/index.ts` also generates _[`Comparison-all.html`](./Comparison-all.html)_ and _[`Proposed-all.html`](./Proposed-all.html)_ equivalents that include all emojis.
Those files are too big for the built-in VS Code markdown preview to render efficiently.
I recommend directly opening them in a browser.
