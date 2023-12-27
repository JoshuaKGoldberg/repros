module.exports = {
    env: { node: true },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        EXPERIMENTAL_useProjectService: true,
    },
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        '@typescript-eslint/no-floating-promises': 'error'
    }
}