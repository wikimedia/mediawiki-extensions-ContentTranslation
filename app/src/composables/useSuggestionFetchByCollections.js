import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import useURLHandler from "@/composables/useURLHandler";
import { COLLECTIONS_SUGGESTION_PROVIDER } from "@/utils/suggestionFilterProviders";
import { computed } from "vue";

const useSuggestionFetchByCollections = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    currentSuggestionFilters: currentFilter,
  } = useURLHandler();

  const currentCollectionName = computed(() => {
    if (currentFilter.value?.type !== COLLECTIONS_SUGGESTION_PROVIDER) {
      return null;
    }

    return currentFilter.value.id;
  });

  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  const fetchPageSuggestionsByCollections = async () => {
    const fetchedSuggestions = [];

    /** @type {CollectionArticleSuggestion[]} */
    let suggestions = await cxSuggestionsApi.fetchPageSuggestionsByCollections(
      sourceLanguage.value,
      targetLanguage.value,
      currentCollectionName.value
    );

    suggestions = suggestions.filter((suggestion) =>
      isPageSuggestionValid(suggestion)
    );

    fetchedSuggestions.push(...suggestions);

    fetchedSuggestions.forEach(
      (suggestion) => (suggestion.suggestionProvider = currentFilter.value)
    );

    return fetchedSuggestions;
  };

  const fetchSectionSuggestionsByCollections = async () => {
    const fetchedSuggestions = [];
    /** @type {CollectionSectionSuggestion[]} */
    const suggestions =
      await cxSuggestionsApi.fetchSectionSuggestionsByCollections(
        sourceLanguage.value,
        targetLanguage.value,
        currentCollectionName.value
      );

    let validSuggestions = suggestions.filter((suggestion) =>
      isSectionSuggestionValid(suggestion)
    );
    const invalidSuggestions = suggestions.filter(
      (suggestion) => !isSectionSuggestionValid(suggestion)
    );

    fetchedSuggestions.push(...validSuggestions);

    invalidSuggestions.forEach((suggestion) => {
      if (!!suggestion && !sectionSuggestionExists(suggestion)) {
        suggestion.isListable = false;
        store.commit("suggestions/addSectionSuggestion", suggestion);
      }
    });

    fetchedSuggestions.forEach(
      (suggestion) => (suggestion.suggestionProvider = currentFilter.value)
    );

    return fetchedSuggestions;
  };

  return {
    fetchSectionSuggestionsByCollections,
    fetchPageSuggestionsByCollections,
  };
};

export default useSuggestionFetchByCollections;
