import { getUrl } from "@/utils/mediawikiHelper";
import Translation from "@/wiki/cx/models/translation";

/**
 * @param {SectionSuggestion|Translation|null} translationToBeStarted
 */
const setTranslationURLParams = (translationToBeStarted) => {
  if (!history.pushState) {
    return;
  }

  const isDraftTranslation = translationToBeStarted instanceof Translation;
  const params = new URLSearchParams(location.search);
  // both SectionSuggestion and Translation models have the below properties
  params.set("page", translationToBeStarted?.sourceTitle);
  params.set("from", translationToBeStarted?.sourceLanguage);
  params.set("to", translationToBeStarted?.targetLanguage);
  params.set("sx", true);

  if (isDraftTranslation) {
    params.set("draft", true);
  }
  params.delete("title");
  replaceUrl(Object.fromEntries(params));
};

/**
 * @param {object} params A mapping of query parameter names to values,
 *  e.g. `{ action: 'edit' }`
 */
const replaceUrl = (params) => {
  history.replaceState(
    {},
    document.title,
    getUrl("Special:ContentTranslation", params)
  );
};

const isQuickTutorialForced = () => {
  const urlParams = new URLSearchParams(location.search);

  return urlParams.get("force-quick-tutorial");
};

export { isQuickTutorialForced, setTranslationURLParams, replaceUrl };
