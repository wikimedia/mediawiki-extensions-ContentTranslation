import startSectionTranslation from "@/composables/useSectionTranslationStart";
import { logEvent } from "@/plugins/eventlogging";

const getEventSourceFromUrlCampaign = () => {
  const urlParams = new URLSearchParams(location.search);
  const campaign = urlParams.get("campaign");

  if (campaign === "mflanguagesearcher") {
    return "content_language_selector";
  }

  return null;
};

const startSectionTranslationFromUrl = pageTitle => {
  const eventSource = getEventSourceFromUrlCampaign() || "direct_preselect";
  logEvent({
    event_type: "dashboard_open",
    event_source: eventSource,
    content_translation_session_position: 0
  });
  startSectionTranslation(pageTitle, "dashboard", eventSource);
};

export default startSectionTranslationFromUrl;
