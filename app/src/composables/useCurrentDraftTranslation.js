import { useStore } from "vuex";
import { computed } from "vue";
import useURLHandler from "@/composables/useURLHandler";

const useCurrentDraftTranslation = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    sectionURLParameter: sectionTitle,
    pageURLParameter: pageTitle,
  } = useURLHandler();

  /**
   * @type {ComputedRef<DraftTranslation>}
   */
  const currentTranslation = computed(() =>
    store.state.translator.translations.find(
      /** @param {DraftTranslation} translation */
      (translation) =>
        translation.status === "draft" &&
        translation.sourceTitle === pageTitle.value &&
        translation.sectionTitleMatches(sectionTitle.value) &&
        translation.sourceLanguage === sourceLanguage.value &&
        translation.targetLanguage === targetLanguage.value
    )
  );

  return { currentTranslation };
};

export default useCurrentDraftTranslation;
