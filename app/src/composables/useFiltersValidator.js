import { ref } from "vue";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
} from "@/utils/suggestionFilterProviders";
const topicGroups = mw.loader.require("ext.cx.articletopics");

const DEFAULT_FILTERS = {
  type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
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

    // For 'edits' and 'popular' filters, only 'id' is needed,
    // but we set both to the same value
    if (id === EDITS_SUGGESTION_PROVIDER) {
      return {
        type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
        id: EDITS_SUGGESTION_PROVIDER,
      };
    }

    if (id === POPULAR_SUGGESTION_PROVIDER) {
      return {
        type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
        id: POPULAR_SUGGESTION_PROVIDER,
      };
    }

    // At this point we just set it to the default filter
    return DEFAULT_FILTERS;
  };

  return { filtersValidatorError, validateFilters };
};

export default useFiltersValidator;
