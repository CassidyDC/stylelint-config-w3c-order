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
    'border-radius',
    'border-style',
    'border-width',

    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',

    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',

    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',

    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',

    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',
  ],
  boxShadows: [
    'box-shadow',
  ],
};

//--- NOT YET IMPLEMENTED ---//
// 'border-limit', // https://drafts.csswg.org/css-borders/#property-index
// 'border-clip', // https://drafts.csswg.org/css-borders/#property-index
// 'border-clip-top', // https://drafts.csswg.org/css-borders/#property-index
// 'border-clip-right', // https://drafts.csswg.org/css-borders/#property-index
// 'border-clip-bottom', // https://drafts.csswg.org/css-borders/#property-index
// 'border-clip-left', // https://drafts.csswg.org/css-borders/#property-index
// 'corners', // https://drafts.csswg.org/css-borders/#property-index
// 'corner-shape', // https://drafts.csswg.org/css-borders/#property-index
// 'box-shadow-blur', // https://drafts.csswg.org/css-borders/#property-index
// 'box-shadow-color', // https://drafts.csswg.org/css-borders/#property-index
// 'box-shadow-offset', // https://drafts.csswg.org/css-borders/#property-index
// 'box-shadow-position', // https://drafts.csswg.org/css-borders/#property-index
// 'box-shadow-spread', // https://drafts.csswg.org/css-borders/#property-index
