import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'

export default defineConfig([
    globalIgnores(['coverage/**', 'dist/**']),
    { linterOptions: { reportUnusedDisableDirectives: 'error' } },
    {
        extends: [js.configs.recommended, importPlugin.flatConfigs.recommended],
        files: ['**/*.{mjs,js}'],
        languageOptions: { ecmaVersion: 'latest', },
        rules: {
            'import/no-duplicates': 'error',
            'import/no-extraneous-dependencies': 'error',
        },
    },
]);
