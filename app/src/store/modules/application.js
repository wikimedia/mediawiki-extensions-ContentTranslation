const state = {
  /** @type SectionSuggestion */
  currentSectionSuggestion: null,
  /** @type PageSection */
  currentSourceSection: null,
  /** @type String */
  currentEditedSentenceTranslation: null
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
  clearSentenceSelection(state) {
    const sentence = state.currentSourceSection.sentences.find(
      sentence => sentence.selected
    );

    if (sentence) {
      sentence.selected = false;
    }
  },
  selectSentence(state, id) {
    const sentence = state.currentSourceSection.sentences.find(
      sentence => sentence.id === id
    );
    sentence.selected = true;
  },
  setSelectedSentenceTranslation(state, translation) {
    /** @type {SectionSentence} */
    const selectedSentence = state.currentSourceSection.sentences.find(
      sentence => sentence.selected
    );
    selectedSentence.translatedContent = translation;
  },
  setCurrentEditedTranslation(state, translation) {
    state.currentEditedSentenceTranslation = translation;
  },
  clearCurrentEditedTranslation(state) {
    state.currentEditedSentenceTranslation = null;
  }
};

const getters = {
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
  isCurrentSentenceFirst: (state, getters) =>
    getters.getCurrentSourceSectionSentences.findIndex(
      sentence => sentence.selected
    ) === 0
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
    commit("clearCurrentEditedTranslation");
    if (id) {
      commit("selectSentence", id);
    }
  },
  applyTranslationToSelectedSentence({ commit, dispatch }, { translation }) {
    commit("setSelectedSentenceTranslation", translation);
    dispatch("selectNextSentence");
  },
  selectNextSentence({ getters, dispatch }) {
    const sentences = getters.getCurrentSourceSectionSentences;
    let selectedIndex = sentences.findIndex(sentence => sentence.selected);
    selectedIndex = (selectedIndex + 1) % sentences.length;
    dispatch("selectSentenceForCurrentSection", sentences[selectedIndex]);
  },
  selectPreviousSentence({ getters, dispatch }) {
    const sentences = getters.getCurrentSourceSectionSentences;
    let selectedIndex = sentences.findIndex(sentence => sentence.selected);
    selectedIndex = (selectedIndex + sentences.length - 1) % sentences.length;
    dispatch("selectSentenceForCurrentSection", sentences[selectedIndex]);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
