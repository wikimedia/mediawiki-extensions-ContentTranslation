import ArticleSuggestion from "../models/articleSuggestion";
import SectionSuggestion from "../models/sectionSuggestion";
import { siteMapper } from "../../../utils/mediawikiHelper";
import { en } from "../../../utils/appendix/appendixTitles.json";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
const appendixSectionTitlesInEnglish = en;

/**
 * @param {string} source
 * @param {string} target
 * @param {string|null} seed
 * @param {string|null} topic
 * @param {boolean} includeSections
 * @param {"mostpopular"|null} searchAlgorithm
 * @param {number} count
 */
const requestToRecommendationApi = async ({
  source,
  target,
  seed = null,
  topic = null,
  includeSections = false,
  searchAlgorithm = null,
  count = 24,
}) => {
  const params = {
    source,
    target,
    seed,
    topic,
    count,
    search_algorithm: searchAlgorithm,
  };
  let stringUrl = mw.config.get("wgRecommendToolAPIURL");

  if (includeSections) {
    stringUrl += "/sections";
  }
  const recommendToolApiUrl = new URL(stringUrl);
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      recommendToolApiUrl.searchParams.append(key, params[key]);
    }
  });

  try {
    const response = await fetch(recommendToolApiUrl);

    if (!response.ok) {
      throw new Error("Failed to load data from server");
    }

    return response.json();
  } catch (error) {
    mw.log.error(
      "Error while fetching suggestions from Recommendation API",
      error
    );

    return null;
  }
};

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String} seedArticleTitle
 * @param {Number} count - How many suggestions to fetch. 24 is default.
 * @return {Promise<ArticleSuggestion[]>}
 */
async function fetchPageSuggestions(
  sourceLanguage,
  targetLanguage,
  seedArticleTitle,
  count = 24
) {
  const params = {
    source: sourceLanguage,
    target: targetLanguage,
    seed: seedArticleTitle,
    count,
  };
  const suggestedResults = (await requestToRecommendationApi(params)) || [];

  return suggestedResults.map(
    (item) =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        langLinksCount: parseInt(item.sitelink_count),
      })
  );
}

/**
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @return {Promise<ArticleSuggestion[]>}
 */
const fetchMostPopularPageSuggestions = async (
  sourceLanguage,
  targetLanguage
) => {
  const params = {
    source: sourceLanguage,
    target: targetLanguage,
    searchAlgorithm: "mostpopular",
  };
  const recommendations = (await requestToRecommendationApi(params)) || [];

  return recommendations.map(
    (item) =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        langLinksCount: parseInt(item.langlinks_count),
      })
  );
};

/**
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @return {Promise<SectionSuggestion[]>}
 */
const fetchMostPopularSectionSuggestions = async (
  sourceLanguage,
  targetLanguage
) => {
  const params = {
    source: sourceLanguage,
    target: targetLanguage,
    includeSections: true,
    searchAlgorithm: "mostpopular",
  };
  const recommendations = (await requestToRecommendationApi(params)) || [];

  return (
    recommendations &&
    recommendations.map(
      (recommendation) =>
        new SectionSuggestion({
          sourceLanguage,
          targetLanguage,
          sourceTitle: recommendation.source_title,
          targetTitle: recommendation.target_title,
          sourceSections: recommendation.source_sections,
          targetSections: recommendation.target_sections,
          present: recommendation.present,
          missing: recommendation.missing,
        })
    )
  );
};

/**
 * @param {String} sourceLanguage
 * @param {String} sourceTitle
 * @param {String} targetLanguage
 * @returns {Promise<SectionSuggestion>|null}
 */
