/**
 * Publishing related utility methods.
 */

/**
 * Here we need to construct the HTML that
 * combines new section header and contents
 * with the first appendix section header and
 * contents
 *
 * @param {PageSection} newSection
 * @param {PageSection} existingSection
 * @return {string}
 */
const prependNewSectionToAppendixSection = (newSection, existingSection) => {
  const createHeader = (title) => {
    const headerElement = document.createElement("h2");
    headerElement.textContent = title;

    return headerElement;
  };
  const newSectionHeader = createHeader(newSection.title);
  const existingSectionHeader = createHeader(existingSection.originalTitle);
  const newSectionHtml = cleanupHtml(newSection.translationHtml);
  const existingSectionHtml = cleanupHtml(existingSection.html);

  return `${newSectionHeader.outerHTML}\n${newSectionHtml}\n${existingSectionHeader.outerHTML}\n${existingSectionHtml}`;
};

/**
 * Clean up the input html by removing CX specific markup and attributes.
 *
 * @param {String} html
 * @return {String} Cleaned up html.
 **/
const cleanupHtml = (html) => {
  /* @type Element */
  const doc = document.createElement("article");
  doc.innerHTML = html;

  Array.prototype.forEach.call(
    doc.querySelectorAll("article, section, [data-segmentid]"),
    (segment) => {
      const parent = segment.parentNode;

      // move all children out of the element
      while (segment.firstChild) {
        parent.insertBefore(segment.firstChild, segment);
      }
      segment.remove();
    }
  );

  // Remove all unadapted links except the ones that are explicitly marked as missing.
  // Refer ve.ui.CXLinkContextItem#createRedLink
  Array.prototype.forEach.call(doc.querySelectorAll(".cx-link"), (link) => {
    const dataCX = JSON.parse(link.getAttribute("data-cx") || "{}");

    if (dataCX?.adapted === false && dataCX?.targetTitle?.missing !== true) {
      // Replace the link with its inner content.
      link.replaceWith(link.innerHTML);
    } else {
      ["data-linkid", "class", "title", "id"].forEach((attr) => {
        link.removeAttribute(attr);
      });
    }
  });

  // Remove empty references. Such references are initially marked as unadapted and CX data
  // is reset upon editing, so we check if reference is still marked as unadapted.
  Array.prototype.forEach.call(doc.querySelectorAll(".mw-ref"), (element) => {
    const dataCX = JSON.parse(element.getAttribute("data-cx") || "{}");

    if (dataCX?.adapted === false) {
      element.parentNode.removeChild(element);
    }
  });

  // Remove all data-cx attributes. It is irrelevant for publish, reduces the HTML size.
  Array.prototype.forEach.call(doc.querySelectorAll("[data-cx]"), (element) => {
    element.removeAttribute("data-cx");
  });

  // Remove all id attributes from table cells, div tags that are assigned by cxserver.
  Array.prototype.forEach.call(
    doc.querySelectorAll(
      "tr[id], td[id], th[id], table[id], tbody[id], thead[id], div[id]"
    ),
    (element) => {
      element.removeAttribute("id");
    }
  );

  return doc.innerHTML;
};

/**
 * Construct a valid mediawiki title from given title and namespace option
 *
 * @param {string} originalTitle Title provided by the user
 * @param {"NEW_SECTION"|"SANDBOX_SECTION"} publishOption Publishing target selected by user.
 * @returns {string} constructed title
 **/
const getTitleForPublishOption = (originalTitle, publishOption) => {
  const namespaceIds = mw.config.get("wgNamespaceIds");

  const namespaceOptions = {
    NEW_SECTION: namespaceIds[""],
    SANDBOX_SECTION: namespaceIds.user,
  };

  return mw.cx.getTitleForNamespace(
    originalTitle,
    namespaceOptions[publishOption]
  );
};

export {
  cleanupHtml,
  getTitleForPublishOption,
  prependNewSectionToAppendixSection,
};
