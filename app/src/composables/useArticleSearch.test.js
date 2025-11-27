import { ref, nextTick } from "vue";
import Page from "@/wiki/mw/models/page";
import useSearchArticles from "./useArticleSearch";
import pageApi from "@/wiki/mw/api/page";
import { flushPromises } from "@vue/test-utils";

const mockBreakpoints = ref({ mobile: false });
jest.mock("vue", () => {
  const actual = jest.requireActual("vue");

  return {
    ...actual,
    inject: jest.fn(() => mockBreakpoints),
  };
});

global.mw = {
  cx: {
    eventlogging: {
      stats: {
        articleSearchAccess: jest.fn(),
      },
    },
  },
};

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
  new Page({
    thumbnail: { source: "/thumbnail3.jpg" },
    title: "Test page3",
    description: "Test description3",
    langLinksCount: 15,
  }),
  new Page({
    thumbnail: { source: "/thumbnail4.jpg" },
    title: "Test page4",
    description: "Test description4",
    langLinksCount: 20,
  }),
  new Page({
    thumbnail: { source: "/thumbnail5.jpg" },
    title: "Test page5",
    description: "Test description5",
    langLinksCount: 25,
  }),
];

jest.mock("@/wiki/mw/api/page", () => {
  return {
    searchPagesByTitlePrefix: jest.fn(),
  };
});

describe("useSearchArticles", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    pageApi.searchPagesByTitlePrefix.mockResolvedValue(mockResults);
  });

  it("Search for articles is triggered when search input is updated", async () => {
    const sourceLanguage = ref("en");
    const searchInput = ref("");

    const { searchResultsSlice } = useSearchArticles(
      sourceLanguage,
      searchInput
    );

    searchInput.value = "test 1";
    await nextTick();
    jest.advanceTimersByTime(500);
    await flushPromises();

    expect(pageApi.searchPagesByTitlePrefix).toHaveBeenCalledWith(
      "test 1",
      "en"
    );
    expect(searchResultsSlice.value).toStrictEqual(mockResults.slice(0, 4));
  });

  it("Search results are limited to 4 items", async () => {
    const sourceLanguage = ref("en");
    const searchInput = ref("");

    const { searchResultsSlice } = useSearchArticles(
      sourceLanguage,
      searchInput
    );

    searchInput.value = "test";
    await nextTick();
    jest.advanceTimersByTime(500);
    await flushPromises();

    expect(searchResultsSlice.value.length).toBe(4);
    expect(searchResultsSlice.value).toStrictEqual(mockResults.slice(0, 4));
  });

  it("Search is triggered when source language changes", async () => {
    const sourceLanguage = ref("en");
    const searchInput = ref("");

    useSearchArticles(sourceLanguage, searchInput);

    searchInput.value = "test";
    await nextTick();
    jest.advanceTimersByTime(500);
    await flushPromises();
    expect(pageApi.searchPagesByTitlePrefix).toHaveBeenCalledWith("test", "en");

    sourceLanguage.value = "es";
    await nextTick();
    jest.advanceTimersByTime(500);
    await flushPromises();

    expect(pageApi.searchPagesByTitlePrefix).toHaveBeenCalledWith("test", "es");
  });

  it("Search results are cleared when search input is empty", async () => {
    const sourceLanguage = ref("en");
    const searchInput = ref("");

    const { searchResultsSlice } = useSearchArticles(
      sourceLanguage,
      searchInput
    );

    searchInput.value = "test";
    await nextTick();
    jest.advanceTimersByTime(500);
    await flushPromises();
    expect(searchResultsSlice.value.length).toBe(4);

    searchInput.value = "";
    await nextTick();

    expect(searchResultsSlice.value.length).toBe(0);
  });

  it("Loading state is set during search", async () => {
    const sourceLanguage = ref("en");
    const searchInput = ref("");

    const { searchResultsLoading } = useSearchArticles(
      sourceLanguage,
      searchInput
    );

    expect(searchResultsLoading.value).toBe(false);

    searchInput.value = "test";
    await nextTick();
    jest.advanceTimersByTime(500);

    expect(searchResultsLoading.value).toBe(true);
    await flushPromises();

    // After search completes, loading should be false
    expect(searchResultsLoading.value).toBe(false);
  });

  it("Event logging is called after search", async () => {
    const sourceLanguage = ref("en");
    const searchInput = ref("");

    useSearchArticles(sourceLanguage, searchInput);

    searchInput.value = "test";
    await nextTick();
    jest.advanceTimersByTime(500);
    await flushPromises();

    expect(mw.cx.eventlogging.stats.articleSearchAccess).toHaveBeenCalledWith(
      false
    );
  });
});
