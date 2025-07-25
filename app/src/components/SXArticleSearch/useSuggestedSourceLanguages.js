import { computed } from "vue";
import useSupportedLanguageCodes from "@/composables/useSupportedLanguageCodes";
import useURLHandler from "@/composables/useURLHandler";

/**
 * Returns an array of suggested language codes
 * based on a list of criteria. Based on mw.uls.getFrequentLanguageList
 * NOTE: Suggested language codes based on user territory is not supported
 *
 * @return {function(ComputedRef<string[]>):ComputedRef<string[]>}
 */
const useSuggestedSourceLanguages = () => {
  const { supportedSourceLanguageCodes } = useSupportedLanguageCodes();
  const { targetLanguageURLParameter: targetLanguage } = useURLHandler();

  const getSuggestedSourceLanguages = (previousLanguages) =>
    computed(() => {
      /**
       * Browser user interface language or the system language.
       * This language code can be like "en" or "en-US", so we need
       * to split it by hyphen and only keep first segment
       * @type {string}
       */
      const browserLanguage = (navigator.language || "").split("-")[0];
      /**
       * Browser accept-languages. Accept language codes can be like "en" or "en-US",
       * so we need to split them by hyphen and only keep first segment
       * @type {string[]}
       */
      const acceptLanguages = (
        mw.config.get("wgULSAcceptLanguageList") ||
        navigator.languages ||
        []
      ).map((languageCode) => languageCode.split("-")[0]);

      const suggestedLanguages = [
        ...previousLanguages.value,
        // User's current interface language
        mw.config.get("wgUserLanguage"),
        // Current wiki's content language
        mw.config.get("wgContentLanguage"),
        browserLanguage,
        ...acceptLanguages,
      ];

      // Filter out duplicate languages using Set. Also filter out
      // target and invalid languages (i.e. languages that
      // are not included in the list of supported language codes for CX).
      return [...new Set(suggestedLanguages)].filter(
        (language) =>
          language !== targetLanguage.value &&
          supportedSourceLanguageCodes.value.includes(language)
      );
    });

  return { getSuggestedSourceLanguages };
};
export default useSuggestedSourceLanguages;
