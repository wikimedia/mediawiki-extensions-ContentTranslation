import useSectionTranslationStart from "@/composables/useSectionTranslationStart";
import { useEventLogging } from "@/plugins/eventlogging";
import useURLHandler from "@/composables/useURLHandler";

const { getUrlParam } = useURLHandler();

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
  };
  const campaign = getUrlParam("campaign");

  return campaignEventSourcesMap[campaign];
};

/**
 * @return {(function({pageTitle: string, isDraftTranslation: boolean, sectionTitle: string|null}): Promise<void>)}
 */
const useUrlTranslationStart = () => {
  const startSectionTranslation = useSectionTranslationStart();
  const logEvent = useEventLogging();

  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: pageTitle,
  } = useURLHandler();

  return async () => {
    // If no campaign exists inside the URL, then the user
    // have preselected the page title inside the URL himself
    const eventSource = getEventSourceFromUrlCampaign() || "direct_preselect";

    logEvent({
      event_type: "dashboard_open",
      event_source: eventSource,
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
    });

    return startSectionTranslation(
      pageTitle.value,
      sourceLanguage.value,
      targetLanguage.value,
      eventSource
    );
  };
};

export { getEventSourceFromUrlCampaign, useUrlTranslationStart };
