import useURLHandler from "@/composables/useURLHandler";
import { computed } from "vue";
import { useStore } from "vuex";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";

const useCurrentPages = () => {
  const store = useStore();
  const { sectionSuggestion } = useCurrentSectionSuggestion();
  const { currentTranslation } = useCurrentDraftTranslation();
  const {
    sourceLanguageURLParameter,
    pageURLParameter,
    targetLanguageURLParameter,
  } = useURLHandler();

  const currentSourcePage = computed(() =>
    store.getters["mediawiki/getPage"](
      sourceLanguageURLParameter.value,
      pageURLParameter.value
    )
  );

  const currentTargetPageTitle = computed(
    () =>
      sectionSuggestion.value?.targetTitle ||
      currentTranslation.value?.targetTitle
  );

  const currentTargetPage = computed(() =>
    store.getters["mediawiki/getPage"](
      targetLanguageURLParameter.value,
      currentTargetPageTitle.value
    )
  );

  return { currentSourcePage, currentTargetPage, currentTargetPageTitle };
};

export default useCurrentPages;
