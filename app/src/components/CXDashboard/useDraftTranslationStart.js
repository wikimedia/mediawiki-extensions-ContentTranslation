import { useDraftTranslationLanguagePairUpdate } from "@/composables/useLanguageHelper";
import { useRouter } from "vue-router";
import useApplicationState from "@/composables/useApplicationState";
import { useEventLogging } from "@/plugins/eventlogging";
import { useStore } from "vuex";
import translatorApi from "@/wiki/cx/api/translator";
import translationRestorer from "@/utils/translationRestorer";
import useDevice from "@/composables/useDevice";
import useCXRedirect from "@/composables/useCXRedirect";
import { siteMapper } from "@/utils/mediawikiHelper";
import useContentReferencesResolve from "@/composables/useContentReferencesResolve";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import usePageContentFetch from "@/composables/usePageContentFetch";
import useURLHandler from "@/composables/useURLHandler";
import useLanguageTitlesFetch from "@/composables/useLanguageTitlesFetch";
import useCurrentPages from "@/composables/useCurrentPages";

/**
 * @return {(function(DraftTranslation): Promise<void>)}
 */
const useDraftTranslationStart = () => {
  const logEvent = useEventLogging();
  const store = useStore();
  const router = useRouter();
  const { currentSourcePage } = useCurrentPages();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);
  const updateLanguagePair = useDraftTranslationLanguagePairUpdate();
  const resolvePageContentReferences = useContentReferencesResolve();

  const { isDesktop } = useDevice();
  const redirectToCX = useCXRedirect();
  const fetchPageContent = usePageContentFetch();
  const { sourceSection } = useCurrentPageSection();
  const fetchLanguageTitles = useLanguageTitlesFetch();

  /**
   * @param {DraftTranslation} translation
   * @return {(function(): Promise)}
   */
  return async (translation) => {
    store.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: translationSourceLanguage,
      targetLanguage: translationTargetLanguage,
      sourceTitle,
      targetTitle,
      pageRevision,
      isLeadSectionTranslation,
    } = translation;

    if (isDesktop.value) {
      const extra = {};

      if (!isLeadSectionTranslation) {
        extra.sourcesection = translation.sourceSectionTitle;
      }
      redirectToCX(
        sourceLanguage.value,
        targetLanguage.value,
        sourceTitle,
        extra
      );

      return;
    }

    siteMapper.unsetCXToken(
      translationSourceLanguage,
      translationTargetLanguage,
      sourceTitle
    );

    const { setTranslationURLParams } = useURLHandler();
    setTranslationURLParams(translation);
    router.push({ name: "sx-sentence-selector", query: { force: true } });

    if (
      sourceLanguage.value !== translationSourceLanguage ||
      targetLanguage.value !== translationTargetLanguage
    ) {
      updateLanguagePair(translation);
    }

    store.dispatch("application/getCXServerToken");
    store.commit("application/setCurrentTranslation", translation);

    logEvent({
      event_type: "dashboard_translation_continue",
      translation_id: translation.sectionTranslationId,
      translation_source_language: sourceLanguage.value,
      translation_source_title: sourceTitle,
      translation_source_section: translation.sourceSectionTitle,
      translation_target_language: targetLanguage.value,
      translation_target_title: translation.targetTitle,
      translation_target_section: translation.targetSectionTitle,
    });

    await fetchPageContent(
      sourceLanguage.value,
      targetLanguage.value,
      sourceTitle,
      pageRevision
    );

    // Asynchronously resolve references and update page sections to
    // include this resolved references
    await resolvePageContentReferences(sourceLanguage.value, sourceTitle);

    // TODO: Remove once confirmation step is introduced for draft translations
    await fetchLanguageTitles(sourceLanguage.value, sourceTitle);

    if (!translation.restored) {
      await translatorApi
        .fetchTranslationUnits(translation.translationId)
        .then((translationUnits) =>
          translationRestorer.restoreCorporaDraft(
            currentSourcePage.value,
            targetTitle,
            targetLanguage,
            translationUnits
          )
        )
        .then(() => (translation.restored = true));
    }

    let sectionTitleTranslation;

    if (translation.isLeadSectionTranslation) {
      // initialize the original title, so that we can restore the draft section/article title
      // this is NOT needed for non-lead sections as the original title is already populated
      sourceSection.value.originalTitle = translation.sourceTitle;
      sectionTitleTranslation = translation.targetTitle;
    } else {
      sectionTitleTranslation = translation.targetSectionTitle;
    }
    sourceSection.value.translatedTitle = sectionTitleTranslation;

    store.commit("application/decreaseTranslationDataLoadingCounter");
  };
};

export default useDraftTranslationStart;
