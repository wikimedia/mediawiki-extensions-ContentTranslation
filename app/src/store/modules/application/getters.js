import SectionSentence from "@/wiki/cx/models/sectionSentence";

export default {
  /**
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @param {object} rootGetters
   * @return {Page|null}
   */
  getCurrentPage: (state, getters, rootState, rootGetters) =>
    rootGetters["mediawiki/getPage"](
      state.currentSectionSuggestion?.sourceLanguage,
      state.currentSectionSuggestion?.sourceTitle
    ),

  getCurrentTargetPage: (state, getters, rootState, rootGetters) =>
    rootGetters["mediawiki/getPage"](
      state.currentSectionSuggestion.targetLanguage,
      state.currentSectionSuggestion.targetTitle
    ),

  getCurrentSourceSectionTitle: (state) =>
    state.currentSourceSection?.originalTitle || "",

  getCurrentSourceSectionAnchor: (state, getters) =>
    (getters.getCurrentSourceSectionTitle || "").replace(/ /g, "_"),

  isCurrentSourceSectionMissing: (state, getters) =>
    state.currentSectionSuggestion?.missingSections.hasOwnProperty(
      getters.getCurrentSourceSectionTitle
    ),

  isCurrentSourceSectionPresent: (state, getters) =>
    state.currentSectionSuggestion?.presentSections.hasOwnProperty(
      getters.getCurrentSourceSectionTitle
    ),

  /**
   * Machine translation of currently selected translation unit (title or sentence)
   * for currently selected MT provider
   */
  getCurrentProposedTranslation: (state) => {
    const { currentSourceSection, currentMTProvider } = state;

    return currentSourceSection?.getProposedTranslationByMtProvider(
      currentMTProvider
    );
  },
  /**
   * @return {LanguageTitleGroup|null}
   */
  getCurrentLanguageTitleGroup: (state, getters, rootState, rootGetters) =>
    rootGetters["mediawiki/getLanguageTitleGroup"](
      state.currentSectionSuggestion?.sourceLanguage,
      state.currentSectionSuggestion?.sourceTitle
    ),

  /**
   * @return {ArticleSuggestion[]}
   */
  getCurrentPageSuggestions: (state, getters, rootState, rootGetters) =>
    rootGetters["suggestions/getPageSuggestionsForPair"](
      state.sourceLanguage,
      state.targetLanguage
    ),

  /**
   * @return {SectionSuggestion[]}
   */
  getCurrentSectionSuggestions: (state, getters, rootState, rootGetters) =>
    rootGetters["suggestions/getSectionSuggestionsForPair"](
      state.sourceLanguage,
      state.targetLanguage
    ),

  /**
   * @return {Translation[]}
   */
  getCurrentPublishedTranslations: (state, getters, rootState, rootGetters) =>
    rootGetters["translator/getPublishedTranslationsForLanguagePair"](
      state.sourceLanguage,
      state.targetLanguage
    ),

  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): SectionSuggestion[]}
   */
  getSectionSuggestionsSliceByIndex:
    (state, getters, rootState) => (sliceIndex) =>
      getters.getCurrentSectionSuggestions.slice(
        rootState.suggestions.maxSuggestionsPerSlice * sliceIndex,
        rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)
      ),

  /**
   * @param state
   * @param getters
   * @param rootState
   * @return {function(number): ArticleSuggestion[]}
   */
  getPageSuggestionsSliceByIndex: (state, getters, rootState) => (sliceIndex) =>
    getters.getCurrentPageSuggestions.slice(
      rootState.suggestions.maxSuggestionsPerSlice * sliceIndex,
      rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)
    ),

  isPublishingDisabled: (state) =>
    state.publishFeedbackMessages.some((message) => message.isError),

  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (state) => state.publishTarget === "SANDBOX_SECTION",
};
