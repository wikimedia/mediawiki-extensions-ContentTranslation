import { computed } from "vue";
import useMediawikiState from "@/composables/useMediawikiState";

export default () => {
  const {
    supportedLanguageCodes,
    enabledTargetLanguages
  } = useMediawikiState();

  const availableTargetLanguages = computed(() => {
    // If SectionTranslationTargetLanguages configuration parameter is set,
    // target language selection is limited to these languages
    return enabledTargetLanguages.value || supportedLanguageCodes.value;
  });

  return {
    supportedLanguageCodes,
    availableTargetLanguages
  };
};
