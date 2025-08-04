import useActionPanel from "./useActionPanel";
import { ref } from "vue";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import { createStore } from "vuex";
import mediawikiGetters from "@/store/modules/mediawiki/getters";
import LanguageTitleGroup from "@/wiki/mw/models/languageTitleGroup";
import DraftTranslation from "@/wiki/cx/models/draftTranslation";
import { loadTestComposable } from "@/utils/loadTestComposable";

jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: { value: "en" },
  targetLanguageURLParameter: { value: "el" },
  pageURLParameter: { value: "Test source title" },
}));

const mockCurrentTranslation = ref(null);
jest.mock("@/composables/useCurrentDraftTranslation", () => () => ({
  currentTranslation: mockCurrentTranslation,
}));

const languageTitleGroup = new LanguageTitleGroup("1", [
  { lang: "en", title: "Test source title" },
  { lang: "el", title: "Test target title" },
]);

const mockSectionSuggestion = ref(
  new SectionSuggestion({
    targetLanguage: "en",
    targetTitle: "Test target title",
    sourceSections: ["source1", "source2", "source3"],
  })
);

jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: mockSectionSuggestion,
}));

const mockStore = createStore({
  modules: {
    mediawiki: {
      namespaced: true,
      state: { languageTitleGroups: [languageTitleGroup] },
      getters: {
        getLanguageTitleGroup: mediawikiGetters.getLanguageTitleGroup,
      },
    },
  },
});

const messages = {
  "cx-sx-existing-translation-additional-info":
    "Expand with $1 and $2 more sections",
  "cx-sx-translation-confirmer-action-message-single-missing-multiple-present":
    "Expand with $1 or check existing sections",
  "cx-sx-translation-confirmer-action-message-single-missing-none-present":
    "Expand with $1 section.",
};

mw.Message.setMessages(messages);

describe("actionInformationMessage test", () => {
  const data = loadTestComposable(() => useActionPanel(), [mockStore]);

  const { actionInformationMessage } = data.result;
  it("case: missing > 1", () => {
    mockSectionSuggestion.value.missingSections = {
      source2: "target2",
      "Empresaria<sup><span>[</span>1<span>]</span></sup>": "target1",
      source3: "target3",
    };

    expect(actionInformationMessage.value).toBe(
      `Expand with \"Empresaria<sup><span>[</span>1<span>]</span></sup>\" and 2 more sections`
    );
  });

  it("case: missing = 1 & present > 0", () => {
    mockSectionSuggestion.value.missingSections = {
      "<i>Char Bagh</i>": "target1",
    };

    mockSectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };
    expect(actionInformationMessage.value).toBe(
      'Expand with "<i>Char Bagh</i>" or check existing sections'
    );
  });

  it("case: missing = 1 & present = 0", () => {
    mockSectionSuggestion.value.presentSections = {};

    expect(actionInformationMessage.value).toBe(
      'Expand with "<i>Char Bagh</i>" section.'
    );
  });

  it("case: missing = 0 & present > 0", () => {
    mockSectionSuggestion.value.missingSections = {};
    mockSectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };
    expect(actionInformationMessage.value).toBe(
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    );
  });

  it("case: missing = 0 & present = 0", () => {
    mockSectionSuggestion.value.missingSections = {};
    mockSectionSuggestion.value.presentSections = {};
    expect(actionInformationMessage.value).toBe(
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    );
  });
});

describe("Test 'getActionButtonLabel' method", () => {
  const data = loadTestComposable(() => useActionPanel(), [mockStore]);
  const { getActionButtonLabel } = data.result;
  it("case: prefilled section", () => {
    expect(getActionButtonLabel(true)).toBe(
      "cx-sx-translation-confirmer-translate-prefilled-section-button-label"
    );
  });

  it("case: missing > 1", () => {
    mockSectionSuggestion.value.missingSections = {
      source1: "target1",
      source2: "target2",
    };
    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 1 & present > 0", () => {
    mockSectionSuggestion.value.missingSections = {
      "Test missing section 1": "test",
    };
    mockSectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };
    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 1 & present = 0", () => {
    mockSectionSuggestion.value.presentSections = {};

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-translation-confirmer-action-view-section"
    );
  });

  it("case: missing = 0 & present > 0", () => {
    mockSectionSuggestion.value.missingSections = {};
    mockSectionSuggestion.value.presentSections = {
      "Test present section 1": "test",
    };

    expect(getActionButtonLabel(false)).toBe("cx-sx-select-section");
  });

  it("case: missing = 0 & present = 0", () => {
    mockSectionSuggestion.value.missingSections = {};
    mockSectionSuggestion.value.presentSections = {};

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-translation-confirmer-action-new-translation"
    );
  });

  it("case: target page is missing", () => {
    // Remove "el" entry from language-title group
    mockStore.state.mediawiki.languageTitleGroups = [
      new LanguageTitleGroup("1", [{ lang: "en", title: "Test source title" }]),
    ];

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-start-translation-button-label"
    );
  });

  it("case: draft translation exists for the given URL language pair and title", () => {
    mockCurrentTranslation.value = new DraftTranslation({});

    expect(getActionButtonLabel(false)).toBe(
      "cx-sx-translation-confirmer-continue-translation-button-label"
    );
  });
});
