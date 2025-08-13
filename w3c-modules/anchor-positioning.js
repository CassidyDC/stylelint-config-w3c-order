/**
 * The CSS Anchor Positioning module defines features that allow you to tether elements together. Certain elements are defined as anchor elements; anchor-positioned elements can then have their size and position set based on the size and location of the anchor elements to which they are bound.
 *
 * @module anchorPositioningModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning MDN}
 * @see {@link https://drafts.csswg.org/css-anchor-position/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-anchor-position/#property-index W3C Working Draft}
 */
// NOTE: This module has limited browser support.
export const anchorPositioningModule = {
  anchors: [
    'anchor-name',
    'anchor-scope', // not yet implemented in any browsers
  ],
  positions: [
    'position-anchor',
    'position-area',
    'position-try',
    'position-try-fallbacks',
    'position-try-order',
    'position-visibility',
  ],
};
