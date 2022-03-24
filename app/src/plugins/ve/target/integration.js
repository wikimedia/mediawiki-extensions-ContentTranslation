import { loadVEModules } from "../index";

function getVEOverlay(overlayElement) {
  // This is a quick and dirty version for VisualEditorOverlay
  // in MobileFrontend. May require enhancement to a separate class.
  overlayElement.$el = $(overlayElement);

  return overlayElement;
}

/**
 * Get VE Editing surface
 * @param {SectionTranslationTarget} veTarget
 * @param {string} content
 * @param {string} lang
 * @param {string} dir
 * @returns
 */
function getSurface(veTarget, content, lang, dir) {
  // Create a document model for a new surface
  veTarget.clearSurfaces();
  const dmDoc = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(
      // When content is empty, add a dummy span node so that VE doesn't add a new paragraph
      content || "<span class='sx-edit-dummy-node' />"
    ),
    { lang, dir }
  );
  const surface = veTarget.createSurface(dmDoc);
  veTarget.surfaces.push(surface);
  veTarget.setSurface(surface);
  surface.initialize();

  return surface;
}

/**
 * Override for ve.ui.MWReferenceContextItem.prototype.getRendering as it creates
 * a ve.ui.MWPreviewElement with default parameters. ve.ui.MWPreviewElement has
 * useView configuration as false by default and causes not rendering the references
 * from its DOM model as required for section translation.
 *
 * Get a DOM rendering of the reference.
 *
 * @private
 * @return {jQuery} DOM rendering of reference
 */
function getReferenceRendering() {
  var refNode = this.getReferenceNode();

  if (refNode) {
    this.view = new ve.ui.MWPreviewElement(refNode, {
      useView: true,
    });

    // The $element property may be rendered into asynchronously, update the context's size when the
    // rendering is complete if that's the case
    this.view.once("render", this.context.updateDimensions.bind(this.context));

    return this.view.$element;
  } else {
    return $("<div>")
      .addClass("ve-ui-mwReferenceContextItem-muted")
      .text(ve.msg("cite-ve-referenceslist-missingref"));
  }
}

/**
 * Get a VisualEditor editing target
 * @param {Object} editorConfig
 * @param {Element} overlayEl
 * @returns {SectionTranslationTarget}
 */
async function getTarget(editorConfig, overlayEl) {
  await loadVEModules();
  // Enforce mobile target for all devices to support
  // mobile-first design.
  OO.ui.isMobile = () => true;
  await mw.libs.ve.targetLoader.loadModules("visual");
  const overlay = getVEOverlay(overlayEl);

  return new ve.init.mw.SectionTranslationTarget(overlay, editorConfig);
}

export { getTarget, getSurface, getReferenceRendering };
