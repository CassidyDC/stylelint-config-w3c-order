/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
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
  semi: true,
  singleQuote: true,
};

export default config;
