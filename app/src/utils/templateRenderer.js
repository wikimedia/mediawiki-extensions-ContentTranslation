import translatorApi from "@/wiki/cx/api/translator";
import {
  getWikitextFromTemplate,
  isTransclusionNode,
  targetTemplateExists,
} from "./templateHelper";

/**
 * Given the HTML string of the template as returned by cxserver, the
 * target page title and the target language, this method checks if
 * the HTML contains any nested transclusion node and if the template
 * actually exists in the target language (based on the adaptation information
 * provided by cxserver through the data-cx attribute) and in case the
 * above conditions are met, it returns a promise that resolves to an
 * HTML string containing both the template definition and the HTML
 * string that renders the template. If at least one of the above
 * conditions is not met, a trivial promise that resolves to null
 * is returned.
 *
 * @param {string} templateHtml the HTML string of the template
 * @param {string} title the target page title
 * @param {string} language the target language
 * @return {Promise<string|null>} a promise that resolves to an HTML string containing both the template definition and the HTML string that renders the template, or null
 */
const renderTemplateFromCXServer = (templateHtml, title, language) => {
  const blockTemplateWrapper = document.createElement("div");
  blockTemplateWrapper.innerHTML = templateHtml;

  /** @type {HTMLElement|null} */
  const templateElement = Array.from(blockTemplateWrapper.children).find(
    (node) => isTransclusionNode(node)
  );

  // If both nested transclusion node and target template also exists (based on the data-cx attribute)
  if (templateElement && targetTemplateExists(templateElement)) {
    /**
     * An HTML string containing both the template definition
     * and the HTML string that renders the template
     * @type {string}
     */
    return translatorApi.parseTemplateWikitext(
      getWikitextFromTemplate(templateElement),
      language,
      title
    );
  }

  return Promise.resolve(null);
};

/**
 * Given the HTML string of the template as given by VE (through veSurface.getHtml() method),
 * the target page title and the target language, this method checks if the HTML contains any
 * nested transclusion node and in case it does, the method returns a promise that resolves
 * to an HTML string containing both the template definition and the HTML string that renders
 * the template (in contrast to the original HTML string of the template that only contains
 * the template definition). If no nested transclusion node exists inside the template HTML
 * a trivial promise that resolves to null is returned.
 * @param {string} templateHtml the HTML string of the template
 * @param {string} title the target page title
 * @param {string} language the target language
 * @return {Promise<string|null>} a promise that resolves to an HTML string containing both the template definition and the HTML string that renders the template, or null
 */
const renderTemplateFromVE = (templateHtml, title, language) => {
  let blockTemplateWrapper = document.createElement("div");
  blockTemplateWrapper.innerHTML = templateHtml;

  // for restored draft corpora, the given template HTML is wrapped inside a <section> element
  // with "rel" attribute set to "cx:Section". We need to use the element, that holds the template
  // definition, which is expected to be the first child inside the <section> wrapper
  if (
    blockTemplateWrapper.firstElementChild.getAttribute("rel") === "cx:Section"
  ) {
    blockTemplateWrapper = blockTemplateWrapper.firstElementChild;
  }

  /** @type {Element} */
  const templateElement = Array.from(blockTemplateWrapper.children).find(
    (node) => isTransclusionNode(node)
  );

  if (templateElement) {
    return translatorApi.parseTemplateWikitext(
      getWikitextFromTemplate(templateElement),
      language,
      title
    );
  }

  return Promise.resolve(null);
};

export { renderTemplateFromCXServer, renderTemplateFromVE };
