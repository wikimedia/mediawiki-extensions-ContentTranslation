import SXTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation";
import { mount, createLocalVue } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";
import colors from "../../lib/mediawiki.ui/plugins/colors";
import CompositionApi from "@vue/composition-api";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(VueBananaI18n);
localVue.use(Vuex);
localVue.use(colors);

describe("SXTranslationConfirmerArticleInformation test", () => {
  const sourceArticle = new Page({
    thumbnail: { source: "test_thumbnail.png" },
    langlinkscount: 100,
    pageviews: { 1: 1, 2: 2 }
  });
  const sectionSuggestion = new SectionSuggestion({
    sourceTitle: "Test Title"
  });
  const applicationModule = {
    namespaced: true,
    state: { currentSectionSuggestion: sectionSuggestion },
    getters: { getCurrentPage: () => sourceArticle }
  };
  const store = new Vuex.Store({
    modules: { application: applicationModule }
  });
  const wrapper = mount(SXTranslationConfirmerArticleInformation, {
    localVue,
    store
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Properties are computed properly", () => {
    expect(wrapper.vm.weeklyViews).toEqual(3);
    expect(wrapper.vm.sourceTitle).toEqual("Test Title");
    expect(wrapper.vm.langLinksCount).toEqual(100);
  });
});
