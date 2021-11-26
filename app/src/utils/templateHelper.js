/**
 * Given a node containing a block template, this method returns
 * the template name. If no data for this template exist,
 * null is returned.
 *
 * @param {HTMLElement} transclusionNode
 * @return {string|null}
 */
const parseTemplateName = transclusionNode => {
  const templateData = getTemplateData(transclusionNode);

  return templateData?.target?.wt || null;
};

/**
 * Given a node containing a block template, this method returns
 * the template data (target and params). If no data for this
 * template exist, null is returned.
 * We currently do NOT support multi part templates. For this
 * reason, we only about the first part (parts[0]) of mwData
 *
 * @param {HTMLElement} node
 * @return {object|null}
 */
const getTemplateData = node => {
  const mwData = JSON.parse(node.dataset?.mw || "{}");

  return mwData?.parts?.[0]?.template || null;
};

/**
 * Given an Element node, this method returns a boolean
 * indicating whether this node is a transclusion node or not.
 *
 * @param {Element} node
 * @return {boolean}
 */
const isTransclusionNode = node =>
  !!(
    node.attributes.about ||
    (node.attributes.typeof &&
      node
        .getAttribute("typeof")
        .match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/))
  );

export { isTransclusionNode, parseTemplateName };
