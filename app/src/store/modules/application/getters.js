import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";

export default {
  getCurrentPage: (state, getters, rootState, rootGetters) =>
    rootGetters["mediawiki/getPage"](
      state.currentSectionSuggestion.sourceLanguage,
      state.currentSectionSuggestion.sourceTitle
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

  getCurrentProposedTranslation: (state, getters) =>
    state.isSectionTitleSelectedForTranslation
      ? getters.getCurrentProposedTitleTranslation
      : getters.getCurrentProposedSentenceTranslation,

  /**
   * @return {LanguageTitleGroup}
   */
  getCurrentLanguageTitleGroup: (state, getters, rootState, rootGetters) =>
    rootGetters["mediawiki/getLanguageTitleGroup"](
      state.currentSectionSuggestion.sourceLanguage,
      state.currentSectionSuggestion.sourceTitle
    ),

  /**
   * @return {boolean}
   */
  isSelectedSegmentTranslated: (state, getters) =>
    state.isSectionTitleSelectedForTranslation
      ? !!state.currentSourceSection.translatedTitle
      : !!getters.getCurrentSelectedSentence?.isTranslated,

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
    )
};