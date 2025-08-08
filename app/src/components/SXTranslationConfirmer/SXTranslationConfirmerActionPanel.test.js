import SxTranslationConfirmerActionPanel from "./SXTranslationConfirmerActionPanel";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";
import mediawikiGetters from "@/store/modules/mediawiki/getters";
import { createStore } from "vuex";
import { ref } from "vue";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import LanguageTitleGroup from "@/wiki/mw/models/languageTitleGroup";

let mockIsDesktopSite = false;
jest.mock("@/utils/mediawikiHelper", () => ({
  siteMapper: jest.requireActual("@/utils/mediawikiHelper").siteMapper,
  get isDesktopSite() {
    return mockIsDesktopSite;
  },
}));

const mockSectionSuggestion = new SectionSuggestion({
  targetLanguage: "en",
  targetTitle: "Test target title",
  missing: {
    source2: "target2",
    source1: "target1",
    source3: "target3",
  },
  sourceSections: ["source1", "source2", "source3"],
});
jest.mock("vue-router", () => ({ useRouter: jest.fn() }));

jest.mock("@/composables/useSuggestionsInitialize");
jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: {
    value: mockSectionSuggestion,
  },
}));

const mockCurrentTranslation = ref(null);
jest.mock("@/composables/useCurrentDraftTranslation", () => () => ({
  currentTranslation: mockCurrentTranslation,
}));

var mockSectionTitle = ref(null);

jest.mock("@/composables/useURLHandler", () => () => {
  return {
    sourceLanguageURLParameter: { value: "el" },
    targetLanguageURLParameter: { value: "en" },
    pageURLParameter: { value: "Test source title" },
    sectionURLParameter: mockSectionTitle,
  };
});

jest.mock(
  "./useSectionTitleValidate",
  () => () => jest.fn(() => Promise.resolve(true))
);

const languageTitleGroup = new LanguageTitleGroup("1", [
  { lang: "en", title: "Test target title" },
  { lang: "el", title: "Test source title" },
]);

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state: { sourceLanguage: "en", targetLanguage: "el" },
    },
    mediawiki: {
      namespaced: true,
      state: { languageTitleGroups: [languageTitleGroup] },
      getters: {
        getLanguageTitleGroup: mediawikiGetters.getLanguageTitleGroup,
      },
    },
  },
});

const i18n = createI18n();

describe("SXTranslationConfirmer Action Panel test", () => {
  const createWrapper = () =>
    mount(SxTranslationConfirmerActionPanel, {
      global: {
        plugins: [mockStore, i18n],
        provide: { colors: {} },
      },
    });

  it("Component output matches snapshot for the mobile site", () => {
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component output matches snapshot for the desktop site", () => {
    mockIsDesktopSite = true;
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("targetPageExists property is computed correctly", () => {
    const wrapper = createWrapper();
    expect(wrapper.vm.targetPageExists).toBe(true);
  });
});
