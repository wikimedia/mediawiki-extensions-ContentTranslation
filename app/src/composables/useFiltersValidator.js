import { ref } from "vue";
import { EDITS_SUGGESTION_PROVIDER } from "@/composables/useSuggestionsFetchByEdits";
import { POPULAR_SUGGESTION_PROVIDER } from "@/composables/useSuggestionFetchByMostPopular";
import { TOPIC_SUGGESTION_PROVIDER } from "@/composables/useSuggestionsFetchByTopics";
const topicGroups = mw.loader.require("ext.cx.articletopics");

const DEFAULT_FILTERS = {
  type: EDITS_SUGGESTION_PROVIDER,
  id: EDITS_SUGGESTION_PROVIDER,
};

const useFiltersValidator = () => {
  const topics = ref(topicGroups.flatMap((group) => group.topics));

  const filtersValidatorError = ref(false);

  /**
   * Validate and coerce filters to correct values
   *
   * @param {{type: string|null, id: string|null}} filters
   * @return {{type: string, id: string}}
   */
  const validateFilters = ({ type, id }) => {
    // Reset error
    filtersValidatorError.value = false;

    // Topic must be valid or we use the default filter
    if (type === TOPIC_SUGGESTION_PROVIDER) {
      if (topics.value.some((topic) => topic.topicId === id)) {
        return { type, id };
      } else {
        filtersValidatorError.value = true;

        return DEFAULT_FILTERS;
      }
    }

    // For 'edits' and 'popular' filters, only one of 'type' or 'id' is needed
    // but we set both to the same value
    if (
      type === EDITS_SUGGESTION_PROVIDER ||
      id === EDITS_SUGGESTION_PROVIDER
    ) {
      return { type: EDITS_SUGGESTION_PROVIDER, id: EDITS_SUGGESTION_PROVIDER };
    }

    if (
      type === POPULAR_SUGGESTION_PROVIDER ||
      id === POPULAR_SUGGESTION_PROVIDER
    ) {
      return {
        type: POPULAR_SUGGESTION_PROVIDER,
        id: POPULAR_SUGGESTION_PROVIDER,
      };
    }

    // At this point we just set it to the default filter
    return DEFAULT_FILTERS;
  };

  return { filtersValidatorError, validateFilters };
};

export default useFiltersValidator;
