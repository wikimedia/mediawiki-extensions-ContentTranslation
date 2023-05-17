import { useEventLogging } from "@/plugins/eventlogging";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";

const useDraftTranslationDelete = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);
  const logEvent = useEventLogging();

  return (translation) => {
    store.dispatch("translator/deleteTranslation", translation);

    logEvent({
      event_type: "dashboard_translation_discard",
      translation_id: translation.sectionTranslationId,
      translation_source_language: sourceLanguage.value,
      translation_source_title: translation.sourceTitle,
      translation_source_section: translation.sourceSectionTitle,
      translation_target_language: targetLanguage.value,
      translation_target_title: translation.targetTitle,
      translation_target_section: translation.targetSectionTitle,
    });
  };
};

export default useDraftTranslationDelete;
