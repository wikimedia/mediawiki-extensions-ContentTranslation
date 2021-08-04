import cxSuggestionsApi from "../../../wiki/cx/api/suggestions";
import SuggestionSeedCollection from "../../../wiki/cx/models/suggestionSeedCollection";
import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";

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

  const numberOfSuggestionsToFetch = getters.getNumberOfSectionSuggestionsToFetch(
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

    const appendixTargetTitles =
      state.appendixSectionTitles[targetLanguage] || [];

    if (suggestion?.isValid(appendixTargetTitles)) {
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

/**
 * Given a language pair and an article title this action:
 * 1. If matching sectionSuggestion model exists in state, returns it
 * 2. If no such model exists, it fetches sectionSuggestion model from API.
 *    If API response is valid, it stores the model in vuex state, fetches
 *    corresponding page metadata for source article and returns the model.
 * 3. If the API response is empty, then page metadata are fetched and a
 *    new sectionSuggestion model is created and returned to support creation
 *    of new article by translating the lead section.
 * If page metadata cannot be loaded, an Error with appropriate message
 * is being thrown.
 *
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {object} context.getters
 * @param {object} payload
 * @param {string} payload.sourceLanguage
 * @param {string} payload.targetLanguage
 * @param {string} payload.sourceTitle
 * @return {Promise<SectionSuggestion>}
 */
async function loadSectionSuggestion(
  { commit, dispatch, getters },
  { sourceLanguage, targetLanguage, sourceTitle }
) {
  /** @type {SectionSuggestion|null} */
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

    try {
      await dispatch(
        "mediawiki/fetchPageMetadata",
        { language: sourceLanguage, titles: [sourceTitle] },
        { root: true }
      );

      if (!suggestion) {
        suggestion = new SectionSuggestion({
          sourceLanguage,
          targetLanguage,
          sourceTitle
        });
      }
    } catch (e) {
      throw new Error(
        `No page metadata found for title ${sourceTitle} and language pair ${sourceLanguage}-${targetLanguage}`
      );
    }
    commit("addSectionSuggestion", suggestion);
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
    currentSeedCollection = new SuggestionSeedCollection({
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

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {object} context.rootGetters
 * @param {function} context.dispatch
 * @param {object} context.getters
 * @param {object} payload
 * @param {string} payload.sourceLanguage
 * @param {string} payload.targetLanguage
 * @return {Promise<{sourceTitle: string, sourceLanguage: string, targetLanguage: string}>}
 */
async function getPageSuggestionSeed(
  { commit, rootGetters, dispatch, getters },
  { sourceLanguage, targetLanguage }
) {
  // Seed collection for given language pair
  let currentSeedCollection = getters.findPageSuggestionSeedCollection(
    sourceLanguage,
    targetLanguage
  );

  // if seed collection doesn't exist (i.e. it's the first time that section suggestions
  // for this language pair are being fetched) create a new one and add it to the store
  if (!currentSeedCollection) {
    currentSeedCollection = new SuggestionSeedCollection({
      sourceLanguage,
      targetLanguage
    });
    commit("addPageSuggestionSeedCollection", currentSeedCollection);
  }

  // if current seed collection is empty
  if (!currentSeedCollection.seeds.length) {
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
        seeds.forEach(seed => commit("addPageSuggestionSeed", seed));
      }
    } while (
      currentSeedCollection.seeds.length === 0 &&
      !currentSeedCollection.allProvidersExhausted
    );
  }

  return currentSeedCollection.getSeedArticleForSuggestion();
}

async function initializeSuggestions({ rootGetters, dispatch, rootState }) {
  const { targetLanguage } = rootState.application;

  const suggestionsLength =
    rootGetters["application/getCurrentSectionSuggestions"] +
    rootGetters["application/getCurrentPageSuggestions"];

  // If suggestions for current language pair already exist, just return
  if (!!suggestionsLength) {
    return;
  }
  // Fetch now so that appendix section titles are available during suggestion fetching
  await dispatch("suggestions/fetchAppendixSectionTitles", targetLanguage, {
    root: true
  });

  dispatch("fetchNextSectionSuggestionsSlice");
  dispatch("fetchNextPageSuggestionsSlice");
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
 * @return {Promise<void>}
 */
async function fetchNextSectionSuggestionsSlice({ dispatch, rootState }) {
  const { sourceLanguage, targetLanguage } = rootState.application;

  // Start showing loading indicator
  // Get seeds by the next available seed provider
  const seeds = await dispatch("getSectionSuggestionSeeds", {
    sourceLanguage,
    targetLanguage
  });

  return dispatch("fetchSectionSuggestionsBySeeds", seeds);
}

async function fetchNextPageSuggestionsSlice({
  commit,
  dispatch,
  state,
  rootState
}) {
  commit("increasePageSuggestionsLoadingCount");
  const { sourceLanguage, targetLanguage } = rootState.application;
  const seed = await dispatch("getPageSuggestionSeed", {
    sourceLanguage,
    targetLanguage
  });
  /** @type {ArticleSuggestion[]} */
  const suggestions = await cxSuggestionsApi.fetchPageSuggestions(
    sourceLanguage,
    targetLanguage,
    seed?.sourceTitle,
    state.maxSuggestionsPerSlice
  );
  commit("decreasePageSuggestionsLoadingCount");
  suggestions.forEach(suggestion => commit("addPageSuggestion", suggestion));
  const titles = suggestions.map(suggestion => suggestion.sourceTitle);
  titles.length &&
    dispatch(
      "mediawiki/fetchPageMetadata",
      { language: sourceLanguage, titles },
      { root: true }
    );
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

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {SectionSuggestion} sectionSuggestion
 */
async function addSectionSuggestionAsFavorite(
  { commit, dispatch },
  sectionSuggestion
) {
  commit("removeSectionSuggestion", sectionSuggestion);
  dispatch("fetchNextSectionSuggestionsSlice");
  await cxSuggestionsApi.markFavorite(sectionSuggestion);
  const {
    sourceTitle: title,
    sourceLanguage,
    targetLanguage
  } = sectionSuggestion;
  const favoriteSuggestion = new FavoriteSuggestion({
    title,
    sourceLanguage,
    targetLanguage
  });
  commit("addFavoriteSuggestion", favoriteSuggestion);
}

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {ArticleSuggestion} pageSuggestion
 */
async function addPageSuggestionAsFavorite(
  { commit, dispatch },
  pageSuggestion
) {
  commit("removePageSuggestion", pageSuggestion);
  dispatch("fetchNextPageSuggestionsSlice");
  await cxSuggestionsApi.markFavorite(pageSuggestion);
  const { sourceTitle: title, sourceLanguage, targetLanguage } = pageSuggestion;
  const favoriteSuggestion = new FavoriteSuggestion({
    title,
    sourceLanguage,
    targetLanguage
  });
  commit("addFavoriteSuggestion", favoriteSuggestion);
}

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {FavoriteSuggestion} suggestion
 */
async function removeFavoriteSuggestion({ commit }, suggestion) {
  commit("removeFavoriteSuggestion", suggestion);
  await cxSuggestionsApi.unmarkFavorite(suggestion);
}

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @return {Promise<void>}
 */
async function fetchFavorites({ commit, dispatch, state }) {
  if (!!state.favorites.length) {
    return;
  }
  /** @type {FavoriteSuggestion[]} */
  const favorites = await cxSuggestionsApi.fetchFavorites();
  const favoritesGroupedByLanguage = {};

  for (const favorite of favorites) {
    commit("addFavoriteSuggestion", favorite);

    /** @type {SectionSuggestion|null} */
    cxSuggestionsApi
      .fetchSectionSuggestions(
        favorite.sourceLanguage,
        favorite.title,
        favorite.targetLanguage
      )
      .then(
        suggestion =>
          (favorite.missingSectionsCount =
            suggestion?.missingSectionsCount || 0)
      );

    favoritesGroupedByLanguage[favorite.sourceLanguage] = [
      ...(favoritesGroupedByLanguage[favorite.sourceLanguage] || []),
      favorite
    ];
  }

  for (const [sourceLanguage, favorites] of Object.entries(
    favoritesGroupedByLanguage
  )) {
    dispatch(
      "mediawiki/fetchPageMetadata",
      {
        language: sourceLanguage,
        titles: favorites.map(favorite => favorite.title)
      },
      { root: true }
    );
  }
}

export default {
  addPageSuggestionAsFavorite,
  addSectionSuggestionAsFavorite,
  fetchFavorites,
  fetchAppendixSectionTitles,
  fetchNextPageSuggestionsSlice,
  fetchNextSectionSuggestionsSlice,
  fetchSectionSuggestionsBySeeds,
  getPageSuggestionSeed,
  getSectionSuggestionSeeds,
  getSeedProviderHandlerByName,
  initializeSuggestions,
  loadSectionSuggestion,
  removeFavoriteSuggestion
};
