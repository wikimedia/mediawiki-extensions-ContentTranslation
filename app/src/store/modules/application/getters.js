import SectionSentence from "@/wiki/cx/models/sectionSentence";

export default {
  /**
   * @param {object} state
   * @param {object} getters
   * @param {object} rootState
   * @param {object} rootGetters
   * @return {Page|null}
   */
  getCurrentPage: (state, getters, rootState, rootGetters) => {
    const title =
      state.currentSectionSuggestion?.sourceTitle ||
      state.currentTranslation?.sourceTitle;

    return rootGetters["mediawiki/getPage"](state.sourceLanguage, title);
  },
  getCurrentTargetPage: (state, getters, rootState, rootGetters) => {
    const title =
      state.currentSectionSuggestion?.targetTitle ||
      state.currentTranslation?.targetTitle;

    return rootGetters["mediawiki/getPage"](state.targetLanguage, title);
  },

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

  /**
   * Returns a boolean indicating whether the current publishing target
   * is the user's sandbox
   *
   * @param {object} state
   * @return {boolean}
   */
  isSandboxTarget: (state) => state.publishTarget === "SANDBOX_SECTION",

  /**
   * @param {object} state
   * @param {object} getters
   * @return {string}
   */
  getCurrentRevision: (state, getters) =>
    state.currentTranslation?.pageRevision || getters.getCurrentPage.revision,

  /**
   * @param {object} state
   * @param {object} getters
   * @return {string}
   */
  getParallelCorporaBaseId: (state, getters) =>
    `${getters.getCurrentRevision}_${state.currentSourceSection.id}`,

  getTargetPageTitleForPublishing: (state, getters) => {
    const { currentSourceSection } = state;

    if (!currentSourceSection.isLeadSection) {
      return getters.getCurrentTargetPage.title;
    }

    return currentSourceSection.title;
  },
};
