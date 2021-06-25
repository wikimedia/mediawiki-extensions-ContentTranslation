/**
 * @param {SectionSuggestion} sectionSuggestion
 * @return {string[]}
 */
export default sectionSuggestion => {
  let i18nArgs;

  const missingCount = sectionSuggestion.missingSectionsCount;
  const presentCount = sectionSuggestion.presentSectionsCount;
  const firstMissingSectionTitle = Object.keys(
    sectionSuggestion?.missingSections || {}
  )?.[0];

  if (missingCount > 1) {
    i18nArgs = [
      "cx-sx-existing-translation-additional-info",
      `"${firstMissingSectionTitle}"`,
      missingCount - 1
    ];
  } else if (missingCount === 1 && presentCount > 0) {
    i18nArgs = [
      "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
      `"${firstMissingSectionTitle}"`
    ];
  } else if (missingCount === 1 && presentCount === 0) {
    i18nArgs = [
      "cx-sx-translation-confirmer-action-message-single-missing-none-present",
      `"${firstMissingSectionTitle}"`
    ];
  } else if (presentCount > 0) {
    i18nArgs = [
      "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
    ];
  } else {
    i18nArgs = [
      "cx-sx-translation-confirmer-action-message-none-missing-none-present"
    ];
  }

  return i18nArgs;
};
