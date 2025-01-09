/**
 * The CSS box alignment module specifies CSS features that relate to the alignment of boxes in the various CSS box layout models: block layout, table layout, flex layout, and grid layout. The module aims to create a consistent method of alignment across all of CSS.
 *
 * @module boxAlignmentModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment MDN}
 * @see {@link https://drafts.csswg.org/css-align/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-align/#property-index W3C Working Draft}
 */
export const boxAlignmentModule = {
  align: [
    'align-content',
    'align-items',
    'align-self',
  ],
  gap: [
    'gap',
    'row-gap',
    'column-gap',
  ],
  justify: [
    'justify-content',
    'justify-items',
    'justify-self',
  ],
  place: [
    'place-content',
    'place-items',
    'place-self',
  ],
};
