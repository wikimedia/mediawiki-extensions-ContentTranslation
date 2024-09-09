import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import useSuggestionsFilters from "./useSuggestionsFilters";

export const TOPIC_SUGGESTION_PROVIDER = "topic";

const useSuggestionsFetchByTopics = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage, currentSuggestionFilters } =
    useApplicationState(store);

  const {
    isSectionSuggestionValid,
    isPageSuggestionValid,
    sectionSuggestionExists,
  } = useSuggestionValidator();

  const { getOresTopics } = useSuggestionsFilters();

  /**
   * @param {number} numberOfSuggestionsToFetch the number of suggestions to fetch
   * @return {Promise<ArticleSuggestion[]>}
   */
  const fetchPageSuggestionsByTopics = async (numberOfSuggestionsToFetch) => {
    const topic = store.state.application.currentSuggestionFilters.id;
    const oresTopics = getOresTopics(topic);

    /** @type {ArticleSuggestion[]} */
    let suggestions = await cxSuggestionsApi.fetchPageSuggestionsByTopics(
      sourceLanguage.value,
      targetLanguage.value,
      oresTopics
    );

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
  const fetchSectionSuggestionsByTopics = async (
    numberOfSuggestionsToFetch
  ) => {
    const topic = store.state.application.currentSuggestionFilters.id;
    const oresTopics = getOresTopics(topic);

    const fetchedSuggestions = [];

    while (fetchedSuggestions.length < numberOfSuggestionsToFetch) {
      /** @type {SectionSuggestion[]} */
      const suggestions =
        await cxSuggestionsApi.fetchSectionSuggestionsByTopics(
          sourceLanguage.value,
          targetLanguage.value,
          oresTopics
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
        (suggestion.suggestionProvider = currentSuggestionFilters.value)
    );

    return fetchedSuggestions;
  };

  return {
    fetchPageSuggestionsByTopics,
    fetchSectionSuggestionsByTopics,
  };
};

export default useSuggestionsFetchByTopics;
