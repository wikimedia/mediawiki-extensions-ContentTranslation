import { computed } from "@vue/composition-api";
import useMediawikiState from "@/composables/useMediawikiState";

export default () => {
  const { supportedLanguageCodes } = useMediawikiState();

  const availableTargetLanguages = computed(() => {
    // If SectionTranslationTargetLanguage configuration parameter is set,
    // target language selection is disabled (only available target
    // language is the one set in SectionTranslationTargetLanguage).
    const mwTargetLanguage = mw.config.get(
      "wgSectionTranslationTargetLanguage"
    );

    return mwTargetLanguage ? [mwTargetLanguage] : supportedLanguageCodes.value;
  });

  return {
    supportedLanguageCodes,
    availableTargetLanguages
  };
};
