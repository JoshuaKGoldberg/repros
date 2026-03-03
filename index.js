const { RuleCreator } = require("@typescript-eslint/utils/eslint-utils");

module.exports.rule = RuleCreator.withoutDocs({
  meta: {
    messages: {},
    schema: [],
    type: "problem",
  },
  create() {
    return {};
  },
});
