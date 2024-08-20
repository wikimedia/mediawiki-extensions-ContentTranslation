import { useStore } from "vuex";
import useApplicationState from "@/composables/useApplicationState";

const useSuggestionValidator = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  /**
   * @param {SectionSuggestion|ArticleSuggestion|null|undefined} suggestion
   * @return {boolean}
   */
  const isSuggestionValid = (suggestion) => {
    if (!suggestion) {
      return false;
    }
    const favoriteTitles = store.getters[
      "suggestions/getFavoriteTitlesByLanguagePair"
    ](sourceLanguage.value, targetLanguage.value);

    /** @type {Translation[]} */
    const translations = store.getters[
      "translator/getTranslationsForLanguagePair"
    ](sourceLanguage.value, targetLanguage.value);

    const translationTitles = translations.map((t) => t.sourceTitle);

    return (
      !favoriteTitles.includes(suggestion.sourceTitle) &&
      !translationTitles.includes(suggestion.sourceTitle)
    );
  };

  /**
   * @param {ArticleSuggestion} pageSuggestion
   */
  const isPageSuggestionValid = (pageSuggestion) => {
    const { pageSuggestions } = store.state.suggestions;

    const suggestionExists = pageSuggestions.some(
      (suggestion) =>
        suggestion.sourceLanguage === pageSuggestion.sourceLanguage &&
        suggestion.targetLanguage === pageSuggestion.targetLanguage &&
        suggestion.sourceTitle === pageSuggestion.sourceTitle
    );

    return !suggestionExists && isSuggestionValid(pageSuggestion);
  };

  /**
   * @param {SectionSuggestion|null} sectionSuggestion
   * @return {boolean}
   */
  const sectionSuggestionExists = (sectionSuggestion) =>
    store.state.suggestions.sectionSuggestions.some(
      (suggestion) =>
        suggestion.sourceLanguage === sectionSuggestion.sourceLanguage &&
        suggestion.targetLanguage === sectionSuggestion.targetLanguage &&
        suggestion.sourceTitle === sectionSuggestion.sourceTitle
    );

  /**
   * @param {SectionSuggestion|null} sectionSuggestion
   * @return {boolean}
   */
  const isSectionSuggestionValid = (sectionSuggestion) => {
    if (!sectionSuggestion) {
      return false;
    }

    const appendixTargetTitles =
      store.state.suggestions.appendixSectionTitles[targetLanguage.value] || [];

    return (
      !sectionSuggestionExists(sectionSuggestion) &&
      isSuggestionValid(sectionSuggestion) &&
      sectionSuggestion.isValid(appendixTargetTitles)
    );
  };

  return {
    isPageSuggestionValid,
    isSectionSuggestionValid,
    sectionSuggestionExists,
  };
};

export default useSuggestionValidator;
