import suggestionsModule from "./";
import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";
import SuggestionSeedCollection from "../../../wiki/cx/models/suggestionSeedCollection";
import appendixTitles from "../../../utils/appendix/appendixTitles.json";

const { actions, mutations, getters } = suggestionsModule;
const { removeSectionSuggestion } = mutations;
const { fetchNextSectionSuggestionsSlice } = actions;
const { sectionSuggestionsForArticleExists, getSectionSuggestionsForPair } =
  getters;
const sourceLanguage = "en";
const targetLanguage = "es";

const dummyMissingSections = {
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
          missing: dummyMissingSections[sourceTitle],
          sourceSections: [],
          targetSections: [],
        },
      }),
  });
});

describe("test suggestion mutations", () => {
  it("removeSectionSuggestion", () => {
    const sourceTitle = "testTitle";
    const sectionSuggestion = new SectionSuggestion({
      sourceLanguage,
      targetLanguage,
      sourceTitle,
    });

    const sectionSuggestions = [sectionSuggestion];

    const sectionSuggestionClone = new SectionSuggestion({
      sourceLanguage,
      targetLanguage,
      sourceTitle,
    });

    // mock state
    const state = { sectionSuggestions };
    // apply mutation
    removeSectionSuggestion(state, sectionSuggestionClone);
    // assert result
    expect(state.sectionSuggestions.length).toEqual(0);
  });
});

describe("test suggestion actions", () => {
  it("fetchNextSectionSuggestionsSlice test", async () => {
    /** @type {string[]} */
    const seeds = Object.keys(dummyMissingSections);
    const state = {
      sectionSuggestionsLoadingCount: 0,
      sectionSuggestions: [],
      appendixSectionTitles: appendixTitles,
      sectionSuggestionSeedCollections: [
        new SuggestionSeedCollection({
          sourceLanguage,
          targetLanguage,
          seeds,
        }),
      ],
    };
    const getters = {
      sectionSuggestionsForArticleExists:
        sectionSuggestionsForArticleExists(state),
      getSectionSuggestionsForPair: getSectionSuggestionsForPair(state),
    };
    getters.getNumberOfSectionSuggestionsToFetch = () => 3;

    const context = {
      commit: (mutation, argument) => mutations[mutation](state, argument),
      dispatch: function (action) {
        if (action === "getSuggestionSeed") {
          const seedCollection = state.sectionSuggestionSeedCollections.find(
            (collection) =>
              collection.sourceLanguage === sourceLanguage &&
              collection.targetLanguage === targetLanguage
          );

          return Promise.resolve(
            (seedCollection && seedCollection.shiftSeeds()) || null
          );
        }
      },
      rootState: {
        application: {
          sourceLanguage,
          targetLanguage,
        },
      },
      getters,
      state,
    };
    await fetchNextSectionSuggestionsSlice(context);
    const suggestionTitles = state.sectionSuggestions.map(
      (sectionSuggestion) => sectionSuggestion.sourceTitle
    );
    expect(suggestionTitles).toEqual(["testTitle2"]);
  });
});
