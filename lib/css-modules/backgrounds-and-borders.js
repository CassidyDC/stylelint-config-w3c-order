/**
 * The CSS backgrounds and borders module provides properties for adding backgrounds, borders, rounded corners, and box shadows to elements.
 *
 * @module backgroundsAndBordersModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders MDN}
 * @see {@link https://drafts.csswg.org/css-backgrounds/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-backgrounds/#property-index W3C Working Draft}
 */
export const backgroundsAndBordersModule = {
  backgrounds: [
    'background',
    'background-attachment',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',

    'background-position',
    'background-position-x', // https://drafts.csswg.org/css-backgrounds-4/#property-index
    'background-position-y', // https://drafts.csswg.org/css-backgrounds-4/#property-index
    'background-position-block', // https://drafts.csswg.org/css-backgrounds-4/#property-index
    'background-position-inline', // https://drafts.csswg.org/css-backgrounds-4/#property-index

    'background-repeat',
    'background-repeat-x', // https://drafts.csswg.org/css-backgrounds-4/#property-index
    'background-repeat-y', // https://drafts.csswg.org/css-backgrounds-4/#property-index
    'background-repeat-block', // https://drafts.csswg.org/css-backgrounds-4/#property-index
    'background-repeat-inline', // https://drafts.csswg.org/css-backgrounds-4/#property-index

    'background-size',
  ],
  borders: [
    'border',
    'border-color',
    'border-limit',
    'border-style',
    'border-width',

    'border-top',
    'border-top-color',
    'border-top-style',
    'border-top-width',

    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',

    'border-bottom',
    'border-bottom-color',
    'border-bottom-style',
    'border-bottom-width',

    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',

    'border-block',
    'border-block-color',
    'border-block-style',
    'border-block-width',

    'border-block-start',
    'border-block-start-color',
    'border-block-start-style',
    'border-block-start-width',

    'border-block-end',
    'border-block-end-color',
    'border-block-end-style',
    'border-block-end-width',

    'border-inline',
    'border-inline-color',
    'border-inline-style',
    'border-inline-width',

    'border-inline-start',
    'border-inline-start-color',
    'border-inline-start-style',
    'border-inline-start-width',

    'border-inline-end',
    'border-inline-end-color',
    'border-inline-end-style',
    'border-inline-end-width',

    'border-clip',
    'border-clip-top',
    'border-clip-right',
    'border-clip-bottom',
    'border-clip-left',

    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',

    'corners',
    'corner-shape',

    'border-radius',

    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',

    'border-start-start-radius',
    'border-start-end-radius',
    'border-end-start-radius',
    'border-end-end-radius',

    'border-block-start-radius',
    'border-block-end-radius',
    'border-inline-start-radius',
    'border-inline-end-radius',
  ],
  boxShadows: [
    'box-shadow',
    'box-shadow-blur',
    'box-shadow-color',
    'box-shadow-offset',
    'box-shadow-position',
    'box-shadow-spread',
  ],
};
