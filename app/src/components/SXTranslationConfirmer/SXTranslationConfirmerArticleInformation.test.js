import SXTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";
import colors from "@/lib/mediawiki.ui/plugins/colors";
import Page from "@/wiki/mw/models/page";
import suggestionsGetters from "@/store/modules/suggestions/getters";
import { createStore } from "vuex";
import { ref } from "vue";

const mockSourceTitle = ref("Test Title");
const mockSourceLanguage = ref("en");
const mockTargetLanguage = ref("el");

jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: mockSourceLanguage,
  targetLanguageURLParameter: mockTargetLanguage,
  pageURLParameter: mockSourceTitle,
}));

const mockStore = createStore({
  modules: {
    suggestions: {
      namespaced: true,
      state: { favorites: [], sectionSuggestions: [] },
      getters: {
        getSectionSuggestionsForArticle:
          suggestionsGetters.getSectionSuggestionsForArticle,
      },
    },
  },
});

const i18n = createI18n();

const mockCurrentPage = new Page({
  thumbnail: { source: "test_thumbnail.png" },
  langlinkscount: 100,
  pageviews: { 1: 1, 2: 2 },
  articlesize: 1000,
});

jest.mock("@/composables/useCurrentPages", () => () => ({
  currentSourcePage: { value: mockCurrentPage },
}));

describe("SXTranslationConfirmerArticleInformation test", () => {
  const wrapper = mount(SXTranslationConfirmerArticleInformation, {
    global: { plugins: [i18n, colors, mockStore] },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Properties are computed properly", () => {
    expect(wrapper.vm.weeklyViews).toEqual("3");
    expect(wrapper.vm.sourceTitle).toEqual("Test Title");
    expect(wrapper.vm.langLinksCount).toEqual(100);
  });
});
