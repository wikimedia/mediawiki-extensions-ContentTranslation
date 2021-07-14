import { computed } from "@vue/composition-api";
import store from "@/store";

export default function() {
  const supportedLanguageCodes = computed(
    () => store.state.mediawiki.supportedLanguageCodes || []
  );

  return {
    supportedLanguageCodes
  };
}
