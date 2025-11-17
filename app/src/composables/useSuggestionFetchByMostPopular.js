import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import { useStore } from "vuex";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import retry from "@/utils/retry";
import useURLHandler from "@/composables/useURLHandler";
import {
  POPULAR_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
} from "@/utils/suggestionFilterProviders";
import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";
import useSuggestionFetchByCollections from "@/composables/useSuggestionFetchByCollections";
import useSuggestionsStore from "@/composables/useSuggestionsStore";

const useSuggestionFetchByMostPopular = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();

  const popularSuggestionFilter = {
    id: POPULAR_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  };

  const {
    getNextUnseenSectionSuggestionByCollection,
    getNextUnseenPageSuggestionByCollection,
  } = useSuggestionsStore();

  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  const { featuredCollection, featuredCollectionPromise } =
    useFeaturedCollectionFilter();

  const {
    doFetchPageSuggestionsByCollection,
    doFetchSectionSuggestionsByCollection,
  } = useSuggestionFetchByCollections();

  /**
   * @param {function} fetchMethod
   * @param {function(string): ArticleSuggestion|SectionSuggestion|null} getMethod
   * @param {string} saveSuggestionMutation
   * @param {array} suggestions
   * @param {number} numberOfSuggestionsToFetch
   * @returns {Promise<number>}
   */
  const addFeaturedSuggestionIfNeeded = async (
    fetchMethod,
    getMethod,
    saveSuggestionMutation,
    suggestions,
    numberOfSuggestionsToFetch
  ) => {
    await featuredCollectionPromise;

    if (featuredCollection.value) {
      // try to get featured suggestion from the store, if collection suggestions are already fetched
      let featuredCollectionSuggestion = getMethod(featuredCollection.value);

      if (!featuredCollectionSuggestion) {
        // if no stored featured suggestion, try to fetch one
        const [firstFeaturedSuggestion = null, ...restFeaturedSuggestions] =
          await fetchMethod(featuredCollection.value);

        featuredCollectionSuggestion = firstFeaturedSuggestion;

        // store the rest of the unused featured suggestions in the store,
        // so that they can be used by the featured collection filter
        restFeaturedSuggestions.forEach((suggestion) => {
          store.commit(saveSuggestionMutation, suggestion);
        });
      }

      if (featuredCollectionSuggestion) {
        suggestions.push(featuredCollectionSuggestion);
        numberOfSuggestionsToFetch--;
      }
    }

    return numberOfSuggestionsToFetch;
  };

  const fetchPageSuggestionsPopular = async (numberOfSuggestionsToFetch) => {
    const fetchedSuggestions = [];

    numberOfSuggestionsToFetch = await addFeaturedSuggestionIfNeeded(
      doFetchPageSuggestionsByCollection,
      getNextUnseenPageSuggestionByCollection,
      "suggestions/addPageSuggestion",
      fetchedSuggestions,
      numberOfSuggestionsToFetch
    );

    await retry(async () => {
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

      return fetchedSuggestions.length >= numberOfSuggestionsToFetch;
    });

    fetchedSuggestions.forEach(
      (suggestion) => (suggestion.suggestionProvider = popularSuggestionFilter)
    );

    return fetchedSuggestions;
  };

  const fetchSectionSuggestionsPopular = async (numberOfSuggestionsToFetch) => {
    const fetchedSuggestions = [];

    numberOfSuggestionsToFetch = await addFeaturedSuggestionIfNeeded(
      doFetchSectionSuggestionsByCollection,
      getNextUnseenSectionSuggestionByCollection,
      "suggestions/addSectionSuggestion",
      fetchedSuggestions,
      numberOfSuggestionsToFetch
    );

    await retry(async () => {
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

      return fetchedSuggestions.length >= numberOfSuggestionsToFetch;
    });

    fetchedSuggestions.forEach(
      (suggestion) => (suggestion.suggestionProvider = popularSuggestionFilter)
    );

    return fetchedSuggestions;
  };

  return { fetchSectionSuggestionsPopular, fetchPageSuggestionsPopular };
};

export default useSuggestionFetchByMostPopular;
