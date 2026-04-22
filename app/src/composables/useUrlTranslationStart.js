import useTranslationStart from "@/composables/useTranslationStart";
import useURLHandler from "@/composables/useURLHandler";
import useDashboardOpenInstrument from "@/components/CXDashboard/useDashboardOpenInstrument";

/**
 * @return {(function(): Promise<void>)}
 */
const useUrlTranslationStart = () => {
  const startTranslation = useTranslationStart();
  const { logDashboardOpenEvent } = useDashboardOpenInstrument();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: pageTitle,
  } = useURLHandler();

  return async () => {
    logDashboardOpenEvent();

    // do not navigate to "sx-translation-confirmer". useUrlTranslationStart is only called inside
    // the router navigation guard, which will also handle the navigation to the confirmation step
    return startTranslation(
      pageTitle.value,
      sourceLanguage.value,
      targetLanguage.value,
      "direct_preselect",
      null,
      false
    );
  };
};

export default useUrlTranslationStart;
