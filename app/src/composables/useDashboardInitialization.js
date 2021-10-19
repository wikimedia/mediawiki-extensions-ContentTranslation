import store from "@/store";
import { getInitialLanguagePair } from "@/utils/getInitialLanguagePair";
import { siteMapper } from "@/utils/mediawikiHelper";
import useMediawikiState from "@/composables/useMediawikiState";
import useApplicationState from "@/composables/useApplicationState";

const initializeLanguages = () => {
  const {
    enabledTargetLanguages,
    supportedLanguageCodes
  } = useMediawikiState();

  const { sourceLanguage, targetLanguage } = getInitialLanguagePair(
    enabledTargetLanguages.value,
    supportedLanguageCodes.value
  );

  const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();
  const translateInTarget = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  );

  if (translateInTarget && targetLanguage !== wikiLanguage) {
    const urlParams = new URLSearchParams(location.search);

    const urlSourceArticleTitle = urlParams.get("page");
    const urlSourceSectionTitle = urlParams.get("section");

    window.location.href = siteMapper.getCXUrl(
      urlSourceArticleTitle,
      null,
      sourceLanguage,
      targetLanguage,
      { sx: true, section: urlSourceSectionTitle }
    );
  }

  store.commit("application/setSourceLanguage", sourceLanguage);
  store.commit("application/setTargetLanguage", targetLanguage);
};

/**
 * @return {Promise<SectionSuggestion|null>}
 */
const loadSectionSuggestionFromUrl = async () => {
  const urlParams = new URLSearchParams(location.search);
  const isSectionTranslation = urlParams.get("sx");
  const sourceTitle = urlParams.get("page");
  const { sourceLanguage, targetLanguage } = useApplicationState();

  if (!isSectionTranslation || !sourceTitle) {
    return null;
  }

  return await store.dispatch("suggestions/loadSectionSuggestion", {
    sourceLanguage: sourceLanguage.value,
    targetLanguage: targetLanguage.value,
    sourceTitle
  });
};

const initializeDashboard = async router => {
  await store.dispatch("mediawiki/fetchSupportedLanguageCodes");
  initializeLanguages();
  /** @type {SectionSuggestion|null} */
  const suggestion = await loadSectionSuggestionFromUrl();

  if (suggestion) {
    store.dispatch("application/initializeSectionTranslation", suggestion);
    router.push({
      name: "sx-translation-confirmer",
      params: { previousRoute: "dashboard" }
    });

    return;
  }

  await store.dispatch("suggestions/fetchFavorites");
  await store.dispatch("translator/fetchTranslations");
  store.dispatch("suggestions/initializeSuggestions");
};

export default initializeDashboard;
