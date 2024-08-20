import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
  {
    files: ['index.ts'],
    languageOptions: {
        parser: tseslint.parser
    },
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-enums': 'error',
    },
  },
]