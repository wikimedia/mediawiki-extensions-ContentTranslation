import { useRouter } from "vue-router";
import { ref } from "vue";
import usePageSectionSelect from "@/composables/usePageSectionSelect";
import { isDesktopSite } from "@/utils/mediawikiHelper";
import useURLHandler from "@/composables/useURLHandler";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useEditorNavigation from "@/composables/useEditorNavigation";
import useDashboardTranslationStartInstrument from "@/composables/useDashboardTranslationStartInstrument";
import useDashboardTranslationContinueInstrument from "@/composables/useDashboardTranslationContinueInstrument";

export default () => {
  const router = useRouter();
  const { logDashboardTranslationStartEvent } =
    useDashboardTranslationStartInstrument();
  const logDashboardTranslationContinueEvent =
    useDashboardTranslationContinueInstrument();
  const navigateToEditor = useEditorNavigation();

  const { sectionURLParameter: preFilledSectionTitle } = useURLHandler();

  const { targetPageExists } = useLanguageTitleGroup();

  const { selectPageSectionByTitle } = usePageSectionSelect();

  const startPrefilledSectionTranslation = async () => {
    await selectPageSectionByTitle(preFilledSectionTitle.value);
    router.push({ name: "sx-content-comparator" });
  };

  const translationConfirmationDialogOn = ref(false);
  const { currentTranslation } = useCurrentDraftTranslation();

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
   * @return {void}
   */
  const handlePrimaryButtonClick = () => {
    if (!!currentTranslation.value) {
      if (currentTranslation.value.isArticleTranslation && !isDesktopSite) {
        translationConfirmationDialogOn.value = true;
      } else {
        logDashboardTranslationContinueEvent();
        navigateToEditor();
      }
    } else if (!!preFilledSectionTitle.value) {
      startPrefilledSectionTranslation();
    } else if (targetPageExists.value) {
      router.push({ name: "sx-section-selector" });
    } else {
      logDashboardTranslationStartEvent();
      navigateToEditor();
    }
  };

  return {
    handlePrimaryButtonClick,
    translationConfirmationDialogOn,
  };
};
