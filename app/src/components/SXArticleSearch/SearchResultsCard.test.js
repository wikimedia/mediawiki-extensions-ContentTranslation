import { mount, createLocalVue } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import SearchResultsCard from "./SearchResultsCard";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

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

describe("SearchResultsCard", () => {
  const sourceLanguage = "en";

  const applicationModule = {
    namespaced: true,
    state: { sourceLanguage }
  };

  const store = new Vuex.Store({
    modules: { application: applicationModule }
  });

  const wrapper = mount(SearchResultsCard, {
    localVue,
    store
  });

  it("Component output matches snapshot", () => {
    wrapper.vm.searchResults = mockResults;
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Search results length is valid", () => {
    expect(wrapper.findAll(".cx-search-suggestion").length).toBe(
      mockResults.length
    );
  });

  it("Search for articles method is called when search input is updated", async () => {
    wrapper.vm.debouncedSearchForArticles = jest.fn(() => {});

    await wrapper.setProps({
      searchInput: "test 1"
    });

    expect(wrapper.vm.debouncedSearchForArticles).toHaveBeenCalledTimes(1);
  });
});
