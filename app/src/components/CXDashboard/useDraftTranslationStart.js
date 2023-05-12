import { getSuggestionListLanguagePairUpdater } from "@/composables/useLanguageHelper";
import { loadVEModules } from "@/plugins/ve";
import { useRouter } from "vue-router";
import useApplicationState from "@/composables/useApplicationState";
import { useEventLogging } from "@/plugins/eventlogging";
import { useStore } from "vuex";

/**
 * @param {Translation} translation
 * @return {(function(): Promise)}
 */
const useDraftTranslationStart = (translation) => {
  const logEvent = useEventLogging();
  const store = useStore();
  const router = useRouter();
  const { currentSourcePage, sourceLanguage, targetLanguage } =
    useApplicationState(store);
  const updateLanguagePair = getSuggestionListLanguagePairUpdater(store);

  return async () => {
    const {
      sourceLanguage: translationSourceLanguage,
      targetLanguage: translationTargetLanguage,
      sourceTitle,
      pageRevision,
    } = translation;

    if (
      sourceLanguage.value !== translationSourceLanguage ||
      targetLanguage.value !== translationTargetLanguage
    ) {
      updateLanguagePair(translationSourceLanguage, translationTargetLanguage);
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

    let section;

    if (translation.isLeadSectionTranslation) {
      section = currentSourcePage.value.leadSection;
      // initialize the original title, so that we can restore the draft section/article title
      // this is not needed for non-lead sections as the original title is already populated
      section.originalTitle = translation.sourceTitle;
    } else {
      section = currentSourcePage.value.getSectionByTitle(
        translation.sourceSectionTitle
      );
    }

    store.commit("application/setCurrentSourceSection", section);
    // initialize the translated title, so that we can restore the draft section/article title
    store.commit(
      "application/setCurrentSourceSectionTitleTranslation",
      translation.targetSectionTitle || translation.targetTitle
    );
    router.push({ name: "sx-sentence-selector", query: { force: true } });
  };
};

export default useDraftTranslationStart;
