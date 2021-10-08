import { getUrl } from "@/utils/mediawikiHelper";

/**
 * @param {SectionSuggestion|null} sectionSuggestion
 */
const setTranslationURLParams = sectionSuggestion => {
  if (!history.pushState) {
    return;
  }
  const params = new URLSearchParams(location.search);
  params.set("page", sectionSuggestion?.sourceTitle);
  params.set("from", sectionSuggestion?.sourceLanguage);
  params.set("to", sectionSuggestion?.targetLanguage);
  params.set("sx", true);
  replaceUrl(Object.fromEntries(params));
};

/**
 * @param {object} params A mapping of query parameter names to values,
 *  e.g. `{ action: 'edit' }`
 */
const replaceUrl = params => {
  history.replaceState(
    {},
    document.title,
    getUrl("Special:ContentTranslation", params)
  );
};

export { setTranslationURLParams, replaceUrl };
