import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import Vuex from "vuex";
import Vue from "vue";

const sectionSuggestion = new SectionSuggestion({
  targetLanguage: "en",
  targetTitle: "Test target title",
  missing: {
    source2: "target2",
    source1: "target1",
    source3: "target3"
  },
  sourceSections: ["source1", "source2", "source3"]
});

const applicationModule = {
  namespaced: true,
  state: { currentSectionSuggestion: sectionSuggestion }
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { application: applicationModule }
});
