/**
 * The CSS box sizing module enables developers to specify how elements fit their content or fit into a particular layout context. It defines sizing, minimum sizing, and maximum sizing properties, and also extends the CSS sizing properties with keywords that represent content-based intrinsic size and context-based extrinsic size.
 *
 * @module boxSizingModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_sizing MDN}
 * @see {@link https://drafts.csswg.org/css-sizing/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-sizing/#property-index W3C Working Draft}
 */
export const boxSizingModule = {
  height: [
    'height',
    'max-height',
    'min-height',
  ],
  intrinsic: [
    'contain-intrinsic-size', // https://drafts.csswg.org/css-sizing-4/#property-index

    'contain-intrinsic-height', // https://drafts.csswg.org/css-sizing-4/#property-index
    'contain-intrinsic-width', // https://drafts.csswg.org/css-sizing-4/#property-index

    'contain-intrinsic-block-size', // https://drafts.csswg.org/css-sizing-4/#property-index
    'contain-intrinsic-inline-size', // https://drafts.csswg.org/css-sizing-4/#property-index

    'min-intrinsic-sizing', // https://drafts.csswg.org/css-sizing-4/#property-index
  ],
  sizing: [
    'box-sizing',
    'aspect-ratio', // https://drafts.csswg.org/css-sizing-4/#property-index
  ],
  width: [
    'width',
    'max-width',
    'min-width',
  ],
};
