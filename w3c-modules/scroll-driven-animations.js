/**
 * The CSS scroll-driven animations module provides functionality that builds on top of the CSS animations module and Web Animations API. It allows you to animate property values based on a progression along a scroll-based timeline instead of the default time-based document timeline. This means that you can animate an element by scrolling a scrollable element, rather than just by the passing of time.
 *
 * @module scrollDrivenAnimationsModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations MDN}
 * @see {@link https://drafts.csswg.org/scroll-animations/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/scroll-animations/#property-index W3C Working Draft}
 */
export const scrollDrivenAnimationsModule = {
  animations: [
    'animation-range',
    'animation-range-start',
    'animation-range-end',
  ],
  scopes: [
    'timeline-scope',
  ],
  scrolls: [
    'scroll-timeline',
    'scroll-timeline-axis',
    'scroll-timeline-name',
  ],
  views: [
    'view-timeline',
    'view-timeline-axis',
    'view-timeline-inset',
    'view-timeline-name',
  ],
};
