/**
 * Changes in DOM elements above the visible region of a scrolling box can result in the page moving while the user is in the middle of consuming the content.
 *
 * The Scroll Anchoring module proposes a mechanism to mitigate this jarring user experience by keeping track of the position of an anchor node and adjusting the scroll offset accordingly.
 *
 * This spec also proposes an API for web developers to opt-out of this behavior.
 *
 * @module scrollAnchoringModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor MDN}
 * @see {@link https://drafts.csswg.org/css-scroll-anchoring/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-scroll-anchoring/#property-index W3C Working Draft}
 */
export const scrollAnchoringModule = [
  'overflow-anchor',
];
