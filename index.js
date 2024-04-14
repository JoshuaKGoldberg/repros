import tseslint5 from "@typescript-eslint/eslint-plugin-5";
import prettier from "prettier";
import tseslint7 from "@typescript-eslint/eslint-plugin-7";

const comments = new Map([
  ["class-methods-use-this", "too opinionated for stylistic"],
  ["consistent-return", "too opinionated for stylistic"],
  ["max-params", "too opinionated for stylistic"],
  ["parameter-properties", "too opinionated for stylistic"],
  ["prefer-destructuring", "too opinionated for stylistic"],
  ["use-unknown-in-catch-callback-variable", "too opinionated for recommended"],
]);

const newNonStrictRules = {
  promoteToRecommended: new Set(["no-unsafe-unary-minus"]),
  promoteToStrict: new Set(["prefer-find"]),
  promoteToStylistic: new Set(["no-unused-expressions", "prefer-regexp-exec"]),
  remain: new Set([
    "class-methods-use-this",
    "consistent-return",
    "max-params",
    "prefer-destructuring",
  ]),
  toBeClassified: [],
};

const newStrictRules = {
  promoteToRecommended: new Set([
    "no-array-delete",
    "no-useless-template-literals",
    "only-throw-error",
    "prefer-promise-reject-errors",
  ]),
  remainInStrict: new Set(["use-unknown-in-catch-callback-variable"]),
  toBeClassified: [],
};

const rulesFrom5 = new Map(Object.entries(tseslint5.rules));

const ruleEntries7 = Object.entries(tseslint7.rules).filter(
  ([, ruleData]) => ruleData.meta.type !== "layout"
);

const isRecommended = (recommended) =>
  recommended === "recommended" || typeof recommended === "object";

const isStrict = (recommended) =>
  recommended === "strict" || typeof recommended === "strict";

let tableLines = [
  [
    "",
    "Rule",
    "Status",
    "TC",
    "Ext",
    "Rec'd",
    "Strict",
    "Style",
    "Comment",
  ].join(" | "),
  `| ---- | ------ | --- | --- | ----- | ------ | ----- | ------- |`,
];

for (const [name, ruleData7] of ruleEntries7) {
  const ruleData5 = rulesFrom5.get(name);
  const recommended = isRecommended(ruleData7.meta.docs.recommended);
  const strict = isStrict(ruleData7.meta.docs.recommended);
  const stylistic = ruleData7.meta.docs.recommended === "stylistic";

  const [recommendedCell, strictCell, stylisticCell = stylistic ? "🔸" : ""] =
    recommended
      ? ["🟩", ""]
      : strict
        ? newStrictRules.remainInStrict.has(name)
          ? ["", "🔵"]
          : newStrictRules.promoteToRecommended.has(name)
            ? ["➕", "➖"]
            : ruleData5?.meta.docs.recommended
              ? ["", "🔵"]
              : ["", ""]
        : newNonStrictRules.promoteToRecommended.has(name)
          ? ["➕", ""]
          : newNonStrictRules.promoteToStrict.has(name)
            ? ["", "➕"]
            : newNonStrictRules.promoteToStylistic.has(name)
              ? ["", "", "➕"]
              : ["", ""];

  if (!recommendedCell && !strictCell && !stylisticCell && !ruleData5) {
    if (
      !ruleData7.meta.docs.recommended &&
      !newNonStrictRules.remain.has(name)
    ) {
      newNonStrictRules.toBeClassified.push(name);
    }

    if (!stylistic && ruleData7.meta.docs.recommended) {
      newStrictRules.toBeClassified.push(name);
    }
  }

  tableLines.push(
    [
      "",
      `[\`${name}\`](https://typescript-eslint.io/rules/${name})`,
      ruleData5 ? "" : "🆕",
      ruleData7.meta.docs?.requiresTypeChecking ? "💭" : "",
      ruleData7.meta.docs?.extendsBaseRule ? "🧱" : "",
      recommendedCell,
      strictCell,
      stylisticCell,
      comments.get(name) ?? "",
    ].join(" | ")
  );
}

const prefix = `## Overview

We're working towards a new v8 major versions for typescript-eslint. Major versions are when we have an opportunity to adjust the [shared configs](https://typescript-eslint.io/users/configs). Exciting!

As with 6.0 (#6014), this is a proposal for the new shared configs. We're looking for feedback from the community before we go ahead and make the changes.

Please, let us know here or in the [typescript-eslint Discord's \`#v8\` channel](https://discord.com/channels/1026804805894672454/1228823100070821989): what feedback to you have? 💜

### Table Key

<table>
  <thead>
    <tr>
      <th>Column</th>
      <th>Description</th>
      <th>Emojis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Status</td>
      <td>Being added, deprecated, or removed</td>
      <td>
        <ul>
          <li>🆕 = newly added to TypeScript-ESLint</li>
          <li>🙅 = to be deprecated in the next major</li>
          <li>💀 = currently deprecated; to be removed in the next version</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>TC</td>
      <td>Requires type checking?</td>
      <td>
        <ul>
          <li>💭 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Ext</td>
      <td>Extension rule?</td>
      <td>
        <ul>
          <li>🧱 = yes</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Rec'd</td>
      <td>Recommended</td>
      <td>
        <ul>
          <li>➕ = add to recommended this version</li>
          <li>➖️ = remove from recommended this version</li>
          <li>🟩 = stays in recommended this version</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Strict</td>
      <td>Strict</td>
      <td>
        <ul>
        <li>➕ = add to strict this version</li>
        <li>➖️ = remove from strict this version</li>
        <li>🔵 = stays in strict this version</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Style</td>
      <td>Style</td>
      <td>
        <ul>
          <li>➕ = add to stylistic this version</li>
          <li>➖️ = remove from stylistic this version</li>
          <li>🔸 = stays in stylistic this version</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### Recommendations Table

> Hint: search for 🆕 to find newly added rules, and ➕ or ➖ to see config changes.
`;

console.log(
  await prettier.format([prefix, ...tableLines].join("\n"), {
    parser: "markdown",
  })
);

for (const unclassified of newNonStrictRules.toBeClassified) {
  console.log("Non-strict rules to be classified:", unclassified);
}

for (const unclassified of newStrictRules.toBeClassified) {
  console.log("Strict rules to be classified:", unclassified);
}
