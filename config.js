import * as cssModules from './lib/css-modules/index.js';

const propertiesOrder = {
  //--- ALL ---//
  cascadeModule: cssModules.cascadeModule,

  //--- COMPATIBILITY STANDARD ---//
  compatibilityNonModule: cssModules.compatibilityNonModule,

  //--- BASIC USER INTERFACE ---//
  basicUserInterfaceModule_Events: cssModules.basicUserInterfaceModule.events,
  basicUserInterfaceModule_Theme: cssModules.basicUserInterfaceModule.theme,
  basicUserInterfaceModule_Platform: cssModules.basicUserInterfaceModule.platform,
  basicUserInterfaceModule_Caret: cssModules.basicUserInterfaceModule.caret,
  basicUserInterfaceModule_Cursor: cssModules.basicUserInterfaceModule.cursor,
  basicUserInterfaceModule_Sizing: cssModules.basicUserInterfaceModule.sizing,
  basicUserInterfaceModule_Security: cssModules.basicUserInterfaceModule.security,
  basicUserInterfaceModule_Nav: cssModules.basicUserInterfaceModule.nav,
  basicUserInterfaceModule_Outline: cssModules.basicUserInterfaceModule.outline,
  basicUserInterfaceModule_User: cssModules.basicUserInterfaceModule.user,

  colorAdjustmentModule_Scheme: cssModules.colorAdjustmentModule.scheme,
  colorAdjustmentModule_Adjust: cssModules.colorAdjustmentModule.adjust,

  overscrollBehaviorModule: cssModules.overscrollBehaviorModule,

  speechModule_Cue: cssModules.speechModule.cue,
  speechModule_Pause: cssModules.speechModule.pause,
  speechModule_Rest: cssModules.speechModule.rest,
  speechModule_Speak: cssModules.speechModule.speak,
  speechModule_Voice: cssModules.speechModule.voice,

  viewportModule: cssModules.viewportModule,

  //--- CONTEXT ---//
  conditionalRulesModule: cssModules.conditionalRulesModule,

  //--- GENERATED CONTENT ---//
  generatedContentModule: cssModules.generatedContentModule,

  //--- CONTENT---//
  containmentModule: cssModules.containmentModule,
  boxSizingModule_Intrinsic: cssModules.boxSizingModule.intrinsic,

  //--- POSITION ---//
  writingModesModule_Directions: cssModules.writingModesModule.directions,
  writingModesModule_Modes: cssModules.writingModesModule.modes,
  writingModesModule_Text: cssModules.writingModesModule.text,
  writingModesModule_Unicode: cssModules.writingModesModule.unicode,

  compositingAndBlendingModule_Isolation: cssModules.compositingAndBlendingModule.isolation,

  anchorPositioningModule_Anchors: cssModules.anchorPositioningModule.anchors,
  anchorPositioningModule_Positions: cssModules.anchorPositioningModule.positions,

  positionedLayoutModule: cssModules.positionedLayoutModule,

  pageFloatsModule: cssModules.pageFloatsModule,

  //--- LAYOUT ---//
  displayModule: cssModules.displayModule,
  flexibleBoxLayoutModule: cssModules.flexibleBoxLayoutModule,
  gridLayoutModule: cssModules.gridLayoutModule,

  boxAlignmentModule_Align: cssModules.boxAlignmentModule.align,
  boxAlignmentModule_Justify: cssModules.boxAlignmentModule.justify,
  boxAlignmentModule_Place: cssModules.boxAlignmentModule.place,
  boxAlignmentModule_Gap: cssModules.boxAlignmentModule.gap,

  multiColumnLayoutModule: cssModules.multiColumnLayoutModule,

  fragmentationModule_Fragments: cssModules.fragmentationModule.fragments,
  fragmentationModule_Breaks: cssModules.fragmentationModule.breaks,

  tableModule_Layouts: cssModules.tableModule.layouts,
  tableModule_Borders: cssModules.tableModule.borders,
  tableModule_Captions: cssModules.tableModule.captions,
  tableModule_Cells: cssModules.tableModule.cells,

  transformsModule_Visibility: cssModules.transformsModule.visibility,
  transformsModule_Perspective: cssModules.transformsModule.perspective,
  transformsModule_Matrix: cssModules.transformsModule.matrix,

  scrollAnchoringModule: cssModules.scrollAnchoringModule,

  overflowModule_Overflow: cssModules.overflowModule.overflow,
  overflowModule_Line: cssModules.overflowModule.line,
  overflowModule_Scroll: cssModules.overflowModule.scroll,
  overflowModule_Scrollbar: cssModules.overflowModule.scrollbar,
  overflowModule_Text: cssModules.overflowModule.text,

  //--- APPEARANCE ---//
  compositingAndBlendingModule_Blends: cssModules.compositingAndBlendingModule.blends,

  backgroundsAndBordersModule_Backgrounds: cssModules.backgroundsAndBordersModule.backgrounds,
  backgroundsAndBordersModule_Borders: cssModules.backgroundsAndBordersModule.borders,
  logicalPropertiesModule_Borders: cssModules.logicalPropertiesModule.borders,
  backgroundsAndBordersModule_BoxShadows: cssModules.backgroundsAndBordersModule.boxShadows,

  colorModule_Color: cssModules.colorModule.color,
  colorModule_Opacity: cssModules.colorModule.opacity,

  filterEffectsModule_Filters: cssModules.filterEffectsModule.filters,
  filterEffectsModule_Floods: cssModules.filterEffectsModule.floods,
  filterEffectsModule_Lights: cssModules.filterEffectsModule.lights,

  imagesModule_Images: cssModules.imagesModule.images,
  imagesModule_Objects: cssModules.imagesModule.objects,

  listsAndCountersModule_Lists: cssModules.listsAndCountersModule.lists,
  listsAndCountersModule_Counters: cssModules.listsAndCountersModule.counters,

  maskingModule_Masks: cssModules.maskingModule.masks,
  maskingModule_Clips: cssModules.maskingModule.clips,

  shapesModule: cssModules.shapesModule,

  scrollSnapModule_Targets: cssModules.scrollSnapModule.targets,
  scrollSnapModule_Margins: cssModules.scrollSnapModule.margins,
  scrollSnapModule_Paddings: cssModules.scrollSnapModule.paddings,
  scrollSnapModule_Snaps: cssModules.scrollSnapModule.snaps,

  scrollbarsStylingModule: cssModules.scrollbarsStylingModule,

  //--- BOX MODEL ---//
  boxSizingModule_Sizing: cssModules.boxSizingModule.sizing,

  boxSizingModule_Height: cssModules.boxSizingModule.height,
  logicalPropertiesModule_Blocks: cssModules.logicalPropertiesModule.blocks,
  boxSizingModule_Width: cssModules.boxSizingModule.width,
  logicalPropertiesModule_Inlines: cssModules.logicalPropertiesModule.inlines,

  boxModelModule_Margins: cssModules.boxModelModule.margins,
  logicalPropertiesModule_Margins: cssModules.logicalPropertiesModule.margins,
  boxModelModule_Paddings: cssModules.boxModelModule.paddings,
  logicalPropertiesModule_Paddings: cssModules.logicalPropertiesModule.paddings,

  //--- TYPOGRAPHY ---//
  fontsModule_Fonts: cssModules.fontsModule.fonts,
  fontsModule_Overrides: cssModules.fontsModule.overrides,
  fontsModule_FontFaces: cssModules.fontsModule.fontFaces,

  inlineLayoutModule_Baselines: cssModules.inlineLayoutModule.baselines,
  inlineLayoutModule_Letters: cssModules.inlineLayoutModule.initialLetter,
  inlineLayoutModule_Lines: cssModules.inlineLayoutModule.lineHeight,
  inlineLayoutModule_Align: cssModules.inlineLayoutModule.verticalAlign,

  mathmlCoreModule: cssModules.mathmlCoreModule,

  rubyLayoutModule: cssModules.rubyLayoutModule,

  mobileTextSizeAdjustmentModule: cssModules.mobileTextSizeAdjustmentModule,

  textDecorationModule_Decorations: cssModules.textDecorationModule.decoration,
  textDecorationModule_Emphasis: cssModules.textDecorationModule.emphasis,
  textDecorationModule_Shadow: cssModules.textDecorationModule.shadow,
  textDecorationModule_Underline: cssModules.textDecorationModule.underline,

  textModule_Punctuations: cssModules.textModule.punctuations,
  textModule_Letters: cssModules.textModule.letters,
  textModule_Lines: cssModules.textModule.lines,
  textModule_Tabs: cssModules.textModule.tabs,
  textModule_Text: cssModules.textModule.text,
  textModule_Whitespaces: cssModules.textModule.whitespaces,
  textModule_Words: cssModules.textModule.words,
  textModule_Wraps: cssModules.textModule.wraps,

  //--- SVG ---//
  svgModule_Text: cssModules.svgModule.text,
  svgModule_Position: cssModules.svgModule.position,
  svgModule_Fill: cssModules.svgModule.fill,
  svgModule_Color: cssModules.svgModule.color,
  svgModule_Render: cssModules.svgModule.render,
  svgModule_Marker: cssModules.svgModule.marker,
  svgModule_Stroke: cssModules.svgModule.stroke,

  //--- MOTION ---//
  animationsModule: cssModules.animationsModule,

  scrollDrivenAnimationsModule_Animations: cssModules.scrollDrivenAnimationsModule.animations,
  scrollDrivenAnimationsModule_Scrolls: cssModules.scrollDrivenAnimationsModule.scrolls,
  scrollDrivenAnimationsModule_Scopes: cssModules.scrollDrivenAnimationsModule.scopes,
  scrollDrivenAnimationsModule_Views: cssModules.scrollDrivenAnimationsModule.views,

  motionPathModule: cssModules.motionPathModule, // offsets

  transitionsModule: cssModules.transitionsModule,

  viewTransitionModule: cssModules.viewTransitionModule,

  willChangeModule: cssModules.willChangeModule,
};

// console.log(JSON.stringify(propertiesOrder));

function setStylelintOrder() {
  const orderGroups = [];

  for (const [key, value] of Object.entries(propertiesOrder)) {
    const group = { groupName: key, properties: value };
    orderGroups.push(group);
  }

  return {
    plugins: ['stylelint-order'],
    rules: {
      'order/properties-order': [orderGroups],
    },
  };
}

export default setStylelintOrder();
