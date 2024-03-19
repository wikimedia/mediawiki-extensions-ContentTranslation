import { createStore } from "vuex";
import SubSectionModel from "@/wiki/cx/models/subSection";
import Page from "@/wiki/mw/models/page";
import PageSection from "@/wiki/cx/models/pageSection";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const subSections = [
  new SubSectionModel({
    node: { id: "cxSourceSection1", children: [] },
    sentences: [],
  }),
  new SubSectionModel({
    node: { id: "cxSourceSection2", children: [] },
    sentences: [],
  }),
];

const applicationModule = {
  namespaced: true,
  state: {
    sourceLanguage: "en",
    currentSectionSuggestion: new SectionSuggestion({
      sourceLanguage: "en",
      targetLanguage: "el",
      sourceTitle: "My sentence selector page",
    }),
    translationDataLoadingCounter: 0,
  },
  getters: {
    getCurrentPage: () =>
      new Page({
        pagelanguage: "en",
        title: "My sentence selector page",
        sections: [
          new PageSection({
            title: "My sentence selector section title",
            subSections,
          }),
        ],
      }),
  },
  mutations: {
    setPreviousRoute: () => {}, // for Vue router navigation guard
  },
};

const store = createStore({
  modules: { application: applicationModule },
});

store.dispatch = jest.fn();

export default store;
