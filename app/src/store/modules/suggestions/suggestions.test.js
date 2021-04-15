jest.mock("../../../utils/siteMapper");
import suggestionsModule from "./";
import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";
const mutations = suggestionsModule.mutations;

const { removeSectionSuggestion } = mutations;

describe("test suggestion mutations", () => {
  it("removeSectionSuggestion", () => {
    const sourceTitle = "testTitle";
    const sourceLanguage = "en";
    const targetLanguage = "es";
    const sectionSuggestion = new SectionSuggestion({
      sourceLanguage,
      targetLanguage,
      sourceTitle
    });

    const sectionSuggestions = [sectionSuggestion];

    const sectionSuggestionClone = new SectionSuggestion({
      sourceLanguage,
      targetLanguage,
      sourceTitle
    });

    // mock state
    const state = { sectionSuggestions };
    // apply mutation
    removeSectionSuggestion(state, sectionSuggestionClone);
    // assert result
    expect(state.sectionSuggestions.length).toEqual(0);
  });
});
