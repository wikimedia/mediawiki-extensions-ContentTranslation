import SXTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";
import colors from "@/lib/mediawiki.ui/plugins/colors";
import Page from "@/wiki/mw/models/page";
import { ref } from "vue";
import { createStore } from "vuex";

const mockSourceLanguage = ref("en");
const mockTargetLanguage = ref("el");
const mockSourceTitle = ref("Test Title");
jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: mockSourceLanguage,
  targetLanguageURLParameter: mockTargetLanguage,
  pageURLParameter: mockSourceTitle,
}));

jest.mock("@/composables/useSuggestionsBookmark", () => () => ({
  markFavoritePageSuggestion: jest.fn(),
  markFavoriteSectionSuggestion: jest.fn(),
  markFavoriteSuggestion: jest.fn(),
  removeFavoriteSuggestion: jest.fn(),
}));

const mockSectionSuggestion = ref(null);
jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: mockSectionSuggestion,
}));

const mockStore = createStore({
  modules: { suggestions: { namespaced: true, state: { favorites: [] } } },
});

const i18n = createI18n();

const mockCurrentPage = new Page({
  thumbnail: { source: "test_thumbnail.png" },
  langlinkscount: 100,
  pageviews: { 1: 1, 2: 2 },
  revisions: [{ size: 20000 }], // equals 20 minutes (not quick),
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
    expect(wrapper.vm.articleLanguageCount).toEqual(101);
  });
});
