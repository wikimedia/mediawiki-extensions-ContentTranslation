/**
 * Sets the target attribute of all anchor tags in the given HTML string to "_blank".
 * This is useful for ensuring that links open in a new tab.
 *
 * @param {string} htmlAsString - The HTML content as a string.
 * @returns {string} - The modified HTML content with all anchor tags having target="_blank".
 */
function setTargetBlank(htmlAsString) {
  // Create a temporary DOM element to manipulate the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlAsString;

  // Find all anchor tags and set their target attribute to _blank
  const anchors = tempDiv.querySelectorAll("a");
  anchors.forEach((anchor) => {
    anchor.setAttribute("target", "_blank");
  });

  // Return the modified HTML as a string
  return tempDiv.innerHTML;
}

export { setTargetBlank };
