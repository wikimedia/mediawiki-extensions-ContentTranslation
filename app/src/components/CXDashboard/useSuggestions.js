import { computed, ref } from "@vue/composition-api";

const useSuggestions = contextRoot => {
  const store = contextRoot.$store;

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

  const nextSectionSuggestionsSliceIndex = computed(
    () => (currentSectionSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices
  );
  const nextPageSuggestionsSliceIndex = computed(
    () => (currentSectionSuggestionsSliceIndex.value + 1) % maxSuggestionsSlices
  );

  const currentSectionSuggestionsSlice = computed(() =>
    store.getters["application/getSectionSuggestionsSliceByIndex"](
      currentSectionSuggestionsSliceIndex.value
    )
  );

  const currentPageSuggestionsSlice = computed(() =>
    store.getters["application/getPageSuggestionsSliceByIndex"](
      currentPageSuggestionsSliceIndex.value
    )
  );

  const isCurrentSectionSuggestionsSliceFull = computed(
    () => currentSectionSuggestionsSlice.value.length === maxSuggestionsPerSlice
  );

  const isCurrentPageSuggestionsSliceFull = computed(
    () => currentPageSuggestionsSlice.value.length === maxSuggestionsPerSlice
  );

  const nextSectionSuggestionSliceFetched = computed(
    () =>
      isCurrentSectionSuggestionsSliceFull.value &&
      store.getters["application/getSectionSuggestionsSliceByIndex"](
        nextPageSuggestionsSliceIndex.value
      ).length > 0
  );

  const nextPageSuggestionSliceFetched = computed(
    () =>
      isCurrentPageSuggestionsSliceFull.value &&
      store.getters["application/getPageSuggestionsSliceByIndex"](
        nextPageSuggestionsSliceIndex.value
      ).length > 0
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

  const fetchNextSectionSuggestionSlice = () => {
    if (!nextSectionSuggestionSliceFetched.value) {
      store.dispatch("suggestions/fetchNextSectionSuggestionsSlice", {
        nextIndex: nextSectionSuggestionsSliceIndex.value
      });
      isCurrentSectionSuggestionsSliceFull.value &&
        increaseCurrentSectionSuggestionsSliceIndex();
    }
  };

  const fetchNextPageSuggestionSlice = () => {
    if (!nextPageSuggestionSliceFetched.value) {
      store.dispatch("suggestions/fetchNextPageSuggestionsSlice", {
        nextIndex: nextPageSuggestionsSliceIndex.value
      });
      isCurrentPageSuggestionsSliceFull.value &&
        increaseCurrentPageSuggestionsSliceIndex();
    }
  };

  /**
   * @param {SectionSuggestion} suggestion
   */
  const discardSectionSuggestion = suggestion => {
    contextRoot.$logEvent({ event_type: "dashboard_discard_suggestion" });
    store.commit("suggestions/removeSectionSuggestion", suggestion);
    fetchNextSectionSuggestionSlice();
  };

  /**
   * @param {SectionSuggestion} suggestion
   */
  const discardPageSuggestion = suggestion => {
    contextRoot.$logEvent({ event_type: "dashboard_discard_suggestion" });
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

  return {
    currentPageSuggestionsSlice,
    currentSectionSuggestionsSlice,
    discardPageSuggestion,
    discardSectionSuggestion,
    onSuggestionRefresh,
    pageSuggestionsLoading,
    sectionSuggestionsLoading,
    showRefreshButton
  };
};

export default useSuggestions;
