import { createStore } from "vuex";
import SubSectionModel from "@/wiki/cx/models/subSection";

const subSections = [
  new SubSectionModel({ node: { id: "cxSourceSection1" } }),
  new SubSectionModel({ node: { id: "cxSourceSection2" } }),
];

const applicationModule = {
  namespaced: true,
  state: {
    currentSourceSection: {
      subSections,
    },
    translationDataLoadingCounter: 0,
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
