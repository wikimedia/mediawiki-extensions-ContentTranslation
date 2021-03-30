import SectionSuggestion from "./sectionSuggestion";

describe("test sectionSuggestion model", () => {
  it("id getter", () => {
    const sourceTitle = "testTitle";
    const sourceLanguage = "en";
    const targetLanguage = "es";
    const sectionSuggestion = new SectionSuggestion({
      sourceLanguage,
      targetLanguage,
      sourceTitle
    });

    expect(sectionSuggestion.id).toEqual("en/es/testTitle");
  });
});
