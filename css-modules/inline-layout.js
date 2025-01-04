/**
 * The CSS formatting model provides for a flow of elements and text inside of a container to be wrapped into lines. This module describes box model for this inline layout model and defines the block-axis alignment and sizing of inline-level content, extending the model in [CSS2]. It also adds a special layout mode for drop-caps.
 *
 * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_inline_layout
 *
 * W3C Editor: https://drafts.csswg.org/css-inline/#property-index
 *
 * W3C Working: https://www.w3.org/TR/css-inline/#property-index
 */
export const inlineLayoutModule = {
  aligns: [
    'vertical-align',
  ],
  baselines: [
    'alignment-baseline',
    'baseline-shift',
    'baseline-source',
    'dominant-baseline',
  ],
  inlines: [
    'inline-sizing',
  ],
  letters: [
    'initial-letter',
    'initial-letter-align',
    'initial-letter-wrap',
  ],
  lines: [
    'line-fit-edge',
    'line-height',
  ],
  text: [
    'text-box',
    'text-box-edge',
    'text-box-trim',
  ],
};
