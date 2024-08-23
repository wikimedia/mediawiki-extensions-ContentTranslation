import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import useSuggestionValidator from "@/composables/useSuggestionValidator";

export const POPULAR_SUGGESTION_PROVIDER = "popular";

const useSuggestionFetchByMostPopular = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  const fetchPageSuggestionsPopular = async (numberOfSuggestionsToFetch) => {
    const fetchedSuggestions = [];

    while (fetchedSuggestions.length < numberOfSuggestionsToFetch) {
      /** @type {ArticleSuggestion[]} */
      let suggestions = await cxSuggestionsApi.fetchMostPopularPageSuggestions(
        sourceLanguage.value,
        targetLanguage.value
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
        (suggestion.suggestionProvider = POPULAR_SUGGESTION_PROVIDER)
    );

    return fetchedSuggestions;
  };

  const fetchSectionSuggestionsPopular = async (numberOfSuggestionsToFetch) => {
    const fetchedSuggestions = [];

    while (fetchedSuggestions.length < numberOfSuggestionsToFetch) {
      /** @type {SectionSuggestion[]} */
      const suggestions =
        await cxSuggestionsApi.fetchMostPopularSectionSuggestions(
          sourceLanguage.value,
          targetLanguage.value
        );

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
        (suggestion.suggestionProvider = POPULAR_SUGGESTION_PROVIDER)
    );

    return fetchedSuggestions;
  };

  return { fetchSectionSuggestionsPopular, fetchPageSuggestionsPopular };
};

export default useSuggestionFetchByMostPopular;
