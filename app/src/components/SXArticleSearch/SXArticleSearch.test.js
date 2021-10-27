import { mount, createLocalVue } from "@vue/test-utils";
import SXArticleSearch from "./SXArticleSearch";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import CompositionApi, { computed as mockComputed } from "@vue/composition-api";
import { BreakpointsPlugin } from "@/lib/mediawiki.ui/plugins";
import mockStore from "./articleSearchMockStore";
import router from "@/router";
import { startRecentlyEditedSectionTranslation } from "./usePageTranslationStart";

import Page from "@/wiki/mw/models/page";
const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuex);
localVue.use(VueBananaI18n);
localVue.use(BreakpointsPlugin);
localVue.prototype.$logEvent = jest.fn();

// Mock matchMedia as per
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

jest.mock("@/wiki/mw/api/page", () => {
  return {
    searchPagesByTitlePrefix: jest.fn(() => Promise.resolve(mockResults))
  };
});

jest.mock("./usePageTranslationStart", () => {
  return {
    startRecentlyEditedSectionTranslation: jest.fn(),
    startNearbySectionTranslation: jest.fn(),
    startSearchResultSectionTranslation: jest.fn()
  };
});

const getLocalStorageItem = jest.fn(item => JSON.stringify(["bn"]));
const getItemSpy = jest.spyOn(window.localStorage.__proto__, "getItem");
getItemSpy.mockImplementation(getLocalStorageItem);

// Application state: { sourceLanguage: "en", targetLanguage: "es" }
jest.mock("@/store", () => jest.requireActual("./articleSearchMockStore"));
jest.mock("./useSuggestedSourceLanguages", () =>
  jest
    .fn()
    .mockImplementation(previousLanguages =>
      mockComputed(() => [...previousLanguages.value, "ar", "ko"])
    )
);

const sourceLanguage = "en";
const targetLanguage = "es";

mockStore.dispatch = jest.fn((action, payload) => {
  if (action === "suggestions/loadSectionSuggestion") {
    return Promise.resolve(
      new SectionSuggestion({
        sourceLanguage,
        targetLanguage,
        sourceTitle: payload.sourceTitle
      })
    );
  }
});

describe("SXArticleSearch component test", () => {
  const wrapper = mount(SXArticleSearch, {
    localVue,
    store: mockStore,
    router
  });

  it("Component output matches snapshot", async () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should use composable to get suggestedSourceLanguages computed property", () => {
    expect(wrapper.vm.suggestedSourceLanguages).toStrictEqual([
      "bn",
      "ar",
      "ko"
    ]);
  });

  it("should execute startRecentlyEditedSectionTranslation method when suggestion-clicked event is emitted on a recently edited suggestion", async () => {
    const suggestionsCard = wrapper.find(".sx-article-search__suggestions");
    const suggestionWrapper = wrapper.find(".cx-search-suggestion");

    await suggestionWrapper.trigger("click");
    expect(suggestionsCard.emitted("suggestion-clicked")).toBeTruthy();
    expect(startRecentlyEditedSectionTranslation).toHaveBeenCalledWith(
      new Page({
        thumbnail: { source: "/thumbnail1.jpg" },
        title: "Test page1",
        description: "Test description1",
        langLinksCount: 5
      })
    );
  });
});
