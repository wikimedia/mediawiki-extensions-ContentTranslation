import SXArticleSelectorHeader from "./SXArticleSelectorHeader";
import { mount, createLocalVue } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import VueBananaI18n from "vue-banana-i18n";

const localVue = createLocalVue();
localVue.use(VueBananaI18n);

describe("SXArticleSelector Header test", () => {
  const sourceArticle = new Page({
    thumbnail: {
      source: "test_thumbnail.png"
    },
    langLinksCount: 100,
    pageviews: { 1: 1, 2: 2 }
  });
  const sectionSuggestion = new SectionSuggestion({
    sourceTitle: "Test Title"
  });
  const wrapper = mount(SXArticleSelectorHeader, {
    localVue,
    propsData: {
      sourceArticle,
      sectionSuggestion
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Previous section method emitting update event correctly", () => {
    expect(wrapper.vm.weeklyViews).toEqual(3);
  });
});
