import getActionInformationMessageArgs from "./getActionInformationMessageArgs";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";

describe("getActionButtonLabel test", () => {
  const firstMissingSectionTitle = "Test missing section 1";
  const sectionSuggestion = new SectionSuggestion({
    missing: {
      [firstMissingSectionTitle]: "test",
      "Test missing section 2": "test"
    },
    present: {}
  });
  it("case: missing > 1", () => {
    expect(getActionInformationMessageArgs(sectionSuggestion)).toStrictEqual([
      "cx-sx-existing-translation-additional-info",
      `"${firstMissingSectionTitle}"`,
      1
    ]);
  });
  it("case: missing = 1 & present > 0", () => {
    sectionSuggestion.missingSections = {
      [firstMissingSectionTitle]: "test"
    };
    sectionSuggestion.presentSections = { "Test present section 1": "test" };
    expect(getActionInformationMessageArgs(sectionSuggestion)).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${firstMissingSectionTitle}"`
    ]);
  });
  it("case: missing = 1 & present = 0", () => {
    sectionSuggestion.presentSections = {};

    expect(getActionInformationMessageArgs(sectionSuggestion)).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${firstMissingSectionTitle}"`
    ]);
  });
  it("case: missing = 0 & present > 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = { "Test present section 1": "test" };
    expect(getActionInformationMessageArgs(sectionSuggestion)).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ]);
  });
  it("case: missing = 0 & present = 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = {};
    expect(getActionInformationMessageArgs(sectionSuggestion)).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ]);
  });
});

export default (missingCount, presentCount, firstMissingSectionTitle) => {
  let i18nArgs;

  if (missingCount > 1) {
    i18nArgs = [
      "cx-sx-existing-translation-additional-info",
      `"${firstMissingSectionTitle}"`,
      missingCount - 1
    ];
  } else if (missingCount === 1) {
    if (presentCount > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
        `"${firstMissingSectionTitle}"`
      ];
    } else {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-none-present"
      ];
    }
  } else {
    if (presentCount > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
      ];
    } else {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-none-present"
      ];
    }
  }

  return i18nArgs;
};
