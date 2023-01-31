import { getSuggestionListLanguagePairUpdater } from "@/composables/useLanguageHelper";
import { loadVEModules } from "@/plugins/ve";
import { useRouter } from "vue-router";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @param {Store} store
 * @param {Translation} translation
 * @return {(function(): Promise)}
 */
const useDraftTranslationStart = (store, translation) => async () => {
  const router = useRouter();
  const { currentSourcePage, sourceLanguage, targetLanguage } = useApplicationState(store);

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
    const updateLanguagePair = getSuggestionListLanguagePairUpdater(store);
    updateLanguagePair(
        translationSourceLanguage,
        translationTargetLanguage
    );
  }
  store.dispatch(
      "application/restoreSectionTranslation",
      translation
  );

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

  const section = currentSourcePage.value.getSectionByTitle(
      translation.sourceSectionTitle
  );

  store.commit("application/setCurrentSourceSection", section);
  router.push({ name: "sx-sentence-selector", params: { force: true } });
};

export default useDraftTranslationStart
