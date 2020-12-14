import ArticleSuggestion from "../models/articleSuggestion";
import SectionSuggestion from "../models/sectionSuggestion";
import siteMapper from "../../../utils/siteMapper";

/**
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String} seedArticleTitle
 * @param {Number} count How many suggestions to fetch. 24 is default.
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
  const suggestedResults = await fetch(`${apiURL}?${params}`)
    .then(response =>
      response.ok
        ? response.json()
        : Promise.reject(new Error("Failed to load data from server"))
    )
    .then(response => response?.items || []);

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
  // Example: https://cxserver.wikimedia.org/v2/suggest/sections/Sitar/en/ml
  const cxserverAPI = siteMapper.getCXServerUrl(
    `/suggest/sections/${sourceTitle}/${sourceLanguage}/${targetLanguage}`
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

async function getSxSuggestionsFromPublishedArticles(publishedTranslations) {
  const suggestedTitles = [];
  for (let i = 0; i < publishedTranslations.length; i++) {
    const translation = publishedTranslations[i];
    const missingSectionsResult = await fetchSectionSuggestions(
      translation.sourceLanguage,
      translation.sourceTitle,
      translation.targetLanguage
    );
    if (missingSectionsResult) {
      suggestedTitles.push(missingSectionsResult);
    }
    if (suggestedTitles.length === 5) {
      break;
    }
  }

  return suggestedTitles;
}

export default {
  fetchSuggestions,
  fetchSectionSuggestions,
  getSxSuggestionsFromPublishedArticles
};
