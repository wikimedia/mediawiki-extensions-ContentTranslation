import { ref, watch, computed } from "vue";
import { cdxIconArticles, cdxIconSearch } from "@wikimedia/codex-icons";
import usePageCollections from "./usePageCollections";
import useSearchArticles from "@/composables/useArticleSearch";
import useURLHandler from "@/composables/useURLHandler";
import {
  TOPIC_SUGGESTION_PROVIDER,
  COLLECTIONS_SUGGESTION_PROVIDER,
  REGIONS_SUGGESTION_PROVIDER,
  SEED_SUGGESTION_PROVIDER,
} from "@/utils/suggestionFilterProviders";
import { useI18n } from "vue-banana-i18n";
import SuggestionFilterSearchResult from "@/wiki/cx/models/suggestionFilterSearchResult";

const { topics: topicGroups, regions } = mw.loader.require(
  "ext.cx.articlefilters"
);

const allTopics = topicGroups.flatMap((group) =>
  group.topics.map((topic) => ({
    ...topic,
    groupId: group.groupId,
  }))
);

/**
 * @returns {{
 *   searchInput: Ref<string>,
 *   searchScope: Ref<string>,
 *   searchResults: ComputedRef<Array<{
 *     key: string,
 *     show: boolean,
 *     items: Array<any>,
 *     showThumbnail?: boolean
 *   }>>
 * }}
 */
const useSuggestionsFilterSearch = () => {
  const searchInput = ref("");
  const searchScope = ref("all");
  const rawSearchResults = ref({
    topics: [],
    topic_areas: [],
    collections: [],
    regions: [],
  });
  const bananaI18n = useI18n();

  const { pageCollectionGroups } = usePageCollections();
  const { sourceLanguageURLParameter: sourceLanguage } = useURLHandler();

  /**
   * @param {string} query
   * @returns {{ topicId: string, label: string }[]}
   */
  const searchTopics = (query) => {
    query = query.toLowerCase(); // Convert input to lowercase for case-insensitive search

    return allTopics.filter((topic) =>
      topic.label.toLowerCase().includes(query)
    );
  };

  /**
   * @param {string} query
   * @returns {PageCollection[]}
   */
  const searchCollections = (query) => {
    query = query.toLowerCase(); // Convert input to lowercase for case-insensitive search

    const pageCollections = Object.values(pageCollectionGroups.value).flat();

    return pageCollections.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  };

  /**
   *
   * @param {string} query
   * @returns {{label: string, id: string}[]}
   */
  const searchRegions = (query) => {
    query = query.toLowerCase(); // Convert input to lowercase for case-insensitive search

    return regions
      .flatMap((region) => [region, ...region.countries])
      .filter((regionOrCountry) =>
        regionOrCountry.label.toLowerCase().includes(query)
      )
      .map((regionOrCountry) => ({
        label: regionOrCountry.label,
        id: regionOrCountry.id,
      }));
  };

  const searchTopicsQuery = computed(() =>
    searchScope.value === "all" ? searchInput.value : ""
  );

  const { searchResultsSlice, searchResultsLoading } = useSearchArticles(
    sourceLanguage,
    searchTopicsQuery
  );

  watch(searchResultsSlice, () => {
    rawSearchResults.value.topics = searchResultsSlice.value.map(
      (result) =>
        new SuggestionFilterSearchResult({
          label: result.title,
          value: result.title,
          description: result.description,
          thumbnail: { url: result.thumbnail?.source },
          filterType: SEED_SUGGESTION_PROVIDER,
          filterId: result.title,
          showThumbnail: true,
        })
    );
  });

  watch([searchInput, searchScope], async () => {
    rawSearchResults.value.topic_areas = searchTopics(searchInput.value).map(
      (topic) =>
        new SuggestionFilterSearchResult({
          label: topic.label,
          value: topic.label,
          description: bananaI18n.i18n(
            searchScope.value === "all"
              ? "cx-sx-suggestions-filter-search-results-topics-default-description"
              : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
          ),
          icon: searchScope.value === "all" ? cdxIconSearch : null,
          filterType: TOPIC_SUGGESTION_PROVIDER,
          filterId: topic.topicId,
        })
    );

    rawSearchResults.value.collections = searchCollections(
      searchInput.value
    ).map(
      (collection) =>
        new SuggestionFilterSearchResult({
          label: collection.name,
          value: collection.name,
          description: bananaI18n.i18n(
            searchScope.value === "all"
              ? "cx-sx-suggestions-filter-search-results-collections-default-description"
              : "cx-sx-suggestions-filter-search-results-collections-alternative-description",
            collection.articlesCount
          ),
          icon: searchScope.value === "all" ? cdxIconArticles : null,
          filterType: COLLECTIONS_SUGGESTION_PROVIDER,
          filterId: collection.name,
        })
    );

    rawSearchResults.value.regions = searchRegions(searchInput.value).map(
      (region) =>
        new SuggestionFilterSearchResult({
          label: region.label,
          value: region.label,
          description: bananaI18n.i18n(
            searchScope.value === "all"
              ? "cx-sx-suggestions-filter-search-results-regions-default-description"
              : "cx-sx-suggestions-filter-search-results-regions-alternative-description"
          ),
          icon: searchScope.value === "all" ? cdxIconSearch : null,
          filterType: REGIONS_SUGGESTION_PROVIDER,
          filterId: region.id,
        })
    );
  });

  const searchResults = computed(() => {
    const isAll = searchScope.value === "all";

    return [
      {
        key: "topics",
        show: rawSearchResults.value.topics.length && isAll,
        items: rawSearchResults.value.topics,
      },
      {
        key: "topic-areas",
        show:
          rawSearchResults.value.topic_areas.length &&
          (isAll || searchScope.value === "topics"),
        items: rawSearchResults.value.topic_areas,
      },
      {
        key: "geography",
        show:
          rawSearchResults.value.regions.length &&
          (isAll || searchScope.value === "geography"),
        items: rawSearchResults.value.regions,
      },
      {
        key: "collections",
        show:
          rawSearchResults.value.collections.length &&
          (isAll || searchScope.value === "collections"),
        items: rawSearchResults.value.collections,
      },
    ].filter((menu) => menu.show);
  });

  return { searchInput, searchScope, searchResults, searchResultsLoading };
};

export default useSuggestionsFilterSearch;
