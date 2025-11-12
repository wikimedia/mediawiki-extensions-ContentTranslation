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

  /**
   * @param {string|null} collectionName
   * @returns {Promise<CollectionArticleSuggestion[]>}
   */
  const doFetchPageSuggestionsByCollection = async (collectionName) => {
    const fetchedSuggestions = [];

    /** @type {CollectionArticleSuggestion[]} */
    let suggestions = await cxSuggestionsApi.fetchPageSuggestionsByCollections(
      sourceLanguage.value,
      targetLanguage.value,
      collectionName
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

  const fetchPageSuggestionsByCollections = () =>
    doFetchPageSuggestionsByCollection(currentCollectionName.value);

  /**
   * @param {string|null} collectionName
   * @returns {Promise<CollectionSectionSuggestion[]>}
   */
  const doFetchSectionSuggestionsByCollection = async (collectionName) => {
    const fetchedSuggestions = [];
    /** @type {CollectionSectionSuggestion[]} */
    const suggestions =
      await cxSuggestionsApi.fetchSectionSuggestionsByCollections(
        sourceLanguage.value,
        targetLanguage.value,
        collectionName
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
  const fetchSectionSuggestionsByCollections = () =>
    doFetchSectionSuggestionsByCollection(currentCollectionName.value);

  return {
    fetchSectionSuggestionsByCollections,
    fetchPageSuggestionsByCollections,
    doFetchPageSuggestionsByCollection,
    doFetchSectionSuggestionsByCollection,
  };
};

export default useSuggestionFetchByCollections;
