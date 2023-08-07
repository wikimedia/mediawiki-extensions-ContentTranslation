import useMediawikiState from "@/composables/useMediawikiState";
import useApplicationState from "@/composables/useApplicationState";
import { getInitialLanguagePair } from "@/utils/getInitialLanguagePair";
import { siteMapper } from "@/utils/mediawikiHelper";
import store from "@/store";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import { replaceUrl } from "@/utils/urlHandler";
import { useStore } from "vuex";

const redirectToTargetWikiIfNeeded = (
  sourceLanguage,
  targetLanguage,
  articleTitle,
  sectionTitle,
  extra = {}
) => {
  const translateInTarget = mw.config.get(
    "wgContentTranslationTranslateInTarget"
  );
  const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();

  if (translateInTarget && targetLanguage !== wikiLanguage) {
    extra = { sx: true, ...extra };

    if (sectionTitle) {
      extra.section = sectionTitle;
    }
    location.href = siteMapper.getCXUrl(
      articleTitle,
      null,
      sourceLanguage,
      targetLanguage,
      extra
    );
  }
};

const setLanguagePair = (store, sourceLanguage, targetLanguage) => {
  store.commit("application/setSourceLanguage", sourceLanguage);
  store.commit("application/setTargetLanguage", targetLanguage);

  if (!history.pushState) {
    return;
  }
  const params = new URLSearchParams(location.search);
  params.set("from", sourceLanguage);
  params.set("to", targetLanguage);
  params.delete("title");
  replaceUrl(Object.fromEntries(params));
};

const initializeLanguages = async () => {
  await store.dispatch("mediawiki/fetchSupportedLanguageCodes");
  const { enabledTargetLanguages, supportedLanguageCodes } =
    useMediawikiState();

  const { sourceLanguage, targetLanguage } = getInitialLanguagePair(
    enabledTargetLanguages.value,
    supportedLanguageCodes.value
  );

  const urlParams = new URLSearchParams(location.search);

  const urlSourceArticleTitle = urlParams.get("page");
  const urlSourceSectionTitle = urlParams.get("section");
  redirectToTargetWikiIfNeeded(
    sourceLanguage,
    targetLanguage,
    urlSourceArticleTitle,
    urlSourceSectionTitle
  );
  setLanguagePair(store, sourceLanguage, targetLanguage);
};

const getSuggestionListLanguagePairUpdater =
  (store) => (newSourceLanguage, newTargetLanguage) => {
    const { sourceLanguage, targetLanguage } = useApplicationState(store);

    // If newly selected target language is same as source language, swap languages
    if (newSourceLanguage === newTargetLanguage) {
      newSourceLanguage = targetLanguage.value;
      newTargetLanguage = sourceLanguage.value;
    }

    redirectToTargetWikiIfNeeded(
      newSourceLanguage,
      newTargetLanguage,
      null,
      null
    );

    setLanguagePair(store, newSourceLanguage, newTargetLanguage);

    store.dispatch("suggestions/initializeSuggestions");
  };

const useDraftTranslationLanguagePairUpdater = () => {
  const store = useStore();

  return /** @param {Translation} translation */ (translation) => {
    const { sourceLanguage, targetLanguage, sourceTitle, sourceSectionTitle } =
      translation;

    redirectToTargetWikiIfNeeded(
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      sourceSectionTitle,
      { draft: true }
    );

    setLanguagePair(store, sourceLanguage, targetLanguage);

    store.dispatch("suggestions/initializeSuggestions");
  };
};

const getArticleLanguagePairUpdater =
  (store) => async (newSourceLanguage, newTargetLanguage) => {
    const { sourceLanguage, targetLanguage, currentSectionSuggestion } =
      useApplicationState(store);

    // If newly selected target language is same as source language, swap languages
    if (newSourceLanguage === newTargetLanguage) {
      newSourceLanguage = targetLanguage.value;
      newTargetLanguage = sourceLanguage.value;
    }

    const languageTitleGroup =
      store.getters["application/getCurrentLanguageTitleGroup"];
    const sourceTitle =
      languageTitleGroup.getTitleForLanguage(newSourceLanguage);

    redirectToTargetWikiIfNeeded(
      newSourceLanguage,
      newTargetLanguage,
      sourceTitle,
      null
    );

    setLanguagePair(store, newSourceLanguage, newTargetLanguage);

    let suggestion = new SectionSuggestion({
      sourceLanguage: sourceLanguage.value,
      targetLanguage: targetLanguage.value,
      sourceTitle,
      missing: {},
    });

    if (languageTitleGroup.hasLanguage(targetLanguage.value)) {
      suggestion = await store.dispatch(
        "suggestions/loadSectionSuggestion",
        suggestion
      );
    }

    store.dispatch("application/initializeSectionTranslation", suggestion);
  };

export {
  initializeLanguages,
  getArticleLanguagePairUpdater,
  getSuggestionListLanguagePairUpdater,
  useDraftTranslationLanguagePairUpdater,
};
