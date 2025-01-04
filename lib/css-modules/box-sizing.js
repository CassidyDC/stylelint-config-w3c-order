// MDN ref: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_sizing
// W3C editor: https://drafts.csswg.org/css-sizing/#property-index
// W3C working: https://www.w3.org/TR/css-sizing/#property-index
export const boxSizingModule = {
  height: [
    'height',
    'min-height',
    'max-height',
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
    'min-width',
    'max-width',
  ],
};
