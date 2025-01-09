/**
 * The CSS inline layout module defines the block-axis alignment and sizing of inline-level content and adds a special layout mode for drop-caps. It describes the CSS formatting model for a flow of elements and text inside a container to be wrapped across multiple lines.
 *
 * @module inlineLayoutModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_inline_layout MDN}
 * @see {@link https://drafts.csswg.org/css-inline/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-inline/#property-index W3C Working Draft}
 */
export const inlineLayoutModule = {
  baselines: [
    'alignment-baseline', // SVG property
    'baseline-source', // limited browser support
    'dominant-baseline', // CSS and SVG property
  ],
  initialLetter: [
    'initial-letter', // limited browser support
  ],
  lineHeight: [
    'line-height',
  ],
  verticalAlign: [
    'vertical-align',
  ],
};

//--- NOT YET IMPLEMENTED ---//
// 'initial-letter-align',
// 'initial-letter-wrap',
// 'inline-sizing',
// 'line-fit-edge',
// 'text-box',
// 'text-box-edge',
// 'text-box-trim',

//--- Deprecated Properties ---//
// 'baseline-shift', // Legacy - This property is going to be deprecated and authors are advised to use vertical-align instead. Ref: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift
