/**
 * The CSS compositing and blending module defines how an element's background layers can be blended together, how an element can be blended with its container, and whether the element must create a new stacking context.
 *
 * @module compositingAndBlendingModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_compositing_and_blending MDN}
 * @see {@link https://drafts.fxtf.org/compositing/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/compositing/#property-index W3C Working Draft}
 */
export const compositingAndBlendingModule = {
  blends: [
    'background-blend-mode',
    'mix-blend-mode',
  ],
  isolation: [
    'isolation',
  ],
};
