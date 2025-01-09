/**
 * The CSS fonts module defines font-related properties and how font resources are loaded. It lets you define the style of a font, such as its family, size and weight, and the glyph variants to use when multiple are available for a single character.
 *
 * @module fontsModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts MDN}
 * @see {@link https://drafts.csswg.org/css-fonts/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-fonts/#property-index W3C Working Draft}
 */
export const fontsModule = {
  fonts: [
    'font',
    'font-display', // font-face
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-named-instance',
    'font-optical-sizing',
    'font-palette',
    'font-size-adjust',
    'font-size',
    'font-smoothing', // non-standard
    '-moz-osx-font-smoothing',
    '-webkit-font-smoothing',
    'font-smooth', // non-standard
    'font-stretch', // legacy name alias for font-width
    'font-style',

    'font-synthesis',
    'font-synthesis-position',
    'font-synthesis-small-caps',
    'font-synthesis-style',
    'font-synthesis-weight',

    'font-variant',
    'font-variant-alternates',
    'font-variant-caps',
    'font-variant-east-asian',
    'font-variant-emoji',
    'font-variant-ligatures',
    'font-variant-numeric',
    'font-variant-position',

    'font-variation-settings',
    'font-weight',
    'font-width',
  ],
  fontFaces: [
    'size-adjust', // https://drafts.csswg.org/css-fonts-5/#property-index
    'src',
    'unicode-range',
  ],
  overrides: [
    'ascent-override',
    'descent-override',
    'line-gap-override',
    'subscript-position-override', // https://drafts.csswg.org/css-fonts-5/#property-index
    'subscript-size-override', // https://drafts.csswg.org/css-fonts-5/#property-index
    'superscript-position-override', // https://drafts.csswg.org/css-fonts-5/#property-index
    'superscript-size-override', // https://drafts.csswg.org/css-fonts-5/#property-index
  ],
};
