import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";
import useApplicationState from "@/composables/useApplicationState";
import useSuggestionsFetch from "@/composables/useSuggestionsFetch";

const useSuggestions = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage, currentSuggestionFilters } =
    useApplicationState(store);

  const logEvent = useEventLogging();

  const sectionSuggestionsLoading = computed(
    () => store.state.suggestions.sectionSuggestionsLoadingCount > 0
  );
  const pageSuggestionsLoading = computed(
    () => store.state.suggestions.pageSuggestionsLoadingCount > 0
  );

  const showRefreshButton = computed(
    () => !sectionSuggestionsLoading.value && !pageSuggestionsLoading.value
  );

  /**
   * Current index of section suggestions slice to be displayed inside the Dashboard
   * @type {Ref<number>}
   */
  const currentSectionSuggestionsSliceIndex = ref(0);
  /**
   * Current index of section suggestions slice to be displayed inside the Dashboard
   * @type {Ref<number>}
   */
  const currentPageSuggestionsSliceIndex = ref(0);

  const { maxSuggestionsPerSlice } = store.state.suggestions;

  /**
   * Maximum number of different suggestion slices to be displayed inside the Dashboard.
   * Once, user suggestion refreshes reaches this limit, the first suggestion slice is
   * displayed again.
   *
   * @type {number}
   */
  const maxSuggestionsSlices = 4;

  /**
   * @type {ComputedRef<SectionSuggestion[]>}
   */
  const currentSectionSuggestionsSlice = computed(() =>
    store.getters["application/getSectionSuggestionsSliceByIndex"](
      currentSectionSuggestionsSliceIndex.value
    )
  );

  /**
   * @type {ComputedRef<ArticleSuggestion[]>}
   */
  const currentPageSuggestionsSlice = computed(() =>
    store.getters["application/getPageSuggestionsSliceByIndex"](
      currentPageSuggestionsSliceIndex.value
    )
  );

  /**
   * This action refreshes section and page suggestions current slice.
   *
   * 1. If current page or section suggestion slice is not full (less than 3 suggestions are displayed to the user),
   * this action will add enough suggestions to fill the suggestion slices.
   * 2. If current suggestion slices are full, current suggestion slices will be replaced by new ones.
   * 3. If maximum slices limit has been reached, the same suggestions are being shown starting from the beginning.
   */
  const onSuggestionRefresh = () => {
    // If next slice has not been fetched yet, and max slices not reached, fetch it now
    fetchNextSectionSuggestionSlice();
    fetchNextPageSuggestionSlice();
  };

  const {
    fetchNextSectionSuggestionsSlice: doFetchSectionSuggestionsSlice,
    fetchNextPageSuggestionsSlice: doFetchPageSuggestionsSlice,
  } = useSuggestionsFetch();

  /**
   * @param {array} slice
   */
  const isSuggestionListSliceComplete = (slice) =>
    slice.length === maxSuggestionsPerSlice;

  const fetchNextSectionSuggestionSlice = () => {
    const isCurrentSliceFull = isSuggestionListSliceComplete(
      currentSectionSuggestionsSlice.value
    );

    const nextIndex =
      (currentSectionSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices;

    const isNextSliceFull = isSuggestionListSliceComplete(
      store.getters["application/getSectionSuggestionsSliceByIndex"](nextIndex)
    );

    if (!isCurrentSliceFull || !isNextSliceFull) {
      doFetchSectionSuggestionsSlice();
    }
    isCurrentSliceFull && increaseCurrentSectionSuggestionsSliceIndex();
  };

  const fetchNextPageSuggestionSlice = () => {
    const isCurrentSliceFull = isSuggestionListSliceComplete(
      currentPageSuggestionsSlice.value
    );

    const nextIndex =
      (currentPageSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices;

    const isNextSliceFull = isSuggestionListSliceComplete(
      store.getters["application/getPageSuggestionsSliceByIndex"](nextIndex)
    );

    if (!isCurrentSliceFull || !isNextSliceFull) {
      doFetchPageSuggestionsSlice();
    }

    isCurrentSliceFull && increaseCurrentPageSuggestionsSliceIndex();
  };

  /**
   * @param {SectionSuggestion} suggestion
   */
  const discardSectionSuggestion = (suggestion) => {
    logEvent({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
    });
    store.commit("suggestions/removeSectionSuggestionFromList", suggestion);
    fetchNextSectionSuggestionSlice();
  };

  /**
   * @param {ArticleSuggestion} suggestion
   */
  const discardPageSuggestion = (suggestion) => {
    logEvent({
      event_type: "dashboard_discard_suggestion",
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
    });
    store.commit("suggestions/removePageSuggestion", suggestion);
    fetchNextPageSuggestionSlice();
  };

  /**
   * Current suggestions slice index belongs to [0, state.maxSuggestionsSlices - 1] range.
   * That is because user can get at most "maxSuggestionsSlices" suggestion pages. After
   * that limit has been reached, same suggestions are being displayed starting from the
   * first ones again.
   *
   * @return {number}
   */
  const increaseCurrentSectionSuggestionsSliceIndex = () =>
    (currentSectionSuggestionsSliceIndex.value =
      (currentSectionSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices);

  /**
   * Current suggestions slice index belongs to [0, state.maxSuggestionsSlices - 1] range.
   * That is because user can get at most "maxSuggestionsSlices" suggestion pages. After
   * that limit has been reached, same suggestions are being displayed starting from the
   * first ones again.
   *
   * @return {number}
   */
  const increaseCurrentPageSuggestionsSliceIndex = () =>
    (currentPageSuggestionsSliceIndex.value =
      (currentPageSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices);

  watch(
    currentSuggestionFilters,
    () => {
      currentPageSuggestionsSliceIndex.value = 0;
      fetchNextPageSuggestionSlice();
      currentSectionSuggestionsSliceIndex.value = 0;
      fetchNextSectionSuggestionSlice();
    },
    { deep: true }
  );

  return {
    currentPageSuggestionsSlice,
    currentSectionSuggestionsSlice,
    discardPageSuggestion,
    discardSectionSuggestion,
    onSuggestionRefresh,
    pageSuggestionsLoading,
    sectionSuggestionsLoading,
    showRefreshButton,
  };
};

export default useSuggestions;
