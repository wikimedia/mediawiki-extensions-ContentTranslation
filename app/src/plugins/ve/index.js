import VisualEditor from "./components/VisualEditor";
export default VisualEditor;

/**
 * Load the required Resource Loader modules for VisualEditor
 * @returns Promise
 */
export function loadVEModules() {
  return mw.loader.using([
    "ext.visualEditor.targetLoader",
    "ext.visualEditor.mobileArticleTarget",
    "ext.cite.visualEditor"
  ]);
}
