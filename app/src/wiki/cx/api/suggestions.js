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

/**
 * @param {Translation[]} seeds
 * @return {Promise<SectionSuggestion[]>}
 */
async function fetchSectionSuggestionsBySeeds(seeds) {
  const sectionSuggestions = [];
  for (const seed of seeds) {
    /** @type {SectionSuggestion|null} */
    const newSectionSuggestion = await fetchSectionSuggestions(
      seed.sourceLanguage,
      seed.sourceTitle,
      seed.targetLanguage
    );
    newSectionSuggestion && sectionSuggestions.push(newSectionSuggestion);
    if (sectionSuggestions.length === 5) {
      break;
    }
  }

  return sectionSuggestions;
}

export default {
  fetchSuggestions,
  fetchSectionSuggestions,
  fetchSectionSuggestionsBySeeds
};
