/**
 * The CSS color adjustment module provides a model and controls over automatic color adjustment by the user agent to handle user preferences, such as "Dark Mode", contrast adjustment, or specific desired color schemes.
 *
 * Together with the @media features prefers-color-scheme, prefers-contrast and forced-colors, this module defines how and when colors are automatically adjusted by the browser.
 *
 * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_color_adjustment
 *
 * W3C Editor: https://drafts.csswg.org/css-color-adjust/#property-index
 *
 * W3C Working: https://www.w3.org/TR/css-color-adjust/#property-index
 */
export const colorAdjustmentModule = {
	adjust: [
		// 'color-adjust', // https://drafts.csswg.org/css-color-adjust/#property-index (deprecated)
		'forced-color-adjust',
		'print-color-adjust',
	],
	scheme: [
		'color-scheme',
	],
};
