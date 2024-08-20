import suggestionsStoreModule from "@/store/modules/suggestions";
import translatorStoreModule from "@/store/modules/translator";
import appendixTitles from "@/utils/appendix/appendixTitles.json";
import SuggestionSeedCollection from "@/wiki/cx/models/suggestionSeedCollection";
import { createStore, useStore } from "vuex";
import useSuggestionsFetch from "./useSuggestionsFetch";
import { createApp } from "vue";

global.fetch = jest.fn((url) => {
  const parsedUrl = new URL(url);
  const seed = parsedUrl.searchParams.get("seed");
  const ok = seed !== "invalidSeedTitle";

  return Promise.resolve({
    ok,
    json: () =>
      Promise.resolve([
        {
          source_title: "testTitle0",
          target_title: "",
          present: [],
          missing: {
            References: "Referencias",
            "See also": "Véase también",
            Notes: "Notas",
          },
          source_sections: [],
          target_sections: [],
        },
        {
          source_title: "testTitle1",
          target_title: "",
          present: [],
          missing: {
            Valid1: "Valid1",
            Valid2: "Valid2",
          },
          source_sections: [],
          target_sections: [],
        },
        {
          source_title: "testTitle2",
          target_title: "",
          present: [],
          missing: {
            References: "Referencias",
            "Early life": "",
          },
          source_sections: [],
          target_sections: [],
        },
        {
          source_title: "testTitle3",
          target_title: "",
          present: [],
          missing: {
            Valid3: "Valid3",
            Valid4: "Valid4",
          },
          source_sections: [],
          target_sections: [],
        },
      ]),
  });
});

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
      seeds: ["seed0"],
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
      "testTitle3",
    ]);

    const listableSuggestions = data.store.getters[
      "suggestions/getSectionSuggestionsForPair"
    ]("en", "es");

    expect(getSuggestionTitles(listableSuggestions)).toEqual([
      "testTitle1",
      "testTitle2",
      "testTitle3",
    ]);
  });
});
