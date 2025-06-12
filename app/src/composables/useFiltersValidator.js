import { ref } from "vue";
import {
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  TOPIC_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
const { topics: topicGroups, regions } = mw.loader.require(
  "ext.cx.articlefilters"
);

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
   * @param {PageCollection[]|false} pageCollections page collections to validate against. False, if no such validations is desired
   * @return {{type: string, id: string}}
   */
  const validateFilters = ({ type, id }, pageCollections = false) => {
    // Reset error
    filtersValidatorError.value = false;

    // Case-insensitive comparison
    const typeLowerCase = type?.toLowerCase();
    const idLowerCase = id?.toLowerCase();

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

    try {
      if (typeLowerCase === TOPIC_SUGGESTION_PROVIDER) {
        // Topic must be valid or we use the default filter
        if (!topicIds.value.some((topicId) => topicId === idLowerCase)) {
          throw new Error();
        }

        return { type: typeLowerCase, id: idLowerCase };
      } else if (typeLowerCase === REGIONS_SUGGESTION_PROVIDER) {
        // Region must be valid or we use the default filter

        if (
          !regions.some(
            (region) =>
              region.id.toLowerCase() === idLowerCase ||
              region.countries.some(
                (country) => country.id.toLowerCase() === idLowerCase
              )
          )
        ) {
          throw new Error();
        }

        return { type: typeLowerCase, id: idLowerCase };
      } else if (typeLowerCase === COLLECTIONS_SUGGESTION_PROVIDER) {
        if (
          pageCollections &&
          !pageCollections.some((col) => col.name.toLowerCase() === idLowerCase)
        ) {
          throw new Error();
        }

        // if no page collections are given, we cannot properly validate the suggestion filter for
        // a specific collection. In this case, we are just accepting any value as valid collection name
        return { type: typeLowerCase, id };
      } else if (idLowerCase === COLLECTIONS_SUGGESTION_PROVIDER) {
        if (pageCollections && !pageCollections.length) {
          throw new Error();
        }

        return {
          type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
          id: COLLECTIONS_SUGGESTION_PROVIDER,
        };
      } else if (typeLowerCase === SEED_SUGGESTION_PROVIDER) {
        return { type: typeLowerCase, id };
      }
    } catch (error) {
      filtersValidatorError.value = true;

      return DEFAULT_FILTERS;
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
