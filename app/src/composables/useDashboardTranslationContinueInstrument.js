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
      sectionTranslationId,
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      targetTitle,
      isLeadSectionTranslation,
      sourceSectionTitle,
      targetSectionTitle,
    } = currentTranslation.value;

    return logEvent({
      event_type: "dashboard_translation_continue",
      translation_id: sectionTranslationId,
      translation_source_language: sourceLanguage,
      translation_source_title: sourceTitle,
      translation_source_section: sourceSectionTitle,
      translation_target_language: targetLanguage,
      translation_target_title: targetTitle,
      translation_target_section: targetSectionTitle,
      translation_type: isLeadSectionTranslation ? "article" : "section",
    });
  };
};

export default useDashboardTranslationContinueInstrument;
