import suggestionsModule from "./";
import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";

const { removeSectionSuggestion } = suggestionsModule.mutations;

const sourceLanguage = "en";
const targetLanguage = "es";

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
