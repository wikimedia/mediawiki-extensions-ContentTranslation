import { computed } from "@vue/composition-api";
import useMediawikiState from "@/composables/useMediawikiState";

export default () => {
  const { supportedLanguageCodes } = useMediawikiState();

  const availableTargetLanguages = computed(() => {
    // If SectionTranslationTargetLanguages configuration parameter is set,
    // target language selection is limited to these languages
    const mwTargetLanguages = mw.config.get(
      "wgSectionTranslationTargetLanguages"
    );

    return mwTargetLanguages || supportedLanguageCodes.value;
  });

  return {
    supportedLanguageCodes,
    availableTargetLanguages
  };
};