async function fetchSectionSuggestion(
  sourceLanguage,
  sourceTitle,
  targetLanguage
) {
  const cxServerParams = [sourceTitle, sourceLanguage, targetLanguage].map(
    (param) => encodeURIComponent(param)
  );
  // Example: https://cxserver.wikimedia.org/v2/suggest/sections/Sitar/en/ml
  const cxserverAPI = siteMapper.getCXServerUrl(
    `/suggest/sections/${cxServerParams.join("/")}`
  );
  const suggestedSectionResult = await fetch(cxserverAPI)
    .then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(new Error("Failed to load data from server"))
    )
    .then((response) => response?.sections)
    .catch((error) => null);

  return suggestedSectionResult
    ? new SectionSuggestion(suggestedSectionResult)
    : null;
}

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String} seed
 * @returns {Promise<SectionSuggestion[]>}
 */
async function fetchSectionSuggestions(sourceLanguage, targetLanguage, seed) {
  const params = {
    source: sourceLanguage,
    target: targetLanguage,
    seed,
    includeSections: true,
  };
  const recommendations = (await requestToRecommendationApi(params)) || [];

  return (
    recommendations &&
    recommendations.map(
      (recommendation) =>
        new SectionSuggestion({
          sourceLanguage,
          targetLanguage,
          sourceTitle: recommendation.source_title,
          targetTitle: recommendation.target_title,
          sourceSections: recommendation.source_sections,
          targetSections: recommendation.target_sections,
          present: recommendation.present,
          missing: recommendation.missing,
        })
    )
  );
}

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String[]} topics
 * @param {Number} count - How many suggestions to fetch. 24 is default.
 * @return {Promise<ArticleSuggestion[]>}
 */
async function fetchPageSuggestionsByTopics(
  sourceLanguage,
  targetLanguage,
  topics,
  count = 24
) {
  const params = {
    source: sourceLanguage,
    target: targetLanguage,
    topic: topics.join("|"),
    count,
  };

  const suggestedResults = (await requestToRecommendationApi(params)) || [];

  return suggestedResults.map(
    (item) =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        langLinksCount: parseInt(item.sitelink_count),
      })
  );
}

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String[]} topics
 * @param {Number} count - How many suggestions to fetch. 24 is default.
 * @return {Promise<SectionSuggestion[]>}
 */
async function fetchSectionSuggestionsByTopics(
  sourceLanguage,
  targetLanguage,
  topics,
  count = 24
) {
  const params = {
    source: sourceLanguage,
    target: targetLanguage,
    topic: topics.join("|"),
    includeSections: true,
  };
  const recommendations = (await requestToRecommendationApi(params)) || [];

  return (
    recommendations &&
    recommendations.map(
      (recommendation) =>
        new SectionSuggestion({
          sourceLanguage,
          targetLanguage,
          sourceTitle: recommendation.source_title,
          targetTitle: recommendation.target_title,
          sourceSections: recommendation.source_sections,
          targetSections: recommendation.target_sections,
          present: recommendation.present,
          missing: recommendation.missing,
        })
    )
  );
}

async function fetchUserEdits(language) {
  if (mw.user.isAnon()) {
    return [];
  }

  const query = {
    action: "query",
    format: "json",
    list: "usercontribs",
    ucuser: mw.user.getName(),
    ucnamespace: mw.config.get("wgNamespaceIds")[""], // Main namespace
    // we need at maximum 12 (maxSuggestionsSlices*maxSuggestionsPerSlice) suggestion seeds
    // 100 user contributions should be enough to produce at least 12 of them.
    uclimit: 100,
    formatversion: 2,
  };

  const mwApi = siteMapper.getApi(language);

  try {
    const response = await mwApi.get(query);

    const edits = response.query.usercontribs;

    const titles = edits.map((edit) => edit.title);

    // return unique titles
    return [...new Set(titles)];
  } catch (error) {
    mw.log.error("Error while fetching suggestion seeds", error);

    return [];
  }
}

/**
 * Given a language pair, this api action returns an array of published translation
 * source titles, to be used as suggestion seeds.
 *
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @return {Promise<string[]>}
 */
