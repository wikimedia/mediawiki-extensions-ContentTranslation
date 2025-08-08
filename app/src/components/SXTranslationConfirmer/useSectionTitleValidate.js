import useURLHandler from "@/composables/useURLHandler";
import useSuggestionLoad from "@/composables/useSuggestionLoad";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

/**
 * Composable that validates whether a pre-filled section title from the URL
 * exists in the suggested sections for a given source and target language pair.
 *
 * It loads a section suggestion via `useSuggestionLoad()` and
 * checks if the loaded suggestion is a valid `SectionSuggestion` instance and
 * contains the pre-filled section title in its `sourceSections` list.
 *
 * This is used in Confirm Translation action panel, so that we only display
 * URL section titles  that are safe.
 *
 * @returns {Function} An async function that returns:
 * - `true` if the section title exists in the suggested source sections.
 * - `false` otherwise.
 */
const useSectionTitleValidate = () => {
  const {
    sectionURLParameter: preFilledSectionTitle,
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: sourceTitle,
  } = useURLHandler();

  const loadSuggestion = useSuggestionLoad();

  return async () => {
    const suggestion = await loadSuggestion(
      sourceLanguage.value,
      targetLanguage.value,
      sourceTitle.value
    );

    if (!(suggestion instanceof SectionSuggestion)) {
      return false;
    }

    return suggestion.sourceSections.includes(preFilledSectionTitle.value);
  };
};

export default useSectionTitleValidate;
