import { mount, createLocalVue } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import pageApi from "../../wiki/mw/api/page";
import SXArticleSearch from "./SXArticleSearch";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import CompositionApi from "@vue/composition-api";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuex);
localVue.use(VueBananaI18n);

const getLocalStorageItem = jest.fn(item => JSON.stringify(["en", "bn"]));
Object.defineProperty(global.navigator, "language", {
  value: "en-US",
  writable: false
});
Object.defineProperty(global.navigator, "languages", {
  value: ["en-US", "en", "es", "de"],
  writable: false
});

const autonyms = {
  en: "English",
  de: "Deutsch",
  es: "Espanol",
  bn: "Bengali"
};

const mockResults = [
  new Page({
    thumbnail: { source: "/thumbnail1.jpg" },
    title: "Test page1",
    description: "Test description1",
    langLinksCount: 5
  }),
  new Page({
    thumbnail: { source: "/thumbnail2.jpg" },
    title: "Test page2",
    description: "Test description2",
    langLinksCount: 10
  })
];

jest.mock("../../wiki/mw/api/page", () => {
  return {
    searchPagesByTitlePrefix: jest.fn(() => Promise.resolve(mockResults))
  };
});

const getItemSpy = jest.spyOn(window.localStorage.__proto__, "getItem");
getItemSpy.mockImplementation(getLocalStorageItem);
describe("SXArticleSearch", () => {
  const sourceLanguage = "en";
  const targetLanguage = "es";

  const applicationModule = {
    namespaced: true,
    state: { sourceLanguage, targetLanguage }
  };

  const mediawikiModule = {
    namespaced: true,
    getters: {
      getLanguage: () => languageCode => ({
        autonym: autonyms[languageCode],
        dir: "ltr"
      }),
      getRecentlyEditedPages: () => [],
      getNearbyPages: () => []
    },
    actions: {
      fetchNearbyPages: jest.fn()
    }
  };

  const store = new Vuex.Store({
    modules: { application: applicationModule, mediawiki: mediawikiModule }
  });
  const mockTitle = "Test search result";
  const mockSectionSuggestion = new SectionSuggestion({
    sourceLanguage,
    targetLanguage,
    sourceTitle: mockTitle
  });
  store.dispatch = jest.fn(action => {
    if (action === "suggestions/loadSectionSuggestion") {
      return Promise.resolve(mockSectionSuggestion);
    }
  });

  const wrapper = mount(SXArticleSearch, {
    localVue,
    store
  });

  it("Search results are being rendered properly when search input is updated", async done => {
    await wrapper.setData({ searchInput: "foo" });
    const searchResultsCard = wrapper.find(".sx-article-search__results");
    expect(searchResultsCard.exists()).toBe(true);
    searchResultsCard.vm.debouncedSearchForArticles =
      searchResultsCard.vm.searchForArticles;

    await wrapper.setData({ searchInput: "bar" });

    expect(pageApi.searchPagesByTitlePrefix).toHaveBeenCalledTimes(1);

    wrapper.vm.$nextTick(async () => {
      await searchResultsCard.vm.$nextTick();
      expect(searchResultsCard.vm.searchResults).toBe(mockResults);

      const searchResultWrapper = searchResultsCard.find(
        ".cx-search-suggestion"
      );
      expect(searchResultWrapper.exists()).toBe(true);
      done();
    });
  });

  it("Component output matches snapshot", async () => {
    await wrapper.setData({ searchInput: "bar" });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("test suggestedSourceLanguages computed property", () => {
    expect(wrapper.vm.suggestedSourceLanguages).toStrictEqual(["bn", "de"]);
  });

  it("startSectionTranslation action is dispatched when suggestion-clicked event is emitted", async () => {
    const searchResultsCard = wrapper.find(".sx-article-search__results");
    const searchResultWrapper = wrapper.find(".cx-search-suggestion");

    await searchResultWrapper.trigger("click");
    expect(searchResultsCard.emitted("suggestion-clicked")).toBeTruthy();
    expect(store.dispatch).toHaveBeenCalledWith(
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage,
        targetLanguage,
        sourceTitle: searchResultWrapper.vm.suggestion.title
      }
    );
    expect(store.dispatch).toHaveBeenCalledWith(
      "application/startSectionTranslation",
      mockSectionSuggestion
    );
  });
});
