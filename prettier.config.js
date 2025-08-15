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
      files: '*.{json,jsonc}',
      options: {
        trailingComma: 'none',
        // Always put object properties and array items on a newline
        printWidth: 1,
        bracketSpacing: false,
      },
    },
  ],
  experimentalTernaries: true,
  printWidth: 120,
  singleQuote: true,
};

export default config;
