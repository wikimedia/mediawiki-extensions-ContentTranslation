import useSuggestionsFetch from "./useSuggestionsFetch";
import useSuggestionsStore from "./useSuggestionsStore";
import useSuggestionProvider from "./useSuggestionProvider";
import useURLHandler from "./useURLHandler";
import { useStore } from "vuex";

// Mock necessary modules
jest.mock("./useSuggestionsStore");
jest.mock("./usePageMetadataFetch", () => () => jest.fn());
jest.mock("./useSuggestionProvider");
jest.mock("./useURLHandler");
jest.mock("vuex");

const mockPageSuggestionFetcher = jest
  .fn()
  .mockResolvedValue([{ id: 2 }, { id: 3 }]);

const mockSectionSuggestionFetcher = jest
  .fn()
  .mockResolvedValue([{ id: 2 }, { id: 3 }]);

describe("useSuggestionsFetch composable test", () => {
  let store;
  let mockSuggestionProvider;

  beforeEach(() => {
    // Mock Vuex store
    store = {
      state: {
        suggestions: {
          maxSuggestionsPerSlice: 3,
        },
      },
      commit: jest.fn(),
      dispatch: jest.fn(),
    };
    useStore.mockReturnValue(store);

    // Mock useSuggestionsStore
    useSuggestionsStore.mockReturnValue({
      getFilteredSectionSuggestions: jest.fn().mockReturnValue([{ id: 1 }]),
      getFilteredPageSuggestions: jest.fn().mockReturnValue([{ id: 1 }]),
    });

    // Mock useSuggestionProvider
    mockSuggestionProvider = {
      getCurrentPageSuggestionProvider: jest
        .fn()
        .mockReturnValue(mockPageSuggestionFetcher),
      getCurrentSectionSuggestionProvider: jest
        .fn()
        .mockReturnValue(mockSectionSuggestionFetcher),
    };
    useSuggestionProvider.mockReturnValue(mockSuggestionProvider);

    // Mock useURLHandler
    useURLHandler.mockReturnValue({
      sourceLanguageURLParameter: { value: "en" },
      targetLanguageURLParameter: { value: "es" },
    });
  });

  it("should fetch the next section suggestions slice and commit to the store", async () => {
    const { fetchNextSectionSuggestionsSlice } = useSuggestionsFetch();

    await fetchNextSectionSuggestionsSlice();

    // Assert commits and fetches
    expect(store.commit).toHaveBeenCalledWith(
      "suggestions/increaseSectionSuggestionsLoadingCount"
    );

    // Check the number of suggestions to fetch
    expect(
      mockSuggestionProvider.getCurrentSectionSuggestionProvider
    ).toHaveBeenCalled();

    expect(mockSectionSuggestionFetcher).toHaveBeenCalledWith(2);
    expect(store.commit).toHaveBeenCalledWith(
      "suggestions/addSectionSuggestion",
      { id: 2 }
    );
    expect(store.commit).toHaveBeenCalledWith(
      "suggestions/addSectionSuggestion",
      { id: 3 }
    );

    expect(store.commit).toHaveBeenCalledWith(
      "suggestions/decreaseSectionSuggestionsLoadingCount"
    );
  });

  it("should fetch the next page suggestions slice and commit to the store", async () => {
    const { fetchNextPageSuggestionsSlice } = useSuggestionsFetch();

    await fetchNextPageSuggestionsSlice();

    // Assert commits and fetches
    expect(store.commit).toHaveBeenCalledWith(
      "suggestions/increasePageSuggestionsLoadingCount"
    );

    // Check the number of suggestions to fetch
    expect(
      mockSuggestionProvider.getCurrentPageSuggestionProvider
    ).toHaveBeenCalled();

    expect(mockPageSuggestionFetcher).toHaveBeenCalledWith(2);

    expect(store.commit).toHaveBeenCalledWith("suggestions/addPageSuggestion", {
      id: 2,
    });
    expect(store.commit).toHaveBeenCalledWith("suggestions/addPageSuggestion", {
      id: 3,
    });

    expect(store.commit).toHaveBeenCalledWith(
      "suggestions/decreasePageSuggestionsLoadingCount"
    );
  });
});
