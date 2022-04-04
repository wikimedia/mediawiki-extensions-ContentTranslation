import VisualEditor from "./components/VisualEditor.vue";
export default VisualEditor;

/**
 * Load the required Resource Loader modules for VisualEditor
 * @returns Promise
 */
export function loadVEModules() {
  return mw.loader.using("mw.cx3.ve");
}
