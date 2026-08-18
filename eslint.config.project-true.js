import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [tseslint.configs.base],
  files: ['**/*.ts'],
  languageOptions: {
    parserOptions: {
      project: true,
      projectService: false,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
  },
});
