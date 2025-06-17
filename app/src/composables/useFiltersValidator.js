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
   * @param {string} id
   * @param {string} idLowerCase
   * @returns {{type: string, id: string}|null}
   */
  const validateTopicFilter = (id, idLowerCase) => {
    if (!topicIds.value.includes(idLowerCase)) return null;

    return { type: TOPIC_SUGGESTION_PROVIDER, id: idLowerCase };
  };

  /**
   * @param {string} id
   * @param {string} idLowerCase
   * @returns {{type: string, id: string}|null}
   */
  const validateRegionFilter = (id, idLowerCase) => {
    const isValid = regions.some(
      (region) =>
        region.id.toLowerCase() === idLowerCase ||
        region.countries.some(
          (country) => country.id.toLowerCase() === idLowerCase
        )
    );
    if (!isValid) return null;

    return { type: REGIONS_SUGGESTION_PROVIDER, id: idLowerCase };
  };

  /**
   * @param {string} id
   * @param {string} idLowerCase
   * @param {PageCollection[]|false} pageCollections
   * @returns {{type: string, id: string}|null}
   */
  const validateCollectionFilter = (id, idLowerCase, pageCollections) => {
    if (
      pageCollections &&
      !pageCollections.some((col) => col.name.toLowerCase() === idLowerCase)
    ) {
      return null;
    }

    // if no page collections provided, accept any value with original casing
    return { type: COLLECTIONS_SUGGESTION_PROVIDER, id };
  };

  /**
   * Validate and coerce filters to correct values
   *
   * @param {{type: string|null, id: string|null}} filters
   * @param {PageCollection[]|false} pageCollections page collections to validate against. False, if no such validations is desired
   * @return {{type: string, id: string}}
   */
  const validateFilters = ({ type, id }, pageCollections = false) => {
    filtersValidatorError.value = false;

    const typeLowerCase = type?.toLowerCase();
    const idLowerCase = id?.toLowerCase();

    // Handle ID-based automatic filters
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

    // "All collections" filter
    if (idLowerCase === COLLECTIONS_SUGGESTION_PROVIDER) {
      if (pageCollections && !pageCollections.length) {
        filtersValidatorError.value = true;

        return DEFAULT_FILTERS;
      }

      return {
        type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
        id: COLLECTIONS_SUGGESTION_PROVIDER,
      };
    }

    // Handle type-based validation filters
    if (typeLowerCase === TOPIC_SUGGESTION_PROVIDER) {
      const validationResult = validateTopicFilter(id, idLowerCase);
      if (validationResult) return validationResult;

      filtersValidatorError.value = true;
    } else if (typeLowerCase === REGIONS_SUGGESTION_PROVIDER) {
      const validationResult = validateRegionFilter(id, idLowerCase);
      if (validationResult) return validationResult;

      filtersValidatorError.value = true;
    } else if (typeLowerCase === COLLECTIONS_SUGGESTION_PROVIDER) {
      const validationResult = validateCollectionFilter(
        id,
        idLowerCase,
        pageCollections
      );
      if (validationResult) return validationResult;

      filtersValidatorError.value = true;
    } else if (typeLowerCase === SEED_SUGGESTION_PROVIDER) {
      return { type: SEED_SUGGESTION_PROVIDER, id };
    }

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
