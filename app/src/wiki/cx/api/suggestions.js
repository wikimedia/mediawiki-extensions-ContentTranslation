import axios from "axios";
import ArticleSuggestion from "../models/articleSuggestion";
import SectionSuggestion from "../models/sectionSuggestion";

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
  const sitemapper = new mw.cx.SiteMapper();
  const apiURL = sitemapper.getRestbaseUrl(targetLanguage, apiModule);
  const suggestedResults = await axios
    .get(apiURL, { count })
    .then(response => response.data?.items || []);
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
  const sitemapper = new mw.cx.SiteMapper();
  // Example: https://cxserver.thottingal.in:8080/v2/suggest/sections/Sitar/en/ml
  const cxserverAPI = sitemapper.getCXServerUrl(
    `/suggest/sections/${sourceTitle}/${sourceLanguage}/${targetLanguage}`
  );
  const suggestedSectionResult = await axios
    .get(cxserverAPI)
    .then(response => response.data?.sections)
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
    suggestedTitles.push(missingSectionsResult);
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
