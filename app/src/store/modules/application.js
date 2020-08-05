const state = {};

const mutations = {
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
  }
};

const actions = {
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
