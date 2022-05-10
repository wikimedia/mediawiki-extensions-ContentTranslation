import cxSuggestionsApi from "../../../wiki/cx/api/suggestions";
import SuggestionSeedCollection from "../../../wiki/cx/models/suggestionSeedCollection";
import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";

/**
 * Given a language pair and an article title this action:
 * 1. If matching sectionSuggestion model exists in state, returns it
 * 2. If no such model exists, it fetches sectionSuggestion model from API.
 *    If API response is valid, it stores the model in vuex state inside
 *    sectionSuggestions state variable, fetches corresponding page metadata
 *    for source article and returns the model.
 * 3. If the API response is empty then the suggestion to be loaded is a page
 *    suggestion. To support this case, page metadata are fetched and a page
 *    suggestion is stored inside vuex pageSuggestions state variable. Finally,
 *    a new sectionSuggestion model is created and returned to support creation
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
  { commit, dispatch, getters, rootGetters },
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
          sourceTitle,
        });
        const page = rootGetters["mediawiki/getPage"](
          sourceLanguage,
          sourceTitle
        );
        commit(
          "addPageSuggestion",
          new ArticleSuggestion({
            sourceLanguage,
            targetLanguage,
            sourceTitle,
            langLinksCount: page.langLinksCount,
            wikidataId: page.wikidataId,
          })
        );
      } else {
        commit("addSectionSuggestion", suggestion);
      }
    } catch (e) {
      throw new Error(
        `No page metadata found for title ${sourceTitle} and language pair ${sourceLanguage}-${targetLanguage}`
      );
    }
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
      ),
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
      targetLanguage,
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
        seeds.forEach((seed) => commit("addSectionSuggestionSeed", seed));
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
      targetLanguage,
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
        seeds.forEach((seed) => commit("addPageSuggestionSeed", seed));
      }
    } while (
      currentSeedCollection.seeds.length === 0 &&
      !currentSeedCollection.allProvidersExhausted
    );
  }

  return currentSeedCollection.getSeedArticleForSuggestion();
}

/**
 * This action initialize the page and section suggestions
 * inside SX Dashboard. This action is dispatched whenever
 * the user visits the dashboard, regardless if its the first
 * time for this session or not. If suggestions are properly
 * already initialized, then both page and section suggestion
 * slices should be full. In this case (if both suggestion
 * slices are full), this action returns without doing anything.
 * If at least one slice is not full, then the appendix section
 * titles for the current target language are fetched (they are
 * needed during suggestion fetching) and the next slices for
 * both section and page suggestions are fetched.
 *
 * @param {object} context
 * @param {object} context.rootGetters
 * @param {function} context.dispatch
 * @param {object} context.rootState
 * @param {object} context.state
 * @return {Promise<void>}
 */
async function initializeSuggestions({
  rootGetters,
  dispatch,
  rootState,
  state,
}) {
  const { targetLanguage } = rootState.application;

  /** @type {SectionSuggestion[]} */
  const firstSectionSuggestionsSlice =
    rootGetters["application/getSectionSuggestionsSliceByIndex"](0);

  /** @type {ArticleSuggestion[]} */
  const firstPageSuggestionsSlice =
    rootGetters["application/getPageSuggestionsSliceByIndex"](0);

  const isFirstSectionSuggestionsSliceFull =
    firstSectionSuggestionsSlice.length === state.maxSuggestionsPerSlice;
  const isFirstPageSuggestionsSliceFull =
    firstPageSuggestionsSlice.length === state.maxSuggestionsPerSlice;

  // If both section suggestion and page suggestion slices inside dashboard
  // are currently full, return without doing anything
  if (isFirstSectionSuggestionsSliceFull && isFirstPageSuggestionsSliceFull) {
    return;
  }
  // Fetch now so that appendix section titles are available during suggestion fetching
  await dispatch("suggestions/fetchAppendixSectionTitles", targetLanguage, {
    root: true,
  });

  dispatch("fetchNextSectionSuggestionsSlice");
  dispatch("fetchNextPageSuggestionsSlice");
}

/**
 * This action fetches the next section suggestions slice from the suggestions api,
 * for the current language pair and saves it to the store.
 *
 * @param {Object} context
 * @param {Object} context.state
 * @param {function} context.commit
 * @param {Object} context.getters
 * @param {Function} context.dispatch
 * @param {Object} context.rootState
 * @return {Promise<void>}
 */
