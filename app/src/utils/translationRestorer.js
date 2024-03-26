import { renderTemplateFromVE } from "@/utils/templateRenderer";

/**
 * @param {SubSection} subSection
 * @param {CorporaRestoredUnit} corporaUnit
 * @param {string} pageTitle
 * @param {string} language
 */
const restoreBlockTemplate = async (
  subSection,
  corporaUnit,
  pageTitle,
  language
) => {
  const templateTranslation =
    corporaUnit.user?.content || corporaUnit.mt?.content;

  const mtProvider = corporaUnit?.mt?.engine;

  const templateTranslationHtml = await renderTemplateFromVE(
    templateTranslation,
    pageTitle,
    language
  );

  if (mtProvider) {
    // if MT provider was used for the block template translation,
    // store the template adaptation info, so that we can properly display
    // template adaptation status information
    subSection.setBlockTemplateAdaptationInfoByHtml(
      mtProvider,
      templateTranslation
    );
    subSection.blockTemplateProposedTranslations[mtProvider] =
      templateTranslationHtml;
    subSection.blockTemplateMTProviderUsed = mtProvider;
  }

  subSection.blockTemplateTranslatedContent = templateTranslationHtml;
};

/**
 * @param {SubSection} subSection
 * @param {CorporaRestoredUnit} corporaUnit
 */
const restoreSubSectionWithSentences = (subSection, corporaUnit) => {
  // iterate over "user" segments since they are always present
  corporaUnit.segments.forEach((segment) => {
    const sentence = subSection.getSentenceById(segment.id);

    // The sentence variable is always expected to be an instance of "SectionSentence" class,
    // under normal circumstances. However, this may happen for translations that have been
    // started/modified in desktop editor (T347583). In such cases, we do not want to block
    // the translation for the user, so here we just skip such "unmapped" segments/sentences
    // inside the translation unit contents
    if (!sentence) {
      return;
    }

    sentence.translatedContent =
      segment.user?.innerHTML || segment.mt?.innerHTML;

    if (segment.mt) {
      const mtProvider = corporaUnit.mt?.engine;
      sentence.addProposedTranslation(mtProvider, segment.mt.innerHTML);
      sentence.mtProviderUsed = mtProvider;
    }
  });
};

/**
 * @param {SubSection} subSection
 * @param {CorporaRestoredUnit} corporaUnit
 * @param {string} pageTitle
 * @param {string} language
 */
const restoreDraftForSubSection = async (
  subSection,
  corporaUnit,
  pageTitle,
  language
) => {
  subSection.corporaRestoredUnit = corporaUnit;

  if (subSection.isBlockTemplate) {
    return restoreBlockTemplate(subSection, corporaUnit, pageTitle, language);
  } else {
    restoreSubSectionWithSentences(subSection, corporaUnit);
  }
};

/**
 * @param {Page} sourcePage
 * @param {string} targetPageTitle
 * @param {string} targetLanguage
 * @param {CorporaRestoredUnit[]} corporaUnits
 * @return {Promise}
 */
const restoreCorporaDraft = (
  sourcePage,
  targetPageTitle,
  targetLanguage,
  corporaUnits
) => {
  const restorationPromises = [];

  for (const section of sourcePage.sections || []) {
    const sectionCorporaUnits = corporaUnits.filter(
      (unit) => unit.pageSectionId === parseInt(section.id)
    );

    if (!sectionCorporaUnits.length) {
      continue;
    }

    for (const subSection of section.subSections) {
      const corporaUnit = corporaUnits.find(
        (corporaUnit) => corporaUnit.subSectionId === subSection.id
      );

      if (!corporaUnit) {
        continue;
      }

      const restorationPromise = restoreDraftForSubSection(
        subSection,
        corporaUnit,
        targetPageTitle || sourcePage.title,
        targetLanguage
      );

      restorationPromises.push(restorationPromise);
    }
  }

  return Promise.all(restorationPromises);
};

export default { restoreCorporaDraft };
