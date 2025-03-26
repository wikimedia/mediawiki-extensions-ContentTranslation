import useSupportedLanguageCodes from "@/composables/useSupportedLanguageCodes";
import { useStore } from "vuex";
import { setLanguagePair } from "@/composables/useLanguageHelper";
import useURLHandler from "@/composables/useURLHandler";
import { siteMapper } from "@/utils/mediawikiHelper";
import { ref } from "vue";

const applicationLanguagesInitialized = ref(false);

/**
 * This composable returns a method that initializes the application languages
 * inside Vuex "application" state, and sets the "from" and "to" URL parameters.
 *
 * @return {{ initializeApplicationLanguages: function(): Promise<void>, applicationLanguagesInitialized: Ref<boolean> }}
 */
const useApplicationLanguagesInitialize = () => {
  const store = useStore();
  const {
    supportedSourceLanguageCodes,
    supportedTargetLanguageCodes,
    fetchSupportedLanguageCodes,
  } = useSupportedLanguageCodes();

  const { sourceLanguageURLParameter, targetLanguageURLParameter } =
    useURLHandler();

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
   * @return {{targetLanguage: string, sourceLanguage: string}}
   */
  const getInitialLanguagePair = () => {
    const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();

    const isSupportedSourceLanguage = (language) =>
      supportedSourceLanguageCodes.value.includes(language);

    const isSupportedTargetLanguage = (language) =>
      supportedTargetLanguageCodes.value.includes(language);

    const defaultLanguages = {
      sourceLanguage: "en",
      targetLanguage: "es",
    };

    const candidateTargetLanguages = [
      targetLanguageURLParameter.value,
      mw.storage.get("cxTargetLanguage"),
      wikiLanguage,
      defaultLanguages.targetLanguage,
    ];

    const candidateSourceLanguages = [
      sourceLanguageURLParameter.value,
      mw.storage.get("cxSourceLanguage"),
      defaultLanguages.sourceLanguage,
      wikiLanguage,
      defaultLanguages.targetLanguage,
    ];

    const targetLanguage = candidateTargetLanguages.find((language) =>
      isSupportedTargetLanguage(language)
    );
    const sourceLanguage = candidateSourceLanguages.find(
      (language) =>
        isSupportedSourceLanguage(language) && language !== targetLanguage
    );

    return { sourceLanguage, targetLanguage };
  };

  const initializeApplicationLanguages = async () => {
    await fetchSupportedLanguageCodes();

    const { sourceLanguage, targetLanguage } = getInitialLanguagePair();

    setLanguagePair(store, sourceLanguage, targetLanguage);
    applicationLanguagesInitialized.value = true;
  };

  return { initializeApplicationLanguages, applicationLanguagesInitialized };
};

export default useApplicationLanguagesInitialize;
