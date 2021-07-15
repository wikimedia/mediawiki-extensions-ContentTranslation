import Vuex from "vuex";
import Page from "@/wiki/mw/models/page";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import Vue from "vue";

const sourceArticle = new Page({
  thumbnail: { source: "test_thumbnail.png" },
  langlinkscount: 100,
  pageviews: { 1: 1, 2: 2 }
});
const sectionSuggestion = new SectionSuggestion({
  sourceTitle: "Test Title"
});

const applicationModule = {
  namespaced: true,
  state: { currentSectionSuggestion: sectionSuggestion },
  getters: { getCurrentPage: () => sourceArticle }
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { application: applicationModule }
});
