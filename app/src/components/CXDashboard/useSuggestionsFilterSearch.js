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

const topicGroups = mw.loader.require("ext.cx.articletopics");

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
  });
  const bananaI18n = useI18n();

  const { pageCollections } = usePageCollections();
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

    return pageCollections.value.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  };

  const { searchResultsSlice } = useSearchArticles(sourceLanguage, searchInput);

  watch(searchResultsSlice, () => {
    rawSearchResults.value.topics = searchResultsSlice.value.map((result) => ({
      label: result.title,
      value: result.title,
      description: result.description,
      thumbnail: {
        url: result.thumbnail?.source,
      },
      filterType: SEED_SUGGESTION_PROVIDER,
      filterId: result.title,
    }));
  });

  watch([searchInput, searchScope], async () => {
    rawSearchResults.value.topic_areas = searchTopics(searchInput.value).map(
      (topic) => ({
        label: topic.label,
        value: topic.label,
        description: bananaI18n.i18n(
          searchScope.value === "all"
            ? "cx-sx-suggestions-filter-search-results-topics-default-description"
            : "cx-sx-suggestions-filter-search-results-topics-alternative-description"
        ),
        icon: searchScope.value === "all" ? cdxIconSearch : null,
        filterType:
          topic.groupId === "geography"
            ? REGIONS_SUGGESTION_PROVIDER
            : TOPIC_SUGGESTION_PROVIDER,
        filterId: topic.topicId,
      })
    );

    rawSearchResults.value.collections = searchCollections(
      searchInput.value
    ).map((collection) => ({
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
    }));
  });

  const searchResults = computed(() => {
    const isAll = searchScope.value === "all";
    const getTopicAreasByType = (type) =>
      rawSearchResults.value.topic_areas.filter((t) => t.filterType === type);

    return [
      {
        key: "topics",
        show: rawSearchResults.value.topics.length && isAll,
        items: rawSearchResults.value.topics,
        showThumbnail: true,
      },
      {
        key: "topic-areas",
        show:
          getTopicAreasByType(TOPIC_SUGGESTION_PROVIDER).length &&
          (isAll || searchScope.value === "topics"),
        items: getTopicAreasByType(TOPIC_SUGGESTION_PROVIDER),
      },
      {
        key: "geography",
        show:
          getTopicAreasByType(REGIONS_SUGGESTION_PROVIDER).length &&
          (isAll || searchScope.value === "geography"),
        items: getTopicAreasByType(REGIONS_SUGGESTION_PROVIDER),
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

  return { searchInput, searchScope, searchResults };
};

export default useSuggestionsFilterSearch;
