import { useStore } from "vuex";
import { ref } from "vue";
import useApplicationState from "@/composables/useApplicationState";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import pageApi from "@/wiki/mw/api/page";
import SuggestionSeedCollection from "@/wiki/cx/models/suggestionSeedCollection";

/**
 * @type {Ref<SuggestionSeedCollection[]>}
 */
const pageSuggestionSeedCollections = ref([]);
const sectionSuggestionSeedCollections = ref([]);
let publishedTranslationsReturned = false;
let previousEditsInSourceLoaded = false;
let previousEditsInTargetLoaded = false;
let defaultSeedsFetched = false;
let ongoingStoreEditSeedsPromise = null;

const seedCollections = {
  page: pageSuggestionSeedCollections,
  section: sectionSuggestionSeedCollections,
};

/**
 * This composable returns a "getSuggestionSeed" method that can be used to
 * get the next user edit based suggestion seed. If no user edit based
 * seeds can be fetched (e.g. current user has no edits), a seed based
 * on published translations with CX, is returned.
 *
 * @return {{getSuggestionSeed: (function(string): Promise<string|undefined>)}}
 */
const useSuggestionSeeds = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  /**
   * This method fetches seeds based on the following order:
   * 1. if user has published translations using CX/SX, use them as seeds
   * 2. if no seeds found in step 1 (or if these seeds have already been used), fetch user edits in source wiki
   * and use them as seeds
   * 3. if no seeds found in step 2 (or if these seeds have already been used), fetch user edits in target wiki
   * and their respective langlinks in source wiki, and use these source wiki langlinks as suggestion seeds.
   *
   * @return {Promise<string[]|null>}
   */
  const fetchSeedsBasedOnUserEdits = async () => {
    let publishedTranslations =
      store.getters["translator/getTranslationsByStatus"]("published");
    publishedTranslations = publishedTranslations.filter(
      (translation) => translation.sourceLanguage === sourceLanguage.value
    );

    if (publishedTranslations.length && !publishedTranslationsReturned) {
      publishedTranslationsReturned = true;

      return publishedTranslations.map(
        (translation) => translation.sourceTitle
      );
    }
    publishedTranslationsReturned = true;

    if (!previousEditsInSourceLoaded) {
      /** @type {string[]} */
      const previousEditsInSource = await cxSuggestionsApi
        .fetchUserEdits(sourceLanguage.value)
        .then((titles) => {
          previousEditsInSourceLoaded = true;

          return titles;
        });

      if (previousEditsInSource.length) {
        return previousEditsInSource;
      }
    }

    if (!previousEditsInTargetLoaded) {
      /** @type {string[]} */
      const previousEditsInTarget = await cxSuggestionsApi
        .fetchUserEdits(sourceLanguage.value)
        .then((titles) => {
          previousEditsInTargetLoaded = true;

          return titles;
        });

      if (previousEditsInTarget.length) {
        return pageApi.fetchLanguageLinksForLanguage(
          targetLanguage.value,
          sourceLanguage.value,
          previousEditsInTarget
        );
      }
    }

    return null;
  };

  const getSeedCollection = (type) => {
    let currentSeedCollection = seedCollections[type].value.find((collection) =>
      collection.matchesLanguagePair(sourceLanguage.value, targetLanguage.value)
    );

    if (!currentSeedCollection) {
      currentSeedCollection = new SuggestionSeedCollection({
        sourceLanguage: sourceLanguage.value,
        targetLanguage: targetLanguage.value,
      });
      // store "currentSeedCollection" to local state, so that it can be reused
      seedCollections[type].value.push(currentSeedCollection);
    }

    return currentSeedCollection;
  };

  /**
   * @return {Promise<void>}
   */
  const storeDefaultSeeds = async () => {
    const defaultSeeds = await cxSuggestionsApi.fetchSuggestionSeeds(
      sourceLanguage.value,
      targetLanguage.value
    );

    for (const type in seedCollections) {
      const seedCollection = getSeedCollection(type);
      seedCollection.seeds = [...seedCollection.seeds, ...(defaultSeeds || [])];
    }
  };

  const doStoreEditSeeds = async () => {
    let fetchCompleted = false;
    let editsBasedSeeds = [];

    do {
      editsBasedSeeds = await fetchSeedsBasedOnUserEdits();

      if (!editsBasedSeeds) {
        fetchCompleted = true;
      }

      for (const type in seedCollections) {
        const seedCollection = getSeedCollection(type);
        seedCollection.seeds = [
          ...seedCollection.seeds,
          ...(editsBasedSeeds || []),
        ];
      }
    } while (!fetchCompleted && !editsBasedSeeds?.length);
  };

  /**
   * @return {Promise<void>}
   */
  const storeEditSeeds = () => {
    if (ongoingStoreEditSeedsPromise) {
      return ongoingStoreEditSeedsPromise; // If a promise is already in progress, return it
    }

    ongoingStoreEditSeedsPromise = doStoreEditSeeds();

    return ongoingStoreEditSeedsPromise.finally(() => {
      ongoingStoreEditSeedsPromise = null; // Reset the promise after completion or error
    });
  };

  /**
   * @param {"page"|"section"} type
   * @return {Promise<string|null>}
   */
  const getSuggestionSeed = async (type) => {
    // Seed collection for given language pair
    let currentSeedCollection = getSeedCollection(type);

    if (!currentSeedCollection.seeds.length) {
      await storeEditSeeds();
    }

    let seed = currentSeedCollection.shiftSeeds();

    if (!seed && !defaultSeedsFetched) {
      await storeDefaultSeeds();
      seed = currentSeedCollection.shiftSeeds();
      defaultSeedsFetched = true;
    }

    return seed;
  };

  return { getSuggestionSeed };
};

export default useSuggestionSeeds;
