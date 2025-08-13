/**
 * The CSS images module defines the types of images that can be used (the <image> type, containing URLs, gradients and other types of images), how to resize them and how they, and other replaced content, interact with the different layout models.
 *
 * @module imagesModule
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images MDN}
 * @see {@link https://drafts.csswg.org/css-images/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-images/#property-index W3C Working Draft}
 */
export const imagesModule = {
  images: [
    'image-orientation',
    'image-rendering',
    'image-resolution', // experimental property https://www.w3.org/TR/css-images-4/#property-index
  ],
  objects: [
    'object-fit',
    'object-position',
    'object-view-box', // limited browser support https://drafts.csswg.org/css-images-5/#property-index
  ],
};
