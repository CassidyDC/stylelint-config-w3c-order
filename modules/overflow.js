// MDN ref: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_overflow
// W3C editor: https://drafts.csswg.org/css-overflow/#property-index
// W3C working: https://www.w3.org/TR/css-overflow/#property-index
export const overflowModule = {
	line: [
		'block-ellipsis', // https://drafts.csswg.org/css-overflow-4/#property-index
		'continue', // https://drafts.csswg.org/css-overflow-4/#property-index
		'-webkit-line-clamp', // https://drafts.csswg.org/css-overflow-4/#property-index
		'line-clamp', // https://drafts.csswg.org/css-overflow-4/#property-index
		'max-lines', // https://drafts.csswg.org/css-overflow-4/#property-index
	],
	overflow: [
		'overflow',
		'overflow-x',
		'overflow-y',
		'overflow-block',
		'overflow-inline',

		'overflow-clip-margin',

		'overflow-clip-margin-top', // https://drafts.csswg.org/css-overflow-4/#property-index
		'overflow-clip-margin-right', // https://drafts.csswg.org/css-overflow-4/#property-index
		'overflow-clip-margin-bottom', // https://drafts.csswg.org/css-overflow-4/#property-index
		'overflow-clip-margin-left', // https://drafts.csswg.org/css-overflow-4/#property-index

		'overflow-clip-margin-block', // https://drafts.csswg.org/css-overflow-4/#property-index
		'overflow-clip-margin-block-start', // https://drafts.csswg.org/css-overflow-4/#property-index
		'overflow-clip-margin-block-end', // https://drafts.csswg.org/css-overflow-4/#property-index

		'overflow-clip-margin-inline', // https://drafts.csswg.org/css-overflow-4/#property-index
		'overflow-clip-margin-inline-start', // https://drafts.csswg.org/css-overflow-4/#property-index
		'overflow-clip-margin-inline-end', // https://drafts.csswg.org/css-overflow-4/#property-index
	],
	scroll: [
		'scroll-behavior',
	],
	scrollbar: [
		'scrollbar-gutter',
	],
	text: [
		'text-overflow',
	],
};
