import { computed, ref } from "@vue/composition-api";
import useApplicationState from "@/composables/useApplicationState";

const useSuggestions = store => {
  const { state, getters } = store;

  const maxSlices = 4;

  const { sourceLanguage, targetLanguage } = useApplicationState();

  const maxSuggestionsPerSlice = state.suggestions.maxSuggestionsPerSlice;

  const pageSuggestionsForPair = computed(
    () => getters["application/getCurrentPageSuggestions"]
  );

  const currentSectionSuggestionsSliceIndex = ref(0);
  const currentPageSuggestionsSliceIndex = ref(0);

  const sectionSuggestionsForPair = computed(
    () => getters["application/getCurrentSectionSuggestions"]
  );

  const publishedTranslations = computed(
    () => getters["application/getCurrentPublishedTranslations"]
  );

  /** @type {ComputedRef<ArticleSuggestion[]>} */
  const pageSuggestionsForPairSubset = computed(() =>
    pageSuggestionsForPair.value.slice(
      currentPageSuggestionsSliceIndex.value * maxSuggestionsPerSlice,
      currentPageSuggestionsSliceIndex.value * (maxSuggestionsPerSlice + 1)
    )
  );

  /** @type {ComputedRef<SectionSuggestion[]>} */
  const currentSectionSuggestionsSlice = computed(() =>
    getSectionSuggestionsSliceByIndex(currentSectionSuggestionsSliceIndex.value)
  );

  const seedArticleTitle = computed(() => {
    if (
      currentPageSuggestionsSliceIndex.value <
      publishedTranslations.value.length
    ) {
      // Use one of the published translation's source title as seed title.
      // The recommendation api will give articles similar to this title
      // from source language to translate to target language.
      return publishedTranslations.value[currentPageSuggestionsSliceIndex.value]
        .sourceTitle;
    }

    return null;
  });

  /** @return {boolean} */
  const isCurrentSectionSuggestionsSliceFull = computed(
    () => currentSectionSuggestionsSlice.value.length === maxSuggestionsPerSlice
  );

  /** @return {number} */
  const nextSectionSuggestionsSliceIndex = computed(
    () => (currentSectionSuggestionsSliceIndex.value + 1) % maxSlices
  );

  /**
   * @param {number} sliceIndex
   * @return {SectionSuggestion[]}
   */
  const getSectionSuggestionsSliceByIndex = sliceIndex =>
    sectionSuggestionsForPair.value.slice(
      maxSuggestionsPerSlice * sliceIndex,
      maxSuggestionsPerSlice * (sliceIndex + 1)
    );

  /** @type {ComputedRef<boolean>} */
  const nextSectionSuggestionSliceFetched = computed(
    () =>
      isCurrentSectionSuggestionsSliceFull.value &&
      getSectionSuggestionsSliceByIndex(nextSectionSuggestionsSliceIndex.value)
        .length > 0
  );

  /**
   * Much like showMoreSuggestions method below, this method refreshes
   * section suggestions slice. Basically that can be split in these scenarios:
   * 1. Section suggestion slice is not full (less than 5 suggestions are displayed to the user
   * In this case, refreshing suggestions will add enough suggestions to fill this suggestion slice
   * 2. Section suggestion slice is full. In this case another whole section suggestion slice will be
   * fetched (5 more suggestions)
   * 3. Section suggestion slice is full and total number of suggestion slices is 4 (20 section suggestions
   * have been fetched). In this case, no new suggestions are being fetched, instead first section
   * suggestions slice is being shown. If user keeps refreshing, suggestion slice will continue to be updated
   * but no new suggestions will be fetched, only already fetched suggestions will be displayed.
   */
  const showMoreSectionSuggestions = () => {
    // If next slice has not been fetched yet, and max slices not reached, fetch it now
    if (!nextSectionSuggestionSliceFetched.value) {
      store.dispatch("suggestions/fetchNextSectionSuggestionsSlice");
    }

    if (isCurrentSectionSuggestionsSliceFull.value) {
      currentSectionSuggestionsSliceIndex.value =
        nextSectionSuggestionsSliceIndex.value;
    }
  };

  const showMoreSuggestions = maxSuggestionsPerSlice => {
    // 1. Get X(=24) suggestions using the sourceTitle of the I(=0)th most
    //    recent published translation
    // 2. Keep showing those suggestions 3 at a time
    // 3. Once we run out of suggestions, load X more suggestions
    //    using the sourceTitle of the I++th most recent published translation.
    //    This will append to what pageSuggestionsForPair (and pageSuggestionsForPairSubset) returns.
    // 4. Repeat until we have gone over all published translations
    // 5. Since no seed is available, once all suggestions are shown,
    //    go to first set of suggestions based on first seed we used.
    if (
      maxSuggestionsPerSlice * (currentPageSuggestionsSliceIndex.value + 1) >=
      pageSuggestionsForPair.value.length
    ) {
      // Start over
      currentPageSuggestionsSliceIndex.value = 0;
    } else {
      currentPageSuggestionsSliceIndex.value++;

      // There is a seed article, So fetch suggestions based on that.
      // But it will be appended to the list of suggestions.
      // So, refreshing does not mean fetching suggestions from next
      // seed article. These suggestions will appear after the previous
      // suggestions are shown.
      if (seedArticleTitle.value) {
        store.dispatch("suggestions/fetchPageSuggestions", {
          sourceLanguage: sourceLanguage.value,
          targetLanguage: targetLanguage.value,
          seed: seedArticleTitle.value
        });
      }
    }
  };

  /**
   * @param {SectionSuggestion} suggestionToDiscard
   * @return {Promise<void>}
   */
  const discardSuggestion = async suggestionToDiscard => {
    store.commit("suggestions/removeSectionSuggestion", suggestionToDiscard);

    if (!nextSectionSuggestionSliceFetched.value) {
      await store.dispatch("suggestions/fetchNextSectionSuggestionsSlice");
    }
  };

  return {
    currentSectionSuggestionsSlice,
    discardSuggestion,
    pageSuggestionsForPair,
    pageSuggestionsForPairSubset,
    showMoreSectionSuggestions,
    showMoreSuggestions
  };
};

export default useSuggestions;
