# Repro: pptx-svg crashes loading a deck with an emoji in a section name

Reproduction showing [pptx-svg](https://github.com/t-ujiie-g/pptx-svg) 0.6.8 throwing `RuntimeError: unreachable` from `loadPptx` for a deck with an emoji in a section name.
The same deck with a heart from the Basic Multilingual Plane in its section name loads.

[`repro.mjs`](./repro.mjs) uses [PptxGenJS](https://github.com/gitbrent/PptxGenJS) to make a one-slide deck in a section titled `TypeScript ♥ ESLint` (U+2665), and another in a section titled `TypeScript 💙 ESLint` (U+1F499), then loads each with pptx-svg.

## Setup

```shell
npm install
```

## Command Outputs

Versions: `pptx-svg@0.6.8`, `pptxgenjs@4.0.1`, Node.js 24.15.0, macOS arm64.

### `npm run repro`

```plaintext
TypeScript ♥ ESLint: loaded 1 slide
TypeScript 💙 ESLint: RuntimeError: unreachable
```

## Expected

Both decks load.

## Actual

The deck with 💙 in its section name throws `RuntimeError: unreachable`.

Any character outside the Basic Multilingual Plane in `ppt/presentation.xml` does the same, even in an XML comment.
The same emoji in slide text loads and renders.

`initialize_pptx` counts slides with [`count_slide_ids`](https://github.com/t-ujiie-g/pptx-svg/blob/v0.6.8/src/main/main.mbt#L63-L68), whose [`count_occurrences`](https://github.com/t-ujiie-g/pptx-svg/blob/v0.6.8/src/main/main.mbt#L71-L88) steps through `presentation.xml` one UTF-16 code unit at a time.
At the second half of a surrogate pair, [`match_at`](https://github.com/t-ujiie-g/pptx-svg/blob/v0.6.8/src/main/main.mbt#L91-L99) calls `text.get_char(pos + j).unwrap()`, and `get_char` returns `None` there, so the `unwrap` panics.
pptx-svg's XML parser steps by [`char_step`](https://github.com/t-ujiie-g/pptx-svg/blob/v0.6.8/src/xml/xml.mbt#L30-L36) instead, which skips the second half.

This came up converting my old talks, six of which have a section named `TypeScript 💙 ESLint`.
