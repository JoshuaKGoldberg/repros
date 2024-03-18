# Emojilib <> Emojipedia Keywords Comparison

Comparing the 🆔 _identity_ keywords between [`emojipedia`](https://github.com/JoshuaKGoldberg/emojipedia) and [`emojilib`](https://github.com/muan/emojilib) for the emojis referenced in [emojilib#194 What constitutes an acceptable keyword?](https://github.com/muan/emojilib/issues/194).

> Warning: there is some minor vulgarity inside.
> Reader beware.

## Setup

To install dependencies, then generate `.md` files:

```shell
npm i
npm run build
```

To continuously rebuild `.md` files while working:

```shell
npx tsx --watch src/index.ts
```

## Comparison Files

The `src/index.ts` script generates two `.md` files:

- [_Emojipedia.md_](./Emojipedia.md): Summarizing the important `emojipedia` data for the emojis
- [_Keywords.md_](./Keywords.md): Aggregates keywords from the `emojipedia` shortcodes and `emojilib` for emojis, then compares which keywords show up in both or only one of the two platforms

Keywords are separated into two classifications:

- _Full_: ones that are directly listed as a shortcode or emoji name, such as `purple_vegetable`
- _Partial_ : ones that are part of a name, such as `purple` and `vegetable`
