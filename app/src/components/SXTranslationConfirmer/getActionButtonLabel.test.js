import getActionButtonLabel from "./getActionButtonLabel";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";

describe("getActionButtonLabel test", () => {
  const sectionSuggestion = new SectionSuggestion({
    missing: {
      "Test missing section 1": "test",
      "Test missing section 2": "test"
    },
    present: {},
    targetTitle: "Existing target article"
  });

  it("case: missing > 1", () => {
    expect(getActionButtonLabel(sectionSuggestion)).toBe(
      "cx-sx-select-section"
    );
  });

  it("case: missing = 1 & present > 0", () => {
    sectionSuggestion.missingSections = { "Test missing section 1": "test" };
    sectionSuggestion.presentSections = { "Test present section 1": "test" };
    expect(getActionButtonLabel(sectionSuggestion)).toBe(
      "cx-sx-select-section"
    );
  });

  it("case: missing = 1 & present = 0", () => {
    sectionSuggestion.presentSections = {};

    expect(getActionButtonLabel(sectionSuggestion)).toBe(
      "cx-sx-translation-confirmer-action-view-section"
    );
  });

  it("case: missing = 0 & present > 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = { "Test present section 1": "test" };

    expect(getActionButtonLabel(sectionSuggestion)).toBe(
      "cx-sx-select-section"
    );
  });

  it("case: missing = 0 & present = 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = {};

    expect(getActionButtonLabel(sectionSuggestion)).toBe(
      "cx-sx-translation-confirmer-action-new-translation"
    );
  });

  it("case: translation not exists (target page missing)", () => {
    sectionSuggestion.targetTitle = undefined;

    expect(getActionButtonLabel(sectionSuggestion)).toBe(
      "cx-sx-start-translation-button-label"
    );
  });
});
