/**
 * The CSS text module defines how to perform text manipulation, like line breaking, justification and alignment, white space handling, and text transformation.
 *
 * @module textModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_text MDN}
 * @see {@link https://drafts.csswg.org/css-text/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-text/#property-index W3C Working Draft}
 */
export const textModule = {
  letters: [
    'letter-spacing',
  ],
  lines: [
    'line-break',
    'line-padding',
  ],
  punctuations: [
    'hanging-punctuation',
    'hyphens',
    'hyphenate-character',
    'hyphenate-limit-chars',
    'hyphenate-limit-last',
    'hyphenate-limit-lines',
    'hyphenate-limit-zone',
  ],
  tabs: [
    'tab-size',
  ],
  text: [
    'text-align',
    'text-align-all',
    'text-align-last',
    'text-autospace',
    'text-group-align',
    'text-indent',
    'text-justify',
    'text-spacing',
    'text-spacing-trim',
    'text-transform',
    'text-wrap',
    'text-wrap-mode',
    'text-wrap-style',
  ],
  whitespaces: [
    'white-space',
    'white-space-collapse',
    'white-space-trim',
  ],
  words: [
    'word-break',
    'word-space-transform',
    'word-spacing',
    'word-wrap',
  ],
  wraps: [
    'overflow-wrap',
    'wrap-after',
    'wrap-before',
    'wrap-inside',
  ],
};
