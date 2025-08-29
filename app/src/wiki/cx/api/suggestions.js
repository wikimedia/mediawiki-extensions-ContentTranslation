import ArticleSuggestion from "../models/articleSuggestion";
import SectionSuggestion from "../models/sectionSuggestion";
import { siteMapper } from "@/utils/mediawikiHelper";
import { en } from "@/utils/appendix/appendixTitles.json";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
import PageCollection from "@/wiki/cx/models/pageCollection";
import CollectionArticleSuggestion from "@/wiki/cx/models/collectionArticleSuggestion";
import CollectionSectionSuggestion from "@/wiki/cx/models/collectionSectionSuggestion";
const appendixSectionTitlesInEnglish = en;

/**
 * @param {string|null} urlPostfix
 * @param {object} urlParams
 * @param {string|undefined} urlParams.source
 * @param {string|undefined} urlParams.target
 * @param {string|undefined} urlParams.seed
 * @param {string|undefined} urlParams.topic
 * @param {"mostpopular"|undefined} urlParams.search_algorithm
 * @param {number|undefined} urlParams.count
 */
const requestToRecommendationApi = async ({ urlPostfix = null, urlParams }) => {
  let stringUrl = mw.config.get("wgRecommendToolAPIURL");

  if (urlPostfix) {
    stringUrl += urlPostfix;
  }
  const recommendToolApiUrl = new URL(stringUrl);
  Object.keys(urlParams).forEach((key) => {
    if (urlParams[key]) {
      recommendToolApiUrl.searchParams.append(key, urlParams[key]);
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
 * @returns {Promise<{ [group: string]: PageCollection[] }>}
 */
async function fetchPageCollectionGroups() {
  const urlParams = {};
  const urlPostfix = "/page-collection-groups";

  try {
    const collectionGroupResults =
      (await requestToRecommendationApi({ urlPostfix, urlParams })) || [];

    const groupedCollections = {};

    for (const groupName in collectionGroupResults) {
      groupedCollections[groupName] = collectionGroupResults[groupName].map(
        (item) => new PageCollection(item)
      );
    }

    return groupedCollections;
  } catch (error) {
    mw.log.error(
      "Error while fetching the page collections from Recommendation API",
      error
    );

    return {};
  }
}

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String|null} seedArticleTitle
 * @param {Number} count - How many suggestions to fetch. 24 is default.
 * @return {Promise<ArticleSuggestion[]>}
 */
async function fetchPageSuggestions(
  sourceLanguage,
  targetLanguage,
  seedArticleTitle = null,
  count = 24
) {
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    count,
  };

  if (seedArticleTitle) {
    urlParams.seed = seedArticleTitle;
  }

  const suggestedResults =
    (await requestToRecommendationApi({ urlParams })) || [];

  return suggestedResults.map(
    (item) =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        size: item.size,
        langLinksCount: parseInt(item.sitelink_count),
        suggestionSeed: seedArticleTitle,
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
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    count: 24,
    search_algorithm: "mostpopular",
  };
  const recommendations =
    (await requestToRecommendationApi({ urlParams })) || [];

  return recommendations.map(
    (item) =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        size: item.size,
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
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    count: 24,
    search_algorithm: "mostpopular",
  };

  const urlPostfix = "/sections";
  const recommendations =
    (await requestToRecommendationApi({ urlParams, urlPostfix })) || [];

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
          sourceSectionInfo: recommendation.source_section_info,
          sourceSectionSizes: recommendation.source_section_sizes,
        })
    )
  );
};

/**
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string|null} collectionName
 * @return {Promise<CollectionArticleSuggestion[]>}
 */
const fetchPageSuggestionsByCollections = async (
  sourceLanguage,
  targetLanguage,
  collectionName = null
) => {
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    count: 24,
    collections: true,
  };

  if (collectionName) {
    urlParams.seed = collectionName;
  }

  const recommendations =
    (await requestToRecommendationApi({ urlParams })) || [];

  return recommendations.map(
    (item) =>
      new CollectionArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        langLinksCount: parseInt(item.langlinks_count),
        collection: item.collection,
      })
  );
};

/**
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string|null} collectionName
 * @return {Promise<CollectionSectionSuggestion[]>}
 */
