import { useStore } from "vuex";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import retry from "@/utils/retry";
import useURLHandler from "@/composables/useURLHandler";
import { SEED_SUGGESTION_PROVIDER } from "@/utils/suggestionFilterProviders";

const useSuggestionFetchBySeed = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    currentSuggestionFilters,
  } = useURLHandler();

  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  /**
   * @param {number} numberOfSuggestionsToFetch the number of suggestions to fetch
   * @return {Promise<ArticleSuggestion[]>}
   */
  const fetchPageSuggestionsBySeed = async (numberOfSuggestionsToFetch) => {
    const seed = currentSuggestionFilters.value.id;

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

    suggestions.forEach(
      (suggestion) =>
        (suggestion.suggestionProvider = {
          id: seed,
          type: SEED_SUGGESTION_PROVIDER,
        })
    );

    return suggestions;
  };

  /**
   * @param {number} numberOfSuggestionsToFetch the number of suggestions to fetch
   * @return {Promise<SectionSuggestion[]>}
   */
  const fetchSectionSuggestionsBySeed = async (numberOfSuggestionsToFetch) => {
    const fetchedSuggestions = [];
    const seed = currentSuggestionFilters.value.id;

    await retry(async () => {
      /** @type {SectionSuggestion[]|null} */
      const suggestions = await cxSuggestionsApi.fetchSectionSuggestions(
        sourceLanguage.value,
        targetLanguage.value,
        seed
      );

      // Try again with the next seed
      if (!suggestions) {
        return false;
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

      return fetchedSuggestions.length >= numberOfSuggestionsToFetch;
    });

    fetchedSuggestions.forEach(
      (suggestion) =>
        (suggestion.suggestionProvider = {
          id: seed,
          type: SEED_SUGGESTION_PROVIDER,
        })
    );

    return fetchedSuggestions;
  };

  return {
    fetchPageSuggestionsBySeed,
    fetchSectionSuggestionsBySeed,
  };
};

export default useSuggestionFetchBySeed;
