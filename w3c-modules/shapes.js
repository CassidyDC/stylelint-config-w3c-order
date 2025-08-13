/**
 * The CSS Shapes module describe geometric shapes for use in CSS. For Level 1, CSS Shapes can be applied to floats. A circle shape on a float will cause inline content to wrap around the circle shape instead of the float’s bounding box.
 *
 * @module shapesModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_shapes MDN}
 * @see {@link https://drafts.csswg.org/css-shapes/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-shapes/#property-index W3C Working Draft}
 */
export const shapesModule = [
  'shape-image-threshold',

  'shape-margin',
  'shape-padding', // https://drafts.csswg.org/css-shapes-2/#property-index

  'shape-inside', // https://drafts.csswg.org/css-shapes-2/#property-index
  'shape-outside',
];
