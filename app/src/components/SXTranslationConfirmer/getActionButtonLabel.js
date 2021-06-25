/**
 * @param {SectionSuggestion} sectionSuggestion
 * @return {string}
 */
export default sectionSuggestion => {
  const translationExists = sectionSuggestion.translationExists;

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
