import { ref } from "vue";
import siteApi from "@/wiki/mw/api/site";

/**
 * All language codes that are supported by Content Translation
 * @type {Ref<string[]>}
 */
const supportedLanguageCodes = ref([]);

/**
 * Flag to avoid multiple requests for supported language codes
 * @type {boolean}
 */
let supportedLanguageCodesRequested = false;

export default function () {
  /**
   * This action fetches all language codes supported by cxserver,
   * that can be used as source/target languages.
   */
  const fetchSupportedLanguageCodes = async () => {
    // If supported language codes are already present, then skip
    if (!supportedLanguageCodesRequested) {
      supportedLanguageCodesRequested = true;
      supportedLanguageCodes.value =
        await siteApi.fetchSupportedLanguageCodes();

      // Map domains back to language codes
      const languageToDomainMapping = mw.config.get(
        "ContentTranslationDomainCodeMapping"
      );
      Object.keys(languageToDomainMapping).forEach((lang) => {
        // Skip super special code be-x-old
        if (lang === "be-x-old") {
          return;
        }

        const domain = languageToDomainMapping[lang];
        const index = supportedLanguageCodes.value.indexOf(domain);

        if (index > -1) {
          supportedLanguageCodes.value[index] = lang;
        }
      });
    }
  };

  return {
    fetchSupportedLanguageCodes,
    supportedLanguageCodes,
  };
}
