module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Description of the rule",
    },
    fixable: "code",
    schema: [], // no options
  },
  create: function (context) {
    return {
      "Identifier[name=foo]"(node) {
        context.report({ node, message: "Don't call it foo." });
      },
    };
  },
};
