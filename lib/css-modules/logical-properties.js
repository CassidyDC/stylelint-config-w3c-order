/**
 * The CSS logical properties and values module defines logical properties and values that can control layout through logical rather than physical direction and dimension mappings. Logical properties define direction‐relative equivalents to their corresponding physical properties.
 *
 * @module logicalPropertiesModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values MDN}
 * @see {@link https://drafts.csswg.org/css-logical/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-logical/#property-index W3C Working Draft}
 */
export const logicalPropertiesModule = {
  blocks: [
    'block-size',
    'max-block-size',
    'min-block-size',
  ],
  inlines: [
    'inline-size',
    'max-inline-size',
    'min-inline-size',
  ],
  margins: [
    'margin-block',
    'margin-block-start',
    'margin-block-end',
    'margin-inline',
    'margin-inline-start',
    'margin-inline-end',
  ],
  paddings: [
    'padding-block',
    'padding-block-start',
    'padding-block-end',
    'padding-inline',
    'padding-inline-start',
    'padding-inline-end',
  ],
};

//--- Duplicate properties from other modules ---//
// borders: [ // duplicated from bordersModule
// 	'border-block',
// 	'border-block-color',
// 	'border-block-end',
// 	'border-block-end-color',
// 	'border-block-end-style',
// 	'border-block-end-width',
// 	'border-block-start',
// 	'border-block-start-color',
// 	'border-block-start-style',
// 	'border-block-start-width',
// 	'border-block-style',
// 	'border-block-width',
// 	'border-end-end-radius',
// 	'border-end-start-radius',
// 	'border-inline',
// 	'border-inline-color',
// 	'border-inline-end',
// 	'border-inline-end-color',
// 	'border-inline-end-style',
// 	'border-inline-end-width',
// 	'border-inline-start',
// 	'border-inline-start-color',
// 	'border-inline-start-style',
// 	'border-inline-start-width',
// 	'border-inline-style',
// 	'border-inline-width',
// 	'border-start-end-radius',
// 	'border-start-start-radius',
// ],
// insets: [
// 	'inset', // duplicated from positionedLayoutModule
// 	'inset-block', // duplicated from positionedLayoutModule
// 	'inset-block-end', // duplicated from positionedLayoutModule
// 	'inset-block-start', // duplicated from positionedLayoutModule
// 	'inset-inline', // duplicated from positionedLayoutModule
// 	'inset-inline-end', // duplicated from positionedLayoutModule
// 	'inset-inline-start', // duplicated from positionedLayoutModule
// ],
