import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import PageSection from "@/wiki/cx/models/pageSection";
import { createStore } from "vuex";

const state = {
  currentSectionSuggestion: new SectionSuggestion({
    sourceLanguage: "en",
    sourceTitle: "Test source section title",
  }),
  currentSourceSection: new PageSection({
    title: "Test source section title",
  }),
  isSectionTitleSelectedForTranslation: false,
};

export default createStore({
  modules: {
    application: {
      namespaced: true,
      state,
    },
  },
});
