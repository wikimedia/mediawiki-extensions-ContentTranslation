var nextUntil = function(element, selector) {
  var siblings = [];
  element = element.nextElementSibling;
  while (element) {
    if (element.matches(selector)) break;
    siblings.push(element);
    element = element.nextElementSibling;
  }
  return siblings;
};

var highlightElement = function(element) {
  element.style.background = "#fef6e7";
  element.style.marginBottom = 0;
  element.style.marginLeft = "-16px";
  element.style.marginRight = "-16px";
  element.style.paddingLeft = "16px";
  element.style.paddingRight = "16px";
};

var createNewIndicator = function() {
  var span = document.createElement("span");
  span.innerText = mw.message("cx-sx-followup-feedback-new-indicator");
  span.style.background = "#fdedd1";
  span.style.color = "#ac6600";
  span.style.padding = "8px";
  span.style.borderRadius = "50%";
  span.style.fontSize = "16px";
  span.style.display = "flex";
  span.style.width = "max-content";
  return span;
};

/**
 * @param {HTMLElement} firstHighlightedParagraph
 */
var fixFirstParagraphSpacing = function(firstHighlightedParagraph) {
  firstHighlightedParagraph.style.paddingTop = "0.5em";
  firstHighlightedParagraph.style.marginTop = 0;
};

var newSectionParam = "sx-published-section";

var highlightPublishedSection = function() {
  /**
   * Start by getting URL query params
   * @type {URLSearchParams}
   */
  var urlParams = new URLSearchParams(location.search);
  var highlightedTitleId = urlParams.get(newSectionParam).replace(/ +/g, "_");
  /**
   * Find element with id equal to the newly translated section title
   * @type {HTMLElement}
   */
  var highlightedTitleSpan = document.getElementById(highlightedTitleId);
  if (!highlightedTitleSpan) {
    return;
  }

  // Scroll to newly published section
  highlightedTitleSpan.scrollIntoView();
  /**
   * Get parent h2 element, which corresponds to the section header
   * @type {HTMLElement}
   */
  var highlightedHeader = highlightedTitleSpan.parentElement;
  highlightElement(highlightedHeader);

  // Get all section nodes by getting all elements until next section header
  var siblings = nextUntil(highlightedHeader, "h2");
  var firstHighlightedParagraph = siblings[0].querySelector("p");

  if (firstHighlightedParagraph) {
    // Use padding-top instead of margin-top for first section paragraph so that no
    // white-space appears between header and paragraph
    fixFirstParagraphSpacing(firstHighlightedParagraph);
  }

  /**
   * Create element for new section indicator
   * @type {HTMLSpanElement}
   */
  var newIndicator = createNewIndicator();

  // Add new section indicator immediately after .mw-headline span
  highlightedHeader.insertBefore(
    newIndicator,
    highlightedHeader.querySelector(".mw-headline").nextSibling
  );

  // Highlight all section nodes
  siblings.forEach(function(sectionElement) {
    highlightElement(sectionElement);
  });
};

highlightPublishedSection();
