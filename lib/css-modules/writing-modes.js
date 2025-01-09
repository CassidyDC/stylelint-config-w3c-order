/**
 * The CSS writing modes module defines various international writing modes, such as left-to-right (e.g., used by Latin and Indic scripts), right-to-left (e.g., used by Hebrew or Arabic scripts), bidirectional (used when mixing left-to-right and right-to-left scripts), and vertical (e.g., used by some Asian scripts).
 *
 * @module writingModesModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_writing_modes MDN}
 * @see {@link https://drafts.csswg.org/css-writing-modes/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-writing-modes/#property-index W3C Working Draft}
 */
export const writingModesModule = {
  directions: [
    'direction',
  ],
  modes: [
    'writing-mode',
  ],
  text: [
    'text-combine-upright',
    'text-orientation',
  ],
  unicode: [
    'unicode-bidi',
  ],
};

//--- Deprecated Properties ---//
// 'glyph-orientation-vertical' (see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/glyph-orientation-vertical)
