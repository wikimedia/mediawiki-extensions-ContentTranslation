import { computed } from "@vue/composition-api";
import store from "@/store";

export default function() {
  const sourceLanguage = computed(() => store.state.application.sourceLanguage);

  return {
    sourceLanguage
  };
}
