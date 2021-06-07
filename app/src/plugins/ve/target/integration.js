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
  require("../tools/BackTool");
  require("../tools/NextTool");
  require("../commands/BackCommand");
  require("../commands/NextCommand");
  const SectionTranslationTarget = require("./SectionTranslationTarget");
  const overlay = getVEOverlay(overlayEl);

  return new SectionTranslationTarget(overlay, editorConfig);
}

export { getTarget, getSurface };
