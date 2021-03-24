import { cleanupHtml } from "./contentCleaner";

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
  const createHeader = title => {
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

export { prependNewSectionToAppendixSection };
