/**
 * Given a node containing a block template, this method returns
 * the template name. If no data for this template exist,
 * null is returned.
 *
 * @param {HTMLElement} transclusionNode
 * @return {string|null}
 */
const parseTemplateName = (transclusionNode) => {
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
const getTemplateData = (node) => {
  const mwData = JSON.parse(node.dataset?.mw || "{}");

  return mwData?.parts?.[0]?.template || null;
};

/**
 * Given an Element node, this method returns a boolean
 * indicating whether this node is a transclusion node or not.
 *
 * @param {HTMLElement} node
 * @return {boolean}
 */
const isTransclusionNode = (node) =>
  !!(
    node.attributes.about ||
    (node.attributes.typeof &&
      node
        .getAttribute("typeof")
        .match(/(^|\s)(mw:Transclusion|mw:Placeholder)\b/))
  );

/**
 * Given a node that contains a data-mw attribute
 * containing the data of a template, this method
 * returns the corresponding wikitext that represents
 * this template.
 *
 * @param {HTMLElement} templateNode
 * @return {string|null}
 */
const getWikitextFromTemplate = (templateNode) => {
  const templateData = getTemplateData(templateNode);

  if (!templateData?.target) {
    return null;
  }

  let wikitext = templateData.target.wt;

  const { params } = templateData;

  if (!params) {
    return `{{${wikitext}}}`;
  }

  for (const key in params) {
    const escapedValue = escapeParameter(params[key].wt);
    wikitext += " | " + `${key} = ${escapedValue}`;
  }

  return `{{${wikitext}}}`;
};

/**
 * Escape a template parameter. Helper function for getWikitext.
 * This method is a copy of ve.dm.MWTransclusionNode.static.escapeParameter
 * function.
 *
 * @param {string} param Parameter value
 * @return {string} Escaped parameter value
 */
const escapeParameter = (param) => {
  let input = param,
    output = "",
    inNowiki = false,
    bracketStack = 0,
    linkStack = 0;

  while (input.length > 0) {
    const match = input.match(
      /(?:\[\[)|(?:\]\])|(?:\{\{)|(?:\}\})|\|+|<\/?nowiki>|<nowiki\s*\/>/
    );

    if (!match) {
      output += input;
      break;
    }
    output += input.slice(0, match.index);
    input = input.slice(match.index + match[0].length);

    if (inNowiki) {
      if (match[0] === "</nowiki>") {
        inNowiki = false;
        output += match[0];
      } else {
        output += match[0];
      }
    } else {
      let needsNowiki = true;

      if (match[0] === "<nowiki>") {
        inNowiki = true;
        needsNowiki = false;
      } else if (match[0] === "</nowiki>" || match[0].match(/<nowiki\s*\/>/)) {
        needsNowiki = false;
      } else if (match[0].match(/(?:\[\[)/)) {
        linkStack++;
        needsNowiki = false;
      } else if (match[0].match(/(?:\]\])/)) {
        if (linkStack > 0) {
          linkStack--;
          needsNowiki = false;
        }
      } else if (match[0].match(/(?:\{\{)/)) {
        bracketStack++;
        needsNowiki = false;
      } else if (match[0].match(/(?:\}\})/)) {
        if (bracketStack > 0) {
          bracketStack--;
          needsNowiki = false;
        }
      } else if (match[0].match(/\|+/)) {
        if (bracketStack > 0 || linkStack > 0) {
          needsNowiki = false;
        }
      }

      if (needsNowiki) {
        output += "<nowiki>" + match[0] + "</nowiki>";
      } else {
        output += match[0];
      }
    }
  }

  return output;
};

/**
 * Given a transclusion node, that is returned by cxserver
 * as a block template translation/adaptation, this method
 * returns an object containing information related to the
 * template adaptation
 *
 * @param {Element} node
 * @return {{ adapted: boolean, partial: boolean, targetExists: boolean, mandatoryTargetParams: string[], optionalTargetParams: string[] }}
 */
const getTemplateAdaptationInfo = (node) => {
  const cxData = JSON.parse(node.dataset?.cx || "{}");

  return cxData?.[0] || null;
};

/**
 * Given a transclusion node, that is returned by cxserver
 * as a block template translation/adaptation, this method
 * returns a boolean indicating whether the template exists
 * in the target language.
 *
 * @param {Element} cxTemplateNode
 * @return {boolean}
 */
const targetTemplateExists = (cxTemplateNode) => {
  const adaptationInfo = getTemplateAdaptationInfo(cxTemplateNode);

  return adaptationInfo?.targetExists;
};

export {
  isTransclusionNode,
  parseTemplateName,
  getTemplateAdaptationInfo,
  getTemplateData,
  getWikitextFromTemplate,
  targetTemplateExists,
};
