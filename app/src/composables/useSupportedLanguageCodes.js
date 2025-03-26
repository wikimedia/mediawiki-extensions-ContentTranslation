import { ref } from "vue";
import siteApi from "@/wiki/mw/api/site";

/**
 * All language codes that are supported by cxserver
 * and can be used as source languages
 * @type {Ref<string[]>}
 */
const supportedSourceLanguageCodes = ref([]);
/**
 * All language codes that are supported by cxserver
 * and can be used as target languages
 * @type {Ref<string[]>}
 */
const supportedTargetLanguageCodes = ref([]);

/** @type {Ref<Boolean>} */
const supportedLanguageCodesRequested = ref(false);

export default function () {
  /**
   * This action fetches all language codes supported by cxserver,
   * that can be used as source/target languages.
   */
  const fetchSupportedLanguageCodes = async () => {
    // If supported language codes have already been fetched, then skip
    if (!supportedLanguageCodesRequested.value) {
      supportedLanguageCodesRequested.value = true;

      const languageCodes = await siteApi.fetchSupportedLanguageCodes();
      supportedSourceLanguageCodes.value = languageCodes.sourceLanguages;
      supportedTargetLanguageCodes.value = languageCodes.targetLanguages;
    }
  };

  return {
    fetchSupportedLanguageCodes,
    supportedSourceLanguageCodes,
    supportedTargetLanguageCodes,
  };
}
