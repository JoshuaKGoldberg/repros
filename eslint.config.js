export default [
  {
    languageOptions: {
      parser: {
        parse: (...args) => {
          console.log("Parsing with:", { args });
        },
      },
    },
  },
];
