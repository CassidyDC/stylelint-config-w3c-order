/**
 * The CSS box model module defines the margin and padding properties, which along with the height, width, and border properties, make up the CSS box model.
 *
 * @module boxModelModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model MDN}
 * @see {@link https://drafts.csswg.org/css-box/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-box/#property-index W3C Working Draft}
 */
export const boxModelModule = {
  margins: [
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'margin-trim',
  ],
  paddings: [
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
  ],
};
