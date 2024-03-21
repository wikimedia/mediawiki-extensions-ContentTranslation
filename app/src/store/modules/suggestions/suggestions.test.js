import suggestionsModule from "./";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const { removeSectionSuggestionFromList } = suggestionsModule.mutations;

const sourceLanguage = "en";
const targetLanguage = "es";

describe("test suggestion mutations", () => {
  it("'removeSectionSuggestionFromList' should set 'isListable' property to false", () => {
    const sourceTitle = "testTitle";
    const sectionSuggestion = new SectionSuggestion({
      sourceLanguage,
      targetLanguage,
      sourceTitle,
    });

    const state = {};
    // apply mutation
    removeSectionSuggestionFromList(state, sectionSuggestion);
    // assert result
    expect(sectionSuggestion.isListable).toEqual(false);
  });
});
