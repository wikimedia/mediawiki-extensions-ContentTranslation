const state = {
  /** @type SectionSuggestion */
  currentSectionSuggestion: null,
  /** @type PageSection */
  currentSourceSection: null,
  /** @type Boolean */
  isSectionTitleSelectedForTranslation: false
};

const mutations = {
  setCurrentSectionSuggestion(state, suggestion) {
    state.currentSectionSuggestion = suggestion;
  },

  /**
   * @param state
   * @param {PageSection} section
   */
  setCurrentSourceSection(state, section) {
    state.currentSourceSection = section;
  },

  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionTitleTranslation(state, translation) {
    state.currentSourceSection.translatedTitle = translation;
  },

  /**
   * @param state
   * @param {String} translation
   */
  setCurrentSourceSectionEditedTranslation(state, translation) {
    state.currentSourceSection.editedTranslation = translation;
  },

  /**
   * @param state
   */
  clearSentenceSelection(state) {
    const sentence = state.currentSourceSection.sentences.find(
      sentence => sentence.selected
    );

    if (sentence) {
      sentence.selected = false;
    }
  },

  /**
   * @param state
   * @param {String} id
   */
  selectSentence(state, id) {
    const sentence = state.currentSourceSection.sentences.find(
      sentence => sentence.id === id
    );
    sentence.selected = true;
  },

  /**
   * @param state
   * @param {String} translation
   */
  setSelectedSentenceTranslation(state, translation) {
    /** @type {SectionSentence} */
    const selectedSentence = state.currentSourceSection.sentences.find(
      sentence => sentence.selected
    );
    selectedSentence.translatedContent = translation;
  },

  /**
   * @param state
   * @param value
   */
  setIsSectionTitleSelectedForTranslation: (state, value) => {
    state.isSectionTitleSelectedForTranslation = value;
  }
};

const getters = {
  getCurrentPage: (state, getters, rootState, rootGetters) => () =>
    rootGetters["mediawiki/getPage"](
      state.currentSectionSuggestion.sourceLanguage,
      state.currentSectionSuggestion.sourceTitle
    ),

  /**
   * Get selected sentence for a section defined by
   * the given language, title and source title
   * @param {String} sourceLanguage
   * @param {String} sourceTitle
   * @param {String} sectionTitle
   * @return {SectionSentence|null}
   */
  getSelectedSentenceForPageSection: (
    state,
    getters,
    rootState,
    rootGetters
  ) => (sourceLanguage, sourceTitle, sectionTitle) => {
    const page = rootGetters["mediawiki/getPage"](sourceLanguage, sourceTitle);
    const section = rootGetters["mediawiki/getPageSection"](page, sectionTitle);
    if (!section) {
      return null;
    }
    return section.sentences.find(sentence => sentence.selected);
  },

  getCurrentSourceSectionTitle: state =>
    state.currentSourceSection?.title || "",

  getCurrentSourceSectionAnchor: (state, getters) =>
    (getters.getCurrentSourceSectionTitle || "").replace(/ /g, "_"),

  getCurrentSourceSectionSentences: state =>
    state.currentSourceSection.sentences,

  isCurrentSentenceLast: (state, getters) => {
    const sentences = getters.getCurrentSourceSectionSentences;
    return (
      sentences.findIndex(sentence => sentence.selected) ===
      sentences.length - 1
    );
  },

  isCurrentSentenceFirst: (state, getters) =>
    getters.getCurrentSourceSectionSentences.findIndex(
      sentence => sentence.selected
    ) === 0,

  isCurrentSourceSectionMissing: (state, getters) =>
    state.currentSectionSuggestion?.missingSections.hasOwnProperty(
      getters.getCurrentSourceSectionTitle
    ),

  isCurrentSourceSectionPresent: (state, getters) =>
    state.currentSectionSuggestion?.presentSections.hasOwnProperty(
      getters.getCurrentSourceSectionTitle
    )
};

const actions = {
  setCurrentSectionSuggestion({ commit }, suggestion) {
    commit("setCurrentSectionSuggestion", suggestion);
  },
  async selectPageSection(
    { state, commit, dispatch, rootGetters },
    { sectionTitle }
  ) {
    const suggestion = state.currentSectionSuggestion;
    const page = rootGetters["mediawiki/getPage"](
      suggestion.sourceLanguage,
      suggestion.sourceTitle
    );
    let section = rootGetters["mediawiki/getPageSection"](page, sectionTitle);

    if (!section) {
      await dispatch("mediawiki/fetchPageSections", suggestion, { root: true });

      section = rootGetters["mediawiki/getPageSection"](page, sectionTitle);
    }
    commit("setCurrentSourceSection", section);
  },

  selectSentenceForCurrentSection({ commit }, { id }) {
    commit("clearSentenceSelection");
    commit("setIsSectionTitleSelectedForTranslation", false);
    if (id) {
      commit("selectSentence", id);
    }
  },

  applyTranslationToSelectedSegment(
    { state, commit, dispatch },
    { translation }
  ) {
    const mutation = state.isSectionTitleSelectedForTranslation
      ? "setCurrentSourceSectionTitleTranslation"
      : "setSelectedSentenceTranslation";
    commit(mutation, translation);
    dispatch("selectNextSentence");
  },

  applyEditedTranslationToSelectedSegment({ dispatch }, { translation }) {
    dispatch("applyTranslationToSelectedSegment", { translation });
  },

  /**
   * If no sentence is selected, findIndex will return -1
   * and first sentence in array will be selected
   * @param getters
   * @param dispatch
   * @param commit
   */
  selectNextSentence({ getters, dispatch, commit }) {
    commit("setIsSectionTitleSelectedForTranslation", false);
    const sentences = getters.getCurrentSourceSectionSentences;
    const nextIndex = sentences.findIndex(sentence => sentence.selected) + 1;
    dispatch("selectSentenceForCurrentSection", sentences[nextIndex]);
  },

  selectPreviousSentence({ getters, dispatch, commit }) {
    if (getters.isCurrentSentenceFirst) {
      commit("setIsSectionTitleSelectedForTranslation", true);
      return;
    }
    const sentences = getters.getCurrentSourceSectionSentences;
    let selectedIndex = sentences.findIndex(sentence => sentence.selected);
    selectedIndex = (selectedIndex + sentences.length - 1) % sentences.length;
    dispatch("selectSentenceForCurrentSection", sentences[selectedIndex]);
  },

  clearSentenceSelection({ commit }) {
    commit("clearSentenceSelection");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
