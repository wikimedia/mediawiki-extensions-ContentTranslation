/**
 * Create a dummy VisualEditor surface with given HTML content.
 * This helps us to resolve all references locally in the section.
 * For example, if the reference definition is outside a section, may
 * be in references list at the end of article, VE helps to copy them
 * locally to section.
 * @param {string} htmlContent
 * @returns {ve.ce.Surface}
 */
const createDummyVESurface = htmlContent => {
  const surfaceEl = document.createElement("div");
  surfaceEl.classList.add("surface");

  const overlay = document.createElement("div");
  overlay.appendChild(surfaceEl);
  overlay.$el = $(overlay);

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
 * @return {jQuery}
 */
const getSubSectionNodes = htmlContent => {
  const surface = createDummyVESurface(htmlContent);

  /** @type jQuery **/
  const subSectionCeNodeList = surface.$element.find(
    "section[rel='cx:Section']:not([data-mw-section-number='0'])"
  );

  const subSectionNodeList = subSectionCeNodeList.map((i, subSectionCeNode) => {
    const model = $(subSectionCeNode)
      .data("view")
      .getModel();

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

  return subSectionNodeList;
};

export { getSubSectionNodes };
