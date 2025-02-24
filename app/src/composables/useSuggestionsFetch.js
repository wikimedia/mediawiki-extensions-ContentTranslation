import { useStore } from "vuex";
import useSuggestionsStore from "./useSuggestionsStore";
import useSuggestionProvider from "./useSuggestionProvider";
import useURLHandler from "./useURLHandler";
import usePageMetadataFetch from "@/composables/usePageMetadataFetch";

const useSuggestionsFetch = () => {
  const store = useStore();
  const { getFilteredSectionSuggestions, getFilteredPageSuggestions } =
    useSuggestionsStore();
  const { sourceLanguageURLParameter: sourceLanguage } = useURLHandler();
  const fetchPageMetadata = usePageMetadataFetch();

  /**
   * This method calculates and returns the number of section suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @return {number} an integer indicating the number of section suggestions to be fetched
   */
  const getNumberOfSectionSuggestionsToFetch = () => {
    const existingSuggestionsForFilters = getFilteredSectionSuggestions();

    const pageSize = store.state.suggestions.maxSuggestionsPerSlice;

    return pageSize - (existingSuggestionsForFilters.length % pageSize);
  };

  /**
   * This method calculates and returns the number of page suggestions to fetch,
   * with maxSuggestionsPerSlice state variable being the maximum. When
   * already fetched suggestions do not produce full slices of maxSuggestionsPerSlice
   * size (i.e. length % maxSuggestionsPerSlice !== 0), fetch remaining suggestions
   * to complete the slice. If suggestions slice is already full, fetch maxSuggestionsPerSlice new.
   *
   * @return {number} an integer indicating the number of page suggestions to be fetched
   */
  const getNumberOfPageSuggestionsToFetch = () => {
    const existingSuggestionsForFilters = getFilteredPageSuggestions();

    const pageSize = store.state.suggestions.maxSuggestionsPerSlice;

    return pageSize - (existingSuggestionsForFilters.length % pageSize);
  };

  const {
    getCurrentPageSuggestionProvider,
    getCurrentSectionSuggestionProvider,
  } = useSuggestionProvider();

  /**
   * @param {ArticleSuggestion[]|SectionSuggestion[]} suggestions
   * @return {Promise<any>}
   */
  const fetchPageMetadataForSuggestions = (suggestions) => {
    // Catch any possible error, so that the loading indicator isn't displayed eternally
    try {
      const titles = suggestions.map((suggestion) => suggestion.sourceTitle);

      if (titles.length) {
        return fetchPageMetadata(sourceLanguage.value, titles);
      }
    } catch (error) {
      mw.log.error("Page suggestions fetching failed!");
    }
  };

  /**
   * This action fetches the next page suggestions slice from the suggestions api,
   * for the current language pair and saves it to the store.
   *
   * @returns {Promise<void>}
   */
  const fetchNextPageSuggestionsSlice = async () => {
    store.commit("suggestions/setIsPageSuggestionsFetchPending", false);
    store.commit("suggestions/increasePageSuggestionsLoadingCount");

    const numberOfSuggestionsToFetch = getNumberOfPageSuggestionsToFetch();

    const fetchPageSuggestions = getCurrentPageSuggestionProvider();
    const fetchedSuggestions = await fetchPageSuggestions(
      numberOfSuggestionsToFetch
    );

    fetchedSuggestions.forEach((suggestion) =>
      store.commit("suggestions/addPageSuggestion", suggestion)
    );

    fetchPageMetadataForSuggestions(fetchedSuggestions);

    store.commit("suggestions/decreasePageSuggestionsLoadingCount");
  };

  /**
   * This action fetches the next section suggestions slice from the suggestions api,
   * for the current language pair and saves it to the store.

   * @return {Promise<void>}
   */
  const fetchNextSectionSuggestionsSlice = async () => {
    store.commit("suggestions/setIsSectionSuggestionsFetchPending", false);
    store.commit("suggestions/increaseSectionSuggestionsLoadingCount");

    const numberOfSuggestionsToFetch = getNumberOfSectionSuggestionsToFetch();

    const fetchSectionSuggestions = getCurrentSectionSuggestionProvider();
    const fetchedSuggestions = await fetchSectionSuggestions(
      numberOfSuggestionsToFetch
    );

    fetchedSuggestions.forEach((suggestion) =>
      store.commit("suggestions/addSectionSuggestion", suggestion)
    );

    fetchPageMetadataForSuggestions(fetchedSuggestions);
    store.commit("suggestions/decreaseSectionSuggestionsLoadingCount");
  };

  return {
    fetchNextSectionSuggestionsSlice,
    fetchNextPageSuggestionsSlice,
  };
};

export default useSuggestionsFetch;
