import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [tseslint.configs.base],
  files: ['**/*.ts'],
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
  },
});
