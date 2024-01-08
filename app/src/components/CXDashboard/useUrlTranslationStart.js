import useSectionTranslationStart from "@/composables/useSectionTranslationStart";
import useDraftTranslationStart from "./useDraftTranslationStart";
import useApplicationState from "@/composables/useApplicationState";
import useTranslationsFetch from "@/composables/useTranslationsFetch";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";

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
  const urlParams = new URLSearchParams(location.search);
  const campaign = urlParams.get("campaign");

  return campaignEventSourcesMap[campaign];
};

/**
 * @return {(function({pageTitle: string, isDraftTranslation: boolean, sectionTitle: string|null}): Promise<void>)}
 */
const useUrlTranslationStart = () => {
  const store = useStore();
  const startSectionTranslation = useSectionTranslationStart();
  const logEvent = useEventLogging();
  const startDraftTranslation = useDraftTranslationStart();
  const { fetchAllTranslations } = useTranslationsFetch();

  /**
   * @param {string} pageTitle
   * @param {boolean} isDraftTranslation
   * @param {string|null} sectionTitle
   */
  return async ({ pageTitle, isDraftTranslation, sectionTitle }) => {
    // If no campaign exists inside the URL, then the user
    // have preselected the page title inside the URL himself
    const eventSource = getEventSourceFromUrlCampaign() || "direct_preselect";
    const { sourceLanguage, targetLanguage } = useApplicationState(store);

    logEvent({
      event_type: "dashboard_open",
      event_source: eventSource,
      translation_source_language: sourceLanguage.value,
      translation_target_language: targetLanguage.value,
    });

    if (isDraftTranslation) {
      await fetchAllTranslations();

      const translation = store.getters["translator/getDraftTranslation"](
        pageTitle,
        sectionTitle,
        sourceLanguage.value,
        targetLanguage.value
      );

      if (!translation) {
        return;
      }
      startDraftTranslation(translation);
    } else {
      startSectionTranslation(pageTitle, eventSource);
    }
  };
};

export { getEventSourceFromUrlCampaign, useUrlTranslationStart };
