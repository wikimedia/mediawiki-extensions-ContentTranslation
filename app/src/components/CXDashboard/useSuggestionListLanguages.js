import { computed } from "@vue/composition-api";
import useApplicationState from "@/composables/useApplicationState";
import useMediawikiState from "@/composables/useMediawikiState";

export default () => {
  const {
    sourceLanguage: selectedSourceLanguage,
    targetLanguage: selectedTargetLanguage
  } = useApplicationState();

  const { supportedLanguageCodes } = useMediawikiState();

  const availableSourceLanguages = computed(() => {
    return supportedLanguageCodes.value.filter(
      languageCode => languageCode !== selectedTargetLanguage.value
    );
  });

  const availableTargetLanguages = computed(() => {
    // If SectionTranslationTargetLanguage configuration parameter is set,
    // target language selection is disabled (only available target
    // language is the one set in SectionTranslationTargetLanguage).
    const mwTargetLanguage = mw.config.get(
      "wgSectionTranslationTargetLanguage"
    );
    const supportedCodes = mwTargetLanguage
      ? [mwTargetLanguage]
      : supportedLanguageCodes.value;

    return supportedCodes.filter(
      languageCode => languageCode !== selectedSourceLanguage.value
    );
  });

  return {
    availableSourceLanguages,
    availableTargetLanguages
  };
};
