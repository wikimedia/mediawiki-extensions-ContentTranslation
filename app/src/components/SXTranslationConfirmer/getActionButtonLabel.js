/**
 * @param {SectionSuggestion|null} sectionSuggestion
 * @param {boolean} isPrefilledSection
 * @return {string}
 */
export default (sectionSuggestion, isPrefilledSection) => {
  const translationExists = sectionSuggestion?.translationExists;

  if (isPrefilledSection) {
    return "cx-sx-translation-confirmer-translate-prefilled-section-button-label";
  }

  if (!translationExists) {
    return "cx-sx-start-translation-button-label";
  }

  const missingCount = sectionSuggestion.missingSectionsCount;
  const presentCount = sectionSuggestion.presentSectionsCount;

  if (missingCount > 1 || (missingCount === 1 && presentCount > 0)) {
    return "cx-sx-select-section";
  } else if (missingCount === 1 && presentCount === 0) {
    return "cx-sx-translation-confirmer-action-view-section";
  } else if (missingCount === 0 && presentCount > 0) {
    return "cx-sx-select-section";
  } else if (missingCount === 0 && presentCount === 0) {
    return "cx-sx-translation-confirmer-action-new-translation";
  }
};
