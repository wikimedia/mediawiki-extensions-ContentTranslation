/**
 * The Section nodes in CX has rdfa 'rel=cx:Section'. This is unknown to VE
 * and will treat the node as unknown node. Here we register this rdfa to
 * the ve.dm.SectionNode.
 */
function registerCXSectionNodes() {
  // Respect any existing upstream rdfatypes.
  const cxSectionRDFA = "cx:Section";
  ve.dm.SectionNode.static.matchRdfaTypes =
    ve.dm.SectionNode.static.matchRdfaTypes || [];

  if (!ve.dm.SectionNode.static.matchRdfaTypes.includes(cxSectionRDFA)) {
    ve.dm.SectionNode.static.matchRdfaTypes.push(cxSectionRDFA);
    // Re-register ve.dm.SectionNode
    ve.dm.modelRegistry.unregister(ve.dm.SectionNode);
    ve.dm.modelRegistry.register(ve.dm.SectionNode);
  }
}

/**
 * Create a dummy VisualEditor surface with given HTML content.
 * This helps us to resolve all references locally in the section.
 * For example, if the reference definition is outside a section, may
 * be in references list at the end of article, VE helps to copy them
 * locally to section.
 * @param {string} htmlContent
 * @returns {ve.ce.Surface}
 */
const createDummyVESurface = (htmlContent) => {
  const surfaceEl = document.createElement("div");
  surfaceEl.classList.add("surface");

  const overlay = document.createElement("div");
  overlay.appendChild(surfaceEl);
  overlay.$el = $(overlay);
  registerCXSectionNodes();
  /** @type {ve.init.mw.MobileArticleTarget} */
  const target = new ve.init.mw.MobileArticleTarget(overlay);
  /** @type {ve.dm.Document} **/
  const sourceDoc = ve.dm.converter.getModelFromDom(
    ve.createDocumentFromHtml(htmlContent)
  );
  /** @type {ve.ce.Surface} */
  const surface = target.createSurface(sourceDoc);
  surface.setReadOnly(true);
  target.surfaces.push(surface);
  target.setSurface(surface);
  surface.initialize();

  return surface;
};

/**
 * @param {string} htmlContent
 * @param {boolean} resolveReferences Whether to resolve references in article
 *   content internal to sections
 * @return {jQuery}
 */
const getSubSectionNodes = (htmlContent, resolveReferences) => {
  let surface, subSectionNodeList;

  if (resolveReferences) {
    surface = createDummyVESurface(htmlContent);
    const subSectionCeNodeList = surface.$element.find(
      "section[rel='cx:Section']"
    );

    /** @type jQuery **/
    subSectionNodeList = subSectionCeNodeList.map((i, subSectionCeNode) => {
      const model = $(subSectionCeNode).data("view").getModel();

      if (model) {
        return ve.dm.converter.getDomFromNode(
          model,
          // CLIPBOARD_MODE helps to copy the data-mw from elsewhere to
          // to the local nodes
          ve.dm.Converter.static.CLIPBOARD_MODE
        ).body.children[0];
      }
    });
    surface.destroy();
  } else {
    subSectionNodeList = $(htmlContent).filter("section[rel='cx:Section']");
  }

  return subSectionNodeList;
};

export { getSubSectionNodes };
