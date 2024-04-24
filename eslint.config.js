import pluginESx from "eslint-plugin-es-x";

export default [
  {
    languageOptions: { ecmaVersion: 2018 },
    plugins: { "es-x": pluginESx },
    rules: {
      "es-x/no-async-iteration": "error",
    },
  },
];
