import suggestionsApi from "@/wiki/cx/api/suggestions";
import { computed, ref, watch } from "vue";
import useURLHandler from "@/composables/useURLHandler";
const siteMapper = new mw.cx.SiteMapper();

const currentWikiLanguage = siteMapper.getCurrentWikiLanguageCode();
const currentWikiFeaturedCollection = mw.config.get(
  "wgContentTranslationFeaturedCollection"
);

const featuredCollections = ref({
  [currentWikiLanguage]: currentWikiFeaturedCollection,
});

const featuredCollectionPromises = ref({
  [currentWikiLanguage]: Promise.resolve(),
});
const featuredCollectionsFetched = ref({
  [currentWikiLanguage]: true,
});
let isWatcherInitialized = false;

const useFeaturedCollectionFilter = () => {
  const { targetLanguageURLParameter: targetLanguage } = useURLHandler();

  const initializeFeaturedCollectionWatcher = () => {
    // avoid registering the watcher more than once
    if (isWatcherInitialized) {
      return;
    }

    watch(
      targetLanguage,
      () => {
        if (
          targetLanguage.value &&
          !featuredCollections.value[targetLanguage.value]
        ) {
          featuredCollectionPromises.value[targetLanguage.value] =
            suggestionsApi
              .fetchFeaturedCollectionNameByLanguage(targetLanguage.value)
              .then((featuredCollectionName) => {
                featuredCollections.value[targetLanguage.value] =
                  featuredCollectionName;
                featuredCollectionsFetched.value[targetLanguage.value] = true;
              });
        }
      },
      { immediate: true }
    );
    isWatcherInitialized = true;
  };
  const featuredCollection = computed(
    () => featuredCollections.value[targetLanguage.value] || null
  );

  const featuredCollectionFetched = computed(
    () => featuredCollectionsFetched.value[targetLanguage.value] || false
  );

  const featuredCollectionPromise = computed(
    () => featuredCollectionPromises.value[targetLanguage.value]
  );

  return {
    featuredCollection,
    featuredCollectionFetched,
    featuredCollectionPromise,
    initializeFeaturedCollectionWatcher,
  };
};

export default useFeaturedCollectionFilter;
