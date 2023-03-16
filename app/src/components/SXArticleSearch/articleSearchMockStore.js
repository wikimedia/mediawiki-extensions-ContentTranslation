import { createStore } from "vuex";
import Page from "../../wiki/mw/models/page";

const sourceLanguage = "en";
const targetLanguage = "es";
const autonyms = {
  en: "English",
  de: "Deutsch",
  es: "Espanol",
  bn: "Bengali",
};

const mockPages = [
  new Page({
    thumbnail: { source: "/thumbnail1.jpg" },
    title: "Test page1",
    description: "Test description1",
    langLinksCount: 5,
  }),
  new Page({
    thumbnail: { source: "/thumbnail2.jpg" },
    title: "Test page2",
    description: "Test description2",
    langLinksCount: 10,
  }),
];

const applicationModule = {
  namespaced: true,
  state: { sourceLanguage, targetLanguage },
  mutations: {
    setSourceLanguage: () => {},
    setTargetLanguage: () => {},
  },
};

const mediawikiModule = {
  namespaced: true,
  getters: {
    getLanguage: () => (languageCode) => ({
      autonym: autonyms[languageCode],
      dir: "ltr",
    }),
    getRecentlyEditedPages: () => mockPages,
    getNearbyPages: () => mockPages,
  },
  actions: {
    fetchNearbyPages: jest.fn(),
  },
};

export default createStore({
  modules: {
    application: applicationModule,
    mediawiki: mediawikiModule,
    translator: {
      namespaced: true,
      state: { translations: [] },
    },
  },
});
