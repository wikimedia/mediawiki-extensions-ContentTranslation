import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import PageSection from "@/wiki/cx/models/pageSection";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  currentSectionSuggestion: new SectionSuggestion({
    sourceLanguage: "en",
    sourceTitle: "Test source section title"
  }),
  currentSourceSection: new PageSection({
    title: "Test source section title"
  }),
  isSectionTitleSelectedForTranslation: false
};

export default new Vuex.Store({
  modules: {
    application: {
      namespaced: true,
      state
    }
  }
});
