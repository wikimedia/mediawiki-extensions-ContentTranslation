import { useStore } from "vuex";
import { computed } from "vue";
import PageSection from "@/wiki/cx/models/pageSection";
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
    store.getters["translator/getDraftTranslation"](
      pageTitle.value,
      sectionTitle.value,
      sourceLanguage.value,
      targetLanguage.value
    )
  );

  return { currentTranslation };
};

export default useCurrentDraftTranslation;