async function fetchSuggestionSeeds(sourceLanguage, targetLanguage) {
  const query = {
    action: "query",
    format: "json",
    list: "cxpublishedtranslations",
    from: sourceLanguage,
    to: targetLanguage,
    limit: 200,
  };
  const mwApi = siteMapper.getApi(sourceLanguage);

  try {
    const response = await mwApi.get(query);

    return response.result.translations.map((t) => t.sourceTitle);
  } catch (error) {
    mw.log.error("Error while fetching suggestion seeds", error);

    return [];
  }
}

async function fetchSuggestionSourceSections(language, title) {
  const query = {
    action: "parse",
    format: "json",
    formatversion: 2,
    prop: "sections",
    page: title,
  };

  const mwApi = siteMapper.getApi(language);

  try {
    const response = await mwApi.get(query);

    return response.parse;
  } catch (error) {
    mw.log.error("Error while fetching suggestion sections size", error);

    return [];
  }
}

/**
 * This api action fetches and returns appendix section titles
 * for the given target language. In case of failure, errors
 * will be suppressed and an empty array will be returned
 * @param {string} targetLanguage
 * @return {Promise<String[]>}
 */
function fetchAppendixTargetSectionTitles(targetLanguage) {
  const titleQueryParams = appendixSectionTitlesInEnglish
    .map((title) => encodeURIComponent(title))
    .join("|");
  const cxserverAPI = siteMapper.getCXServerUrl(
    `/suggest/sections/titles/en/${targetLanguage}?titles=${titleQueryParams}`
  );

  return fetch(cxserverAPI)
    .then((response) =>
      response.ok
        ? response.json()
        : Promise.reject(
            new Error(
              `Failed to load appendix target section titles for language: ${targetLanguage}`
            )
          )
    )
    .then((response) => Object.values(response).flat())
    .catch((error) => []);
}

/**
 *
 * @param {string} sourceTitle
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @return {Promise}
 */
const markFavorite = (sourceTitle, sourceLanguage, targetLanguage) => {
  const params = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "add",
    titles: sourceTitle,
    from: sourceLanguage,
    to: targetLanguage,
  };

  const api = new mw.Api();

  return Promise.resolve(api.postWithToken("csrf", params)).catch((error) => {
    mw.log.error("Error while marking suggestion as favorite", error);
  });
};

/**
 * Unmark a suggestion as favorite.
 *
 * @param  {FavoriteSuggestion} suggestion
 * @return {Promise}
 */
const unmarkFavorite = (suggestion) => {
  const params = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "remove",
    titles: suggestion.title,
    from: suggestion.sourceLanguage,
    to: suggestion.targetLanguage,
  };

  const api = new mw.Api();

  return Promise.resolve(api.postWithToken("csrf", params)).catch((error) => {
    mw.log.error("Error while unmarking favorite suggestion", error);
  });
};

/**
 * @return {Promise<FavoriteSuggestion[]>}
 */
const fetchFavorites = () => {
  const params = {
    assert: "user",
    action: "query",
    list: "contenttranslationsuggestions",
  };

  const api = new mw.Api();

  return Promise.resolve(api.postWithToken("csrf", params))
    .then((response) => {
      const lists = response.query.contenttranslationsuggestions.lists || {};
      const suggestions = Object.values(lists)?.[0]?.suggestions || [];

      return suggestions.map((favorite) => new FavoriteSuggestion(favorite));
    })
    .catch((error) => {
      mw.log.error("Error while fetching favorite suggestions", error);
    });
};

export default {
  fetchFavorites,
  fetchPageSuggestions,
  fetchSectionSuggestion,
  fetchSectionSuggestions,
  fetchSuggestionSeeds,
  fetchAppendixTargetSectionTitles,
  fetchSuggestionSourceSections,
  markFavorite,
  unmarkFavorite,
  fetchUserEdits,
  fetchMostPopularPageSuggestions,
  fetchMostPopularSectionSuggestions,
  fetchPageSuggestionsByTopics,
  fetchSectionSuggestionsByTopics,
};
