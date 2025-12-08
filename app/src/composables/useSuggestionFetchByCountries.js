import { useStore } from "vuex";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import retry from "@/utils/retry";
import useURLHandler from "@/composables/useURLHandler";
import useSuggestionsFilters from "./useSuggestionsFilters";
import useFeaturedCollectionFilter from "./useFeaturedCollectionFilter";

const useSuggestionFetchByCountries = () => {
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

  const { getCountries } = useSuggestionsFilters();

  const { featuredCollection, featuredCollectionPromise } =
    useFeaturedCollectionFilter();

  /**
   * @param {number} numberOfSuggestionsToFetch the number of suggestions to fetch
   * @return {Promise<ArticleSuggestion[]>}
   */
  const fetchPageSuggestionsByCountries = async (
    numberOfSuggestionsToFetch
  ) => {
    await featuredCollectionPromise.value;
    /** @type {ArticleSuggestion[]} */
    let suggestions = await cxSuggestionsApi.fetchPageSuggestionsByCountries({
      sourceLanguage: sourceLanguage.value,
      targetLanguage: targetLanguage.value,
      countries: getCountries(currentSuggestionFilters.value.id),
      featuredCollection: featuredCollection.value?.name,
    });

    suggestions = suggestions.filter((suggestion) =>
      isPageSuggestionValid(suggestion)
    );

    suggestions = suggestions.slice(0, numberOfSuggestionsToFetch);

    suggestions.forEach(
      (suggestion) =>
        (suggestion.suggestionProvider = currentSuggestionFilters.value)
    );

    return suggestions;
  };

  /**
   * @param {number} numberOfSuggestionsToFetch
   * @return {Promise<SectionSuggestion[]>}
   */
  const fetchSectionSuggestionsByCountries = async (
    numberOfSuggestionsToFetch
  ) => {
    await featuredCollectionPromise.value;
    const fetchedSuggestions = [];

    await retry(async () => {
      /** @type {SectionSuggestion[]} */
      const suggestions =
        await cxSuggestionsApi.fetchSectionSuggestionsByCountries({
          sourceLanguage: sourceLanguage.value,
          targetLanguage: targetLanguage.value,
          countries: getCountries(currentSuggestionFilters.value.id),
          featuredCollection: featuredCollection.value?.name,
        });

      let validSuggestions = suggestions.filter((suggestion) =>
        isSectionSuggestionValid(suggestion)
      );
      const invalidSuggestions = suggestions.filter(
        (suggestion) => !isSectionSuggestionValid(suggestion)
      );

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
        (suggestion.suggestionProvider = currentSuggestionFilters.value)
    );

    return fetchedSuggestions;
  };

  return {
    fetchPageSuggestionsByCountries,
    fetchSectionSuggestionsByCountries,
  };
};

export default useSuggestionFetchByCountries;
