/**
 * The SVG module defines the features and syntax for Scalable Vector Graphics (SVG) Version 2. SVG is a language based on XML for describing two-dimensional vector and mixed vector/raster graphics. SVG content is stylable, scalable to different display resolutions, and can be viewed stand-alone, mixed with HTML content, or embedded using XML namespaces within other XML languages. SVG also supports dynamic changes; script can be used to create interactive documents, and animations can be performed using declarative animation features or by using script.
 *
 * @module svgModule
 *
 * @see {@link http://svgwg.org/svg2-draft/propidx.html W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/SVG2/propidx.html W3C Working Draft}
 */
export const svgModule = {
  color: [
    'stop-color',
    'stop-opacity',
    'color-interpolation',
  ],
  fill: [
    'fill',
    'fill-opacity',
    'fill-rule',
  ],
  marker: [
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
  ],
  position: [
    'cx',
    'cy',
    'd',
    'r',
    'rx',
    'ry',
    'x',
    'y',
  ],
  render: [
    'color-rendering',
    'shape-rendering',
    'text-rendering',
    'paint-order',
    'vector-effect',
  ],
  stroke: [
    'stroke',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
  ],
  text: [
    'text-anchor',
  ],
};

//--- Deprecated Properties ---//
// 'glyph-orientation-horizontal' (see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/glyph-orientation-horizontal)
// 'glyph-orientation-vertical' (see: https://svgwg.org/svg2-draft/text.html#GlyphOrientationVerticalProperty)

//--- Duplicate Properties ---//
// 'pointer-events' (see: basic-user-interface.js)
// 'image-rendering' (see: images.js)
