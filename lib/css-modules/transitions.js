/**
 * The CSS transitions module lets you create gradual transitions between the values of specific CSS properties. The behavior of these transitions can be controlled by specifying their easing function, duration, and other attributes.
 *
 * @module transitionsModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions MDN}
 * @see {@link https://drafts.csswg.org/css-transitions/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-transitions/#property-index W3C Working Draft}
 */
export const transitionsModule = [
  'transition',
  'transition-behavior', // https://drafts.csswg.org/css-transitions-2/#property-index
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
];