const fetchSectionSuggestionsByCollections = async (
  sourceLanguage,
  targetLanguage,
  collectionName = null
) => {
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    count: 24,
    collections: true,
  };

  if (collectionName) {
    urlParams.seed = collectionName;
  }

  const urlPostfix = "/sections";

  const recommendations =
    (await requestToRecommendationApi({ urlPostfix, urlParams })) || [];

  return (
    recommendations &&
    recommendations.map(
      (recommendation) =>
        new CollectionSectionSuggestion({
          sourceLanguage,
          targetLanguage,
          sourceTitle: recommendation.source_title,
          targetTitle: recommendation.target_title,
          sourceSections: recommendation.source_sections,
          targetSections: recommendation.target_sections,
          present: recommendation.present,
          missing: recommendation.missing,
          collection: recommendation.collection,
          sourceSectionInfo: recommendation.source_section_info,
          sourceSectionSizes: recommendation.source_section_sizes,
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
    `/suggest/sections/${cxServerParams.join("/")}?include_section_sizes=true`
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
 * @param {String|null} seed
 * @returns {Promise<SectionSuggestion[]>}
 */
async function fetchSectionSuggestions(
  sourceLanguage,
  targetLanguage,
  seed = null
) {
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    count: 24,
  };

  if (seed) {
    urlParams.seed = seed;
  }

  const urlPostfix = "/sections";

  const recommendations =
    (await requestToRecommendationApi({ urlPostfix, urlParams })) || [];

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
          sourceSectionInfo: recommendation.source_section_info,
          sourceSectionSizes: recommendation.source_section_sizes,
          seed,
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
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    topic: topics.join("|"),
    count,
  };

  const suggestedResults =
    (await requestToRecommendationApi({ urlParams })) || [];

  return suggestedResults.map(
    (item) =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        size: item.size,
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
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    topic: topics.join("|"),
    count,
  };

  const urlPostfix = "/sections";
  const recommendations =
    (await requestToRecommendationApi({ urlPostfix, urlParams })) || [];

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
          sourceSectionInfo: recommendation.source_section_info,
          sourceSectionSizes: recommendation.source_section_sizes,
        })
    )
  );
}

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String[]} countries
 * @param {Number} count - How many suggestions to fetch. 24 is default.
 * @return {Promise<ArticleSuggestion[]>}
 */
async function fetchPageSuggestionsByCountries(
  sourceLanguage,
  targetLanguage,
  countries,
  count = 24
) {
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    country: countries.join("|"),
    count,
  };

  const suggestedResults =
    (await requestToRecommendationApi({ urlParams })) || [];

  return suggestedResults.map(
    (item) =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        size: item.size,
        langLinksCount: parseInt(item.sitelink_count),
      })
  );
}

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String[]} countries
 * @param {Number} count - How many suggestions to fetch. 24 is default.
 * @return {Promise<SectionSuggestion[]>}
 */
async function fetchSectionSuggestionsByCountries(
  sourceLanguage,
  targetLanguage,
  countries,
  count = 24
) {
  const urlParams = {
    source: sourceLanguage,
    target: targetLanguage,
    country: countries.join("|"),
    count,
  };

  const urlPostfix = "/sections";
  const recommendations =
    (await requestToRecommendationApi({ urlPostfix, urlParams })) || [];

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
          sourceSectionInfo: recommendation.source_section_info,
          sourceSectionSizes: recommendation.source_section_sizes,
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

async function fetchArticleSections(language, title) {
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
 * @param {string} sourceTitle
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @return {Promise}
 */
const markFavorite = (sourceTitle, sourceLanguage, targetLanguage) => {
  const params = {
    assert: "user",
    action: "cxfavoritesuggestions",
    listaction: "add",
    title: sourceTitle,
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
    action: "cxfavoritesuggestions",
    listaction: "remove",
    title: suggestion.title,
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
  fetchAppendixTargetSectionTitles,
  fetchArticleSections,
  markFavorite,
  unmarkFavorite,
  fetchUserEdits,
  fetchMostPopularPageSuggestions,
  fetchMostPopularSectionSuggestions,
  fetchPageSuggestionsByTopics,
  fetchSectionSuggestionsByTopics,
  fetchPageSuggestionsByCountries,
  fetchSectionSuggestionsByCountries,
  fetchPageCollectionGroups,
  fetchPageSuggestionsByCollections,
  fetchSectionSuggestionsByCollections,
};
