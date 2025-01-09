/**
 * The CSS fragmentation module defines how content is displayed when it is broken (fragmented) across multiple pages, regions, or columns.
 *
 * Fragmentation occurs when an inline box wraps onto multiple lines. It also occurs when a block spans more than one column inside a column layout container, or spans a page break when printed. Each piece of the rendering for the element is called a fragment.
 *
 * @module fragmentationModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fragmentation MDN}
 * @see {@link https://drafts.csswg.org/css-break/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-break/#property-index W3C Working Draft}
 */
export const fragmentationModule = {
  breaks: [
    'box-decoration-break', // limited browser support
    'break-before',
    'break-after',
    'break-inside',
    'margin-break', // https://drafts.csswg.org/css-break-4/#property-index
  ],
  fragments: [
    'orphans',
    'widows',
  ],
};
