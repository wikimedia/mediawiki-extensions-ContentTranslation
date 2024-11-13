import { ref } from "vue";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
const topicGroups = mw.loader.require("ext.cx.articletopics");

const DEFAULT_FILTERS = {
  type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  id: EDITS_SUGGESTION_PROVIDER,
};

const useFiltersValidator = () => {
  const topicIds = ref(
    topicGroups.flatMap((g) => g.topics).map((t) => t.topicId.toLowerCase())
  );

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

    // Case-insensitive comparison
    const typeLowerCase = type?.toLowerCase();
    const idLowerCase = id?.toLowerCase();

    // Topic must be valid or we use the default filter
    if (typeLowerCase === TOPIC_SUGGESTION_PROVIDER) {
      if (topicIds.value.some((topicId) => topicId === id)) {
        return { type: typeLowerCase, id: idLowerCase };
      } else {
        filtersValidatorError.value = true;

        return DEFAULT_FILTERS;
      }
    }

    // we cannot properly validate the suggestion filter for a specific collection, since the
    // page collections have not yet been fetched, when filter validation is performed. To avoid,
    // making this an asynchronous method, we are just accepting any value as valid collection name
    if (
      typeLowerCase === COLLECTIONS_SUGGESTION_PROVIDER ||
      typeLowerCase === SEED_SUGGESTION_PROVIDER
    ) {
      return { type: typeLowerCase, id };
    }

    // For 'edits' and 'popular' filters, only 'id' is needed,
    // but we set both to the same value
    if (idLowerCase === EDITS_SUGGESTION_PROVIDER) {
      return {
        type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
        id: EDITS_SUGGESTION_PROVIDER,
      };
    }

    if (idLowerCase === POPULAR_SUGGESTION_PROVIDER) {
      return {
        type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
        id: POPULAR_SUGGESTION_PROVIDER,
      };
    }

    if (idLowerCase === COLLECTIONS_SUGGESTION_PROVIDER) {
      return {
        type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
        id: COLLECTIONS_SUGGESTION_PROVIDER,
      };
    }

    // At this point we just set it to the default filter
    return DEFAULT_FILTERS;
  };

  /**
   * @param {string} type
   * @param {string} id
   */
  const isDefaultFilter = ({ type, id }) =>
    type === DEFAULT_FILTERS.type && id === DEFAULT_FILTERS.id;

  return { filtersValidatorError, validateFilters, isDefaultFilter };
};

export default useFiltersValidator;
