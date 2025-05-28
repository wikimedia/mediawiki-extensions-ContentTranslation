import useEventLogging from "@/composables/useEventLogging";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";

/**
 * @returns {function(DraftTranslation): Promise}
 */
const useDashboardTranslationContinueInstrument = () => {
  const logEvent = useEventLogging();
  const { currentTranslation } = useCurrentDraftTranslation();

  return () => {
    if (!currentTranslation.value) {
      mw.log.error(
        "[CX Event Logging] No current draft translation to continue"
      );

      return Promise.resolve();
    }

    const {
      translationId,
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      targetTitle,
      isLeadSectionTranslation,
      sourceSectionTitle,
      targetSectionTitle,
    } = currentTranslation.value;

    const payload = {
      event_type: "dashboard_translation_continue",
      translation_id: translationId,
      translation_source_language: sourceLanguage,
      translation_source_title: sourceTitle,
      translation_target_language: targetLanguage,
      translation_target_title: targetTitle,
      translation_type: isLeadSectionTranslation ? "article" : "section",
    };

    if (sourceSectionTitle) {
      payload.translation_source_section = sourceSectionTitle;
    }

    if (targetSectionTitle) {
      payload.translation_target_section = targetSectionTitle;
    }

    return logEvent(payload);
  };
};

export default useDashboardTranslationContinueInstrument;
