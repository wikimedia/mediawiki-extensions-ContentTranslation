import Vuex from "vuex";
import Vue from "vue";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const sectionSourceTitles = ["title 0", "title 1", "title 2"];
const sectionSuggestion = new SectionSuggestion({
  sourceTitle: "Test Title"
});

Vue.use(Vuex);

export default new Vuex.Store({
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
