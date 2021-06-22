import { mount, createLocalVue } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import ArticleSuggestionsCard from "./ArticleSuggestionsCard";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
const localVue = createLocalVue();
localVue.use(VueBananaI18n);
localVue.use(Vuex);

const suggestions = [
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
describe("ArticleSuggestionsCard test", () => {
  const sourceLanguage = "en";

  const applicationState = { sourceLanguage };
  const applicationModule = {
    namespaced: true,
    state: applicationState
  };

  const store = new Vuex.Store({
    modules: { application: applicationModule }
  });

  const wrapper = mount(ArticleSuggestionsCard, {
    localVue,
    store,
    propsData: {
      cardTitle: "Recently edited",
      suggestions
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Suggestions length is valid", () => {
    expect(wrapper.findAll(".cx-search-suggestion").length).toBe(
      suggestions.length
    );
  });

  it("suggestion-clicked event is emitted on search suggestion click", async () => {
    const searchSuggestion = wrapper.find(".cx-search-suggestion");
    await searchSuggestion.trigger("click");
    expect(wrapper.emitted("suggestion-clicked")[0]).toEqual([suggestions[0]]);
  });
});
