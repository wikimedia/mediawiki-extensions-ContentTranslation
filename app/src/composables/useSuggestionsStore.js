import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";
import { COLLECTIONS_SUGGESTION_PROVIDER } from "@/utils/suggestionFilterProviders";

const useSuggestionsStore = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    currentSuggestionFilters,
  } = useURLHandler();

  const { maxSuggestionsPerSlice } = store.state.suggestions;

  /**
   * @returns {SectionSuggestion[]}
   */
  const getFilteredSectionSuggestions = () => {
    const sectionSuggestionsForPair = store.getters[
      "suggestions/getSectionSuggestionsForPair"
    ](sourceLanguage.value, targetLanguage.value);

    return sectionSuggestionsForPair.filter((suggestion) =>
      suggestion.matchesFilter(currentSuggestionFilters.value)
    );
  };

  /**
   * @param {number} sliceIndex
   * @returns {SectionSuggestion[]}
   */
  const getSectionSuggestionsSliceByIndex = (sliceIndex) => {
    const currentSectionSuggestions = getFilteredSectionSuggestions();

    return currentSectionSuggestions.slice(
      maxSuggestionsPerSlice * sliceIndex,
      maxSuggestionsPerSlice * (sliceIndex + 1)
    );
  };

  /**
   * @returns {ArticleSuggestion[]}
   */
  const getFilteredPageSuggestions = () => {
    const pageSuggestionsForPair = store.getters[
      "suggestions/getPageSuggestionsForPair"
    ](sourceLanguage.value, targetLanguage.value);

    return pageSuggestionsForPair.filter((suggestion) =>
      suggestion.matchesFilter(currentSuggestionFilters.value)
    );
  };

  /**
   * @param {number} sliceIndex
   * @returns {ArticleSuggestion[]}
   */
  const getPageSuggestionsSliceByIndex = (sliceIndex) => {
    const currentPageSuggestions = getFilteredPageSuggestions();

    return currentPageSuggestions.slice(
      maxSuggestionsPerSlice * sliceIndex,
      maxSuggestionsPerSlice * (sliceIndex + 1)
    );
  };

  /**
   * @param {string} collectionName the name of the collection to get an unseen suggestion from
   * @param {string} unseenGetter the namespaced name of the vuex getter for the next unseen suggestion
   * @param {string} removeMutation the namespaced name of the vuex mutation for removing the unseen suggestion
   * @returns {ArticleSuggestion|SectionSuggestion|null}
   */
  const getNextUnseenSuggestionByCollection = (
    collectionName,
    unseenGetter,
    removeMutation
  ) => {
    const collectionFilter = {
      id: collectionName,
      type: COLLECTIONS_SUGGESTION_PROVIDER,
    };

    const unseenSuggestion = store.getters[unseenGetter](collectionFilter);

    if (unseenSuggestion?.id) {
      store.commit(removeMutation, unseenSuggestion?.id);
    }

    return unseenSuggestion;
  };

  /**
   * @param {string} collectionName
   * @returns {ArticleSuggestion|null}
   */
  const getNextUnseenPageSuggestionByCollection = (collectionName) =>
    getNextUnseenSuggestionByCollection(
      collectionName,
      "suggestions/getNextUnseenPageSuggestionByFilter",
      "suggestions/removePageSuggestion"
    );

  /**
   * @param {string} collectionName
   * @returns {SectionSuggestion|null}
   */
  const getNextUnseenSectionSuggestionByCollection = (collectionName) =>
    getNextUnseenSuggestionByCollection(
      collectionName,
      "suggestions/getNextUnseenSectionSuggestionByFilter",
      "suggestions/removeSectionSuggestion"
    );

  return {
    getFilteredPageSuggestions,
    getFilteredSectionSuggestions,
    getPageSuggestionsSliceByIndex,
    getSectionSuggestionsSliceByIndex,
    getNextUnseenSectionSuggestionByCollection,
    getNextUnseenPageSuggestionByCollection,
  };
};

export default useSuggestionsStore;
