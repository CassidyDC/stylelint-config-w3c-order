/**
 * The CSS positioned layout module defines how to position elements on a web page.
 *
 * @module positionedLayoutModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout MDN}
 * @see {@link https://drafts.csswg.org/css-position/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-position/#property-index W3C Working Draft}
 */
export const positionedLayoutModule = [
  'position',
  'overlay', // https://drafts.csswg.org/css-position-4/#property-index
  'z-index', // https://drafts.csswg.org/css2/#z-index

  'top',
  'right',
  'bottom',
  'left',

  'inset',
  'inset-block',
  'inset-block-start',
  'inset-block-end',
  'inset-inline',
  'inset-inline-start',
  'inset-inline-end',
];
