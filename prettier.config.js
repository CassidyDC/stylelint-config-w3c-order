/**
 * Prettier configuration.
 *
 * @file Manages the configuration settings for Prettier
 * @author Jacob Cassidy <jacob@cassidydc.com>
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 * @version 1.0.0
 */

'use strict';

const config = {
  plugins: ['prettier-plugin-multiline-arrays'],
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      options: {
        multilineArraysWrapThreshold: 0,
        trailingComma: 'none',
      },
    },
  ],
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  experimentalTernaries: true,
  printWidth: 120,
  singleQuote: true,
};

export default config;
