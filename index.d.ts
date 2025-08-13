/**
 * CSS property names as strings
 */
type CSSProperty = string;

/**
 * Array of CSS property names
 */
type CSSPropertyGroup = CSSProperty[];

/**
 * Basic User Interface Module structure
 */
interface BasicUserInterfaceModule {
  caret: CSSPropertyGroup;
  cursor: CSSPropertyGroup;
  events: CSSPropertyGroup;
  nav: CSSPropertyGroup;
  outline: CSSPropertyGroup;
  platform: CSSPropertyGroup;
  security: CSSPropertyGroup;
  sizing: CSSPropertyGroup;
  theme: CSSPropertyGroup;
  user: CSSPropertyGroup;
}

/**
 * Color Adjustment Module structure
 */
interface ColorAdjustmentModule {
  scheme: CSSPropertyGroup;
  adjust: CSSPropertyGroup;
}

/**
 * Speech Module structure
 */
interface SpeechModule {
  cue: CSSPropertyGroup;
  pause: CSSPropertyGroup;
  rest: CSSPropertyGroup;
  speak: CSSPropertyGroup;
  voice: CSSPropertyGroup;
}

/**
 * Writing Modes Module structure
 */
interface WritingModesModule {
  directions: CSSPropertyGroup;
  modes: CSSPropertyGroup;
  text: CSSPropertyGroup;
  unicode: CSSPropertyGroup;
}

/**
 * Compositing and Blending Module structure
 */
interface CompositingAndBlendingModule {
  isolation: CSSPropertyGroup;
  blends: CSSPropertyGroup;
}

/**
 * Anchor Positioning Module structure
 */
interface AnchorPositioningModule {
  anchors: CSSPropertyGroup;
  positions: CSSPropertyGroup;
}

/**
 * Box Alignment Module structure
 */
interface BoxAlignmentModule {
  align: CSSPropertyGroup;
  justify: CSSPropertyGroup;
  place: CSSPropertyGroup;
  gap: CSSPropertyGroup;
}

/**
 * Fragmentation Module structure
 */
interface FragmentationModule {
  fragments: CSSPropertyGroup;
  breaks: CSSPropertyGroup;
}

/**
 * Table Module structure
 */
interface TableModule {
  layouts: CSSPropertyGroup;
  borders: CSSPropertyGroup;
  captions: CSSPropertyGroup;
  cells: CSSPropertyGroup;
}

/**
 * Transforms Module structure
 */
interface TransformsModule {
  visibility: CSSPropertyGroup;
  perspective: CSSPropertyGroup;
  matrix: CSSPropertyGroup;
}

/**
 * Overflow Module structure
 */
interface OverflowModule {
  overflow: CSSPropertyGroup;
  line: CSSPropertyGroup;
  scroll: CSSPropertyGroup;
  scrollbar: CSSPropertyGroup;
  text: CSSPropertyGroup;
}

/**
 * Backgrounds and Borders Module structure
 */
interface BackgroundsAndBordersModule {
  backgrounds: CSSPropertyGroup;
  borders: CSSPropertyGroup;
  boxShadows: CSSPropertyGroup;
}

/**
 * Logical Properties Module structure
 */
interface LogicalPropertiesModule {
  borders: CSSPropertyGroup;
  blocks: CSSPropertyGroup;
  inlines: CSSPropertyGroup;
  margins: CSSPropertyGroup;
  paddings: CSSPropertyGroup;
}

/**
 * Color Module structure
 */
interface ColorModule {
  color: CSSPropertyGroup;
  opacity: CSSPropertyGroup;
}

/**
 * Filter Effects Module structure
 */
interface FilterEffectsModule {
  filters: CSSPropertyGroup;
  floods: CSSPropertyGroup;
  lights: CSSPropertyGroup;
}

/**
 * Images Module structure
 */
interface ImagesModule {
  images: CSSPropertyGroup;
  objects: CSSPropertyGroup;
}

/**
 * Lists and Counters Module structure
 */
interface ListsAndCountersModule {
  lists: CSSPropertyGroup;
  counters: CSSPropertyGroup;
}

/**
 * Masking Module structure
 */
interface MaskingModule {
  masks: CSSPropertyGroup;
  clips: CSSPropertyGroup;
}

/**
 * Scroll Snap Module structure
 */
interface ScrollSnapModule {
  targets: CSSPropertyGroup;
  margins: CSSPropertyGroup;
  paddings: CSSPropertyGroup;
  snaps: CSSPropertyGroup;
}

/**
 * Box Sizing Module structure
 */
interface BoxSizingModule {
  intrinsic: CSSPropertyGroup;
  sizing: CSSPropertyGroup;
  height: CSSPropertyGroup;
  width: CSSPropertyGroup;
}

/**
 * Box Model Module structure
 */
interface BoxModelModule {
  margins: CSSPropertyGroup;
  paddings: CSSPropertyGroup;
}

