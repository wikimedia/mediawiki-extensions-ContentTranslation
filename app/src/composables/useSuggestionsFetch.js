import useApplicationState from "@/composables/useApplicationState";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";

const useSuggestionsFetch = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  /**
   * @param {SectionSuggestion|ArticleSuggestion|null|undefined} suggestion
   * @return {boolean}
   */
  const isSuggestionValid = (suggestion) => {
    if (!suggestion) {
      return false;
    }
    const favoriteTitles = store.getters[
      "suggestions/getFavoriteTitlesByLanguagePair"
    ](sourceLanguage.value, targetLanguage.value);

    /** @type {Translation[]} */
    const translations = store.getters[
      "translator/getTranslationsForLanguagePair"
    ](sourceLanguage.value, targetLanguage.value);

    const translationTitles = translations.map((t) => t.sourceTitle);

    return (
      !favoriteTitles.includes(suggestion.sourceTitle) &&
      !translationTitles.includes(suggestion.sourceTitle)
    );
  };

  /**
   * @param {ArticleSuggestion} pageSuggestion
   */
  const isPageSuggestionValid = (pageSuggestion) => {
    const { pageSuggestions } = store.state.suggestions;

    const suggestionExists = pageSuggestions.some(
      (suggestion) =>
        suggestion.sourceLanguage === pageSuggestion.sourceLanguage &&
        suggestion.targetLanguage === pageSuggestion.targetLanguage &&
        suggestion.sourceTitle === pageSuggestion.sourceTitle
    );

    return !suggestionExists && isSuggestionValid(pageSuggestion);
  };

  /**
   * @param {SectionSuggestion|null} sectionSuggestion
   * @return {boolean}
   */
  const sectionSuggestionExists = (sectionSuggestion) =>
    store.state.suggestions.sectionSuggestions.some(
      (suggestion) =>
        suggestion.sourceLanguage === sectionSuggestion.sourceLanguage &&
        suggestion.targetLanguage === sectionSuggestion.targetLanguage &&
        suggestion.sourceTitle === sectionSuggestion.sourceTitle
    );

  /**
   * @param {SectionSuggestion|null} sectionSuggestion
   * @return {boolean}
   */
  const isSectionSuggestionValid = (sectionSuggestion) => {
    if (!sectionSuggestion) {
      return false;
    }

    const appendixTargetTitles =
      store.state.suggestions.appendixSectionTitles[targetLanguage.value] || [];

    return (
      !sectionSuggestionExists(sectionSuggestion) &&
      isSuggestionValid(sectionSuggestion) &&
      sectionSuggestion.isValid(appendixTargetTitles)
    );
  };

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

    const numberOfSuggestionsToFetch = store.getters[
      "suggestions/getNumberOfPageSuggestionsToFetch"
    ](sourceLanguage.value, targetLanguage.value);

    const fetchedSuggestions = [];

    while (fetchedSuggestions.length < numberOfSuggestionsToFetch) {
      const seed = await getSuggestionSeed(
        sourceLanguage.value,
        targetLanguage.value
      );

      // Seed should always be provided as we cannot fetch a section suggestion
      // without using one. Thus, if no seed provided, suggestion fetching should stop
      if (!seed) {
        break;
      }

      /** @type {ArticleSuggestion[]} */
      let suggestions = await cxSuggestionsApi.fetchPageSuggestions(
        sourceLanguage.value,
        targetLanguage.value,
        seed
      );

      suggestions = suggestions.filter((suggestion) =>
        isPageSuggestionValid(suggestion)
      );

      // only keep the needed number of suggestions, to avoid having suggestions of only one seed
      suggestions = suggestions.slice(0, numberOfSuggestionsToFetch);
      fetchedSuggestions.push(...suggestions);
    }
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

    const fetchedSuggestions = [];

    while (fetchedSuggestions.length < numberOfSuggestionsToFetch) {
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

      if (isSectionSuggestionValid(suggestion)) {
        fetchedSuggestions.push(suggestion);
      } else if (!!suggestion && !sectionSuggestionExists(suggestion)) {
        suggestion.isListable = false;
        store.commit("suggestions/addSectionSuggestion", suggestion);
      }
    }

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
