import useSectionTranslationStart from "@/composables/useSectionTranslationStart";
import useDraftTranslationStart from "./useDraftTranslationStart";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import { useEventLogging } from "@/plugins/eventlogging";

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
 * @return {(function({pageTitle: string, isDraftTranslation: boolean, sectionTitle: string|null}): Promise<void>)}
 */
const useUrlTranslationStart = () => {
  const store = useStore();
  const startSectionTranslation = useSectionTranslationStart();
  const logEvent = useEventLogging();
  const startDraftTranslation = useDraftTranslationStart();

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
      try {
        // If translations have already been fetched, then skip
        if (!store.state.translator.translations.length) {
          await store.dispatch("translator/fetchTranslations");
          const translation = store.getters["translator/getTranslation"](
            pageTitle,
            sectionTitle,
            sourceLanguage.value,
            targetLanguage.value
          );

          if (!translation) {
            return;
          }
          startDraftTranslation(translation);
        }
      } catch (error) {
        // Let translation fetching gracefully fail
        mw.log.error("[CX] Error while fetching translations", error);
      }
    } else {
      startSectionTranslation(pageTitle, "dashboard", eventSource);
    }
  };
};

export { getEventSourceFromUrlCampaign, useUrlTranslationStart };
