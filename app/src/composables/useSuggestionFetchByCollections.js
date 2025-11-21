import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import useURLHandler from "@/composables/useURLHandler";
import { COLLECTIONS_SUGGESTION_PROVIDER } from "@/utils/suggestionFilterProviders";
import { computed } from "vue";
import useFeaturedCollectionFilter from "./useFeaturedCollectionFilter";

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

  const { featuredCollection, featuredCollectionPromise } =
    useFeaturedCollectionFilter();
  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  /**
   * @param {string|null} collectionName
   * @return {{type: string, id: string}}
   */
  const getCollectionFilter = (collectionName = null) => {
    if (collectionName) {
      return { id: collectionName, type: COLLECTIONS_SUGGESTION_PROVIDER };
    } else {
      return currentFilter.value;
    }
  };

  /**
   * @param {string|null} collectionName
   * @returns {Promise<CollectionArticleSuggestion[]>}
   */
  const doFetchPageSuggestionsByCollection = async (collectionName) => {
    let featuredCollectionName = null;

    if (!collectionName) {
      await featuredCollectionPromise.value;
      featuredCollectionName = featuredCollection.value?.name || null;
    }
    const fetchedSuggestions = [];

    /**
     * @type {{ recommendations: CollectionArticleSuggestion[], continue_offset: number|null, continue_seed: number|null}}
     */
    const response = await cxSuggestionsApi.fetchPageSuggestionsByCollections({
      sourceLanguage: sourceLanguage.value,
      targetLanguage: targetLanguage.value,
      featuredCollection: featuredCollectionName,
      collectionName,
    });

    const suggestions = response.recommendations.filter((suggestion) =>
      isPageSuggestionValid(suggestion)
    );

    fetchedSuggestions.push(...suggestions);

    fetchedSuggestions.forEach((suggestion) => {
      // if collection name is given, make sure the suggestion provider
      // is set to the collection's filter
      suggestion.suggestionProvider = getCollectionFilter(collectionName);
    });

    return fetchedSuggestions;
  };

  const fetchPageSuggestionsByCollections = () =>
    doFetchPageSuggestionsByCollection(currentCollectionName.value);

  const fetchPageSuggestionsByFeaturedCollections = async () => {
    const featuredCollectionSuggestions =
      await doFetchPageSuggestionsByCollection(
        featuredCollection.value?.name || null
      );

    featuredCollectionSuggestions.forEach((suggestion) =>
      store.commit("suggestions/addPageSuggestion", suggestion)
    );
  };

  /**
   * @param {string|null} collectionName
   * @returns {Promise<CollectionSectionSuggestion[]>}
   */
  const doFetchSectionSuggestionsByCollection = async (collectionName) => {
    let featuredCollectionName = null;

    if (!collectionName) {
      await featuredCollectionPromise.value;
      featuredCollectionName = featuredCollection.value?.name || null;
    }
    await featuredCollectionPromise.value;
    const fetchedSuggestions = [];
    /**
     * @type {{ recommendations: CollectionSectionSuggestion[], continue_offset: number|null, continue_seed: number|null }}
     */
    const response =
      await cxSuggestionsApi.fetchSectionSuggestionsByCollections({
        sourceLanguage: sourceLanguage.value,
        targetLanguage: targetLanguage.value,
        featuredCollection: featuredCollectionName,
        collectionName,
      });

    const validSuggestions = response.recommendations.filter((suggestion) =>
      isSectionSuggestionValid(suggestion)
    );
    const invalidSuggestions = response.recommendations.filter(
      (suggestion) => !isSectionSuggestionValid(suggestion)
    );

    fetchedSuggestions.push(...validSuggestions);

    invalidSuggestions.forEach((suggestion) => {
      if (!!suggestion && !sectionSuggestionExists(suggestion)) {
        suggestion.isListable = false;
        store.commit("suggestions/addSectionSuggestion", suggestion);
      }
    });

    fetchedSuggestions.forEach((suggestion) => {
      // if collection name is given, make sure the suggestion provider
      // is set to the collection's filter
      suggestion.suggestionProvider = getCollectionFilter(collectionName);
    });

    return fetchedSuggestions;
  };
  const fetchSectionSuggestionsByCollections = () =>
    doFetchSectionSuggestionsByCollection(currentCollectionName.value);

  return {
    fetchSectionSuggestionsByCollections,
    fetchPageSuggestionsByCollections,
    fetchPageSuggestionsByFeaturedCollections,
    doFetchPageSuggestionsByCollection,
    doFetchSectionSuggestionsByCollection,
  };
};

export default useSuggestionFetchByCollections;
