import useEventLogging from "@/composables/useEventLogging";

// DOCUMENTATION: https://gitlab.wikimedia.org/repos/data-engineering/schemas-event-secondary/-/tree/master/jsonschema/analytics/mediawiki/content_translation_event#dashboard_tab_select

const useDashboardTabSelectInstrument = () => {
  const logEvent = useEventLogging();

  return (event) => {
    const tabsToEventSources = {
      draft: "dashboard_inprogress_tab",
      published: "dashboard_published_tab",
      suggestions: "dashboard_suggestions_tab",
    };

    return logEvent({
      event_type: "dashboard_tab_select",
      event_source: tabsToEventSources[event],
    });
  };
};

export default useDashboardTabSelectInstrument;
