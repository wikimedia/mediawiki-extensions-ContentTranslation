import ArticleSuggestion from "../models/articleSuggestion";
import SectionSuggestion from "../models/sectionSuggestion";
import siteMapper from "../../../utils/siteMapper";

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String} seedArticleTitle
 * @param {Number} count - How many suggestions to fetch. 24 is default.
 * @return {Promise<ArticleSuggestion[]>}
 */
async function fetchSuggestions(
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
  const params = new URLSearchParams({ count });

  const response = await fetch(`${apiURL}?${params}`);
  if (!response.ok) {
    throw new Error("Failed to load data from server");
  }

  const suggestedResults = (await response.json())?.items || [];

  return suggestedResults.map(
    item =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        langLinksCount: item.sitelink_count
      })
  );
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
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @return {Promise<Array>}
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
      // if translation has been published properly to production wiki then page url calculated
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

export default {
  fetchSuggestions,
  fetchSectionSuggestions,
  fetchSuggestionSeeds
};
