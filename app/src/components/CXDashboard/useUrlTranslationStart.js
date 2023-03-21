import startSectionTranslation from "@/composables/useSectionTranslationStart";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @return {string|undefined} the event source based on the "campaign" URL param
 */
const getEventSourceFromUrlCampaign = () => {
  const campaignEventSourcesMap = {
    mflanguagesearcher: "content_language_selector",
    mfrecenttranslation: "recent_translation",
    mfrecentedit: "recent_edit",
    mffrequentlanguages: "frequent_languages",
    newbytranslationmobile: "invite_new_article_creation",
    specialcontribute: "contributions_page",
    publishingfollowup: "followup_after_publishing",
  };
  const urlParams = new URLSearchParams(location.search);
  const campaign = urlParams.get("campaign");

  return campaignEventSourcesMap[campaign];
};

/**
 * @param {VueRouter} router
 * @param {Store} store
 * @param {function} logEvent
 * @param {string} pageTitle
 */
const startSectionTranslationFromUrl = (router, store, logEvent, pageTitle) => {
  // If no campaign exists inside the URL, then the user
  // have preselected the page title inside the URL himself
  const eventSource = getEventSourceFromUrlCampaign() || "direct_preselect";
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  logEvent({
    event_type: "dashboard_open",
    event_source: eventSource,
    content_translation_session_position: 0,
    translation_source_language: sourceLanguage.value,
    translation_target_language: targetLanguage.value,
  });
  startSectionTranslation(router, store, pageTitle, "dashboard", eventSource);
};

export default startSectionTranslationFromUrl;
