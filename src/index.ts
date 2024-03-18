import * as emojipedia from "emojipedia/data";
import * as emojilib from "emojilib";
import * as fs from "node:fs/promises";

const ignoredValues = new Set(["in", "of", "to"]);

function toCodeList(entries: string[], indent: string) {
  return [
    `<ul>`,
    ...entries
      .map((entry) => `<code>${entry}</code>`)
      .map((entry) => `  <li>${entry}</li>`),
    `</ul>`,
  ]
    .map((line) => [indent, line].join(""))
    .join("\n");
}

function toPartialKeywords(allFullKeywords: string[], fullKeywords: string[]) {
  return toUniqueSortedArray(
    fullKeywords
      .flatMap((text) => text.replaceAll(":", "").split(/[ -_]/g))
      .filter((keyword) => !allFullKeywords.includes(keyword))
  );
}

function toUniqueSortedArray(values: string[]) {
  return Array.from(new Set(values))
    .filter((value) => !ignoredValues.has(value))
    .sort();
}

const emojis = [
  emojipedia.AirplaneDeparture,
  emojipedia.Eggplant,
  emojipedia.FlagMexico,
  emojipedia.Flashlight,
  emojipedia.MobilePhone,
  emojipedia.PartyPopper,
  emojipedia.PileOfPoo,
  emojipedia.RedHeart,
];

const vendors = toUniqueSortedArray(
  emojis.flatMap((emoji) =>
    emoji.shortcodes.flatMap((shortcode) => shortcode.vendor.title)
  )
);

const emojipediaTable = [
  `<table>`,
  `  <thead>`,
  `    <tr>`,
  `      <th rowspan="2">Emoji</th>`,
  `      <th rowspan="2">CLDR Name</th>`,
  `      <th rowspan="2">Apple Name</th>`,
  `      <th rowspan="2">Also Known As</th>`,
  `      <th colspan="${vendors.length}">Shortcodes</th>`,
  `    </tr>`,
  `    <tr>`,
  ...vendors.map((vendor) => `      <th>${vendor}</th>`),
  `    </tr>`,
  `  </thead>`,
  `  <tbody>`,
  emojis.map((emoji) => {
    return [
      `    <tr>`,
      `      <th>${emoji.code}</th>`,
      `      <td>${emoji.currentCldrName}</td>`,
      `      <td>${emoji.appleName}</td>`,
      `      <td>`,
      `        <ul>`,
      ...emoji.alsoKnownAs.map((knownAs) => `          <li>${knownAs}</li>`),
      `        </ul>`,
      `      </td>`,
      ...vendors.map((vendor) => [
        `      <td>`,
        toCodeList(
          emoji.shortcodes
            .filter((shortcode) => shortcode.vendor.title === vendor)
            .map((shortcode) => shortcode.code),
          "        "
        ),
        `      </td>`,
      ]),
      `      </td>`,
      `    </tr>`,
    ];
  }),
  `  </tbody>`,
  `</table>`,
].flat(Infinity);

await fs.writeFile(`Emojipedia.md`, emojipediaTable.join(`\n`) + `\n`);

const emojiKeywordsFromEmojilib = Object.fromEntries(
  emojis.map((emoji) => {
    const libKeywords = emojilib[emoji.code as keyof typeof emojilib];
    const full = toUniqueSortedArray(libKeywords);

    return [emoji.title, full];
  })
);

const emojiKeywordsFromEmojipedia = Object.fromEntries(
  emojis.map((emoji) => {
    const full = toUniqueSortedArray(
      [
        emoji.title,
        emoji.appleName,
        ...emoji.alsoKnownAs,
        ...emoji.shortcodes.map((shortcode) => shortcode.code),
      ]
        .map((text) =>
          text.toLowerCase().replaceAll(/[ -]/g, "_").replaceAll(":", "")
        )
        .sort()
    );

    return [emoji.title, full];
  })
);

const keywordsTable = [
  `<table>`,
  `  <thead>`,
  `    <tr>`,
  `      <th rowspan="2">Emoji</th>`,
  `      <th colspan="2">In Both 🌕</th>`,
  `      <th colspan="2">Only in Emojilib 🌗</th>`,
  `      <th colspan="2">Only in Emojipedia 🌓</th>`,
  `    </tr>`,
  `    <tr>`,
  `      <th>Full Keywords</th>`,
  `      <th>Partial Keywords</th>`,
  `      <th>Full Keywords</th>`,
  `      <th>Partial Keywords</th>`,
  `      <th>Full Keywords</th>`,
  `      <th>Partial Keywords</th>`,
  `    </tr>`,
  `  </thead>`,
  `  <tbody>`,
  ...emojis.map((emoji) => {
    const emojilibKeywords = emojiKeywordsFromEmojilib[emoji.title];
    const emojipediaKeywords = emojiKeywordsFromEmojipedia[emoji.title];

    const allFullKeywords = toUniqueSortedArray([
      ...emojilibKeywords,
      ...emojipediaKeywords,
    ]);

    const inBothFullKeywords = emojipediaKeywords.filter((keyword) =>
      emojilibKeywords.includes(keyword)
    );

    const inBothPartialKeywords = toPartialKeywords(
      allFullKeywords,
      inBothFullKeywords
    );

    const onlyInEmojilibKeywords = emojilibKeywords.filter(
      (keyword) => !emojipediaKeywords.includes(keyword)
    );

    const onlyInEmojilibPartialKeywords = toPartialKeywords(
      allFullKeywords,
      onlyInEmojilibKeywords
    ).filter((keyword) => !inBothPartialKeywords.includes(keyword));

    const onlyInEmojipediaKeywords = emojipediaKeywords.filter(
      (keyword) => !emojilibKeywords.includes(keyword)
    );

    const onlyInEmojipediaPartialKeywords = toPartialKeywords(
      allFullKeywords,
      onlyInEmojipediaKeywords
    ).filter((keyword) => !inBothPartialKeywords.includes(keyword));

    return [
      `    <tr>`,
      `      <th>${emoji.code}</th>`,
      // In both
      `      <td>`,
      toCodeList(inBothFullKeywords, "        "),
      `      </td>`,
      `      <td>`,
      toCodeList(inBothPartialKeywords, "        "),
      `      </td>`,
      // Only in Emojilib
      `      <td>`,
      toCodeList(onlyInEmojilibKeywords, "        "),
      `      </td>`,
      `      <td>`,
      toCodeList(onlyInEmojilibPartialKeywords, "        "),
      `      </td>`,
      // Only in Emojipedia
      `      <td>`,
      toCodeList(onlyInEmojipediaKeywords, "        "),
      `      </td>`,
      `      <td>`,
      toCodeList(onlyInEmojipediaPartialKeywords, "        "),
      `      </td>`,
      `    </tr>`,
    ];
  }),
  `  </tbody>`,
  `</table>`,
].flat(Infinity);

await fs.writeFile(`Keywords.md`, keywordsTable.join(`\n`) + `\n`);
