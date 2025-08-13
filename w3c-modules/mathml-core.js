/**
 * The MathML Core module defines a core subset of Mathematical Markup Language, or MathML, that is suitable for browser implementation. MathML is a markup language for describing mathematical notation and capturing both its structure and content. The goal of MathML is to enable mathematics to be served, received, and processed on the World Wide Web, just as HTML has enabled this functionality for text.
 *
 * @module mathmlCoreModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/math-style MDN}
 * @see {@link https://w3c.github.io/mathml-core W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/mathml-core W3C Working Draft}
 */
export const mathmlCoreModule = [
  'math-depth', // https://w3c.github.io/mathml-core/#the-math-script-level-property
  'math-shift', // https://w3c.github.io/mathml-core/#the-math-shift
  'math-style', // https://w3c.github.io/mathml-core/#the-math-style-property
];
