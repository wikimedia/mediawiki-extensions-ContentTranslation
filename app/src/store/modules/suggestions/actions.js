import Vue from "vue";
import cxSuggestionsApi from "../../../wiki/cx/api/suggestions";
import SectionSuggestionSeedCollection from "../../../wiki/cx/models/sectionSuggestionSeedCollection";

async function fetchPageSuggestions(
  { commit, dispatch },
  { sourceLanguage, targetLanguage, seed }
) {
  /** @type {ArticleSuggestion[]} */
  const suggestions = await cxSuggestionsApi.fetchSuggestions(
    sourceLanguage,
    targetLanguage,
    seed
  );
  suggestions.forEach(suggestion => commit("addPageSuggestion", suggestion));
  const titles = suggestions.map(suggestion => suggestion.sourceTitle);
  titles.length &&
    dispatch(
      "mediawiki/fetchPageMetadata",
      { language: sourceLanguage, titles },
      { root: true }
    );
}

/**
 * @param {Object} context
 * @param {Function} context.commit
 * @param {Function} context.dispatch
 * @param {Object} context.rootState
 * @param {Object} context.getters
 * @param {Object} context.state
 * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]} seeds
 * @return {Promise<void>}
 */
async function fetchSectionSuggestionsBySeeds(
  { commit, dispatch, rootState, getters, state },
  seeds
) {
  // Seeds should always be provided as we cannot fetch a section suggestion
  // without using a seed. Thus, if no seeds provided or seeds are empty
  // no suggestion can be fetched and method should return
  if (!seeds || !seeds.length) {
    return;
  }

  // All seeds must belong to the same language pair
  // Basically this is always the case for our application as of now,
  // since seeds are being fetched for a given language pair and thus all
  // grouped seeds belong to the same language pair. We can easily
  // enforce it in a better way by creating a SectionSuggestionSeed model
  const sourceLanguage = seeds[0].sourceLanguage;
  const targetLanguage = seeds[0].targetLanguage;
  commit("increaseSectionSuggestionsLoadingCount");

  // Do not fetch section suggestions that already exist
  seeds = seeds.filter(
    seed =>
      !getters.sectionSuggestionsForArticleExists(
        sourceLanguage,
        targetLanguage,
        seed.sourceTitle
      )
  );

  const numberOfSuggestionsToFetch = getters.getNumberOfSuggestionsToFetch(
    sourceLanguage,
    targetLanguage
  );

  let fetchedSuggestionCounter = 0;

  for (const seed of seeds) {
    if (targetLanguage !== rootState.application.targetLanguage) {
      break;
    }
    /** @type {SectionSuggestion|null} */
    const suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
      sourceLanguage,
      seed.sourceTitle,
      targetLanguage
    );
    commit("removeSectionSuggestionSeed", seed);

    const appendixSourceTitles = state.appendixSectionTitles[sourceLanguage];

    if (suggestion?.isValid(appendixSourceTitles)) {
      fetchedSuggestionCounter++;
      commit("addSectionSuggestion", suggestion);
    }

    if (fetchedSuggestionCounter === numberOfSuggestionsToFetch) {
      break;
    }
  }
  commit("decreaseSectionSuggestionsLoadingCount");

  if (targetLanguage !== rootState.application.targetLanguage) {
    return;
  }

  const titles = getters
    .getSectionSuggestionsForPair(sourceLanguage, targetLanguage)
    .map(suggestion => suggestion.sourceTitle);

  dispatch(
    "mediawiki/fetchPageMetadata",
    { language: sourceLanguage, titles },
    { root: true }
  );
}

async function loadSectionSuggestion(
  { commit, dispatch, getters },
  { sourceLanguage, targetLanguage, sourceTitle }
) {
  let suggestion = getters.getSectionSuggestionsForArticle(
    sourceLanguage,
    targetLanguage,
    sourceTitle
  );

  if (!suggestion) {
    /** @type {SectionSuggestion|null} */
    suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
      sourceLanguage,
      sourceTitle,
      targetLanguage
    );

    if (!suggestion) {
      return;
    }

    commit("addSectionSuggestion", suggestion);
    dispatch(
      "mediawiki/fetchPageMetadata",
      {
        language: sourceLanguage,
        titles: [sourceTitle]
      },
      { root: true }
    );
  }

  return suggestion;
}

/**
 * Given a seed provider name, this action returns the corresponding
 * handler for this provider, i.e. a function that accepts two arguments
 * (source language, target language) and returns a promise that resolves
 * to the actual seeds fetched by this provider
 *
 * @param {Object} context
 * @param {Object} context.rootGetters
 * @param {"user-published-translations"|"cx-published-translations"} providerName
 * @return {{function(string, string): Promise<Translation[]|Object[]>}|null}
 */
function getSeedProviderHandlerByName({ rootGetters }, providerName) {
  // Investigation for optimal way to fetch seeds for section suggestions is not over.
  // For now two providers are being used in this order:
  // 1. use previous CX translations done by the user as seeds
  // 2. use existing CX translations for this language pair as seeds
  // We can easily add/remove seed providers by modifying below providers object
  // and available providers inside sectionSuggestionSeedCollection model
  const providers = {
    /**
     * @param sourceLanguage
     * @param targetLanguage
     * @return {Promise<Object[]>}
     */
    "cx-published-translations": (sourceLanguage, targetLanguage) =>
      cxSuggestionsApi.fetchSuggestionSeeds(sourceLanguage, targetLanguage),
    /**
     * @param {string} sourceLanguage
     * @param {string} targetLanguage
     * @return {Promise<Translation[]>}
     */
    "user-published-translations": (sourceLanguage, targetLanguage) =>
      Promise.resolve(
        rootGetters["translator/getPublishedTranslationsForLanguagePair"](
          sourceLanguage,
          targetLanguage
        )
      )
  };

  return providers[providerName] || null;
}

