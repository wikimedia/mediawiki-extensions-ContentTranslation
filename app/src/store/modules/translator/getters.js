import { getTitleForPublishOption } from "../../../utils/publishHelper";

export default {
  /**
   * Get publishing title for current section for the given
   * publish target (which corresponds to a specific namespace)
   *
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @return {string}
   */
  getArticleTitleForPublishing: (state, getters, rootState) => {
    const { currentSectionSuggestion, publishTarget, currentSourceSection } =
      rootState.application;
    const baseTitle =
      currentSectionSuggestion.targetTitle || currentSourceSection.title;

    return getTitleForPublishOption(baseTitle, publishTarget);
  },

  /**
   * This getter returns the appropriate number indicating the position in which the
   * new section will be published inside target page.
   *
   * 1. If publish target is sandbox, i.e. section should be published to
   *    user's sandbox, then the section position should be "new"
   * 2. If section is a lead section then its position should be equal to 0.
   * 3. If section is present inside target article, then:
   *    sectionNumber equals the index of the section inside target article.
   * 4. If not present, then
   *    a. If at least one appendix section exists then:
   *       it equals to the index of the first appendix section (in order of appearance)
   *    b. If not, it's equal to "new".
   *
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @param {object} rootGetters
   * @return {number|"new"}
   */
  getSectionNumberForPublishing: (state, getters, rootState, rootGetters) => {
    const { currentSectionSuggestion, currentSourceSection } =
      rootState.application;

    // if current section is a lead section, its position should always be 0
    // if current publishing target is user's sandbox, the section should be
    // added as "new"
    if (currentSourceSection.isLeadSection) {
      return 0;
    } else if (rootGetters["application/isSandboxTarget"]) {
      return "new";
    }

    const targetPage = rootGetters["application/getCurrentTargetPage"];
    const firstAppendixTargetTitle = rootGetters[
      "suggestions/getFirstAppendixTitleBySectionSuggestion"
    ](currentSectionSuggestion);

    const presentSectionTargetTitle =
      currentSectionSuggestion.presentSections[
        currentSourceSection.originalTitle
      ];

    if (!!presentSectionTargetTitle) {
      return targetPage.getSectionNumberByTitle(presentSectionTargetTitle);
    } else if (!!firstAppendixTargetTitle) {
      // if appendix sections exist, the new section should be positioned exactly
      // above the first appendix section. For this reason, the HTML to be published
      // should contain: 1. the new section title, 2. the new section contents,
      // 3. the first appendix section and title and 4. the contents of the first
      // appendix section. Therefore, the position of the section to be published
      // should be equal to the position of the first appendix section
      return targetPage.getSectionNumberByTitle(firstAppendixTargetTitle);
    }

    // if section is missing and no appendix sections exist, the section should be
    // published as a "new" section
    return "new";
  },
  /**
   * @param {Object} state
   * @return {function(string, string): Translation[]}
   */
  getPublishedTranslationsForLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.translations.filter(
        (translationItem) =>
          translationItem.sourceLanguage === sourceLanguage &&
          translationItem.targetLanguage === targetLanguage &&
          translationItem.status === "published"
      ),
  getDraftTranslationsForLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.translations.filter(
        (translationItem) =>
          translationItem.sourceLanguage === sourceLanguage &&
          translationItem.targetLanguage === targetLanguage &&
          translationItem.status === "draft"
      ),
  getPublishedTranslations: (state) =>
    state.translations.filter(
      (translationItem) => translationItem.status === "published"
    ),
  getDraftTranslations: (state) =>
    state.translations.filter(
      (translationItem) => translationItem.status === "draft"
    ),
  // Function with dummy implementation. Needed to add real functionality later
  hasSectionTranslations: (state) =>
    state.translations.some(
      (translation) => translation.hasSectionTranslations
    ),
  /**
   * @param state
   * @return {function(sourceLanguage: string, targetLanguage: string): Translation[]}
   */
  getAllTranslationsForLanguagePair:
    (state) => (sourceLanguage, targetLanguage) =>
      state.translations.filter(
        (translation) =>
          translation.sourceLanguage === sourceLanguage &&
          translation.targetLanguage === targetLanguage
      ),
};
