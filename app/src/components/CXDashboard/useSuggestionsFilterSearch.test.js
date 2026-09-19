import { ref, nextTick } from "vue";
import useSuggestionsFilterSearch from "./useSuggestionsFilterSearch";

const mockSearchResultsSlice = ref([]);
const mockSearchResultsLoading = ref(false);
const mockPageCollectionGroups = ref({
  ungrouped: [
    { name: "Art collections", articlesCount: 10 },
    { name: "Science essentials", articlesCount: 5 },
  ],
});
const mockSourceLanguage = ref("en");

jest.mock("@/composables/useArticleSearch", () => () => ({
  searchResultsSlice: mockSearchResultsSlice,
  searchResultsLoading: mockSearchResultsLoading,
}));

jest.mock("@/composables/usePageCollections", () => () => ({
  pageCollectionGroups: mockPageCollectionGroups,
}));

jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: mockSourceLanguage,
}));

jest.mock("vue-banana-i18n", () => ({
  useI18n: () => ({
    i18n: (key) => key,
  }),
}));

describe("useSuggestionsFilterSearch", () => {
  beforeEach(() => {
    mockSearchResultsSlice.value = [];
    mockSearchResultsLoading.value = false;
  });

  it("hides local sections on All tab while article search is loading", async () => {
    const { searchInput, searchScope, searchResults } =
      useSuggestionsFilterSearch();

    searchScope.value = "all";
    mockSearchResultsLoading.value = true;
    searchInput.value = "Art";
    await nextTick();

    const keys = searchResults.value.map((menu) => menu.key);
    expect(keys).not.toContain("topic-areas");
    expect(keys).not.toContain("geography");
    expect(keys).not.toContain("collections");
  });

  it("shows matching local sections on All tab once loading finishes", async () => {
    const { searchInput, searchScope, searchResults } =
      useSuggestionsFilterSearch();

    searchScope.value = "all";
    mockSearchResultsLoading.value = true;
    searchInput.value = "Art";
    await nextTick();

    mockSearchResultsLoading.value = false;
    await nextTick();

    const keys = searchResults.value.map((menu) => menu.key);
    expect(keys).toContain("topic-areas");
    expect(keys).toContain("collections");
    expect(
      searchResults.value
        .find((menu) => menu.key === "topic-areas")
        .items.map((item) => item.label)
    ).toContain("Art");
    expect(
      searchResults.value
        .find((menu) => menu.key === "collections")
        .items.map((item) => item.label)
    ).toContain("Art collections");
  });

  it("shows local sections immediately on a single-tab scope while loading", async () => {
    const { searchInput, searchScope, searchResults } =
      useSuggestionsFilterSearch();

    searchScope.value = "topics";
    mockSearchResultsLoading.value = true;
    searchInput.value = "Art";
    await nextTick();

    const keys = searchResults.value.map((menu) => menu.key);
    expect(keys).toEqual(["topic-areas"]);
  });

  it("clears local results immediately when search input is emptied", async () => {
    const { searchInput, searchScope, searchResults } =
      useSuggestionsFilterSearch();

    searchScope.value = "topics";
    searchInput.value = "Art";
    await nextTick();
    expect(searchResults.value.map((menu) => menu.key)).toContain(
      "topic-areas"
    );

    searchInput.value = "";
    await nextTick();
    expect(searchResults.value).toEqual([]);
  });
});
