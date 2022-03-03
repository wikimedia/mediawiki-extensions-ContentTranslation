import { createStore } from "vuex";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import SubSection from "@/wiki/cx/models/subSection";
import PageSection from "@/wiki/cx/models/pageSection";

const applicationModule = {
  namespaced: true,
  state: {
    currentMTProvider: "Apertium",
    content: "<div>Test translation</div>",
    targetLanguage: "es",
    currentSourceSection: new PageSection({
      id: "test-section",
      title: "Test section",
      isTitleSelected: false,
      subSections: [
        new SubSection({
          node: { id: "test-sub-section", children: [] },
          sentences: [
            new SectionSentence({ selected: true }),
            new SectionSentence({})
          ]
        })
      ]
    })
  },
  getters: {
    getCurrentProposedTranslation: state => state.content
  },
  mutations: {
    setCurrentMTProvider: (state, provider) => {
      state.currentMTProvider = provider;
    }
  }
};

export default createStore({
  modules: { application: applicationModule }
});
