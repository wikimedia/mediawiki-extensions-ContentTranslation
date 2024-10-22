import useURLHandler from "@/composables/useURLHandler";
import { ref } from "vue";
import useEventLogging from "@/composables/useEventLogging";

// DOCUMENTATION: https://github.com/wikimedia/schemas-event-secondary/tree/master/jsonschema/analytics/mediawiki/content_translation_event#dashboard_translation_start

// Possible event sources:

// 1. continue_published:
// 		description: the user chooses to continue a translation that they previously published (article translation only)
// 		status: SUPPORTED. Used for all translations started from a published translation in dashboard. Not only article translations.
// 2. direct_preselect:
// 		description: the user input a URL or followed a link which specified the translation
// 		status: SUPPORTED. Used when user visits a SX URL with language pair, source title and (optionally) section title pre-filled
// 3. for_later:
// 		description: the user chooses a translation which they had previously saved for later
// 		status: SUPPORTED. Used when user selects a bookmarked suggestion to translate
// 4. invite_translate_another_section:
// 		description: the user chooses a translation which they had previously saved for later
// 		status: SUPPORTED. Used when user selects a bookmarked suggestion to translate
// 4. invite_translate_another_section
// 		description: (not provided in docs)
// 		status: SUPPORTED. This event source seems a duplicate of "followup_after_publishing" event source, which is the one that we actually support.
// 5. suggestion_featured:
// 		description: the user chooses a translation suggested because it is a featured article in the source language
// 		status: NOT SUPPORTED. The concept of featured suggestion is not yet supported in SX/Unified Dashboard
// 6. suggestion_nearby:
// 		description: the user chose a translation suggested because the topic is near their location
// 		status: SUPPORTED. Used when user selects a nearby suggestion inside "Search for an article" screen
// 7. suggestion_no_seed:
// 		description: the user chooses a translation suggested by the API in the absence of a seed article
// 		status: SUPPORTED. Right now used for all translations started from dashboard suggestion lists. Should be updated once suggestion filters are introduced.
// 8. suggestion_recent_edit:
// 		description: the user chooses a translation suggested because it is related to one of their recent edits or translation
// 		status: SUPPORTED. Right now used when user selects a previous edited page to translate inside "Search for an article" screen.
// 		Once suggestion filters are introduced should be also used for suggestions based on previous edit seeds.
// 9. suggestion_topic_area:
// 		description: the user chooses a translation suggested because its topic is within an area the user has requested
// 		status: NOT SUPPORTED. Needs to be supported once topic filters are introduced.
// 10. search_result:
// 		description: the user chooses a translation that appeared in the results of a search
// 		status: SUPPORTED. Used when a search result suggestion is selected, inside "Search for an article" screen.

const startTranslationEventSource = ref(null);
const startTranslationEventContext = ref(null);

const setStartTranslationEventSource = (eventSource) => {
  startTranslationEventSource.value = eventSource;
};

const setStartTranslationEventContext = (eventContext) => {
  startTranslationEventContext.value = eventContext;
};

const useDashboardTranslationStartInstrument = () => {
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
    sectionURLParameter: sourceSectionTitle,
  } = useURLHandler();

  const logEvent = useEventLogging();

  /**
   * @returns {Promise}
   */
  const logDashboardTranslationStartEvent = () => {
    const payload = {
      event_type: "dashboard_translation_start",
      event_source: startTranslationEventSource.value,
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
      translation_source_title: sourceTitle.value,
      // translation_target_exists:
      // 	description:
      // 		Whether the target article or section already exists. Applies only to
      // 		events which relate to a specific translation or suggestion: all `editor_`
      // 		and `publish_` events and some `dashboard_` events (e.g. `dashboard_start_translation`,
      // 		`dashboard_delete_translation`). In section translation, if the user discards the mapping
      // 		to an existing target section, the value should change to false in future events.
      // 	status:
      // 		Currently, we do not support "override page/section" functionality, and thus this property is not
      // 		yet required, translation_target_exists
    };

    if (startTranslationEventContext.value) {
      payload.event_context = startTranslationEventContext.value;
    }

    // if section title URL param is set, this is a section translation
    if (sourceSectionTitle.value) {
      payload.translation_source_section = sourceSectionTitle.value;
      payload.translation_type = "section";
    } else {
      payload.translation_type = "article";
    }

    return logEvent(payload);
  };

  return {
    logDashboardTranslationStartEvent,
    setStartTranslationEventSource,
    setStartTranslationEventContext,
  };
};

export default useDashboardTranslationStartInstrument;
