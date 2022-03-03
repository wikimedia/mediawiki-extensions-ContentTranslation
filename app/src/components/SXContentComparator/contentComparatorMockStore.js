import { createStore } from "vuex";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const sectionSourceTitles = ["title 0", "title 1", "title 2"];
const sectionSuggestion = new SectionSuggestion({
  sourceTitle: "Test Title"
});

export default createStore({
  modules: {
    application: {
      namespaced: true,
      state: { currentSectionSuggestion: sectionSuggestion },
      getters: {
        getCurrentSourceSectionTitle: state => sectionSourceTitles[0]
      }
    }
  }
});
