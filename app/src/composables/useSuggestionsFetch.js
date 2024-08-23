import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import useSuggestionProvider from "./useSuggestionProvider";

const useSuggestionsFetch = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);
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
        return store.dispatch("mediawiki/fetchPageMetadata", {
          language: sourceLanguage.value,
          titles,
        });
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
    store.commit("suggestions/increasePageSuggestionsLoadingCount");

    const numberOfSuggestionsToFetch = store.getters[
      "suggestions/getNumberOfPageSuggestionsToFetch"
    ](sourceLanguage.value, targetLanguage.value);

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
    store.commit("suggestions/increaseSectionSuggestionsLoadingCount");

    const numberOfSuggestionsToFetch = store.getters[
      "suggestions/getNumberOfSectionSuggestionsToFetch"
    ](sourceLanguage.value, targetLanguage.value);

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
