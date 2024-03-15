import { siteMapper } from "@/utils/mediawikiHelper";
import useURLHandler from "@/composables/useURLHandler";

/**
 * This method calculates the initial source and target languages for the current session.
 * These languages are initially declared as null in the vuex state, but should be
 * properly initialized for the Section Translation application to work properly.
 *
 * Target language is initialized based on the below logic:
 * 1. If "to" URL parameter exists and is a CX/SX supported and enabled language code then
 * it is set as target language.
 * 2. If step 1 is not the case, and current wiki language is a CX/SX supported and enabled
 * language code then it is set as target language
 * 3. If not, the first enabled language code is selected as target language
 * 4. If SX enabled languages are empty, the default target language is selected ("es")
 *
 * Source language is initialized based on the below logic:
 * 1. If "from" URL parameter exists and is a CX/SX supported and enabled language code, and
 * (the already set) target language is not equal to this language code, then it is set as
 * source language.
 * 2. If step 1 is not the case, and the target language is not equal to the default source
 * language ("en"), then source language is set to "en"
 * 4. If not, and the current wiki language is a CX/SX supported and enabled language code,
 * and not equal to the target language, then it is set as source language
 * 4. If none of the cases above stands, then we should target language is set to "en" and
 * source language should be set to "es" as a fallback.
 *
 * @param {string[]|null} enabledTargetLanguages
 * @param {string[]} supportedLanguageCodes
 * @return {{targetLanguage: string, sourceLanguage: string}}
 */
const getInitialLanguagePair = (
  enabledTargetLanguages,
  supportedLanguageCodes
) => {
  const { sourceLanguageURLParameter, targetLanguageURLParameter } =
    useURLHandler();

  const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();

  const isEnabledLanguage = (language) =>
    !enabledTargetLanguages ||
    (Array.isArray(enabledTargetLanguages) &&
      enabledTargetLanguages.includes(language));

  const isSupportedLanguage = (language) =>
    supportedLanguageCodes.includes(language);

  const defaultLanguages = {
    sourceLanguage: "en",
    targetLanguage: "es",
  };

  let targetLanguage;

  if (
    targetLanguageURLParameter.value &&
    isEnabledLanguage(targetLanguageURLParameter.value) &&
    isSupportedLanguage(targetLanguageURLParameter.value)
  ) {
    targetLanguage = targetLanguageURLParameter.value;
  } else if (
    isEnabledLanguage(wikiLanguage) &&
    isSupportedLanguage(wikiLanguage)
  ) {
    targetLanguage = wikiLanguage;
  } else {
    targetLanguage =
      enabledTargetLanguages?.[0] || defaultLanguages.targetLanguage;
  }

  const defaultSourceLanguages = [
    sourceLanguageURLParameter.value,
    defaultLanguages.sourceLanguage,
    wikiLanguage,
    defaultLanguages.targetLanguage,
  ];

  let sourceLanguage = defaultSourceLanguages
    .filter((language) => isSupportedLanguage(language))
    .find((language) => language !== targetLanguage);

  return { sourceLanguage, targetLanguage };
};

export { getInitialLanguagePair };
