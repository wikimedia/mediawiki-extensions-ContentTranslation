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

  getCurrentSourceSectionTitle: state =>
    state.currentSourceSection?.originalTitle || "",

  getCurrentSourceSectionAnchor: (state, getters) =>
    (getters.getCurrentSourceSectionTitle || "").replace(/ /g, "_"),

  getCurrentSourceSectionSentences: state =>
    state.currentSourceSection?.sentences || [],

  isCurrentSentenceLast: (state, getters) =>
    getters.getCurrentSelectedSentenceIndex ===
    getters.getCurrentSourceSectionSentences.length - 1,

  isCurrentSentenceFirst: (state, getters) =>
    getters.getCurrentSelectedSentenceIndex === 0,

  isCurrentSourceSectionMissing: (state, getters) =>
    state.currentSectionSuggestion?.missingSections.hasOwnProperty(
      getters.getCurrentSourceSectionTitle
    ),

  isCurrentSourceSectionPresent: (state, getters) =>
    state.currentSectionSuggestion?.presentSections.hasOwnProperty(
      getters.getCurrentSourceSectionTitle
    ),

  /**
   * @return {SectionSentence|null}
   */
  getCurrentSelectedSentence: (state, getters) =>
    getters.getCurrentSourceSectionSentences.find(
      sentence => sentence.selected
    ),

  getCurrentSelectedSentenceIndex: (state, getters) =>
    getters.getCurrentSourceSectionSentences.findIndex(
      sentence => sentence.selected
    ),

  /**
   * Machine translation of section title for currently selected MT provider
   */
  getCurrentProposedTitleTranslation: state =>
    state.currentSourceSection?.proposedTitleTranslations[
      state.currentMTProvider
    ] || "",

  /**
   * Machine translation of currently selected sentence for currently selected MT provider
   */
  getCurrentProposedSentenceTranslation: (state, getters) =>
    getters.getCurrentSelectedSentence?.proposedTranslations[
      state.currentMTProvider
    ] || "",

  getCurrentProposedTranslation: (state, getters) => {
    if (state.isSectionTitleSelectedForTranslation) {
      return getters.getCurrentProposedTitleTranslation;
    } else {
      return getters.getCurrentProposedSentenceTranslation;
    }
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
   * @return {boolean}
   */
  isSelectedSegmentTranslated: (state, getters) => {
    if (state.isSectionTitleSelectedForTranslation) {
      return !!state.currentSourceSection.translatedTitle;
    } else {
      return !!getters.getCurrentSelectedSentence?.isTranslated;
    }
  },
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
  getSectionSuggestionsSliceByIndex: (
    state,
    getters,
    rootState
  ) => sliceIndex =>
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
  getPageSuggestionsSliceByIndex: (state, getters, rootState) => sliceIndex =>
    getters.getCurrentPageSuggestions.slice(
      rootState.suggestions.maxSuggestionsPerSlice * sliceIndex,
      rootState.suggestions.maxSuggestionsPerSlice * (sliceIndex + 1)
    )
};
