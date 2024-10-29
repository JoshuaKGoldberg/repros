const plugin = {
  name: "example",
  rules: {
    fails: {
      create(context) {
        return {
          Identifier(node) {
            context.report({
              fix: function* (fixer) {
                yield fixer.removeRange([0, 10]);
                yield fixer.removeRange([5, 15]);
              },
              message: "Test.",
              node,
            });
          },
        };
      },
      meta: {
        fixable: true,
      },
    },
  },
};

export default [
  {
    plugins: {
      example: plugin,
    },
    rules: {
      "example/fails": "error",
    },
  },
];
