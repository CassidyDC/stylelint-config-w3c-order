/**
 * The CSS text decoration module defines features relating to text decoration, such as underlines, text shadows, and emphasis marks.
 *
 * @module textDecorationModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text_decoration MDN}
 * @see {@link https://drafts.csswg.org/css-text-decor/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-text-decor/#property-index W3C Working Draft}
 */
export const textDecorationModule = {
  decoration: [
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-skip', // https://drafts.csswg.org/css-text-decor-4/#property-index
    'text-decoration-skip-box', // https://drafts.csswg.org/css-text-decor-4/#property-index
    'text-decoration-skip-ink',
    'text-decoration-skip-self', // https://drafts.csswg.org/css-text-decor-4/#property-index
    'text-decoration-skip-spaces', // https://drafts.csswg.org/css-text-decor-4/#property-index
    'text-decoration-style',
    'text-decoration-thickness',
    'text-decoration-trim', // https://drafts.csswg.org/css-text-decor-4/#property-index
  ],
  emphasis: [
    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-position',
    'text-emphasis-skip', // https://drafts.csswg.org/css-text-decor-4/#property-index
    'text-emphasis-style',
  ],
  shadow: [
    'text-shadow',
  ],
  underline: [
    'text-underline-offset',
    'text-underline-position',
  ],
};
