/**
 * The CSS overflow module properties enable you to handle scrollable overflow in visual media.
 *
 * @module overflowModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow MDN}
 * @see {@link https://drafts.csswg.org/css-overflow/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-overflow/#property-index W3C Working Draft}
 */
export const overflowModule = {
  line: [
    '-webkit-line-clamp', // https://drafts.csswg.org/css-overflow-4/#property-index
    'line-clamp', // https://drafts.csswg.org/css-overflow-4/#property-index
  ],
  overflow: [
    'overflow',
    'overflow-x',
    'overflow-y',
    'overflow-block',
    'overflow-inline',
    'overflow-clip-margin',
  ],
  scroll: [
    'scroll-behavior',
  ],
  scrollbar: [
    'scrollbar-gutter',
  ],
  text: [
    'text-overflow',
  ],
};

//--- Not Yet Implemented in Browsers ---//
// 'block-ellipsis', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'continue', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'max-lines', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-top', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-right', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-bottom', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-left', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-block', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-block-start', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-block-end', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-inline', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-inline-start', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'overflow-clip-margin-inline-end', // https://drafts.csswg.org/css-overflow-4/#property-index
// 'scroll-marker-group', // https://www.w3.org/TR/2024/WD-css-overflow-5-20241217/#propdef-scroll-marker-group
