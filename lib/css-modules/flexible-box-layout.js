/**
 * The CSS flexible box layout module defines a CSS box model optimized for user interface design, and the layout of items in one dimension. In the flex layout model, the children of a flex container can be laid out in any direction, and can "flex" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated.
 *
 * @module flexibleBoxLayoutModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout MDN}
 * @see {@link https://drafts.csswg.org/css-flexbox/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-flexbox/#property-index W3C Working Draft}
 */
export const flexibleBoxLayoutModule = [
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
];

//--- Duplicate Properties ---//
// 'align-content', // duplicated from boxAlignmentModule
// 'align-items', // duplicated from boxAlignmentModule
// 'align-self', // duplicated from boxAlignmentModule
// 'justify-content', // duplicated from boxAlignmentModule
// 'order', // duplicated from displayModule
