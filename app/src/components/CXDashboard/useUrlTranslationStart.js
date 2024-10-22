import useTranslationStart from "@/composables/useTranslationStart";
import useURLHandler from "@/composables/useURLHandler";
import useLanguageTitlesFetch from "@/composables/useLanguageTitlesFetch";
import useDashboardOpenInstrument from "./useDashboardOpenInstrument";

/**
 * @return {(function({pageTitle: string, isDraftTranslation: boolean, sectionTitle: string|null}): Promise<void>)}
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

    return startTranslation(
      pageTitle.value,
      sourceLanguage.value,
      targetLanguage.value,
      getEventSource()
    );
  };
};

export { useUrlTranslationStart };