/**
 * Given a source/target language pair, this action returns an array of
 * seeds to be used for section suggestion fetching
 *
 * @param {Object} context
 * @param {Function} context.commit
 * @param {Object} context.rootGetters
 * @param {Function} context.dispatch
 * @param {Object} context.getters
 * @param {Object} payload
 * @param {string} payload.sourceLanguage
 * @param {string} payload.targetLanguage
 * @return {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]} seeds
 */
async function getSectionSuggestionSeeds(
  { commit, rootGetters, dispatch, getters },
  { sourceLanguage, targetLanguage }
) {
  // Seed collection for given language pair
  let currentSeedCollection = getters.findSectionSuggestionSeedCollection(
    sourceLanguage,
    targetLanguage
  );

  // if seed collection doesn't exist (i.e. it's the first time that section suggestions
  // for this language pair are being fetched) create a new one and add it to the store
  if (!currentSeedCollection) {
    currentSeedCollection = new SectionSuggestionSeedCollection({
      sourceLanguage,
      targetLanguage
    });
    commit("addSectionSuggestionSeedCollection", currentSeedCollection);
  }

  // if current seed collection is empty
  if (!currentSeedCollection.seeds.length) {
    commit("increaseSectionSuggestionsLoadingCount");

    // Repeat until some seeds are fetched or all seed providers has been consumed
    do {
      // Get next seed provider that has not already been consumed
      // Order:
      // 1. user's published cx translations
      // 2. published cx translations for this language pair
      const providerName = currentSeedCollection.nextUnexhaustedProvider;
      const seedProviderHandler = await dispatch(
        "getSeedProviderHandlerByName",
        providerName
      );

      // if all available providers are exhausted or invalid providerName is given
      // then there is nothing left to do
      if (seedProviderHandler) {
        /** @type {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]} */
        const seeds = await seedProviderHandler(sourceLanguage, targetLanguage);
        currentSeedCollection.addExhaustedProvider(providerName);
        seeds.forEach(seed => commit("addSectionSuggestionSeed", seed));
      }
    } while (
      currentSeedCollection.seeds.length === 0 &&
      !currentSeedCollection.allProvidersExhausted
    );
    commit("decreaseSectionSuggestionsLoadingCount");
  }

  return currentSeedCollection.seeds;
}

async function fetchSuggestions(
  { rootGetters, getters, dispatch, state, commit },
  { sourceLanguage, targetLanguage }
) {
  const currentSectionSuggestions = getters.getSectionSuggestionsForPair(
    sourceLanguage,
    targetLanguage
  );

  // If section suggestions for given language pair already exist,
  // and they are multiple of page size (i.e. current section
  // suggestions page displayed to the user is full), then skip
  // For now check only for section suggestions, as page suggestions are disabled
  if (
    currentSectionSuggestions.length &&
    !(currentSectionSuggestions.length % state.maxSuggestionsPerSlice)
  ) {
    return;
  }

  dispatch("fetchNextSectionSuggestionsSlice", {
    targetLanguage,
    sourceLanguage
  });

  // Disable fetch page suggestions action until we properly support
  // it in the Dashboard
  if (!new Vue().$incompleteVersion) {
    const seed = (seeds?.[0] || {})?.sourceTitle;

    dispatch("fetchPageSuggestions", {
      sourceLanguage,
      targetLanguage,
      seed
    });
  }
}

/**
 * Given a source/target language pair, this action
 * fetches next section suggestions slice from suggestions api
 * and save it to the store. If no languages are provided,
 * application state source/target languages will be used.
 *
 * @param {Object} context
 * @param {Function} context.dispatch
 * @param {Object} context.rootState
 * @param {Function} context.commit
 * @param {Object} payload
 * @param {string} [payload.targetLanguage=rootState.application.targetLanguage]
 * @param {string} [payload.sourceLanguage=rootState.application.sourceLanguage]
 * @return {Promise<void>}
 */
async function fetchNextSectionSuggestionsSlice(
  { dispatch, rootState, commit },
  { targetLanguage, sourceLanguage } = {}
) {
  targetLanguage = targetLanguage || rootState.application.targetLanguage;
  sourceLanguage = sourceLanguage || rootState.application.sourceLanguage;
  // Start showing loading indicator
  // Get seeds by the next available seed provider
  const seeds = await dispatch("getSectionSuggestionSeeds", {
    sourceLanguage,
    targetLanguage
  });

  return dispatch("fetchSectionSuggestionsBySeeds", seeds);
}

async function fetchAppendixSectionTitles({ getters, commit }, language) {
  if (getters.appendixTitlesExistForLanguage(language)) {
    return;
  }
  const appendixTitles = await cxSuggestionsApi.fetchAppendixTargetSectionTitles(
    language
  );
  commit("addAppendixSectionTitlesForLanguage", {
    language,
    titles: appendixTitles
  });
}

export default {
  fetchPageSuggestions,
  fetchSuggestions,
  fetchAppendixSectionTitles,
  fetchNextSectionSuggestionsSlice,
  fetchSectionSuggestionsBySeeds,
  fetchSuggestions,
  getSectionSuggestionSeeds,
  getSeedProviderHandlerByName,
  loadSectionSuggestion,
  getSeedProviderHandlerByName
};
