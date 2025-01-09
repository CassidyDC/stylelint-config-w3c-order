/**
 * The CSS Table module defines a two-dimensional grid-based layout system, optimized for tabular data rendering. In the table layout model, each display node is assigned to an intersection between a set of consecutive rows and a set of consecutive columns, themselves generated from the table structure and sized according to their content.
 * @module tableModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_table MDN}
 * @see {@link https://drafts.csswg.org/css-tables/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-tables/#property-index W3C Working Draft}
 */
export const tableModule = {
  borders: [
    'border-collapse',
    'border-spacing',
  ],
  captions: [
    'caption-side',
  ],
  cells: [
    'empty-cells',
  ],
  layouts: [
    'table-layout',
  ],
};
