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
  experimentalTernaries: true,
  printWidth: 120,
  singleQuote: true,
};

export default config;
