import { computed } from "@vue/composition-api";
import { getAutonym } from "@wikimedia/language-data";
import useApplicationState from "@/composables/useApplicationState";

/**
 * Returns an array of suggested language codes
 * based on a list of criteria. Based on mw.uls.getFrequentLanguageList
 * NOTE: Suggested language codes based on user territory is not supported
 *
 * @return {function(ComputedRef<string[]>): ComputedRef<string[]>}
 */
const getSuggestedSourceLanguages = previousLanguages =>
  computed(() => {
    const { sourceLanguage, targetLanguage } = useApplicationState();
    /**
     * Browser user interface language or the system language.
     * This language code can be like "en" or "en_US", so we need
     * to split it by hyphen and only keep first segment
     * @type {string}
     */
    const browserLanguage = (navigator.language || "").split("-")[0];
    /**
     * Browser accept-languages. Accept language codes can be like "en" or "en_US",
     * so we need to split them by hyphen and only keep first segment
     * @type {string[]}
     */
    const acceptLanguages = (
      mw.config.get("wgULSAcceptLanguageList") ||
      navigator.languages ||
      []
    ).map(languageCode => languageCode.split("-")[0]);

    const suggestedLanguages = [
      // User's current interface language
      mw.config.get("wgUserLanguage"),
      // Current wiki's content language
      mw.config.get("wgContentLanguage"),
      browserLanguage,
      ...previousLanguages.value,
      ...acceptLanguages
    ];

    // Filter out duplicate languages using Set. Also filter out
    // source, target and invalid languages (i.e. languages that
    // do not have a valid autonym).
    return [...new Set(suggestedLanguages)].filter(
      language =>
        language !== sourceLanguage.value &&
        language !== targetLanguage.value &&
        getAutonym(language) !== language
    );
  });

export default getSuggestedSourceLanguages;
