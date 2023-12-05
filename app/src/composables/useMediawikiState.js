import { computed } from "vue";
import { useStore } from "vuex";

export default function () {
  const store = useStore();

  const supportedLanguageCodes = computed(
    () => store.state.mediawiki.supportedLanguageCodes || []
  );

  const enabledTargetLanguages = computed(
    () => store.state.mediawiki.enabledTargetLanguages
  );

  return {
    enabledTargetLanguages,
    supportedLanguageCodes,
  };
}
