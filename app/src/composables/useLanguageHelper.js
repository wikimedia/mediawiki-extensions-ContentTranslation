import useApplicationState from "@/composables/useApplicationState";
import { siteMapper } from "@/utils/mediawikiHelper";
import useURLHandler from "@/composables/useURLHandler";
import { useStore } from "vuex";
import useSuggestionsInitialize from "@/composables/useSuggestionsInitialize";
import useSuggestionLoad from "@/composables/useSuggestionLoad";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";

/**
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string|null} articleTitle
 * @param {string|null} sectionTitle
 * @param {object} extra
 * @return {boolean} a boolean indicating whether redirection is needed
 */
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

    return true;
  }

  return false;
};
const { setLanguageURLParams } = useURLHandler();

const setLanguagePair = (store, sourceLanguage, targetLanguage) => {
  store.commit("application/setSourceLanguage", sourceLanguage);
  store.commit("application/setTargetLanguage", targetLanguage);

  setLanguageURLParams(sourceLanguage, targetLanguage);

  mw.storage.set("cxSourceLanguage", sourceLanguage);
  mw.storage.set("cxTargetLanguage", targetLanguage);
};

const useSuggestionListLanguagePairUpdate = () => {
  const store = useStore();
  const initializeSuggestions = useSuggestionsInitialize();

  return (newSourceLanguage, newTargetLanguage) => {
    const { sourceLanguage, targetLanguage } = useApplicationState(store);

    // If newly selected target language is same as source language, swap languages
    if (newSourceLanguage === newTargetLanguage) {
      newSourceLanguage = targetLanguage.value;
      newTargetLanguage = sourceLanguage.value;
    }

    const redirectionNeeded = redirectToTargetWikiIfNeeded(
      newSourceLanguage,
      newTargetLanguage,
      null,
      null
    );

    if (!redirectionNeeded) {
      setLanguagePair(store, newSourceLanguage, newTargetLanguage);
      initializeSuggestions();
    }
  };
};

const useDraftTranslationLanguagePairUpdate = () => {
  const store = useStore();
  const initializeSuggestions = useSuggestionsInitialize();

  return /** @param {Translation} translation */ (translation) => {
    const { sourceLanguage, targetLanguage, sourceTitle, sourceSectionTitle } =
      translation;

    const redirectionNeeded = redirectToTargetWikiIfNeeded(
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      sourceSectionTitle,
      { draft: true }
    );

    if (!redirectionNeeded) {
      setLanguagePair(store, sourceLanguage, targetLanguage);
      initializeSuggestions();
    }
  };
};

/**
 * @return {(function(PublishedTranslation): void)}
 */
const usePublishedTranslationLanguagePairUpdate = () => {
  const store = useStore();

  return (publishedTranslation) => {
    const { sourceLanguage, targetLanguage, sourceTitle } =
      publishedTranslation;

    const redirectionNeeded = redirectToTargetWikiIfNeeded(
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      null
    );

    if (!redirectionNeeded) {
      setLanguagePair(store, sourceLanguage, targetLanguage);
    }
  };
};

const useArticleLanguagePairUpdate = () => {
  const store = useStore();
  const loadSuggestion = useSuggestionLoad();
  const { currentLanguageTitleGroup, targetPageExists } =
    useLanguageTitleGroup();

  return async (newSourceLanguage, newTargetLanguage) => {
    const {
      sourceLanguageURLParameter: sourceLanguage,
      targetLanguageURLParameter: targetLanguage,
      setPageURLParam,
      clearSectionURLParameter,
    } = useURLHandler();

    // If newly selected target language is same as source language, swap languages
    if (newSourceLanguage === newTargetLanguage) {
      newSourceLanguage = targetLanguage.value;
      newTargetLanguage = sourceLanguage.value;
    }

    const newSourceTitle =
      currentLanguageTitleGroup.value.getTitleForLanguage(newSourceLanguage);

    const redirectionNeeded = redirectToTargetWikiIfNeeded(
      newSourceLanguage,
      newTargetLanguage,
      newSourceTitle,
      null
    );

    if (!redirectionNeeded) {
      setLanguagePair(store, newSourceLanguage, newTargetLanguage);
      setPageURLParam(newSourceTitle);

      if (targetPageExists.value) {
        // if section title is already selected, clear it, as we
        // cannot map the old section titles to the new ones.
        // The user should select the section manually, in the
        // following steps
        clearSectionURLParameter();

        /** @type {SectionSuggestion|null} */
        await loadSuggestion(
          sourceLanguage.value,
          targetLanguage.value,
          newSourceTitle
        );
      } else {
        await store.dispatch("mediawiki/fetchPageMetadata", {
          language: sourceLanguage.value,
          titles: [newSourceTitle],
        });
      }

      store.dispatch("application/getCXServerToken");
    }
  };
};

export {
  redirectToTargetWikiIfNeeded,
  setLanguagePair,
  useArticleLanguagePairUpdate,
  useSuggestionListLanguagePairUpdate,
  useDraftTranslationLanguagePairUpdate,
  usePublishedTranslationLanguagePairUpdate,
};
