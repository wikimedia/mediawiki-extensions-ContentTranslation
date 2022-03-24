import { mount } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import ArticleSuggestionsCard from "./ArticleSuggestionsCard";
import { createStore } from "vuex";
import { createI18n } from "vue-banana-i18n";

const suggestions = [
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
describe("ArticleSuggestionsCard test", () => {
  const sourceLanguage = "en";

  const applicationState = { sourceLanguage };
  const applicationModule = {
    namespaced: true,
    state: applicationState,
  };

  const store = createStore({
    modules: { application: applicationModule },
  });

  const i18n = createI18n();
  const wrapper = mount(ArticleSuggestionsCard, {
    global: {
      plugins: [store, i18n],
    },
    props: {
      cardTitle: "Recently edited",
      suggestions,
    },
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
