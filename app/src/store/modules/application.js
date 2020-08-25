const state = {
  /** @type SectionSuggestion */
  currentSectionSuggestion: null,
  /** @type PageSection */
  currentSourceSection: null
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
  clearSentenceSelection(state, { page, sectionTitle }) {
    const section = page.sections.find(
      section => section.title === sectionTitle
    );

    const sentence = section.sentences.find(sentence => sentence.selected);

    if (sentence) {
      sentence.selected = false;
    }
  },
  selectSentence(state, { page, sectionTitle, id }) {
    const section = page.sections.find(
      section => section.title === sectionTitle
    );
    const sentence = section.sentences.find(sentence => sentence.id === id);
    sentence.selected = true;
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
    (getters.getCurrentSourceSectionTitle || "").replace(/ /g, "_")
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
  selectSentenceForPageSection({ commit }, { page, sectionTitle, id }) {
    commit("clearSentenceSelection", { page, sectionTitle });
    commit("selectSentence", { page, sectionTitle, id });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
