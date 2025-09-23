import pageApi from "@/wiki/mw/api/page";
import { computed, inject, ref, watch } from "vue";
import debounce from "@/utils/debounce";

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

  const debouncedSearchForArticles = debounce(async () => {
    if (!searchInput.value) {
      searchResultsLoading.value = false;

      return;
    }

    try {
      /** @type {Page[]} */
      searchResults.value = await pageApi.searchPagesByTitlePrefix(
        searchInput.value,
        sourceLanguage.value
      );
    } finally {
      searchResultsLoading.value = false;
      mw.cx.eventlogging.stats.articleSearchAccess(isMobile);
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
