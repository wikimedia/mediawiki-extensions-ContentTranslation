import useActionPanel from "./useActionPanel";
import { ref } from "vue";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const sectionSuggestion = ref(
  new SectionSuggestion({
    targetLanguage: "en",
    targetTitle: "Test target title",
    missing: {
      source2: "target2",
      source1: "target1",
      source3: "target3",
    },
    sourceSections: ["source1", "source2", "source3"],
  })
);

const { getActionButtonLabel, actionInformationMessageArgs } =
  useActionPanel(sectionSuggestion);

describe("actionInformationMessageArgs test", () => {
  it("case: missing > 1", () => {
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-existing-translation-additional-info",
      `"source1"`,
      2,
    ]);
  });

  it("case: missing = 1 & present > 0", () => {
    sectionSuggestion.value.missingSections = {
      source1: "target1",
    };

    sectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"source1"`,
    ]);
  });

  it("case: missing = 1 & present = 0", () => {
    sectionSuggestion.value.presentSections = {};

    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"source1"`,
    ]);
  });

  it("case: missing = 0 & present > 0", () => {
    sectionSuggestion.value.missingSections = {};
    sectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present",
    ]);
  });

  it("case: missing = 0 & present = 0", () => {
    sectionSuggestion.value.missingSections = {};
    sectionSuggestion.value.presentSections = {};
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-none-missing-none-present",
    ]);
  });
});

describe("getActionButtonLabel test", () => {
  it("case: prefilled section", () => {
    expect(getActionButtonLabel(true)).toBe(
      "cx-sx-translation-confirmer-translate-prefilled-section-button-label"
    );
  });

  it("case: missing > 1", () => {
    sectionSuggestion.value.missingSections = {
      source1: "target1",
      source2: "target2",
    };
    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 1 & present > 0", () => {
    sectionSuggestion.value.missingSections = {
      "Test missing section 1": "test",
    };
    sectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };
    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 1 & present = 0", () => {
    sectionSuggestion.value.presentSections = {};

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-translation-confirmer-action-view-section"
    );
  });

  it("case: missing = 0 & present > 0", () => {
    sectionSuggestion.value.missingSections = {};
    sectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };

    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 0 & present = 0", () => {
    sectionSuggestion.value.missingSections = {};
    sectionSuggestion.value.presentSections = {};

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-translation-confirmer-action-new-translation"
    );
  });

  it("case: translation not exists (target page missing)", () => {
    sectionSuggestion.value.targetTitle = undefined;

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-start-translation-button-label"
    );
  });
});
