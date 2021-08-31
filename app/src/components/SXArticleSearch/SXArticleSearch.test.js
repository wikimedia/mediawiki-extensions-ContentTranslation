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
localVue.prototype.$logEvent = jest.fn();

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

const mockPages = [
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
      getRecentlyEditedPages: () => mockPages,
      getNearbyPages: () => mockPages
    },
    actions: {
      fetchNearbyPages: jest.fn()
    }
  };

  const store = new Vuex.Store({
    modules: { application: applicationModule, mediawiki: mediawikiModule }
  });
  store.dispatch = jest.fn((action, payload) => {
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

  const wrapper = mount(SXArticleSearch, {
    localVue,
    store
  });

  it("Component output matches snapshot", async () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("test suggestedSourceLanguages computed property", () => {
    expect(wrapper.vm.suggestedSourceLanguages).toStrictEqual(["bn", "de"]);
  });

  it("startSectionTranslation action is dispatched when suggestion-clicked event is emitted", async () => {
    const suggestionsCard = wrapper.find(".sx-article-search__suggestions");
    const suggestionWrapper = wrapper.find(".cx-search-suggestion");

    await suggestionWrapper.trigger("click");
    expect(suggestionsCard.emitted("suggestion-clicked")).toBeTruthy();
    expect(store.dispatch).toHaveBeenNthCalledWith(
      3,
      "suggestions/loadSectionSuggestion",
      {
        sourceLanguage,
        targetLanguage,
        sourceTitle: "Test page1"
      }
    );
    expect(store.dispatch).toHaveBeenNthCalledWith(
      4,
      "application/initializeSectionTranslation",
      new SectionSuggestion({
        sourceLanguage,
        targetLanguage,
        sourceTitle: "Test page1"
      })
    );
  });
});
