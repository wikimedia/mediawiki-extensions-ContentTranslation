import useApplicationState from "@/composables/useApplicationState";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";

const useSuggestionsFetch = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @return {Promise<string|null>}
   */
  const getSuggestionSeed = async (sourceLanguage, targetLanguage) => {
    // Seed collection for given language pair
    let currentSeedCollection = store.getters[
      "suggestions/findSuggestionSeedCollection"
    ](sourceLanguage, targetLanguage);

    // suggestions seeds should have been initialized before being accessed
    // or if no seeds were fetched from the "seeds-fetching" API
    if (!currentSeedCollection || !currentSeedCollection.seeds.length) {
      mw.log.error("No suggestion seed found! Suggestion fetching will fail!");

      return null;
    }

    return currentSeedCollection.shiftSeeds();
  };

  /**
   * This action fetches the next page suggestions slice from the suggestions api,
   * for the current language pair and saves it to the store.
   *
   * @returns {Promise<void>}
   */
  const fetchNextPageSuggestionsSlice = async () => {
    store.commit("suggestions/increasePageSuggestionsLoadingCount");
    const seed = await getSuggestionSeed(
      sourceLanguage.value,
      targetLanguage.value
    );

    const numberOfSuggestionsToFetch = store.getters[
      "suggestions/getNumberOfPageSuggestionsToFetch"
    ](sourceLanguage.value, targetLanguage.value);

    // Catch any possible error, so that the loading indicator isn't displayed eternally
    try {
      /** @type {ArticleSuggestion[]} */
      const suggestions = await cxSuggestionsApi.fetchPageSuggestions(
        sourceLanguage.value,
        targetLanguage.value,
        seed,
        numberOfSuggestionsToFetch
      );

      suggestions.forEach((suggestion) =>
        store.commit("suggestions/addPageSuggestion", suggestion)
      );
      const titles = suggestions.map((suggestion) => suggestion.sourceTitle);

      if (titles.length) {
        store.dispatch("mediawiki/fetchPageMetadata", {
          language: sourceLanguage.value,
          titles,
        });
      }
    } catch (error) {
      mw.log.error("Page suggestions fetching failed!");
    }
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

    let fetchedSuggestionCounter = 0;

    while (fetchedSuggestionCounter < numberOfSuggestionsToFetch) {
      const seed = await getSuggestionSeed(
        sourceLanguage.value,
        targetLanguage.value
      );

      // Seed should always be provided as we cannot fetch a section suggestion
      // without using one. Thus, if no seed provided, suggestion fetching should stop
      if (!seed) {
        break;
      }
      /** @type {SectionSuggestion|null} */
      const suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
        sourceLanguage.value,
        seed,
        targetLanguage.value
      );

      const appendixTargetTitles =
        store.state.suggestions.appendixSectionTitles[targetLanguage.value] ||
        [];

      if (suggestion?.isValid(appendixTargetTitles)) {
        fetchedSuggestionCounter++;
        store.commit("suggestions/addSectionSuggestion", suggestion);
      }
    }

    store.commit("suggestions/decreaseSectionSuggestionsLoadingCount");

    const titles = store.getters["suggestions/getSectionSuggestionsForPair"](
      sourceLanguage.value,
      targetLanguage.value
    ).map((suggestion) => suggestion.sourceTitle);

    store.dispatch("mediawiki/fetchPageMetadata", {
      language: sourceLanguage.value,
      titles,
    });
  };

  return {
    fetchNextSectionSuggestionsSlice,
    fetchNextPageSuggestionsSlice,
  };
};

export default useSuggestionsFetch;
