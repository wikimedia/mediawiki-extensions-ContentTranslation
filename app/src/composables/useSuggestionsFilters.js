import { computed } from "vue";
import { useI18n } from "vue-banana-i18n";
import {
  TOPIC_SUGGESTION_PROVIDER,
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  SEED_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import useURLHandler from "./useURLHandler";
import usePageCollections from "@/components/CXDashboard/usePageCollections";
import SuggestionFilterGroup from "@/wiki/cx/models/suggestionFilterGroup";
import useFiltersValidator from "@/composables/useFiltersValidator";
import SuggestionFilter from "@/wiki/cx/models/suggestionFilter";

const { topics: topicGroups, regions } = mw.loader.require(
  "ext.cx.articlefilters"
);

/**
 * @param {{ groupId: string, label: string, topics: { topicId: string, label: string }[] }} topicGroup
 * @return {SuggestionFilterGroup}
 */
const topicGroupToFilterGroup = (topicGroup) =>
  new SuggestionFilterGroup({
    id: topicGroup.groupId,
    label: topicGroup.label,
    type: TOPIC_SUGGESTION_PROVIDER,
    filters: topicGroup.topics.map(
      (topic) =>
        new SuggestionFilter({
          id: topic.topicId,
          label: topic.label,
          type: TOPIC_SUGGESTION_PROVIDER,
        })
    ),
  });

const useSuggestionsFilters = () => {
  const bananaI18n = useI18n();
  const { currentSuggestionFilters: currentFilter, setFilterURLParams } =
    useURLHandler();

  const { validateFilters, filtersValidatorError } = useFiltersValidator();

  const editsFilter = new SuggestionFilter({
    id: EDITS_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-user-edit-label"),
  });
  const popularFilter = new SuggestionFilter({
    id: POPULAR_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-most-popular-label"),
  });
  const collectionsFilter = new SuggestionFilter({
    id: COLLECTIONS_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-page-collection-label"),
  });

  const { pageCollectionGroups, pageCollectionGroupsFetched } =
    usePageCollections();

  const automaticFiltersGroup = computed(() => {
    const filterGroup = new SuggestionFilterGroup({
      id: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
      type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
      label: bananaI18n.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [editsFilter, popularFilter],
    });

    // "ungrouped" key is always there
    if (Object.keys(pageCollectionGroups.value).length > 1) {
      filterGroup.filters.push(collectionsFilter);
    }

    return filterGroup;
  });

  /**
   * @returns {SuggestionFilter[]}
   */
  const collectionGroupToFilters = () => {
    const groups = { ...pageCollectionGroups.value };
    delete groups.ungrouped;

    const groupFilters = [];

    for (const groupName in groups) {
      const subFilters = groups[groupName].map(
        (subCollection) =>
          new SuggestionFilter({
            id: subCollection.name,
            label: subCollection.name,
            type: COLLECTIONS_SUGGESTION_PROVIDER,
          })
      );

      const groupFilter = new SuggestionFilter({
        id: groupName,
        label: groupName,
        type: COLLECTIONS_SUGGESTION_PROVIDER,
        subFilters,
      });

      groupFilters.push(groupFilter);
    }

    const ungroupedFilters = (pageCollectionGroups.value.ungrouped || []).map(
      (collection) =>
        new SuggestionFilter({
          id: collection.name,
          label: collection.name,
          type: COLLECTIONS_SUGGESTION_PROVIDER,
        })
    );

    return [...groupFilters, ...ungroupedFilters];
  };

  const collectionFiltersGroup = computed(
    () =>
      new SuggestionFilterGroup({
        id: COLLECTIONS_SUGGESTION_PROVIDER,
        type: COLLECTIONS_SUGGESTION_PROVIDER,
        label: bananaI18n.i18n(
          "cx-sx-suggestions-filter-page-collections-group-label"
        ),
        filters: collectionGroupToFilters(),
      })
  );

  const regionsFilterGroup = computed(() => {
    return new SuggestionFilterGroup({
      id: REGIONS_SUGGESTION_PROVIDER,
      type: REGIONS_SUGGESTION_PROVIDER,
      label: bananaI18n.i18n("cx-sx-suggestions-filters-tab-regions"),
      filters: regions.map(
        (region) =>
          new SuggestionFilter({
            id: region.id,
            label: region.label,
            type: REGIONS_SUGGESTION_PROVIDER,
            subFilters: region.countries.map(
              (country) =>
                new SuggestionFilter({
                  id: country.id,
                  label: country.label,
                  type: REGIONS_SUGGESTION_PROVIDER,
                })
            ),
          })
      ),
    });
  });

  /**
   * @type {ComputedRef<SuggestionFilterGroup[]>}
   */
  const allFilters = computed(() => {
    const filters = [
      automaticFiltersGroup.value,
      ...topicGroups.map(topicGroupToFilterGroup),
      regionsFilterGroup.value,
    ];

    if (collectionFiltersGroup.value.filters.length) {
      // push the collection filters group, just after the automatic group
      filters.splice(1, 0, collectionFiltersGroup.value);
    }

    return filters;
  });

  const waitingForPageCollectionsFetch = computed(
    () =>
      [currentFilter.value.type, currentFilter.value.id].includes(
        COLLECTIONS_SUGGESTION_PROVIDER
      ) && !pageCollectionGroupsFetched.value
  );

  /**
   * @return {[{id: string, label: string, type: string}, {id: string, label: string, type: string}]}
   */
  const getFiltersSummary = () => {
    if (waitingForPageCollectionsFetch.value) {
      return [];
    }

    const selectedFilter = findSelectedFilter();

    if (
      selectedFilter.type === TOPIC_SUGGESTION_PROVIDER ||
      selectedFilter.type === REGIONS_SUGGESTION_PROVIDER ||
      selectedFilter.type === SEED_SUGGESTION_PROVIDER ||
      selectedFilter.type === COLLECTIONS_SUGGESTION_PROVIDER ||
      selectedFilter.id === COLLECTIONS_SUGGESTION_PROVIDER
    ) {
      return [selectedFilter, editsFilter];
    }

    return [editsFilter, popularFilter];
  };

  /**
   * @param {{type: string, id: string|null}} filter
   */
  const selectFilter = (filter) => {
    setFilterURLParams(filter.type, filter.id);
  };

  /**
   * @return {SuggestionFilter}
   */
  const findSelectedFilter = () => {
    if (currentFilter.value.type === SEED_SUGGESTION_PROVIDER) {
      return new SuggestionFilter({
        id: currentFilter.value.id,
        label: currentFilter.value.id,
        type: currentFilter.value.type,
      });
    }

    return allFilters.value
      .flatMap((group) => group.filters)
      .flatMap((filter) => [filter, ...(filter.subFilters || [])])
      .find(isFilterSelected);
  };

  /**
   * @param {SuggestionFilter} filter
   * @returns {boolean}
   */
  const isFilterSelected = (filter) => currentFilter.value.id === filter.id;

  const getArticleTopics = (topicId) => {
    const allTopics = topicGroups.flatMap((group) => group.topics);
    const topic = allTopics.find((t) => t.topicId === topicId);

    return topic ? topic.articletopics : [];
  };

  const getCountries = (regionOrCountry) => {
    const region = regions.find((r) => r.id === regionOrCountry);

    if (region) {
      return region.countries.map((country) => country.id);
    }

    return [regionOrCountry]; // If it's not a region, return it as a single country
  };

  const validateURLFilterWithCollections = () => {
    if (!pageCollectionGroupsFetched.value) {
      return;
    }

    const pageCollections = Object.values(pageCollectionGroups.value).flat();

    const suggestionFilter = validateFilters(
      {
        type: currentFilter.value.type,
        id: currentFilter.value.id,
      },
      pageCollections
    );

    setFilterURLParams(suggestionFilter.type, suggestionFilter.id);

    if (filtersValidatorError.value) {
      mw.notify(bananaI18n.i18n("cx-sx-suggestions-filters-invalid-url"));
    }
  };

  return {
    allFilters,
    getFiltersSummary,
    selectFilter,
    isFilterSelected,
    getArticleTopics,
    waitingForPageCollectionsFetch,
    findSelectedFilter,
    validateURLFilterWithCollections,
    getCountries,
  };
};

export default useSuggestionsFilters;
