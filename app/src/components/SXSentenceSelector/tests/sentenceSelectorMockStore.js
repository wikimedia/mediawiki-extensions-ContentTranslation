import { createStore } from "vuex";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SubSectionModel from "@/wiki/cx/models/subSection";

const subSections = [
  new SubSectionModel({ node: { id: "cxSourceSection1" } }),
  new SubSectionModel({ node: { id: "cxSourceSection2" } }),
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
};

const store = createStore({
  modules: { application: applicationModule },
});

store.dispatch = jest.fn();

export default store;
