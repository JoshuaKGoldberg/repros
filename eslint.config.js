import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';
import sentencesPerLine from 'eslint-plugin-sentences-per-line'

export default defineConfig(
    {
        files: ['**/*.md'],
        extends: [
            markdown.configs.recommended,
            sentencesPerLine.configs.recommended,
        ]
    }
);