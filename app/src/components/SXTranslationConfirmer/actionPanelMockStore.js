import { createStore } from "vuex";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const sectionSuggestion = new SectionSuggestion({
  targetLanguage: "en",
  targetTitle: "Test target title",
  missing: {
    source2: "target2",
    source1: "target1",
    source3: "target3",
  },
  sourceSections: ["source1", "source2", "source3"],
});

const applicationModule = {
  namespaced: true,
  state: { currentSectionSuggestion: sectionSuggestion },
};

export default new createStore({
  modules: { application: applicationModule },
});
