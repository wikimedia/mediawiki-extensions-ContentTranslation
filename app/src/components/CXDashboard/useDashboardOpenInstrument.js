import useURLHandler from "@/composables/useURLHandler";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import useFiltersValidator from "@/composables/useFiltersValidator";
import useEventLogging from "@/composables/useEventLogging";

const useDashboardOpenInstrument = () => {
  const store = useStore();
  const {
    getUrlParam,
    pageURLParameter,
    currentSuggestionFilters,
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();
  const { isDefaultFilter } = useFiltersValidator();
  const { previousRoute } = useApplicationState(store);
  const logEvent = useEventLogging();

  /**
   * @return {string|undefined} the event source based on the "campaign" URL param
   */
  const getEventSourceFromUrlCampaign = () => {
    const campaignEventSourcesMap = {
      ulsmissinglanguages: "content_language_selector",
      mflanguagesearcher: "content_language_selector",
      mfrecenttranslation: "recent_translation",
      mfrecentedit: "recent_edit",
      mffrequentlanguages: "frequent_languages",
      newbytranslationmobile: "invite_new_article_creation",
      specialcontribute: "contributions_page",
      publishingfollowup: "followup_after_publishing",
      ulsaddlanguages: "language_selector_options",
      mintforreaders: "preselect_mint_for_readers",
      articleplaceholder: "article_placeholder",
    };
    const campaign = getUrlParam("campaign");

    return campaignEventSourcesMap[campaign];
  };

  const getEventSource = () => {
    // dashboard is opened with a prefilled URL page
    if (!!pageURLParameter.value) {
      return getEventSourceFromUrlCampaign() || "direct_preselect";
    }

    const navigationEventSources = {
      "sx-article-search": "return_from_search",
      "sx-translation-confirmer": "return_from_confirmation",
      "sx-section-selector": "return_from_section_selection",
      "sx-sentence-selector": "editor_close",
    };

    const navigationEventSource = navigationEventSources[previousRoute.value];

    if (navigationEventSource) {
      return navigationEventSource;
    }

    if (!isDefaultFilter(currentSuggestionFilters.value)) {
      return "suggestion_filter_direct_preselect";
    }

    return getEventSourceFromUrlCampaign() || "direct";
  };

  const logDashboardOpenEvent = () => {
    const eventSource = getEventSource();

    const payload = {
      event_type: "dashboard_open",
      event_source: eventSource,
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
    };

    // only set event source here, when dashboard is accessed with non-default pre-selected filters
    if (eventSource === "suggestion_filter_direct_preselect") {
      // filter validator guarantees that filter id will always be set
      payload.event_context = currentSuggestionFilters.value.id;
    }

    return logEvent(payload);
  };

  return { logDashboardOpenEvent, getEventSource };
};

export default useDashboardOpenInstrument;
