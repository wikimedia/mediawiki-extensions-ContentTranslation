import Vuex from "vuex";
import Vue from "vue";
import Page from "../../wiki/mw/models/page";

const sourceLanguage = "en";
const targetLanguage = "es";
const autonyms = {
  en: "English",
  de: "Deutsch",
  es: "Espanol",
  bn: "Bengali"
};

const mockPages = [
  new Page({
    thumbnail: { source: "/thumbnail1.jpg" },
    title: "Test page1",
    description: "Test description1",
    langLinksCount: 5
  }),
  new Page({
    thumbnail: { source: "/thumbnail2.jpg" },
    title: "Test page2",
    description: "Test description2",
    langLinksCount: 10
  })
];

const applicationModule = {
  namespaced: true,
  state: { sourceLanguage, targetLanguage }
};

const mediawikiModule = {
  namespaced: true,
  getters: {
    getLanguage: () => languageCode => ({
      autonym: autonyms[languageCode],
      dir: "ltr"
    }),
    getRecentlyEditedPages: () => mockPages,
    getNearbyPages: () => mockPages
  },
  actions: {
    fetchNearbyPages: jest.fn()
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { application: applicationModule, mediawiki: mediawikiModule }
});
