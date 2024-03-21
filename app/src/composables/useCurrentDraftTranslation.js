import { useStore } from "vuex";
import { computed } from "vue";
import PageSection from "@/wiki/cx/models/pageSection";
import useURLHandler from "@/composables/useURLHandler";

const useCurrentDraftTranslation = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    sectionURLParameter,
    pageURLParameter: pageTitle,
  } = useURLHandler();

  const sectionTitle =
    sectionURLParameter.value || PageSection.LEAD_SECTION_DUMMY_TITLE;

  /**
   * @type {ComputedRef<DraftTranslation>}
   */
  const currentTranslation = computed(() =>
    store.getters["translator/getDraftTranslation"](
      pageTitle.value,
      sectionTitle,
      sourceLanguage.value,
      targetLanguage.value
    )
  );

  return { currentTranslation };
};

export default useCurrentDraftTranslation;
