import useApplicationState from "@/composables/useApplicationState";
import useURLHandler from "@/composables/useURLHandler";
import { useStore } from "vuex";
import usePageMetadataFetch from "@/composables/usePageMetadataFetch";
import useSuggestionsInitialize from "@/composables/useSuggestionsInitialize";
import useSuggestionLoad from "@/composables/useSuggestionLoad";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";

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

    setLanguagePair(store, newSourceLanguage, newTargetLanguage);
    initializeSuggestions();
  };
};

const useArticleLanguagePairUpdate = () => {
  const store = useStore();
  const loadSuggestion = useSuggestionLoad();
  const { currentLanguageTitleGroup, targetPageExists } =
    useLanguageTitleGroup();
  const fetchPageMetadata = usePageMetadataFetch();

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
      await fetchPageMetadata(sourceLanguage.value, [newSourceTitle]);
    }
  };
};

export {
  setLanguagePair,
  useArticleLanguagePairUpdate,
  useSuggestionListLanguagePairUpdate,
};
