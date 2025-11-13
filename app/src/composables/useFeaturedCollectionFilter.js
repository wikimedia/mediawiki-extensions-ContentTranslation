import suggestionsApi from "@/wiki/cx/api/suggestions";
import { computed, ref, watch } from "vue";
import useURLHandler from "@/composables/useURLHandler";
const siteMapper = new mw.cx.SiteMapper();

const currentWikiLanguage = siteMapper.getCurrentWikiLanguageCode();
const currentWikiFeaturedCollectionName = mw.config.get(
  "wgContentTranslationFeaturedCollection"
);
const currentWikiFeaturedCollectionCommunityName = mw.config.get(
  "wgContentTranslationFeaturedCollectionCommunityName"
);
const currentWikiFeaturedCollectionDescription = mw.config.get(
  "wgContentTranslationFeaturedCollectionDescription"
);
const currentWikiFeaturedCollectionLink = mw.config.get(
  "wgContentTranslationFeaturedCollectionLink"
);

const featuredCollections = ref({
  [currentWikiLanguage]: {
    name: currentWikiFeaturedCollectionName,
    communityName: currentWikiFeaturedCollectionCommunityName,
    description: currentWikiFeaturedCollectionDescription,
    link: currentWikiFeaturedCollectionLink,
  },
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
          suggestionsApi
            .fetchFeaturedCollectionDataByLanguage(targetLanguage.value)
            .then((featuredCollectionData) => {
              featuredCollections.value[targetLanguage.value] = {
                name: featuredCollectionData.name,
                communityName: featuredCollectionData.communityName,
                description: featuredCollectionData.description,
                link: featuredCollectionData.link,
              };
              featuredCollectionsFetched.value[targetLanguage.value] = true;
            });
        }
      },
      { immediate: true }
    );
    isWatcherInitialized = true;
  };
  const featuredCollection = computed(() =>
    featuredCollections.value[targetLanguage.value]?.name
      ? featuredCollections.value[targetLanguage.value]
      : null
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
