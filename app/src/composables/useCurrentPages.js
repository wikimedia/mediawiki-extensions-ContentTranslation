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

  const currentTargetPage = computed(() => {
    const title =
      sectionSuggestion.value?.targetTitle ||
      currentTranslation.value?.targetTitle;

    return store.getters["mediawiki/getPage"](
      targetLanguageURLParameter.value,
      title
    );
  });

  return { currentSourcePage, currentTargetPage };
};

export default useCurrentPages;
