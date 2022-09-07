/**
 * Publishing related utility methods.
 */

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
      link.replaceWith(...link.childNodes);
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

export { cleanupHtml };
