import { mount } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import SearchResultsCard from "./SearchResultsCard";
import { createStore } from "vuex";
import { createI18n } from "vue-banana-i18n";
import debounce from "@/utils/debounce";
jest.mock("@/utils/debounce");
debounce.mockImplementation((fn) => fn);

const i18n = createI18n();

const mockResults = [
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

jest.mock("../../wiki/mw/api/page", () => {
  return {
    searchPagesByTitlePrefix: jest.fn(() => Promise.resolve(mockResults)),
  };
});

describe("SearchResultsCard", () => {
  const sourceLanguage = "en";

  const applicationModule = {
    namespaced: true,
    state: { sourceLanguage },
  };

  const store = createStore({
    modules: { application: applicationModule },
  });

  const wrapper = mount(SearchResultsCard, {
    global: { plugins: [store, i18n] },
    props: {
      searchInput: "",
    },
  });

  it("Search for articles method is called when search input is updated", async () => {
    await wrapper.setProps({
      searchInput: "test 1",
    });

    expect(wrapper.vm.searchResultsSlice).toStrictEqual(mockResults);
  });

  it("Search results length is valid", () => {
    expect(wrapper.findAll(".cx-search-suggestion").length).toBe(
      mockResults.length
    );
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("suggestion-clicked event is emitted when search result is clicked", async () => {
    const searchResult = wrapper.find(".cx-search-suggestion");
    await searchResult.trigger("click");
    expect(wrapper.emitted("suggestion-clicked")).toBeTruthy();
  });
});
