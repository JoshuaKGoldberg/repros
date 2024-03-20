import * as emojipedia from "emojipedia/data";
import {
  EmojiPlatformData,
  EmojipediaItem,
  byTitle,
} from "emoji-platform-data";
import * as fs from "node:fs/promises";
import * as emojilib from "emojilib";
import * as changeCase from "change-case";

const ignoredValues = new Set(["a", "and", "in", "it", "of", "to", "with"]);

function toCodeList(entries: string[] | undefined, indent: string) {
  return entries?.length
    ? [
        `<ul>`,
        ...toUniqueSortedArray(entries)
          .map((entry) => `<code>${entry}</code>`)
          .map((entry) => `  <li>${entry}</li>`),
        `</ul>`,
      ].map((line) => [indent, line].join(""))
    : [];
}

function toPartialKeywords(
  candidateKeywords: string[] | undefined,
  fullKeywords = candidateKeywords
) {
  return candidateKeywords
    ? toUniqueSortedArray(
        candidateKeywords
          .flatMap((text) => text.replaceAll(/[:,]/g, "").split(/[ _]/g))
          .filter((keyword) => !fullKeywords!.includes(keyword))
      )
    : [];
}

function toUniqueSortedArray(values: string[]) {
  return Array.from(new Set(values))
    .filter((value) => !ignoredValues.has(value))
    .sort();
}

function toNormalizedText(text = "") {
  return text
    .toLowerCase()
    .replaceAll(/[ ,)(]/g, "_")
    .replaceAll(":", "")
    .replaceAll(/__/g, "_")
    .replaceAll(/^_/g, "")
    .replaceAll(/_$/g, "");
}

function toNormalizedTitle(text: string) {
  return changeCase.pascalCase(text).replaceAll(" ", "");
}

function generateFullIdentityColumns(
  inEmojilib: string[],
  platforms: EmojiPlatformData
) {
  const inEmojipedia = getKeywordsForEmojipediaEntry(platforms.emojipedia).map(
    toNormalizedText
  );
  const inFluemoji =
    platforms.fluemoji &&
    [platforms.fluemoji.cldr, platforms.fluemoji.tts].map(toNormalizedText);
  const inGemoji = platforms.gemoji?.names;
  const inTwemoji =
    platforms.twemoji && [platforms.twemoji.description].map(toNormalizedText);
  const inAny = [inFluemoji, inGemoji, inTwemoji, inEmojipedia]
    .flat()
    .map((text) => text && toNormalizedText(text))
    .filter((x): x is string => !!x);

  const columns = [
    `      <td>`,
    ...toCodeList(inEmojilib, "        "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inAny, "        "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inEmojipedia, "        "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inFluemoji, "        "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inGemoji, "        "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inTwemoji, "        "),
    `      </td>`,
  ];

  return {
    columns,
    inAny,
    inEmojilib,
    inEmojipedia,
    inFluemoji,
    inGemoji,
    inTwemoji,
  };
}

function generatePartialIdentityColumns(
  keywordsEmojilib: string[],
  fullIdentity: ReturnType<typeof generateFullIdentityColumns>
) {
  const inAny = toPartialKeywords(fullIdentity.inAny);
  const inEmojilib = toPartialKeywords(keywordsEmojilib);
  const inEmojipedia = toPartialKeywords(fullIdentity.inEmojipedia);
  const inFluemoji = toPartialKeywords(fullIdentity.inFluemoji);
  const inGemoji = toPartialKeywords(fullIdentity.inGemoji);
  const inTwemoji = toPartialKeywords(fullIdentity.inTwemoji);

  const columns = [
    `      <td rowspan="2">`,
    ...toCodeList(inEmojilib, "       "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inAny, "       "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inEmojipedia, "       "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inFluemoji, "       "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inGemoji, "       "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inTwemoji, "       "),
    `      </td>`,
  ];

  return {
    columns,
    inAny,
    inEmojilib,
    inEmojipedia,
    inFluemoji,
    inGemoji,
    inTwemoji,
  };
}

function getKeywordsForEmojipediaEntry(entry: any) {
  return [
    entry.appleName,
    entry.currentCldrName,
    entry.title,
    ...(entry.alsoKnownAs ?? []),
  ].map(toNormalizedText);
}

