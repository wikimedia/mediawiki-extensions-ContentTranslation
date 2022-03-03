import { computed } from "vue";
import store from "@/store";

export default function() {
  const supportedLanguageCodes = computed(
    () => store.state.mediawiki.supportedLanguageCodes || []
  );

  const enabledTargetLanguages = computed(
    () => store.state.mediawiki.enabledTargetLanguages
  );

  return {
    enabledTargetLanguages,
    supportedLanguageCodes
  };
}
