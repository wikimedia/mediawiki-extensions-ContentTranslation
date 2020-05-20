import axios from "axios";

// Example URL:
// https://recommend.wmflabs.org/types/translation/v1/articles?source=de&target=ml&seed=&search=morelike&application=CX

function fetchSuggestions(source, target, seedArticles) {
  const params = {
    source,
    target,
    seed: seedArticles,
    search: "related_articles",
    application: "CX"
  };
  const apiURL = mw.config.get("wgRecommendToolAPIURL");
  return axios.get(apiURL, { params }).then(response => response.data);
}

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
  return await axios.get(cxserverAPI).then(response => response.data?.sections);
}

async function getSxSuggestionsFromPublishedArticles(publishedTranslations) {
  const suggestedTitles = [];
  for (let i = 0; i < publishedTranslations.length; i++) {
    const translation = publishedTranslations[i].translation;
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
