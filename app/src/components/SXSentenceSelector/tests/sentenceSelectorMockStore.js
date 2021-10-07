import Vuex from "vuex";
import Vue from "vue";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import SubSectionModel from "@/wiki/cx/models/subSection";

Vue.use(Vuex);

const subSections = [
  new SubSectionModel({ node: { id: 1 } }),
  new SubSectionModel({ node: { id: 2 } })
];

const applicationModule = {
  namespaced: true,
  state: {
    currentSectionSuggestion: new SectionSuggestion({
      sourceLanguage: "",
      targetLanguage: ""
    }),
    currentSourceSection: { subSections }
  },
  getters: {
    getCurrentSelectedSentence: () => new SectionSentence(),
    isSelectedSegmentTranslated: () => false
  }
};

const store = new Vuex.Store({
  modules: { application: applicationModule }
});

store.dispatch = jest.fn();

export default store;
