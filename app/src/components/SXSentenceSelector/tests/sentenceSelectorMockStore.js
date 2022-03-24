import { createStore } from "vuex";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SubSectionModel from "@/wiki/cx/models/subSection";

const subSections = [
  new SubSectionModel({ node: { id: 1 } }),
  new SubSectionModel({ node: { id: 2 } }),
];

const applicationModule = {
  namespaced: true,
  state: {
    currentSectionSuggestion: new SectionSuggestion({
      sourceLanguage: "",
      targetLanguage: "",
    }),
    currentSourceSection: { subSections },
  },
  mutations: {
    clearPublishFeedbackMessages: () => {},
  },
};

const store = createStore({
  modules: { application: applicationModule },
});

store.dispatch = jest.fn();

export default store;
