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

/**
 * Given a section suggestion, a source section, a target page
 * and the first appendix title in this page, this method
 * returns the appropriate number indicating the position in
 * which the new section will be published inside target page.
 *
 * 1. If section is present inside target article, then:
 *    sectionNumber equals the index of the section inside target article.
 * 2. If not present, then
 *    a. If at least one appendix section exists then:
 *       it equals to the index of the first appendix section (in order of appearance)
 *    b. If not, it's equal to "new".
 *
 * @param {SectionSuggestion} sectionSuggestion
 * @param {PageSection} section
 * @param {String} firstAppendixTargetTitle
 * @param {Page} targetPage
 * @return {Number|"new"}
 */
const calculateNewSectionNumber = (
  sectionSuggestion,
  section,
  firstAppendixTargetTitle,
  targetPage
) => {
  const targetSectionTitle =
    sectionSuggestion.presentSections[section.originalTitle];

  // if section is present
  if (targetSectionTitle) {
    return targetPage.getSectionNumberByTitle(targetSectionTitle);
  } else if (!!firstAppendixTargetTitle) {
    // if appendix sections exist
    return targetPage.getSectionNumberByTitle(firstAppendixTargetTitle);
  }
  // else-wise append to the end of the target page as "new"
  return "new";
};

/**
 * Given a section suggestion, a source section, a target page
 * and the first appendix title in this page, this method
 * returns the appropriate HTML to be published inside target
 * page for this new section
 *
 * 1. If section is present inside target article, then:
 *    html equals the new section clean contents
 * 2. If not present, then
 *    a. If at least one appendix section exists then:
 *       it equals the concatenation of the new section clean
 *       contents with appendix section clean contents
 *    b. If not, it's equal to the new section clean contents.
 *
 * @param {SectionSuggestion} sectionSuggestion
 * @param {PageSection} section
 * @param {Page} targetPage
 * @param {String} firstAppendixTargetTitle
 * @return {String} - HTML to be published
 */
const calculateHtmlToPublish = (
  sectionSuggestion,
  section,
  targetPage,
  firstAppendixTargetTitle
) => {
  const targetSectionTitle =
    sectionSuggestion.presentSections[section.originalTitle];

  // if section is present
  if (targetSectionTitle) {
    return cleanupHtml(section.translationHtml);
  } else if (!!firstAppendixTargetTitle) {
    // if appendix sections exist
    const appendixSection = targetPage.sections.find(
      section => section.originalTitle === firstAppendixTargetTitle
    );
    return prependNewSectionToAppendixSection(section, appendixSection);
  }
  // else-wise append to the end of the target page as "new"
  return cleanupHtml(section.translationHtml);
};

export {
  prependNewSectionToAppendixSection,
  calculateNewSectionNumber,
  calculateHtmlToPublish
};
