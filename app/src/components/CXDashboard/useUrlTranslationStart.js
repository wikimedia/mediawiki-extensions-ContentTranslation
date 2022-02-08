import startSectionTranslation from "@/composables/useSectionTranslationStart";
import { logEvent } from "@/plugins/eventlogging";

/**
 * @return {string|undefined} the event source based on the "campaign" URL param
 */
const getEventSourceFromUrlCampaign = () => {
  const campaignEventSourcesMap = {
    mflanguagesearcher: "content_language_selector",
    mfrecenttranslation: "recent_translation",
    mfrecentedit: "recent_edit",
    mffrequentlanguages: "frequent_languages"
  };
  const urlParams = new URLSearchParams(location.search);
  const campaign = urlParams.get("campaign");

  return campaignEventSourcesMap[campaign];
};

const startSectionTranslationFromUrl = pageTitle => {
  // If no campaign exists inside the URL, then the user
  // have preselected the page title inside the URL himself
  const eventSource = getEventSourceFromUrlCampaign() || "direct_preselect";
  logEvent({
    event_type: "dashboard_open",
    event_source: eventSource,
    content_translation_session_position: 0
  });
  startSectionTranslation(pageTitle, "dashboard", eventSource);
};

export default startSectionTranslationFromUrl;
