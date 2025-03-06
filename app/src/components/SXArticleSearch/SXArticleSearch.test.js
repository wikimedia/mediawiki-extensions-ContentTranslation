import { mount } from "@vue/test-utils";
import SXArticleSearch from "./SXArticleSearch";
import { createI18n } from "vue-banana-i18n";
import { BreakpointsPlugin } from "../../lib/mediawiki.ui/plugins/";
import mockStore from "./articleSearchMockStore";
import { computed, ref } from "vue";
import useSuggestedSourceLanguages from "./useSuggestedSourceLanguages";
import ArticleSuggestionsCard from "./ArticleSuggestionsCard";
import Page from "@/wiki/mw/models/page";

// Mock matchMedia as per
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("@/wiki/mw/api/page", () => {
  return {
    searchPagesByTitlePrefix: jest.fn(() => Promise.resolve(mockResults)),
  };
});

jest.mock("@/composables/useTranslationsFetch", () => () => ({
  fetchAllTranslations: jest.fn(),
}));

jest.mock("@/composables/useLanguageHelper", () => {
  return {
    useSuggestionListLanguagePairUpdate: jest.fn(),
    useApplicationLanguagesInitialize: jest.fn(() => () => Promise.resolve()),
  };
});

const mockPreviousEditsInSource = ref(["Test page1", "Test page2"]);
jest.mock("@/composables/useSuggestionPreviousEditsSeeds", () => () => ({
  fetchPreviousEditsInSource: jest.fn(() => Promise.resolve()),
  previousEditsInSource: mockPreviousEditsInSource,
}));

const mockPages = [
  new Page({
    thumbnail: { source: "/thumbnail1.jpg" },
    title: "Test page1",
    description: "Test description1",
    langLinksCount: 5,
  }),
  new Page({
    thumbnail: { source: "/thumbnail2.jpg" },
    title: "Test page2",
    description: "Test description2",
    langLinksCount: 10,
  }),
];

jest.mock("@/wiki/mw/api/page", () => {
  return {
    fetchPages: jest.fn((language, titles) => {
      if (
        language === "en" &&
        JSON.stringify(titles) === JSON.stringify(["Test page1", "Test page2"])
      ) {
        return Promise.resolve(mockPages);
      }

      return Promise.resolve([]);
    }),
  };
});

const mockStartTranslation = jest.fn();
jest.mock(
  "@/composables/useTranslationStart",
  () => () => mockStartTranslation
);
jest.mock("./useSuggestedSourceLanguages", () => jest.fn());

const mockSourceLanguage = ref("en");
const mockTargetLanguage = ref("es");
jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: mockSourceLanguage,
  targetLanguageURLParameter: mockTargetLanguage,
}));

const getLocalStorageItem = jest.fn(() => JSON.stringify(["bn"]));
const getItemSpy = jest.spyOn(window.localStorage.__proto__, "getItem");
getItemSpy.mockImplementation(getLocalStorageItem);
jest.mock("@/store", () => jest.requireActual("./articleSearchMockStore"));
jest.mock("vue-router", () => ({ useRouter: jest.fn() }));

const mockUseSuggestedSourceLanguages = () => ({
  getSuggestedSourceLanguages: (previousLanguages) =>
    computed(() => [...previousLanguages.value, "ar", "ko"]),
});

useSuggestedSourceLanguages.mockImplementation(mockUseSuggestedSourceLanguages);

const i18n = createI18n();

describe("SXArticleSearch component test", () => {
  const wrapper = mount(SXArticleSearch, {
    global: {
      plugins: [mockStore, i18n, BreakpointsPlugin],
    },
  });

  it("Component output matches snapshot", async () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should use composable to get suggestedSourceLanguages computed property", async () => {
    expect(wrapper.vm.suggestedSourceLanguages).toStrictEqual([
      "bn",
      "ar",
      "ko",
    ]);
  });

  it("should execute startRecentlyEditedSectionTranslation method when suggestion-clicked event is emitted on a recently edited suggestion", async () => {
    const suggestionsCard = wrapper.getComponent(ArticleSuggestionsCard);
    const suggestionWrapper = wrapper.find(".cx-search-suggestion");

    await suggestionWrapper.trigger("click");
    expect(suggestionsCard.emitted("suggestion-clicked")).toBeTruthy();
    expect(mockStartTranslation).toHaveBeenCalledWith(
      "Test page1",
      "en",
      "es",
      "suggestion_recent_edit"
    );
  });
});
