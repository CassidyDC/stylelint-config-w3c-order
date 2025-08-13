/**
 * The Speech module defines aural CSS properties that enable authors to declaratively control the rendering of documents via speech synthesis, and using optional audio cues. Note that this standard was developed in cooperation with the Voice Browser Activity.
 *
 * @module speechModule
 *
 * @see {@link https://drafts.csswg.org/css-speech/#property-index W3C Editor's Draft}
 * @see {@link https://www.w3.org/TR/css-speech/#property-index W3C Working Draft}
 */
export const speechModule = {
  cue: [
    'cue',
    'cue-after',
    'cue-before',
  ],
  pause: [
    'pause',
    'pause-after',
    'pause-before',
  ],
  rest: [
    'rest',
    'rest-after',
    'rest-before',
  ],
  speak: [
    'speak',
    'speak-as', // in counter styles module too
  ],
  voice: [
    'voice-balance',
    'voice-duration',
    'voice-family',
    'voice-pitch',
    'voice-range',
    'voice-rate',
    'voice-stress',
    'voice-volume',
  ],
};
