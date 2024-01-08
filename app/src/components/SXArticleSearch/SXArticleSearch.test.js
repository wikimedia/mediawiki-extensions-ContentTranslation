import { mount } from "@vue/test-utils";
import SXArticleSearch from "./SXArticleSearch";
import { createI18n } from "vue-banana-i18n";
import { BreakpointsPlugin } from "../../lib/mediawiki.ui/plugins/";
import { createEventLogging } from "../../plugins/eventlogging";
import mockStore from "./articleSearchMockStore";
import router from "../../router";
import { computed } from "vue";
import useSuggestedSourceLanguages from "./useSuggestedSourceLanguages";
import usePageTranslationStart from "./usePageTranslationStart";

import Page from "@/wiki/mw/models/page";
import ArticleSuggestionsCard from "./ArticleSuggestionsCard";

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

jest.mock("../../wiki/mw/api/page", () => {
  return {
    searchPagesByTitlePrefix: jest.fn(() => Promise.resolve(mockResults)),
  };
});

jest.mock("../../wiki/cx/api/translator", () => ({
  fetchTranslations: jest.fn(() => Promise.resolve([])),
}));

jest.mock("../../composables/useLanguageHelper", () => {
  return {
    useSuggestionListLanguagePairUpdate: jest.fn(),
    useApplicationLanguagesInitialize: jest.fn(() => () => Promise.resolve()),
  };
});

jest.mock("./usePageTranslationStart", () => jest.fn());
jest.mock("./useSuggestedSourceLanguages", () => jest.fn());

const mockStartRecentlyEditedSectionTranslation = jest.fn();
usePageTranslationStart.mockImplementation(() => ({
  startRecentlyEditedSectionTranslation:
    mockStartRecentlyEditedSectionTranslation,
  startNearbySectionTranslation: jest.fn(),
  startSearchResultSectionTranslation: jest.fn(),
}));

const getLocalStorageItem = jest.fn((item) => JSON.stringify(["bn"]));
const getItemSpy = jest.spyOn(window.localStorage.__proto__, "getItem");
getItemSpy.mockImplementation(getLocalStorageItem);
jest.mock("../../store", () => jest.requireActual("./articleSearchMockStore"));

const mockUseSuggestedSourceLanguages = (
  sourceLanguage,
  targetLanguage,
  previousLanguages
) => computed(() => [...previousLanguages.value, "ar", "ko"]);

useSuggestedSourceLanguages.mockImplementation(mockUseSuggestedSourceLanguages);

const i18n = createI18n();
const eventLogging = createEventLogging();

describe("SXArticleSearch component test", () => {
  const wrapper = mount(SXArticleSearch, {
    global: {
      plugins: [mockStore, router, i18n, eventLogging, BreakpointsPlugin],
    },
  });

  beforeEach(async () => {
    router.push("/");
    await router.isReady();
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
    expect(mockStartRecentlyEditedSectionTranslation).toHaveBeenCalledWith(
      new Page({
        thumbnail: { source: "/thumbnail1.jpg" },
        title: "Test page1",
        description: "Test description1",
        langLinksCount: 5,
      })
    );
  });
});