async function fetchNextSectionSuggestionsSlice({
  state,
  commit,
  getters,
  dispatch,
  rootState,
}) {
  const { sourceLanguage, targetLanguage } = rootState.application;

  // Start showing loading indicator
  // Get seeds by the next available seed provider
  let seeds = await dispatch("getSectionSuggestionSeeds", {
    sourceLanguage,
    targetLanguage,
  });

  // Seeds should always be provided as we cannot fetch a section suggestion
  // without using a seed. Thus, if no seeds provided or seeds are empty
  // no suggestion can be fetched and method should return
  if (!seeds || !seeds.length) {
    return;
  }

  commit("increaseSectionSuggestionsLoadingCount");

  // Do not fetch section suggestions that already exist
  seeds = seeds.filter(
    (seed) =>
      !getters.sectionSuggestionsForArticleExists(
        sourceLanguage,
        targetLanguage,
        seed.sourceTitle
      )
  );

  const numberOfSuggestionsToFetch =
    getters.getNumberOfSectionSuggestionsToFetch(
      sourceLanguage,
      targetLanguage
    );

  let fetchedSuggestionCounter = 0;

  for (const seed of seeds) {
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

  const titles = getters
    .getSectionSuggestionsForPair(sourceLanguage, targetLanguage)
    .map((suggestion) => suggestion.sourceTitle);

  dispatch(
    "mediawiki/fetchPageMetadata",
    { language: sourceLanguage, titles },
    { root: true }
  );
}

/**
 * This action fetches the next page suggestions slice from the suggestions api,
 * for the current language pair and saves it to the store.
 *
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {object} context.getters
 * @param {object} context.rootState
 * @returns {Promise<void>}
 */
async function fetchNextPageSuggestionsSlice({
  commit,
  dispatch,
  getters,
  rootState,
}) {
  commit("increasePageSuggestionsLoadingCount");
  const { sourceLanguage, targetLanguage } = rootState.application;
  const seed = await dispatch("getPageSuggestionSeed", {
    sourceLanguage,
    targetLanguage,
  });

  const numberOfSuggestionsToFetch = getters.getNumberOfPageSuggestionsToFetch(
    sourceLanguage,
    targetLanguage
  );

  // Catch any possible error, so that the loading indicator isn't displayed eternally
  try {
    /** @type {ArticleSuggestion[]} */
    const suggestions = await cxSuggestionsApi.fetchPageSuggestions(
      sourceLanguage,
      targetLanguage,
      seed?.sourceTitle,
      numberOfSuggestionsToFetch
    );

    suggestions.forEach((suggestion) =>
      commit("addPageSuggestion", suggestion)
    );
    const titles = suggestions.map((suggestion) => suggestion.sourceTitle);
    titles.length &&
      dispatch(
        "mediawiki/fetchPageMetadata",
        { language: sourceLanguage, titles },
        { root: true }
      );
  } catch (error) {
    mw.log.error("Page suggestions fetching failed!");
  }
  commit("decreasePageSuggestionsLoadingCount");
}

async function fetchAppendixSectionTitles({ getters, commit }, language) {
  if (getters.appendixTitlesExistForLanguage(language)) {
    return;
  }
  const appendixTitles =
    await cxSuggestionsApi.fetchAppendixTargetSectionTitles(language);
  commit("addAppendixSectionTitlesForLanguage", {
    language,
    titles: appendixTitles,
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
  dispatch("doMarkSuggestionAsFavorite", sectionSuggestion);
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
  dispatch("doMarkSuggestionAsFavorite", pageSuggestion);
}

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {SectionSuggestion|ArticleSuggestion} suggestion
 * @return {Promise<void>}
 */
async function doMarkSuggestionAsFavorite({ commit, dispatch }, suggestion) {
  await cxSuggestionsApi.markFavorite(suggestion);
  const { sourceTitle: title, sourceLanguage, targetLanguage } = suggestion;
  const favoriteSuggestion = new FavoriteSuggestion({
    title,
    sourceLanguage,
    targetLanguage,
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

  if (!favorites || !favorites.length) {
    // No favorites for Anon users. And logged-in users can also have no favorites.
    return;
  }

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
        (suggestion) =>
          (favorite.missingSectionsCount =
            suggestion?.missingSectionsCount || 0)
      );

    favoritesGroupedByLanguage[favorite.sourceLanguage] = [
      ...(favoritesGroupedByLanguage[favorite.sourceLanguage] || []),
      favorite,
    ];
  }

  for (const [sourceLanguage, favorites] of Object.entries(
    favoritesGroupedByLanguage
  )) {
    dispatch(
      "mediawiki/fetchPageMetadata",
      {
        language: sourceLanguage,
        titles: favorites.map((favorite) => favorite.title),
      },
      { root: true }
    );
  }
}

export default {
  addPageSuggestionAsFavorite,
  addSectionSuggestionAsFavorite,
  doMarkSuggestionAsFavorite,
  fetchFavorites,
  fetchAppendixSectionTitles,
  fetchNextPageSuggestionsSlice,
  fetchNextSectionSuggestionsSlice,
  getPageSuggestionSeed,
  getSectionSuggestionSeeds,
  getSeedProviderHandlerByName,
  initializeSuggestions,
  loadSectionSuggestion,
  removeFavoriteSuggestion,
};
