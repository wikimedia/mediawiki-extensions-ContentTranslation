import ArticleSuggestion from "../models/articleSuggestion";
import SectionSuggestion from "../models/sectionSuggestion";
import { siteMapper } from "../../../utils/mediawikiHelper";
import { en } from "../../../utils/appendix/appendixTitles.json";
import FavoriteSuggestion from "@/wiki/cx/models/favoriteSuggestion";
const appendixSectionTitlesInEnglish = en;

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
  let apiModule = `/data/recommendation/article/creation/translation/${sourceLanguage}`;

  if (seedArticleTitle) {
    apiModule += `/${seedArticleTitle}`;
  }
  const apiURL = siteMapper.getRestbaseUrl(targetLanguage, apiModule);
  const params = new URLSearchParams({ count: `${count}` });

  const response = await fetch(`${apiURL}?${params}`);

  if (!response.ok) {
    throw new Error("Failed to load data from server");
  }

  const suggestedResults = (await response.json())?.items || [];

  // Recommendation API doesn't limit results to the "count" parameter
  // (issue being tracked in T287227). Until it is resolved, slice
  // results to only returns results with length equal (or less) to "count"
  // TODO: Remove slice once issue is fixed
  return suggestedResults
    .map(
      item =>
        new ArticleSuggestion({
          sourceTitle: item.title.replace(/_/g, " "),
          sourceLanguage,
          targetLanguage,
          wikidataId: item.wikidata_id,
          langLinksCount: parseInt(item.sitelink_count)
        })
    )
    .slice(0, count);
}

/**
 * @param {String} sourceLanguage
 * @param {String} sourceTitle
 * @param {String} targetLanguage
 * @returns {Promise<SectionSuggestion>|null}
 */
async function fetchSectionSuggestions(
  sourceLanguage,
  sourceTitle,
  targetLanguage
) {
  const cxServerParams = [
    sourceTitle,
    sourceLanguage,
    targetLanguage
  ].map(param => encodeURIComponent(param));
  // Example: https://cxserver.wikimedia.org/v2/suggest/sections/Sitar/en/ml
  const cxserverAPI = siteMapper.getCXServerUrl(
    `/suggest/sections/${cxServerParams.join("/")}`
  );
  const suggestedSectionResult = await fetch(cxserverAPI)
    .then(response =>
      response.ok
        ? response.json()
        : Promise.reject(new Error("Failed to load data from server"))
    )
    .then(response => response?.sections)
    .catch(error => null);

  return suggestedSectionResult
    ? new SectionSuggestion(suggestedSectionResult)
    : null;
}

/**
 * Given a language pair, this api action returns an array of translations
 * published to the main namespace of the corresponding wiki
 *
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @return {Promise<Object[]>}
 */
async function fetchSuggestionSeeds(sourceLanguage, targetLanguage) {
  const query = {
    action: "query",
    format: "json",
    list: "cxpublishedtranslations",
    from: sourceLanguage,
    to: targetLanguage,
    limit: 200
  };
  const mwApi = siteMapper.getApi(sourceLanguage);

  try {
    const response = await mwApi.get(query);
    // Shuffle array so that users do not get the same suggestions every time
    const translations = shuffleArray(response.result.translations);

    return translations.filter(translation => {
      // For some reason, the above query provides non-encoded urls. Encode them before comparing
      const targetUrl = mw.util.wikiUrlencode(translation.targetURL);

      // if translation has been published properly to the main namespace then page url calculated
      // by siteMapper should be equal to (encoded) targetUrl
      return (
        siteMapper.getPageUrl(targetLanguage, translation.targetTitle) ===
        targetUrl
      );
    });
  } catch (error) {
    console.log(error);

    return [];
  }
}

// Fisher–Yates shuffle: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

/**
 * This api action fetches and returns appendix section titles
 * for the given target language. In case of failure, errors
 * will be suppressed and an empty array will be returned
 * @param {string} targetLanguage
 * @return {Promise<String[]>}
 */
function fetchAppendixTargetSectionTitles(targetLanguage) {
  const titleQueryParams = appendixSectionTitlesInEnglish
    .map(title => encodeURIComponent(title))
    .join("|");
  const cxserverAPI = siteMapper.getCXServerUrl(
    `/suggest/sections/titles/en/${targetLanguage}?titles=${titleQueryParams}`
  );

  return fetch(cxserverAPI)
    .then(response =>
      response.ok
        ? response.json()
        : Promise.reject(
            new Error(
              `Failed to load appendix target section titles for language: ${targetLanguage}`
            )
          )
    )
    .then(response => Object.values(response).flat())
    .catch(error => []);
}

/**
 *
 * @param {SectionSuggestion|ArticleSuggestion} suggestion
 * @return {Promise}
 */
const markFavorite = suggestion => {
  const params = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "add",
    titles: suggestion.sourceTitle,
    from: suggestion.sourceLanguage,
    to: suggestion.targetLanguage
  };

  const api = new mw.Api();

  return Promise.resolve(api.postWithToken("csrf", params)).catch(error => {
    mw.log.error("Error while marking suggestion as favorite", error);
  });
};

/**
 * Unmark a suggestion as favorite.
 *
 * @param  {FavoriteSuggestion} suggestion
 * @return {Promise}
 */
const unmarkFavorite = suggestion => {
  const params = {
    assert: "user",
    action: "cxsuggestionlist",
    listname: "cx-suggestionlist-favorite",
    listaction: "remove",
    titles: suggestion.title,
    from: suggestion.sourceLanguage,
    to: suggestion.targetLanguage
  };

  const api = new mw.Api();

  return Promise.resolve(api.postWithToken("csrf", params)).catch(error => {
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
    list: "contenttranslationsuggestions"
  };

  const api = new mw.Api();

  return Promise.resolve(api.postWithToken("csrf", params))
    .then(response => {
      const lists = response.query.contenttranslationsuggestions.lists || {};
      const suggestions = Object.values(lists)?.[0]?.suggestions || [];

      return suggestions.map(favorite => new FavoriteSuggestion(favorite));
    })
    .catch(error => {
      mw.log.error("Error while fetching favorite suggestions", error);
    });
};

export default {
  fetchFavorites,
  fetchPageSuggestions,
  fetchSectionSuggestions,
  fetchSuggestionSeeds,
  fetchAppendixTargetSectionTitles,
  markFavorite,
  unmarkFavorite
};
