import { computed } from "vue";
import { useStore } from "vuex";
import useURLHandler from "@/composables/useURLHandler";

const useLanguageTitleGroup = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
  } = useURLHandler();

  const currentLanguageTitleGroup = computed(() =>
    store.getters["mediawiki/getLanguageTitleGroup"](
      sourceLanguage.value,
      sourceTitle.value
    )
  );

  const targetPageExists = computed(() => {
    if (!currentLanguageTitleGroup.value) {
      return false;
    }

    return currentLanguageTitleGroup.value.hasLanguage(targetLanguage.value);
  });

  return { currentLanguageTitleGroup, targetPageExists };
};

export default useLanguageTitleGroup;
