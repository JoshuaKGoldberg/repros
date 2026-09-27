# prettier-plugin-curly Markdown Code Blocks

Repro for [prettier-plugin-curly#898](https://github.com/JoshuaKGoldberg/prettier-plugin-curly/issues/898): JSX code blocks in Markdown are reformatted after upgrading `prettier-plugin-curly` from 0.3.2 to 0.4.x.

```shell
npm i
npm run check            # with prettier-plugin-curly@0.4.1: docs.md changes
npm run check:no-plugin  # without any plugin: docs.md changes identically
```

Prettier on its own produces the same output as with the plugin.
`prettier-plugin-curly@0.3.2`'s `preprocess` threw a `SyntaxError` on these JSX blocks (visible with `PRETTIER_DEBUG=1`), and Prettier's Markdown embed silently leaves a code block unchanged when formatting it throws.
0.4.x no longer throws, so Prettier's standard embedded formatting applies.

`embeddedLanguageFormatting: "off"` (or `<!-- prettier-ignore -->` before a block) keeps the code blocks unchanged.
