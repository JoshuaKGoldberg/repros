async function work() {
    await Promise.resolve();
}

work();

/* eslint-env node */
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
    ],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        EXPERIMENTAL_useProjectService: {
            allowDefaultProjectForFiles: [process.env.ALLOW_DEFAULT_PROJECT_FOR_FILES],
        },
        tsconfigRootDir: __dirname,
    },
    root: true,
};