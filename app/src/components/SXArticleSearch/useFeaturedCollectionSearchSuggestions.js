import { useStore } from "vuex";
import { ref, computed, watch } from "vue";
import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";
import useURLHandler from "@/composables/useURLHandler";
import useSuggestionsFilters from "@/composables/useSuggestionsFilters";
import usePageMetadataFetch from "@/composables/usePageMetadataFetch";
import useSuggestionFetchByCollections from "@/composables/useSuggestionFetchByCollections";

const useFeaturedCollectionSearchSuggestions = (maxCurrentSuggestions) => {
  const store = useStore();
  const fetchPageMetadata = usePageMetadataFetch();
  const { fetchPageSuggestionsByFeaturedCollections } =
    useSuggestionFetchByCollections();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();
  const { featuredCollection } = useFeaturedCollectionFilter();

  const { isFilteringByFeaturedCollection } = useSuggestionsFilters();

  const featuredCollectionPages = ref([]);
  const featuredCollectionPagesResolved = ref(false);

  const shouldFetchFeaturedCollectionSuggestions = () => {
    return (
      !isFilteringByFeaturedCollection() &&
      featuredCollection.value?.name &&
      featuredCollectionPageSuggestions.value.length === 0
    );
  };
  const featuredCollectionPageSuggestions = computed(() => {
    return store.getters["suggestions/getCollectionPageSuggestions"](
      sourceLanguage.value,
      targetLanguage.value,
      featuredCollection.value?.name
    );
  });

  const featuredCollectionSectionSuggestions = computed(() => {
    return store.getters["suggestions/getCollectionSectionSuggestions"](
      sourceLanguage.value,
      targetLanguage.value,
      featuredCollection.value?.name
    );
  });

  const featuredCollectionSuggestions = computed(() => {
    return [
      ...(featuredCollectionPageSuggestions.value || []),
      ...(featuredCollectionSectionSuggestions.value || []),
    ].slice(0, maxCurrentSuggestions);
  });

  watch(
    featuredCollectionSuggestions,
    async (suggestions) => {
      if (!suggestions || suggestions.length === 0) {
        featuredCollectionPages.value = [];

        return;
      }

      try {
        const pageTitles = suggestions.map(
          (suggestion) => suggestion.sourceTitle
        );

        if (pageTitles.length > 0) {
          await fetchPageMetadata(sourceLanguage.value, pageTitles);
          featuredCollectionPages.value = pageTitles.map((title) =>
            store.getters["mediawiki/getPage"](sourceLanguage.value, title)
          );
        } else {
          featuredCollectionPages.value = [];
        }
        featuredCollectionPagesResolved.value = true;
      } catch (error) {
        mw.log.error("Error fetching featured collection pages:", error);
        featuredCollectionPages.value = [];
        featuredCollectionPagesResolved.value = true;
      }
    },
    { immediate: true }
  );

  watch(
    sourceLanguage,
    async () => {
      featuredCollectionPagesResolved.value = false;

      if (shouldFetchFeaturedCollectionSuggestions()) {
        featuredCollectionPages.value = [];
        await fetchPageSuggestionsByFeaturedCollections();
      }
    },
    { immediate: true }
  );

  return {
    featuredCollectionPages,
    featuredCollectionPagesResolved,
  };
};

export default useFeaturedCollectionSearchSuggestions;
