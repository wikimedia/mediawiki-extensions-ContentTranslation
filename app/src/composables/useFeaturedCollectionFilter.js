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

const fetchFeaturedCollection = (lang) => {
  if (!lang || featuredCollectionPromises.value[lang]) {
    return;
  }

  const promise = suggestionsApi
    .fetchFeaturedCollectionDataByLanguage(lang)
    .then((featuredCollection) => {
      if (featuredCollection) {
        featuredCollections.value[lang] = featuredCollection;
      }
      featuredCollectionsFetched.value[lang] = true;
    })
    .catch((error) => {
      // On error, mark as fetched to prevent retries
      featuredCollectionsFetched.value[lang] = true;
      console.error("Failed to fetch featured collection:", error);
    });

  featuredCollectionPromises.value[lang] = promise;
};

/**
 * Composable for accessing featured collection data
 * @param {string|undefined} language - Optional language parameter
 *   - If string: static language code
 *   - If undefined: uses URL target language parameter and watches for changes
 */
const useFeaturedCollectionFilter = (language = undefined) => {
  let languageRef;

  if (!language) {
    // No parameter: use URL target language and watch it
    const { targetLanguageURLParameter } = useURLHandler();
    languageRef = targetLanguageURLParameter;

    if (!isWatcherInitialized) {
      watch(
        languageRef,
        (newLang) => {
          if (newLang) {
            fetchFeaturedCollection(newLang);
          }
        },
        { immediate: true }
      );
      isWatcherInitialized = true;
    }
  } else {
    // Static string provided: wrap in ref and fetch immediately
    languageRef = ref(language);

    if (language) {
      fetchFeaturedCollection(language);
    }
  }

  const featuredCollection = computed(() => {
    const lang = languageRef.value;
    const collection = featuredCollections.value[lang];

    return collection?.name ? collection : null;
  });

  const featuredCollectionFetched = computed(
    () => featuredCollectionsFetched.value[languageRef.value] || false
  );

  const featuredCollectionPromise = computed(
    () => featuredCollectionPromises.value[languageRef.value]
  );

  return {
    featuredCollection,
    featuredCollectionFetched,
    featuredCollectionPromise,
  };
};

export default useFeaturedCollectionFilter;
