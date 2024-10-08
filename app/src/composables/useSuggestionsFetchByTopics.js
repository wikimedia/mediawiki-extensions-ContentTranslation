import { useStore } from "vuex";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import useSuggestionValidator from "@/composables/useSuggestionValidator";
import useSuggestionsFilters from "./useSuggestionsFilters";
import retry from "@/utils/retry";
import useURLHandler from "@/composables/useURLHandler";

export const TOPIC_SUGGESTION_PROVIDER = "topic";

const useSuggestionsFetchByTopics = () => {
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

  const { getOresTopics } = useSuggestionsFilters();

  /**
   * @param {number} numberOfSuggestionsToFetch the number of suggestions to fetch
   * @return {Promise<ArticleSuggestion[]>}
   */
  const fetchPageSuggestionsByTopics = async (numberOfSuggestionsToFetch) => {
    const topic = currentSuggestionFilters.value.id;

    const topicFilter = {
      id: topic,
      type: TOPIC_SUGGESTION_PROVIDER,
    };
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
      (suggestion) => (suggestion.suggestionProvider = topicFilter)
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
    const topic = currentSuggestionFilters.value.id;

    const topicFilter = {
      id: topic,
      type: TOPIC_SUGGESTION_PROVIDER,
    };
    const oresTopics = getOresTopics(topic);

    const fetchedSuggestions = [];

    await retry(async () => {
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
      (suggestion) => (suggestion.suggestionProvider = topicFilter)
    );

    return fetchedSuggestions;
  };

  return {
    fetchPageSuggestionsByTopics,
    fetchSectionSuggestionsByTopics,
  };
};

export default useSuggestionsFetchByTopics;
