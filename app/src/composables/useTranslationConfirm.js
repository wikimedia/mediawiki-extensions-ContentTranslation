import { isQuickTutorialForced } from "@/utils/urlHandler";
import useDashboardTranslationStartInstrument from "./useDashboardTranslationStartInstrument";
import useCXRedirect from "@/composables/useCXRedirect";
import useURLHandler from "@/composables/useURLHandler";
import useDevice from "@/composables/useDevice";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import usePageSectionSelect from "@/composables/usePageSectionSelect";

const useTranslationConfirm = () => {
  const { logDashboardTranslationStartEvent } =
    useDashboardTranslationStartInstrument();
  const redirectToCX = useCXRedirect();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
    sectionURLParameter: sectionTitle,
  } = useURLHandler();
  const { isDesktop } = useDevice();

  const store = useStore();
  const router = useRouter();
  const { selectPageSectionByIndex } = usePageSectionSelect();

  return () => {
    logDashboardTranslationStartEvent();

    if (isDesktop.value) {
      redirectToCX(
        sourceLanguage.value,
        targetLanguage.value,
        sourceTitle.value,
        sectionTitle.value ? { sourcesection: sectionTitle.value } : {}
      );
    } else {
      if (!sectionTitle.value) {
        selectPageSectionByIndex(0);
      }

      // For now, we don't display the quick tutorial for any desktop translations.
      // In the future, we may want to support quick tutorial for (some) desktop
      // translations, too.
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
};

export default useTranslationConfirm;
