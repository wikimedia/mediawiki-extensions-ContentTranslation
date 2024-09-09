import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import useSuggestionSeeds from "@/composables/useSuggestionSeeds";

export const EDITS_SUGGESTION_PROVIDER = "previous-edits";

const useSuggestionsFetchByEdits = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage, currentSuggestionFilters } =
    useApplicationState(store);

  const { getSuggestionSeed } = useSuggestionSeeds();
  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  /**
   * @param {number} numberOfSuggestionsToFetch the number of suggestions to fetch
   * @return {Promise<ArticleSuggestion[]>}
   */
  const fetchPageSuggestionsBasedOnEdits = async (
    numberOfSuggestionsToFetch
  ) => {
    const fetchedSuggestions = [];

    while (fetchedSuggestions.length < numberOfSuggestionsToFetch) {
      const seed = await getSuggestionSeed("page");

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

    fetchedSuggestions.forEach(
      (suggestion) =>
        (suggestion.suggestionProvider = currentSuggestionFilters.value)
    );

    return fetchedSuggestions;
  };

  /**
   * @param {number} numberOfSuggestionsToFetch
   * @return {Promise<SectionSuggestion[]>}
   */
  const fetchSectionSuggestionsBasedOnEdits = async (
    numberOfSuggestionsToFetch
  ) => {
    const fetchedSuggestions = [];

    while (fetchedSuggestions.length < numberOfSuggestionsToFetch) {
      const seed = await getSuggestionSeed("section");

      // Seed should always be provided as we cannot fetch a section suggestion
      // without using one. Thus, if no seed provided, suggestion fetching should stop
      if (!seed) {
        break;
      }
      /** @type {SectionSuggestion[]|null} */
      const suggestions = await cxSuggestionsApi.fetchSectionSuggestions(
        sourceLanguage.value,
        targetLanguage.value,
        seed
      );

      if (!suggestions) {
        continue;
      }

      let validSuggestions = suggestions.filter((suggestion) =>
        isSectionSuggestionValid(suggestion)
      );
      const invalidSuggestions = suggestions.filter(
        (suggestion) => !isSectionSuggestionValid(suggestion)
      );

      // only keep the needed number of suggestions, to avoid having suggestions of only one seed
      validSuggestions = validSuggestions.slice(0, numberOfSuggestionsToFetch);
      fetchedSuggestions.push(...validSuggestions);

      invalidSuggestions.forEach((suggestion) => {
        if (!!suggestion && !sectionSuggestionExists(suggestion)) {
          suggestion.isListable = false;
          store.commit("suggestions/addSectionSuggestion", suggestion);
        }
      });
    }

    fetchedSuggestions.forEach(
      (suggestion) =>
        (suggestion.suggestionProvider = currentSuggestionFilters.value)
    );

    return fetchedSuggestions;
  };

  return {
    fetchPageSuggestionsBasedOnEdits,
    fetchSectionSuggestionsBasedOnEdits,
  };
};

export default useSuggestionsFetchByEdits;
