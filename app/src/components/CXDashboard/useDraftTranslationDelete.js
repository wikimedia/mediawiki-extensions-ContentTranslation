import { useEventLogging } from "@/plugins/eventlogging";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import cxTranslatorApi from "@/wiki/cx/api/translator";

const useDraftTranslationDelete = () => {
  const store = useStore();
  const { commit } = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);
  const logEvent = useEventLogging();

  return async (translation) => {
    if (!translation.sectionTranslationId) {
      // Given a translation model, this action calls the "deleteCXtranslation"
      // method of the translator API to delete the draft section translation and
      // its related corpora content from the database that was specifically
      // created on CX, yet this deletion action is done on SX.If the request
      // is successful, the translation is also removed from the translator state.
      const isSuccessful = await cxTranslatorApi.deleteCXTranslation(
        translation
      );

      if (isSuccessful) {
        commit("translator/removeCXTranslation", translation.translationId);
      }
    } else {
      // Given a translation model, this action calls the "deleteTranslation"
      // method of the translator API to delete the draft section translation
      // and its related corpora content from the database. If the request is
      // successful, the translation is also removed from the translator state.
      const isSuccessful = await cxTranslatorApi.deleteTranslation(
        translation.sectionTranslationId,
        translation.translationId,
        translation.sectionId
      );

      if (isSuccessful) {
        commit(
          "translator/removeTranslationBySectionTranslationId",
          translation.sectionTranslationId
        );
      }
    }

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
