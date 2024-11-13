import { useStore } from "vuex";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import useSuggestionPreviousEditsSeeds from "@/composables/useSuggestionPreviousEditsSeeds";
import retry from "@/utils/retry";
import useURLHandler from "@/composables/useURLHandler";
import {
  EDITS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
} from "@/utils/suggestionFilterProviders";

const useSuggestionsFetchByEdits = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();

  const { getSuggestionSeed } = useSuggestionPreviousEditsSeeds();
  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  const editsSuggestionFilter = {
    id: EDITS_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  };

  /**
   * @param {number} numberOfSuggestionsToFetch the number of suggestions to fetch
   * @return {Promise<ArticleSuggestion[]>}
   */
  const fetchPageSuggestionsBasedOnEdits = async (
    numberOfSuggestionsToFetch
  ) => {
    const fetchedSuggestions = [];

    await retry(async () => {
      const seed = await getSuggestionSeed("page");

      // Seed should always be provided as we cannot fetch a section suggestion
      // without using one. Thus, if no seed provided, suggestion fetching should stop
      if (!seed) {
        return true;
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

      return fetchedSuggestions.length >= numberOfSuggestionsToFetch;
    });

    fetchedSuggestions.forEach(
      (suggestion) => (suggestion.suggestionProvider = editsSuggestionFilter)
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

    await retry(async () => {
      const seed = await getSuggestionSeed("section");

      // Seed should always be provided as we cannot fetch a section suggestion
      // without using one. Thus, if no seed provided, suggestion fetching should stop
      if (!seed) {
        return true;
      }
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
      (suggestion) => (suggestion.suggestionProvider = editsSuggestionFilter)
    );

    return fetchedSuggestions;
  };

  return {
    fetchPageSuggestionsBasedOnEdits,
    fetchSectionSuggestionsBasedOnEdits,
  };
};

export default useSuggestionsFetchByEdits;