function generateRelationIdentityColumns(
  fullIdentity: ReturnType<typeof generateFullIdentityColumns>,
  partialIdentity: ReturnType<typeof generatePartialIdentityColumns>,
  platforms: EmojiPlatformData
) {
  const partialIdentityKeywords = [
    ...fullIdentity.inAny,
    ...partialIdentity.inAny,
  ];
  const inFluemoji = toPartialKeywords(
    platforms.fluemoji?.keywords,
    partialIdentityKeywords
  );
  const inGemoji = toPartialKeywords(
    platforms.gemoji && [
      platforms.gemoji.description,
      ...platforms.gemoji.tags,
    ],
    partialIdentityKeywords
  );
  const inTwemoji = toPartialKeywords(
    platforms.twemoji && "keywords" in platforms.twemoji
      ? platforms.twemoji.keywords
      : undefined,
    partialIdentityKeywords
  );

  const inAny = toUniqueSortedArray([...inFluemoji, ...inGemoji, ...inTwemoji]);

  const columns = [
    `      <td>`,
    ...toCodeList(inAny, "       "),
    `      </td>`,
    // In theory we could use emoji components, but they're often not useful.
    // For example, 🇲🇽 includes "Regional Indicator Symbol Letter M"
    `      <td></td>`,
    `      </td>`,
    `      <td>`,
    ...toCodeList(inFluemoji, "       "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inGemoji, "       "),
    `      </td>`,
    `      <td>`,
    ...toCodeList(inTwemoji, "       "),
    `      </td>`,
  ];

  return { columns, inAny, inFluemoji, inGemoji, inTwemoji };
}

function removeColumns<T>(data: T & { columns: unknown }) {
  const removed = { ...data };
  delete removed.columns;
  return removed as T;
}

async function generateComparisonsTable(
  emojis: EmojipediaItem[],
  suffix: string
) {
  const allComparisons = await Promise.all(
    emojis.map(async (emoji) => {
      const keywordsEmojilib =
        emojilib[emoji.code as keyof typeof emojilib] ??
        Object.values(emojilib).find(
          (keywords) =>
            Array.isArray(keywords) &&
            keywords[0].replaceAll(/[\W_]/g, "") ===
              emoji.slug.replaceAll(/[\W_]/g, "")
        );

      if (!keywordsEmojilib) {
        console.error(emoji);
        throw new Error(`Couldn't find emoji in emojilib: ${emoji.slug}`);
      }

      const platforms =
        (emoji.currentCldrName &&
          byTitle[toNormalizedTitle(emoji.currentCldrName)]) ??
        byTitle[toNormalizedTitle(emoji.title)] ??
        Object.values(byTitle).find(
          (platformData) => platformData.emojipedia?.title === emoji.title
        );

      if (!platforms) {
        console.error(emoji);
        throw new Error(`Couldn't find emoji in Emojipedia: ${emoji.title}`);
      }

      const fullIdentity = generateFullIdentityColumns(
        keywordsEmojilib,
        platforms
      );

      const partialIdentity = generatePartialIdentityColumns(
        keywordsEmojilib,
        fullIdentity
      );

      const relationIdentity = generateRelationIdentityColumns(
        fullIdentity,
        partialIdentity,
        platforms
      );

      const columns = [
        `    <tr>`,
        `      <th rowspan="3">${emoji.code}</th>`,
        `      <th>🌕 Full Identity</th>`,
        ...fullIdentity.columns,
        `    </tr>`,
        `    <tr>`,
        `      <th>🌗 Partial Identity</th>`,
        ...partialIdentity.columns,
        `    </tr>`,
        `    <tr>`,
        `      <th>🔗 Relation</th>`,
        ...relationIdentity.columns,
        `    </tr>`,
      ];

      return {
        columns,
        emoji,
        fullIdentity,
        partialIdentity,
        relationIdentity,
      };
    })
  );

  await fs.writeFile(
    `Comparison${suffix}`,
    [
      `<table>`,
      `  <thead>`,
      `    <tr>`,
      `      <th colspan="2" rowspan="2">Emoji</th>`,
      `      <th rowspan="2">Emojilib</th>`,
      `      <th colspan="6">Platforms</th>`,
      `    </tr>`,
      `    <tr>`,
      `      <th>Any</th>`,
      `      <td>Emojipedia</td>`,
      `      <td>Fluemoji</td>`,
      `      <td>Gemoji</td>`,
      `      <td>Twemoji</td>`,
      `    </tr>`,
      `  </thead>`,
      `  <tbody>`,
      ...allComparisons.map((comparison) => comparison.columns),
      `  </tbody>`,
      `</table>`,
      "",
    ]
      .flat()
      .join(`\n`)
  );

  return allComparisons.map((comparison) => ({
    emoji: comparison.emoji,
    fullIdentity: removeColumns(comparison.fullIdentity),
    partialIdentity: removeColumns(comparison.partialIdentity),
    relationIdentity: removeColumns(comparison.relationIdentity),
  }));
}

