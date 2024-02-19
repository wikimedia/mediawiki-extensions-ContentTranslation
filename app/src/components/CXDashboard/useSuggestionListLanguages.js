import { computed } from "vue";
import useMediaWikiState from "@/composables/useMediaWikiState";

export default () => {
  const { supportedLanguageCodes, enabledTargetLanguages } =
    useMediaWikiState();

  const availableTargetLanguages = computed(() => {
    // If SectionTranslationTargetLanguages configuration parameter is set,
    // target language selection is limited to these languages
    return enabledTargetLanguages.value || supportedLanguageCodes.value;
  });

  return {
    supportedLanguageCodes,
    availableTargetLanguages,
  };
};
