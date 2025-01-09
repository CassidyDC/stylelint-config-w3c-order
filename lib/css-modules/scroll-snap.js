/**
 * The CSS scroll snap module provides properties that let you control the panning and scrolling behavior by defining snap positions. Content can be snapped into position as the user scrolls overflowing content within a scroll container, providing paging and scroll positioning.
 *
 * @module scrollSnapModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap MDN}
 * @see {@link https://drafts.csswg.org/css-scroll-snap/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-scroll-snap/#property-index W3C Working Draft}
 */
export const scrollSnapModule = {
  margins: [
    'scroll-margin',
    'scroll-margin-top',
    'scroll-margin-right',
    'scroll-margin-bottom',
    'scroll-margin-left',

    'scroll-margin-block',
    'scroll-margin-block-start',
    'scroll-margin-block-end',
    'scroll-margin-inline',
    'scroll-margin-inline-start',
    'scroll-margin-inline-end',
  ],
  paddings: [
    'scroll-padding',
    'scroll-padding-top',
    'scroll-padding-right',
    'scroll-padding-bottom',
    'scroll-padding-left',

    'scroll-padding-block',
    'scroll-padding-block-start',
    'scroll-padding-block-end',
    'scroll-padding-inline-end',
    'scroll-padding-inline-start',
    'scroll-padding-inline',
  ],
  snaps: [
    'scroll-snap-align',
    'scroll-snap-stop',
    'scroll-snap-type',
  ],
  targets: [
    'scroll-initial-target', // https://drafts.csswg.org/css-scroll-snap-2/#property-index
  ],
};
