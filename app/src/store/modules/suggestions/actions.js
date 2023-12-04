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
        const page = rootGetters["mediawiki/getPage"](
          sourceLanguage,
          sourceTitle
        );
        suggestion = new SectionSuggestion({
          sourceLanguage,
          targetLanguage,
          // suggestion source title is directly displayed to the user (it's used in v-text
          // directives in some SFCs), so use the normalized page title here
          sourceTitle: page.title,
        });
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
 * @param {object} context
 * @param {object} context.getters
 * @param {object} payload
 * @param {string} payload.sourceLanguage
 * @param {string} payload.targetLanguage
 * @return {Promise<string|null>}
 */
async function getSuggestionSeed(
  { getters },
  { sourceLanguage, targetLanguage }
) {
  // Seed collection for given language pair
  let currentSeedCollection = getters.findSuggestionSeedCollection(
    sourceLanguage,
    targetLanguage
  );

  // suggestions seeds should have been initialized before being accessed
  // or if no seeds were fetched from the "seeds-fetching" API
  if (!currentSeedCollection || !currentSeedCollection.seeds.length) {
    mw.log.error("No suggestion seed found! Suggestion fetching will fail!");

    return null;
  }

  return currentSeedCollection.shiftSeeds();
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
  commit("increaseSectionSuggestionsLoadingCount");

  const numberOfSuggestionsToFetch =
    getters.getNumberOfSectionSuggestionsToFetch(
      sourceLanguage,
      targetLanguage
    );

  let fetchedSuggestionCounter = 0;

  while (fetchedSuggestionCounter < numberOfSuggestionsToFetch) {
    const seed = await dispatch("getSuggestionSeed", {
      sourceLanguage,
      targetLanguage,
    });

    // Seed should always be provided as we cannot fetch a section suggestion
    // without using one. Thus, if no seed provided, suggestion fetching should stop
    if (!seed) {
      break;
    }
    /** @type {SectionSuggestion|null} */
    const suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
      sourceLanguage,
      seed,
      targetLanguage
    );

    const appendixTargetTitles =
      state.appendixSectionTitles[targetLanguage] || [];

    if (suggestion?.isValid(appendixTargetTitles)) {
      fetchedSuggestionCounter++;
      commit("addSectionSuggestion", suggestion);
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
  const seed = await dispatch("getSuggestionSeed", {
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
      seed,
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
  getSuggestionSeed,
  initializeSuggestions,
  loadSectionSuggestion,
  removeFavoriteSuggestion,
};
