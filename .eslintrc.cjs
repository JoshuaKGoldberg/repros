module.exports = {
    extends: ["plugin:expect-type/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true
    },
    plugins: ["expect-type"]
}