/**
 * Fonts Module structure
 */
interface FontsModule {
  fonts: CSSPropertyGroup;
  overrides: CSSPropertyGroup;
  fontFaces: CSSPropertyGroup;
}

/**
 * Inline Layout Module structure
 */
interface InlineLayoutModule {
  baselines: CSSPropertyGroup;
  initialLetter: CSSPropertyGroup;
  lineHeight: CSSPropertyGroup;
  verticalAlign: CSSPropertyGroup;
}

/**
 * Text Decoration Module structure
 */
interface TextDecorationModule {
  decoration: CSSPropertyGroup;
  emphasis: CSSPropertyGroup;
  shadow: CSSPropertyGroup;
  underline: CSSPropertyGroup;
}

/**
 * Text Module structure
 */
interface TextModule {
  punctuations: CSSPropertyGroup;
  letters: CSSPropertyGroup;
  lines: CSSPropertyGroup;
  tabs: CSSPropertyGroup;
  text: CSSPropertyGroup;
  whitespaces: CSSPropertyGroup;
  words: CSSPropertyGroup;
  wraps: CSSPropertyGroup;
}

/**
 * SVG Module structure
 */
interface SVGModule {
  text: CSSPropertyGroup;
  position: CSSPropertyGroup;
  fill: CSSPropertyGroup;
  color: CSSPropertyGroup;
  render: CSSPropertyGroup;
  marker: CSSPropertyGroup;
  stroke: CSSPropertyGroup;
}

/**
 * Scroll Driven Animations Module structure
 */
interface ScrollDrivenAnimationsModule {
  animations: CSSPropertyGroup;
  scrolls: CSSPropertyGroup;
  scopes: CSSPropertyGroup;
  views: CSSPropertyGroup;
}

/**
 * CSS Modules export interface
 */
export interface CSSModules {
  cascadeModule: CSSPropertyGroup;
  compatibilityNonModule: CSSPropertyGroup;
  basicUserInterfaceModule: BasicUserInterfaceModule;
  colorAdjustmentModule: ColorAdjustmentModule;
  overscrollBehaviorModule: CSSPropertyGroup;
  speechModule: SpeechModule;
  viewportModule: CSSPropertyGroup;
  conditionalRulesModule: CSSPropertyGroup;
  generatedContentModule: CSSPropertyGroup;
  containmentModule: CSSPropertyGroup;
  boxSizingModule: BoxSizingModule;
  writingModesModule: WritingModesModule;
  compositingAndBlendingModule: CompositingAndBlendingModule;
  anchorPositioningModule: AnchorPositioningModule;
  positionedLayoutModule: CSSPropertyGroup;
  pageFloatsModule: CSSPropertyGroup;
  displayModule: CSSPropertyGroup;
  flexibleBoxLayoutModule: CSSPropertyGroup;
  gridLayoutModule: CSSPropertyGroup;
  boxAlignmentModule: BoxAlignmentModule;
  multiColumnLayoutModule: CSSPropertyGroup;
  fragmentationModule: FragmentationModule;
  tableModule: TableModule;
  transformsModule: TransformsModule;
  scrollAnchoringModule: CSSPropertyGroup;
  overflowModule: OverflowModule;
  backgroundsAndBordersModule: BackgroundsAndBordersModule;
  logicalPropertiesModule: LogicalPropertiesModule;
  colorModule: ColorModule;
  filterEffectsModule: FilterEffectsModule;
  imagesModule: ImagesModule;
  listsAndCountersModule: ListsAndCountersModule;
  maskingModule: MaskingModule;
  shapesModule: CSSPropertyGroup;
  scrollSnapModule: ScrollSnapModule;
  scrollbarsStylingModule: CSSPropertyGroup;
  boxModelModule: BoxModelModule;
  fontsModule: FontsModule;
  inlineLayoutModule: InlineLayoutModule;
  mathmlCoreModule: CSSPropertyGroup;
  rubyLayoutModule: CSSPropertyGroup;
  mobileTextSizeAdjustmentModule: CSSPropertyGroup;
  textDecorationModule: TextDecorationModule;
  textModule: TextModule;
  svgModule: SVGModule;
  animationsModule: CSSPropertyGroup;
  scrollDrivenAnimationsModule: ScrollDrivenAnimationsModule;
  motionPathModule: CSSPropertyGroup;
  transitionsModule: CSSPropertyGroup;
  viewTransitionModule: CSSPropertyGroup;
  willChangeModule: CSSPropertyGroup;
}

/**
 * Stylelint configuration structure
 */
export interface StylelintConfig {
  plugins: string[];
  rules: {
    'order/properties-order': Array<{
      groupName: string;
      properties: CSSPropertyGroup;
    }>[];
  };
}

/**
 * Default export: Stylelint configuration for W3C CSS property ordering
 */
declare const config: StylelintConfig;
export default config;
