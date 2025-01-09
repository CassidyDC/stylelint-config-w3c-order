/**
 * The properties in the CSS filter effects module let you define a way of processing an element's rendering before the element is displayed in the document. Examples of such effects include blurring and changing the intensity of the color of an element.
 *
 * @module filterEffectsModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_filter_effects MDN}
 * @see {@link https://drafts.fxtf.org/filter-effects/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/filter-effects/#property-index W3C Working Draft}
 */
export const filterEffectsModule = {
  filters: [
    'filter',
    'backdrop-filter',
    'color-interpolation-filters',
    'interpolation-filters',
  ],
  floods: [
    'flood-color',
    'flood-opacity',
  ],
  lights: [
    'lighting-color',
  ],
};
