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
import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";

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
  const { featuredCollection, featuredCollectionFetched } =
    useFeaturedCollectionFilter();

  const {
    validateFilters,
    filtersValidatorError,
    isDefaultFilter,
    isPopularFilter,
    isEqualFilter,
  } = useFiltersValidator();

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

  const regionsFilterGroup = new SuggestionFilterGroup({
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

  /**
   * @type {ComputedRef<SuggestionFilterGroup[]>}
   */
  const allFilters = computed(() => {
    const filters = [
      automaticFiltersGroup.value,
      ...topicGroups.map(topicGroupToFilterGroup),
      regionsFilterGroup,
    ];

    if (collectionFiltersGroup.value.filters.length) {
      // push the collection filters group, just after the automatic group
      filters.splice(1, 0, collectionFiltersGroup.value);
    }

    return filters;
  });

  const waitingForPageCollectionsFetch = computed(
    () => !pageCollectionGroupsFetched.value || !featuredCollectionFetched.value
  );

  const featuredCollectionFilter = computed(
    () =>
      new SuggestionFilter({
        id: featuredCollection.value,
        label: featuredCollection.value,
        type: COLLECTIONS_SUGGESTION_PROVIDER,
      })
  );

  /**
   * @return {[SuggestionFilter, SuggestionFilter]}
   */
  const getFiltersSummary = () => {
    if (waitingForPageCollectionsFetch.value) {
      return [];
    }

    const selectedFilter = findSelectedFilter();

    const filters = [];

    // if featured collection exists, the corresponding filter should always be in the first place
    if (featuredCollection.value) {
      filters.push(featuredCollectionFilter.value);
    }

    const isSpecialSelection =
      !isDefaultFilter(selectedFilter) &&
      !isPopularFilter(selectedFilter) &&
      !isEqualFilter(selectedFilter, featuredCollectionFilter.value);

    // if current filter is not one of the filters that are always contained in the filters summary,
    // it should be positioned either in the first place, or the second place if a featured collection exists
    if (isSpecialSelection) {
      filters.push(selectedFilter);
    }
    // user-edit filter and popular filter should always be included in the filters summary
    // however they may not be displayed. Which filters are displayed is controlled inside CXSuggestionListFilters.vue
    filters.push(editsFilter, popularFilter);

    return filters;
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
  const isFilterSelected = (filter) =>
    isEqualFilter(filter, currentFilter.value);

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

  const pageCollections = computed(() =>
    Object.values(pageCollectionGroups.value).flat()
  );

  const validateURLFilterWithCollections = () => {
    if (!pageCollectionGroupsFetched.value) {
      return;
    }

    const suggestionFilter = validateFilters(
      {
        type: currentFilter.value.type,
        id: currentFilter.value.id,
      },
      pageCollections.value
    );

    setFilterURLParams(suggestionFilter.type, suggestionFilter.id);

    if (filtersValidatorError.value) {
      mw.notify(bananaI18n.i18n("cx-sx-suggestions-filters-invalid-url"));
    }
  };

  const setFeaturedCollectionFilterIfNeeded = () => {
    if (!isDefaultFilter(currentFilter.value)) {
      return;
    }

    const suggestionFilter = validateFilters(
      featuredCollectionFilter.value,
      pageCollections.value
    );

    selectFilter(suggestionFilter);
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
    setFeaturedCollectionFilterIfNeeded,
  };
};

export default useSuggestionsFilters;
