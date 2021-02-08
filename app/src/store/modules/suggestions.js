import cxSuggestionsApi from "../../wiki/cx/api/suggestions";
import Vue from "vue";
import SectionSuggestionSeedCollection from "../../wiki/cx/models/sectionSuggestionSeedCollection";
const state = {
  /** @type ArticleSuggestion[] */
  pageSuggestions: [],
  /** @type SectionSuggestion[] */
  sectionSuggestions: [],
  favorites: {},
  /**
   * Counter that indicates how many section suggestion fetching
   * requests are currently in progress
   * @type Number
   */
  sectionSuggestionsLoadingCount: 0,
  /**
   * Maximum number of suggestions being displayed in the dashboard
   * at the same time
   */
  maxSuggestionsPerSlice: 5,
  /**
   * Stores collections of seeds for different language pairs
   * Each seed collection corresponds to a specific language pair
   * and contains all available seeds to be used for section
   * suggestion fetching. Having this information stored prevents
   * unnecessary requests to fetch seeds every time they are needed
   * @type SectionSuggestionSeedCollection[]
   */
  sectionSuggestionSeedCollections: []
};

const mutations = {
  addPageSuggestion(state, suggestion) {
    state.pageSuggestions.push(suggestion);
  },
  addSectionSuggestion(state, suggestion) {
    state.sectionSuggestions.push(suggestion);
  },
  increaseSectionSuggestionsLoadingCount(state) {
    state.sectionSuggestionsLoadingCount++;
  },
  decreaseSectionSuggestionsLoadingCount(state) {
    state.sectionSuggestionsLoadingCount--;
  },
  /**
   * @param state
   * @param {SectionSuggestionSeedCollection} collection
   */
  addSectionSuggestionSeedCollection(state, collection) {
    state.sectionSuggestionSeedCollections.push(collection);
  },
  /**
   * @param state
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}} seed
   */
  addSectionSuggestionSeed(state, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state.sectionSuggestionSeedCollections.find(
      collection =>
        collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    );
    seedCollection.seeds.push(seed);
  },
  removeSectionSuggestionSeed(state, seed) {
    const { sourceLanguage, targetLanguage } = seed;
    const seedCollection = state.sectionSuggestionSeedCollections.find(
      collection =>
        collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    );
    seedCollection.seeds = seedCollection.seeds.filter(
      existingSeed => existingSeed.sourceTitle !== seed.sourceTitle
    );
  }
};

const getters = {
  /**
   * @return {SectionSuggestionSeedCollection}
   */
  findSectionSuggestionSeedCollection: state => (
    sourceLanguage,
    targetLanguage
  ) =>
    state.sectionSuggestionSeedCollections.find(collection =>
      collection.doesBelongToLanguagePair(sourceLanguage, targetLanguage)
    ),
  getPageSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.pageSuggestions.filter(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage
    ),
  getSectionSuggestionsForPair: state => (sourceLanguage, targetLanguage) =>
    state.sectionSuggestions.filter(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage
    ),
  getSectionSuggestionsForArticle: state => (
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ) =>
    state.sectionSuggestions.find(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage &&
        suggestionItem.sourceTitle === sourceTitle
    ),
  sectionSuggestionsForArticleExists: state => (
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ) =>
    state.sectionSuggestions.some(
      suggestionItem =>
        suggestionItem.sourceLanguage === sourceLanguage &&
        suggestionItem.targetLanguage === targetLanguage &&
        suggestionItem.sourceTitle === sourceTitle
    )
};

const actions = {
  async fetchPageSuggestions(
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
  },

  /**
   * @param {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]} seeds
   * @return {Promise<void>}
   */
  async fetchSectionSuggestionsBySeeds(
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

    const existingSuggestionsForLanguagePair = getters.getSectionSuggestionsForPair(
      sourceLanguage,
      targetLanguage
    );

    const pageSize = state.maxSuggestionsPerSlice;
    // Calculate number of suggestions to fetch with maximum 5 suggestions. When
    // already fetched suggestions do not produce full pages of 5
    // (i.e. length % 5 !== 0), fetch remaining suggestions to complete the page.
    // If suggestions page is already full, fetch 5 new.
    const numberOfSuggestionsToFetch =
      pageSize - (existingSuggestionsForLanguagePair.length % pageSize);
    let fetchedSuggestionCounter = 0;
    for (const seed of seeds) {
      if (targetLanguage !== rootState.application.targetLanguage) {
        break;
      }
      /** @type {SectionSuggestion} */
      const suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
        sourceLanguage,
        seed.sourceTitle,
        targetLanguage
      );
      commit("removeSectionSuggestionSeed", seed);

      if (suggestion) {
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
  },

  async loadSectionSuggestion(
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

    dispatch("application/setCurrentSectionSuggestion", suggestion, {
      root: true
    });
  },

  /**
   * Given a seed provider name, this action returns the corresponding
   * handler for this provider, i.e. a function that accepts two arguments
   * (source language, target language) and returns a promise that resolves
   * to the actual seeds fetched by this provider
   * @param {String} providerName
   * @return {Function|null}
   */
  getSeedProviderHandlerByName({ getters, rootGetters }, providerName) {
    // Investigation for optimal way to fetch seeds for section suggestions is not over.
    // For now two providers are being used in this order:
    // 1. use previous CX translations done by the user as seeds
    // 2. use existing CX translations for this language pair as seeds
    // We can easily add/remove seed providers by modifying below providers object
    // and available providers inside sectionSuggestionSeedCollection model
    const providers = {
      "user-published-translations": (sourceLanguage, targetLanguage) =>
        cxSuggestionsApi.fetchSuggestionSeeds(sourceLanguage, targetLanguage),
      "cx-published-translations": (sourceLanguage, targetLanguage) =>
        Promise.resolve(
          rootGetters["translator/getPublishedTranslationsForLanguagePair"](
            sourceLanguage,
            targetLanguage
          )
        )
    };
    return providers[providerName] || null;
  },

  /**
   * Given a source/target language pair, this action returns an array of
   * seeds to be used for section suggestion fetching
   * @param sourceLanguage
   * @param targetLanguage
   * @return {{sourceTitle: string, sourceLanguage: string, targetLanguage: string}[]} seeds
   */
  async getSectionSuggestionSeeds(
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
          const seeds = await seedProviderHandler(
            sourceLanguage,
            targetLanguage
          );
          currentSeedCollection.addExhaustedProvider(providerName);
          seeds.forEach(seed => commit("addSectionSuggestionSeed", seed));
        }
      } while (
        currentSeedCollection.seeds.length === 0 &&
        !currentSeedCollection.allProvidersExhausted
      );
    }
    return currentSeedCollection.seeds;
  },

  async fetchSuggestions(
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
    // Start showing loading indicator
    commit("increaseSectionSuggestionsLoadingCount");

    // Get seeds by the next available seed provider
    const seeds = await dispatch("getSectionSuggestionSeeds", {
      sourceLanguage,
      targetLanguage
    });
    dispatch("fetchSectionSuggestionsBySeeds", seeds);
    commit("decreaseSectionSuggestionsLoadingCount");

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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
