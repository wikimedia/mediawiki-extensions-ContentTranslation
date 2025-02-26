import { computed } from "vue";
import { useI18n } from "vue-banana-i18n";
import {
  TOPIC_SUGGESTION_PROVIDER,
  EDITS_SUGGESTION_PROVIDER,
  POPULAR_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import useURLHandler from "./useURLHandler";
import usePageCollections from "@/components/CXDashboard/usePageCollections";
import SuggestionFilterGroup from "@/wiki/cx/models/suggestionFilterGroup";

const topicGroups = mw.loader.require("ext.cx.articletopics");

/**
 * @param {{ groupId: string, label: string, topics: { topicId: string, label: string }[] }} topicGroup
 * @return {SuggestionFilterGroup}
 */
const topicGroupToFilterGroup = (topicGroup) =>
  new SuggestionFilterGroup({
    id: topicGroup.groupId,
    label: topicGroup.label,
    filters: topicGroup.topics.map((topic) => ({
      id: topic.topicId,
      label: topic.label,
      type: TOPIC_SUGGESTION_PROVIDER,
    })),
  });

const useSuggestionsFilters = () => {
  const bananaI18n = useI18n();
  const { currentSuggestionFilters: currentFilter, setFilterURLParams } =
    useURLHandler();

  const editsFilter = {
    id: EDITS_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-user-edit-label"),
  };
  const popularFilter = {
    id: POPULAR_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-most-popular-label"),
  };
  const collectionsFilter = {
    id: COLLECTIONS_SUGGESTION_PROVIDER,
    type: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
    label: bananaI18n.i18n("cx-sx-suggestions-filter-page-collection-label"),
  };

  const { pageCollections, pageCollectionsFetched } = usePageCollections();

  const automaticFiltersGroup = computed(() => {
    const filterGroup = new SuggestionFilterGroup({
      id: AUTOMATIC_SUGGESTION_PROVIDER_GROUP,
      label: bananaI18n.i18n("cx-sx-suggestions-filter-default-group-label"),
      filters: [editsFilter, popularFilter],
    });

    if (pageCollections.value.length) {
      filterGroup.filters.push(collectionsFilter);
    }

    return filterGroup;
  });

  /**
   * @param {PageCollection} collection
   * @returns {{id: string, label: string, type: string}}
   */
  const collectionToFilter = (collection) => ({
    id: collection.name,
    label: collection.name,
    type: COLLECTIONS_SUGGESTION_PROVIDER,
  });

  const collectionFiltersGroup = computed(
    () =>
      new SuggestionFilterGroup({
        id: "collections",
        label: bananaI18n.i18n(
          "cx-sx-suggestions-filter-page-collections-group-label"
        ),
        filters: pageCollections.value.map((collection) =>
          collectionToFilter(collection)
        ),
      })
  );

  const allFilters = computed(() => {
    const filters = [
      automaticFiltersGroup.value,
      ...topicGroups.map(topicGroupToFilterGroup),
    ];

    if (pageCollections.value.length) {
      // push the collection filters group, just after the automatic group
      filters.splice(1, 0, collectionFiltersGroup.value);
    }

    return filters;
  });

  const waitingForPageCollectionsFetch = computed(
    () =>
      [currentFilter.value.type, currentFilter.value.id].includes(
        COLLECTIONS_SUGGESTION_PROVIDER
      ) && !pageCollectionsFetched.value
  );

  /**
   * @return {[{id: string, label: string, type: string}], {id: string, label: string, type: string}]}
   */
  const getFiltersSummary = () => {
    if (waitingForPageCollectionsFetch.value) {
      return [];
    }

    const selectedFilter = findSelectedFilter();

    if (
      selectedFilter.type === TOPIC_SUGGESTION_PROVIDER ||
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
   * @return {{id: string, label: string, type: string}}
   */
  const findSelectedFilter = () => {
    if (currentFilter.value.type === SEED_SUGGESTION_PROVIDER) {
      return {
        id: currentFilter.value.id,
        label: currentFilter.value.id,
        type: currentFilter.value.type,
      };
    }

    return allFilters.value
      .flatMap((group) => group.filters)
      .find(isFilterSelected);
  };

  const isFilterSelected = (filter) =>
    currentFilter.value.type === filter.type &&
    currentFilter.value.id === filter.id;

  const getArticleTopics = (topicId) => {
    const allTopics = topicGroups.flatMap((group) => group.topics);
    const topic = allTopics.find((t) => t.topicId === topicId);

    return topic ? topic.articletopics : [];
  };

  return {
    allFilters,
    getFiltersSummary,
    selectFilter,
    isFilterSelected,
    getArticleTopics,
    waitingForPageCollectionsFetch,
    findSelectedFilter,
  };
};

export default useSuggestionsFilters;
