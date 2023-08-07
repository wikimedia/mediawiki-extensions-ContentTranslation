import { useDraftTranslationLanguagePairUpdater } from "@/composables/useLanguageHelper";
import { loadVEModules } from "@/plugins/ve";
import { useRouter } from "vue-router";
import useApplicationState from "@/composables/useApplicationState";
import { useEventLogging } from "@/plugins/eventlogging";
import { useStore } from "vuex";
import translatorApi from "@/wiki/cx/api/translator";
import translationRestorer from "@/utils/translationRestorer";
import useDevice from "@/composables/useDevice";
import useCXRedirect from "@/composables/useCXRedirect";

/**
 * @return {(function(Translation): Promise<void>)}
 */
const useDraftTranslationStart = () => {
  const logEvent = useEventLogging();
  const store = useStore();
  const router = useRouter();
  const {
    currentSourcePage,
    currentTargetPage,
    sourceLanguage,
    targetLanguage,
  } = useApplicationState(store);
  const updateLanguagePair = useDraftTranslationLanguagePairUpdater();

  const { isDesktop } = useDevice();
  const redirectToCX = useCXRedirect();

  const prepareDraftTranslation = async (translation) => {
    store.commit("application/increaseTranslationDataLoadingCounter");
    const {
      sourceLanguage: translationSourceLanguage,
      targetLanguage: translationTargetLanguage,
      sourceTitle,
      pageRevision,
    } = translation;

    if (isDesktop.value) {
      redirectToCX(sourceLanguage.value, targetLanguage.value, sourceTitle);

      return;
    }

    if (
      sourceLanguage.value !== translationSourceLanguage ||
      targetLanguage.value !== translationTargetLanguage
    ) {
      updateLanguagePair(translation);
    }

    store.dispatch("application/restoreSectionTranslation", translation);

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

    await store.dispatch("mediawiki/fetchPageContent", {
      sourceLanguage: sourceLanguage.value,
      targetLanguage: targetLanguage.value,
      sourceTitle,
      revision: pageRevision,
    });

    // Asynchronously resolve references and update page sections to
    // include this resolved references
    await loadVEModules();
    await store.dispatch("mediawiki/resolvePageContentReferences", {
      sourceLanguage: sourceLanguage.value,
      sourceTitle,
    });

    if (!translation.restored) {
      await translatorApi
        .fetchTranslationUnits(translation.translationId)
        .then((translationUnits) =>
          translationRestorer.restoreCorporaDraft(
            currentSourcePage.value,
            currentTargetPage.value,
            translationUnits
          )
        )
        .then(() => (translation.restored = true));
    }

    let section;
    let sectionTitleTranslation;

    if (translation.isLeadSectionTranslation) {
      section = currentSourcePage.value.leadSection;
      // initialize the original title, so that we can restore the draft section/article title
      // this is not needed for non-lead sections as the original title is already populated
      section.originalTitle = translation.sourceTitle;
      sectionTitleTranslation = translation.targetTitle;
    } else {
      section = currentSourcePage.value.getSectionByTitle(
        translation.sourceSectionTitle
      );
      sectionTitleTranslation = translation.targetSectionTitle;
    }

    store.commit("application/setCurrentSourceSection", section);
    // initialize the translated title, so that we can restore the draft section/article title
    store.commit(
      "application/setCurrentSourceSectionTitleTranslation",
      sectionTitleTranslation
    );
    store.commit("application/decreaseTranslationDataLoadingCounter");
  };

  /**
   * @param {Translation} translation
   * @return {(function(): Promise)}
   */
  return async (translation) => {
    prepareDraftTranslation(translation);
    router.push({ name: "sx-sentence-selector", query: { force: true } });
  };
};

export default useDraftTranslationStart;
