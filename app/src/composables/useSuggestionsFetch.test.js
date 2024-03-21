import suggestionsStoreModule from "@/store/modules/suggestions";
import translatorStoreModule from "@/store/modules/translator";
import appendixTitles from "@/utils/appendix/appendixTitles.json";
import SuggestionSeedCollection from "@/wiki/cx/models/suggestionSeedCollection";
import { createStore, useStore } from "vuex";
import useSuggestionsFetch from "./useSuggestionsFetch";
import { createApp } from "vue";

const dummySeedArticles = {
  testTitle0: {
    References: "Referencias",
    "See also": "Véase también",
    Notes: "Notas",
  },
  testTitle1: {},
  testTitle2: {
    References: "Referencias",
    "Early life": "",
  },
  invalidSeedTitle: {},
};

global.fetch = jest.fn((url) => {
  const urlParams = url.replace("/suggest/sections/", "");
  const [sourceTitle, sourceLanguage, targetLanguage] = urlParams.split("/");
  const ok = sourceTitle !== "invalidSeedTitle";

  return Promise.resolve({
    ok,
    json: () =>
      Promise.resolve({
        sections: {
          sourceLanguage,
          targetLanguage,
          sourceTitle,
          targetTitle: "",
          present: [],
          missing: dummySeedArticles[sourceTitle],
          sourceSections: [],
          targetSections: [],
        },
      }),
  });
});

/** @type {string[]} */
const seeds = Object.keys(dummySeedArticles);

const {
  getSectionSuggestionsForPair,
  findSuggestionSeedCollection,
  getFavoriteTitlesByLanguagePair,
} = suggestionsStoreModule.getters;

const { getTranslationsForLanguagePair } = translatorStoreModule.getters;

const {
  addSectionSuggestion,
  increaseSectionSuggestionsLoadingCount,
  decreaseSectionSuggestionsLoadingCount,
} = suggestionsStoreModule.mutations;

const state = {
  sectionSuggestionsLoadingCount: 0,
  sectionSuggestions: [],
  appendixSectionTitles: appendixTitles,
  favorites: [],
  suggestionSeedCollections: [
    new SuggestionSeedCollection({
      sourceLanguage: "en",
      targetLanguage: "es",
      seeds,
    }),
  ],
};

const testSuggestionsStoreModule = {
  namespaced: true,
  state,
  getters: {
    getFavoriteTitlesByLanguagePair,
    getSectionSuggestionsForPair,
    findSuggestionSeedCollection,
    getNumberOfSectionSuggestionsToFetch: () => () => 3,
  },
  mutations: {
    increaseSectionSuggestionsLoadingCount,
    decreaseSectionSuggestionsLoadingCount,
    addSectionSuggestion,
  },
};

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state: {
        sourceLanguage: "en",
        targetLanguage: "es",
      },
    },
    mediawiki: {
      namespaced: true,
      actions: {
        fetchPageMetadata: () => {},
      },
    },
    suggestions: testSuggestionsStoreModule,
    translator: {
      namespaced: true,
      getters: {
        getTranslationsForLanguagePair,
      },
      state: {
        translations: [],
      },
    },
  },
});

const mockLoadComposableInApp = (composable) => {
  let result;
  let store;
  const app = createApp({
    setup() {
      result = composable();
      store = useStore();

      // suppress missing template warning
      return () => {};
    },
  });
  app.use(mockStore);
  app.mount(document.createElement("div"));

  return { result, app, store };
};

describe("useSuggestionsFetch composable test", () => {
  it("fetchNextSectionSuggestionsSlice test", async () => {
    const data = mockLoadComposableInApp(() => useSuggestionsFetch());
    const { fetchNextSectionSuggestionsSlice } = data.result;

    await fetchNextSectionSuggestionsSlice();
    const getSuggestionTitles = (suggestions) =>
      suggestions.map((sectionSuggestion) => sectionSuggestion.sourceTitle);

    const suggestionTitles = getSuggestionTitles(
      data.store.state.suggestions.sectionSuggestions
    );
    suggestionTitles.sort();
    expect(suggestionTitles).toEqual([
      "testTitle0",
      "testTitle1",
      "testTitle2",
    ]);

    const listableSuggestions = data.store.getters[
      "suggestions/getSectionSuggestionsForPair"
    ]("en", "es");
    expect(getSuggestionTitles(listableSuggestions)).toEqual(["testTitle2"]);
  });
});
