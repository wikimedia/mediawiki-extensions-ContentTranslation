import { isQuickTutorialForced } from "@/utils/urlHandler";
import useApplicationState from "@/composables/useApplicationState";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import usePageSectionSelect from "@/composables/usePageSectionSelect";
import useDevice from "@/composables/useDevice";
import useCXRedirect from "@/composables/useCXRedirect";
import useURLHandler from "@/composables/useURLHandler";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

export default () => {
  const router = useRouter();
  const store = useStore();
  const { isDesktop } = useDevice();

  const { sectionURLParameter: preFilledSectionTitle } = useURLHandler();

  const { sectionSuggestion } = useCurrentSectionSuggestion();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  const { targetPageExists } = useLanguageTitleGroup();

  const { selectPageSectionByIndex, selectPageSectionByTitle } =
    usePageSectionSelect();

  const redirectToCX = useCXRedirect();

  const startPrefilledSectionTranslation = async () => {
    if (isDesktop.value) {
      redirectToCX(
        sourceLanguage.value,
        targetLanguage.value,
        sectionSuggestion.value.sourceTitle,
        { sourcesection: preFilledSectionTitle.value }
      );
    } else {
      await selectPageSectionByTitle(preFilledSectionTitle.value);
      router.push({ name: "sx-content-comparator", query: { force: true } });
    }
  };

  /**
   * 1. If "section" URL parameter exists, then try to select this section
   * as current source section. If this section title is valid, navigate
   * to "Compare contents" screen. If not, remove this URL parameter from the URL
   * 2. If no section has been pre-selected, and article exists in both source and
   * target languages, navigate to the "Pick a section" step
   * 3. If article doesn't exist in target language, then the lead section should
   * be selected for translation, and user should be navigated to the Quick Tutorial
   * step.
   *
   * @return {Promise<void>}
   */
  const onSectionSelectorClick = () => {
    if (!!preFilledSectionTitle.value) {
      startPrefilledSectionTranslation();
    } else if (targetPageExists.value) {
      router.push({ name: "sx-section-selector" });
    } else {
      startNewTranslation();
    }
  };

  const startNewTranslation = async () => {
    if (isDesktop.value) {
      const sourceTitle = sectionSuggestion.value?.sourceTitle;
      redirectToCX(sourceLanguage.value, targetLanguage.value, sourceTitle);
    } else {
      selectPageSectionByIndex(0);

      const shouldDisplayQuickTutorial =
        isQuickTutorialForced() ||
        !store.getters["translator/userHasSectionTranslations"];

      if (shouldDisplayQuickTutorial) {
        router.push({ name: "sx-quick-tutorial", query: { force: true } });
      } else {
        router.push({ name: "sx-sentence-selector", query: { force: true } });
      }
    }
  };

  return {
    startNewTranslation,
    onSectionSelectorClick,
  };
};
