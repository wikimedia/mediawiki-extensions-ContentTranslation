import useActionPanel from "./useActionPanel";
// import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
jest.mock("../../store", () => jest.requireActual("./actionPanelMockStore"));
import Vue from "vue";
import CompositionApi from "@vue/composition-api";
Vue.use(CompositionApi);
import mockStore from "./actionPanelMockStore";

const { getActionButtonLabel, actionInformationMessageArgs } = useActionPanel();

const sectionSuggestion = mockStore.state.application.currentSectionSuggestion;

describe("actionInformationMessageArgs test", () => {
  it("case: missing > 1", () => {
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-existing-translation-additional-info",
      `"source1"`,
      2
    ]);
  });

  it("case: missing = 1 & present > 0", () => {
    sectionSuggestion.missingSections = {
      source1: "target1"
    };

    sectionSuggestion.presentSections = {
      "Test present section 1": "test"
    };
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"source1"`
    ]);
  });

  it("case: missing = 1 & present = 0", () => {
    sectionSuggestion.presentSections = {};

    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"source1"`
    ]);
  });

  it("case: missing = 0 & present > 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = {
      "Test present section 1": "test"
    };
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ]);
  });

  it("case: missing = 0 & present = 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = {};
    expect(actionInformationMessageArgs.value).toStrictEqual([
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ]);
  });
});

describe("getActionButtonLabel test", () => {
  const { getActionButtonLabel } = useActionPanel();
  // const sectionSuggestion = new SectionSuggestion({
  //   missing: {
  //     "Test missing section 1": "test",
  //     "Test missing section 2": "test"
  //   },
  //   present: {},
  //   targetTitle: "Existing target article"
  // });

  it("case: prefilled section", () => {
    expect(getActionButtonLabel(true)).toBe(
      "cx-sx-translation-confirmer-translate-prefilled-section-button-label"
    );
  });

  it("case: missing > 1", () => {
    sectionSuggestion.missingSections = {
      source1: "target1",
      source2: "target2"
    };
    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 1 & present > 0", () => {
    sectionSuggestion.missingSections = { "Test missing section 1": "test" };
    sectionSuggestion.presentSections = { "Test present section 1": "test" };
    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 1 & present = 0", () => {
    sectionSuggestion.presentSections = {};

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-translation-confirmer-action-view-section"
    );
  });

  it("case: missing = 0 & present > 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = { "Test present section 1": "test" };

    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 0 & present = 0", () => {
    sectionSuggestion.missingSections = {};
    sectionSuggestion.presentSections = {};

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-translation-confirmer-action-new-translation"
    );
  });

  it("case: translation not exists (target page missing)", () => {
    sectionSuggestion.targetTitle = undefined;

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-start-translation-button-label"
    );
  });
});
