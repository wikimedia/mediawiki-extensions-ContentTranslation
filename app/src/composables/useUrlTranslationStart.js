import useTranslationStart from "@/composables/useTranslationStart";
import useURLHandler from "@/composables/useURLHandler";
import useLanguageTitlesFetch from "@/composables/useLanguageTitlesFetch";
import useDashboardOpenInstrument from "@/components/CXDashboard/useDashboardOpenInstrument";

/**
 * @return {(function(): Promise<void>)}
 */
const useUrlTranslationStart = () => {
  const startTranslation = useTranslationStart();
  const fetchLanguageTitles = useLanguageTitlesFetch();
  const { logDashboardOpenEvent, getEventSource } =
    useDashboardOpenInstrument();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: pageTitle,
  } = useURLHandler();

  return async () => {
    fetchLanguageTitles(sourceLanguage.value, pageTitle.value).then(() =>
      logDashboardOpenEvent()
    );

    // do not navigate to "sx-translation-confirmer". useUrlTranslationStart is only called inside
    // router navigation guard, which will also handle the navigation to the confirmation step
    return startTranslation(
      pageTitle.value,
      sourceLanguage.value,
      targetLanguage.value,
      getEventSource(),
      null,
      false
    );
  };
};

export default useUrlTranslationStart;
