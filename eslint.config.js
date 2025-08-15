/**
 * ESLint configuration.
 *
 * @file Manages the flat configuration settings for ESLint
 * @author Jacob Cassidy <jacob@cassidydc.com>
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {import("eslint").Linter.Config[]}
 * @version 1.0.0
 */

'use strict';

import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';

export default defineConfig([
  globalIgnores([
    '**/.dev-assets/',
    '**/build/',
    '**/vendor/',
    '**/*.min.js',
  ]),
  {
    plugins: {
      'import-x': importX,
      js,
      tseslint,
    },
    extends: [
      'import-x/recommended',
      'js/recommended',
      'tseslint/recommended',
    ],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    linterOptions: {
      reportUnusedInlineConfigs: 'warn',
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      yoda: ['warn', 'never'],
    },
  },
]);
