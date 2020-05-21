import axios from "axios";
import { ArticleSuggestion } from "../models/articleSuggestion";
import { SectionSuggestion } from "../models/sectionSuggestion";

// Example URL:
// https://recommend.wmflabs.org/types/translation/v1/articles?source=de&target=ml&seed=&search=morelike&application=CX

async function fetchSuggestions(sourceLanguage, targetLanguage, seedArticles) {
  const params = {
    source: sourceLanguage,
    target: targetLanguage,
    seed: seedArticles,
    search: "related_articles",
    application: "CX"
  };
  const apiURL = mw.config.get("wgRecommendToolAPIURL");
  const suggestedResults = await axios
    .get(apiURL, { params })
    .then(response => response.data);
  return suggestedResults.map(
    item =>
      new ArticleSuggestion({
        sourceTitle: item.title.replace(/_/g, " "),
        sourceLanguage,
        targetLanguage,
        wikidataId: item.wikidata_id,
        pageViews: item.pageviews,
        rank: item.rank
      })
  );
}

/**
 * @param sourceLanguage
 * @param sourceTitle
 * @param targetLanguage
 * @returns {Promise<SectionSuggestion>}
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
    .then(response => response.data?.sections);
  return new SectionSuggestion(suggestedSectionResult);
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
