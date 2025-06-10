import useEventLogging from "@/composables/useEventLogging";
import { useStore } from "vuex";
import cxTranslatorApi from "@/wiki/cx/api/translator";

/**
 * @return {function(DraftTranslation): Promise<void>}
 */
const useDraftTranslationDelete = () => {
  const { commit } = useStore();
  const logEvent = useEventLogging();

  return async (translation) => {
    if (translation.isArticleTranslation) {
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

    const payload = {
      event_type: "dashboard_translation_discard",
      translation_id: translation.translationId,
      translation_source_language: translation.sourceLanguage,
      translation_source_title: translation.sourceTitle,
      translation_target_language: translation.targetLanguage,
      translation_target_title: translation.targetTitle,
    };

    if (translation.sourceSectionTitle) {
      payload.translation_source_section = translation.sourceSectionTitle;
    }

    if (translation.targetSectionTitle) {
      payload.translation_target_section = translation.targetSectionTitle;
    }

    logEvent(payload);
  };
};

export default useDraftTranslationDelete;
