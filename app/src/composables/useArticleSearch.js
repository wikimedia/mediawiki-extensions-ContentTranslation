import pageApi from "@/wiki/mw/api/page";
import { computed, inject, ref, watch } from "vue";
import debounce from "@/utils/debounce";
import useFeaturedCollectionMembership from "@/composables/useFeaturedCollectionMembership";

/**
 * @param {ComputedRef<string>} sourceLanguage
 * @param {ComputedRef<string>|Ref<string>} searchInput
 * @return {{searchResultsSlice: ComputedRef<Page[]>, searchResultsLoading: ComputedRef<boolean>}}
 */
const useSearchArticles = (sourceLanguage, searchInput) => {
  /**
   * Max search results to be displayed to the user
   * @type {number}
   */
  const maxSearchResults = 4;
  const searchResults = ref([]);

  const searchResultsLoading = ref(false);

  const searchResultsSlice = computed(() =>
    searchResults.value.slice(0, maxSearchResults)
  );

  const breakpoints = inject("breakpoints");
  const isMobile = computed(() => breakpoints.value.mobile);

  const { inFeaturedCollection } = useFeaturedCollectionMembership();

  const addFeaturedCollectionMembership = async (pages) => {
    const qids = pages.map((page) => page.wikidataId).filter(Boolean);
    const result = await inFeaturedCollection(qids);
    pages.forEach((page) => {
      if (page.wikidataId) {
        page.inFeaturedCollection = result[page.wikidataId];
      }
    });
  };

  const debouncedSearchForArticles = debounce(async () => {
    if (!searchInput.value) {
      searchResultsLoading.value = false;

      return;
    }

    try {
      /** @type {Page[]} */
      const pages = await pageApi.searchPagesByTitlePrefix(
        searchInput.value,
        sourceLanguage.value
      );
      await addFeaturedCollectionMembership(pages);
      searchResults.value = pages;
    } finally {
      searchResultsLoading.value = false;
      mw.cx.eventlogging.stats.articleSearchAccess(isMobile.value);
    }
  }, 500);

  const refreshSearch = () => {
    searchResults.value = [];

    if (!searchInput.value) {
      return;
    }
    searchResultsLoading.value = true;

    debouncedSearchForArticles();
  };

  watch(searchInput, refreshSearch);
  watch(sourceLanguage, refreshSearch);

  return {
    searchResultsLoading,
    searchResultsSlice,
  };
};
export default useSearchArticles;