async function generateProposedTable(
  allComparisons: Awaited<ReturnType<typeof generateComparisonsTable>>,
  suffix: string
) {
  await fs.writeFile(
    `Proposed${suffix}`,
    [
      `<table>`,
      `  <thead>`,
      `    <tr>`,
      `      <th rowspan="2">Emoji</th>`,
      `      <th rowspan="2">Current</th>`,
      `      <th rowspan="2">Proposed</th>`,
      `      <th colspan="3">Proposed Changes</th>`,
      `    </tr>`,
      `    <tr>`,
      `      <td>➕ Added</td>`,
      `      <td>➖ Removed</td>`,
      `      <td>✔️ Unchanged</td>`,
      `    </tr>`,
      `  </thead>`,
      `  <tbody>`,
      ...allComparisons.map((comparison) => {
        const existing = comparison.fullIdentity.inEmojilib;

        const proposed = toUniqueSortedArray(
          [
            comparison.fullIdentity.inEmojipedia,
            comparison.fullIdentity.inFluemoji,
            comparison.fullIdentity.inGemoji,
            comparison.fullIdentity.inTwemoji,
            comparison.partialIdentity.inEmojipedia,
            comparison.partialIdentity.inFluemoji,
            comparison.partialIdentity.inGemoji,
            comparison.partialIdentity.inTwemoji,
            comparison.relationIdentity.inFluemoji,
            comparison.relationIdentity.inGemoji,
            comparison.relationIdentity.inTwemoji,
          ]
            .flat()
            .map(toNormalizedText)
            .filter(Boolean)
        );

        const added = proposed.filter((keyword) => !existing.includes(keyword));
        const removed = existing.filter(
          (keyword) => !proposed.includes(keyword)
        );
        const unchanged = proposed.filter((keyword) =>
          existing.includes(keyword)
        );

        // A rough heuristic of which ones have many removals...
        if (
          removed.length >
          added.length + proposed.length + unchanged.length
        ) {
          console.warn(
            [
              "- ",
              comparison.emoji.code,
              " went from ",
              existing.length,
              " keywords to ",
              proposed.length,
              ": ",
              proposed.map((text) => `\`${text}\``).join(", "),
            ].join("")
          );
        }

        return [
          "    <tr>",
          `      <th>${comparison.emoji.code}</th>`,
          `      <td>`,
          ...toCodeList(existing, "        "),
          `      </td>`,
          `      <td>`,
          ...toCodeList(proposed, "        "),
          `      </td>`,
          `      <td>`,
          ...toCodeList(added, "        "),
          `      </td>`,
          `      <td>`,
          ...toCodeList(removed, "        "),
          `      </td>`,
          `      <td>`,
          ...toCodeList(unchanged, "        "),
          `      </td>`,
          "    </tr>",
        ];
      }),
      `  </tbody>`,
      `</table>`,
      "",
    ]
      .flat()
      .join(`\n`)
  );
}

for (const [emojis, suffix] of [
  [
    [
      emojipedia.AirplaneDeparture,
      emojipedia.Eggplant,
      emojipedia.FlagMexico,
      emojipedia.Flashlight,
      emojipedia.MobilePhone,
      emojipedia.PartyPopper,
      emojipedia.PileOfPoo,
      emojipedia.RedHeart,
    ],
    ".md",
  ],
  [Object.values(emojipedia), "-all.html"],
] satisfies [EmojipediaItem[], string?][]) {
  const allComparisons = await generateComparisonsTable(emojis, suffix);

  await generateProposedTable(allComparisons, suffix);
}
