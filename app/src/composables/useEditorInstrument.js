import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useCurrentPages from "@/composables/useCurrentPages";
import useURLHandler from "@/composables/useURLHandler";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import useEventLogging from "@/composables/useEventLogging";
import { computed } from "vue";

const useEditorInstrument = () => {
  const store = useStore();
  const router = useRouter();

  const { currentTranslation } = useCurrentDraftTranslation();
  const { currentMTProvider, previousRoute } = useApplicationState(store);
  const { currentTargetPage } = useCurrentPages();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
    sectionURLParameter: sectionTitle,
  } = useURLHandler();

  const logEvent = useEventLogging();

  const sharedPayload = computed(() => {
    const payload = {
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L294)
      // translation_source_title:
      //   The title of the source article of the current translation. Applies only
      //   to events which relate to a specific translation or suggestion: all
      //   `editor_` and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_start_translation`, `dashboard_delete_translation`)
      translation_source_title: sourceTitle.value,

      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L301)
      // translation_target_exists:
      //   Whether the target article or section already exists. Applies only to
      //   events which relate to a specific translation or suggestion: all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      //   `dashboard_delete_translation`). In section translation, if the user discards the mapping
      //   to an existing target section, the value should change to false in future events.

      // translation_target_exists: !!currentTargetPage.value,
    };

    // if section title URL param is set, this is a section translation
    if (!!sectionTitle.value) {
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L286)
      // translation_source_section:
      //   The title of the source section of the current translation, if it is a
      //   section translation. Applies only to events which relate to a specific
      //   translation or suggestion: all `editor_` and `publish_` events and some
      //   `dashboard_` events (e.g. `dashboard_start_translation`, `dashboard_delete_translation`).
      payload.translation_source_section = sectionTitle.value;
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L286)
      // translation_type:
      // 		description:
      // 			The type of translation or suggestion the user is interacting with.
      // 			Applies only to events which relate to a specific translation or
      // 			suggestion, including all `editor_` and `publish_` events and some
      // 			`dashboard_` events (e.g. `dashboard_start_translation`,
      // 			`dashboard_delete_translation`).
      //
      // 			`lead_section` means a translation of the first section of an article,
      // 			which will result in the creation of a new page except in the unusual case
      // 			that the user has chosen to translate a section that already exists (i.e.
      // 			where translation_target_exists).
      // 		status:
      // 			According to T374905, we can skip the "lead_section" value and only use
      // 			"article" and "section" values, depending on whether this is a page (lead section)
      // 			or a section translation.
      payload.translation_type = "section";
    } else {
      payload.translation_type = "article";
    }

    // if currentTranslation exists, this is a draft translation being continued
    if (currentTranslation.value) {
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L247)
      // translation_id:
      //   The ID used in the cx_translation MediaWiki table for the translation the
      //   user is currently interacting with. Omitted if it has not yet been
      //   generated or does not exist (as with section translations). Applies only
      //   to events which relate to a specific translation, including all `editor_`
      //   and `publish_` events and some `dashboard_` events (e.g.
      //   `dashboard_continue_translation`, `dashboard_delete_translation`).
      payload.translation_id = currentTranslation.value.translationId;

      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L324)
      // translation_target_title:
      // 		description: The title of the page in which the current translation has been or will be published.
      // 			Applies only to events which relate to a specific translation: all `editor_` and `publish_`
      // 			events and some `dashboard_` events (e.g. `dashboard_continue_translation`,
      // 			`dashboard_delete_translation`). Omitted if the user has not yet translated the title.
      // 		status:
      // 			We never omit setting the "translation_target_title" property, for draft
      // 			translations, even if the user has not translated it. This happens, because
      // 			draft translations inside database, always have a target title, which is set
      // 			to the source title, if no translation has been provided.
      payload.translation_target_title = currentTranslation.value.targetTitle;

      const targetSectionTitle = currentTranslation.value.targetSectionTitle;

      if (targetSectionTitle) {
        // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L315)
        //   translation_target_section:
        //   The title of the section in which the current translation has been or will
        //   be published, if it is a section translation. Applies only to events which
        //   relate to a specific translation or suggestion: all `editor_` and `publish_`
        //   events and some `dashboard_` events (e.g. `dashboard_start_translation`,
        //   `dashboard_delete_translation`). Omitted if the user has not yet translated the section title.
        payload.translation_target_section = targetSectionTitle;
      }
    } else if (currentTargetPage.value) {
      payload.translation_target_title = currentTargetPage.value?.title;
    }

    // we should wait for MT providers to be initialized, so that currentMTProvider is set
    if (currentMTProvider.value) {
      // DOCUMENTATION (https://github.com/wikimedia/schemas-event-secondary/blob/master/jsonschema/analytics/mediawiki/content_translation_event/1.4.0.yaml#L258)
      // translation_provider:
      //   The translation engine that is supplying the base text for new segments
      //   when the event occurs. When the editor is first opened, this will be the
      //   language default, but can change if the user chooses a different provider
      //   for a particular chunk or sets a new default.
      //
      //   `blank` and `source` are not real translation engines; `blank` means the
      //   user is starting with a blank segment and `source` means the user is
      //   starting with the untranslated source text.
      //
      //   Applies only to `editor_` and `publish_` events.
      payload.translation_provider =
        MTProviderGroup.getProviderForInstrumentation(currentMTProvider.value);
    }

    return payload;
  });

  /**
   * @returns {Promise}
   */
  const logEditorOpenEvent = () => {
    const currentWorkflowStep = router.currentRoute.value.meta.workflowStep;
    const routes = router.getRoutes();

    const previousRouteObject = routes.find(
      (route) => route.name === previousRoute.value
    );
    const previousRouteStep = previousRouteObject?.meta?.workflowStep || 0;

    // we should not log the event when user comes to "Pick a sentence" step from
    // "Edit a sentence" step or "Preview and publish" step. We should only log
    // the event when the user comes from "Confirm a translation", "Compare the
    // contents or "Quick tutorial" steps.
    if (currentWorkflowStep > previousRouteStep) {
      return logEvent({
        event_type: "editor_open",
        ...sharedPayload.value,
      });
    }

    return Promise.resolve();
  };

  const logEditorCloseEvent = () =>
    logEvent({
      event_type: "editor_close",
      ...sharedPayload.value,
    });

  const logEditorCloseWarnEvent = () =>
    logEvent({
      event_type: "editor_close_warn",
      ...sharedPayload.value,
    });

  const logEditorSegmentAddEvent = () =>
    logEvent({
      event_type: "editor_segment_add",
      ...sharedPayload.value,
    });

  return {
    logEditorOpenEvent,
    logEditorCloseEvent,
    logEditorCloseWarnEvent,
    logEditorSegmentAddEvent,
  };
};

export default useEditorInstrument;
