import { renderTemplateFromVE } from "@/utils/templateRenderer";

const toHtmlSegments = (text) => {
  if (!text) {
    return [];
  }
  const wrapperDiv = document.createElement("div");
  wrapperDiv.innerHTML = text;
  const node = wrapperDiv.firstChild;

  return Array.from(node.getElementsByClassName("cx-segment"));
};

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
  const templateTranslation = corporaUnit.user.content;

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
  // "user" translations are always present inside corpora translation unit for SX
  const userTranslatedSegments = toHtmlSegments(corporaUnit.user.content);
  // "mt" translation can be empty inside corpora translation unit for SX
  const mtSegments = toHtmlSegments(corporaUnit?.mt?.content);

  // iterate over "user" segments since they are always present
  userTranslatedSegments.forEach((userTranslatedSegment) => {
    const sentence = subSection.getSentenceById(
      userTranslatedSegment.dataset.segmentid
    );
    const mtSegment = mtSegments.find(
      (mtSegment) =>
        mtSegment.dataset.segmentid === userTranslatedSegment.dataset.segmentid
    );
    sentence.translatedContent = userTranslatedSegment.innerHTML;
    const mtProvider = corporaUnit.mt.engine;
    sentence.addProposedTranslation(mtProvider, mtSegment?.innerHTML);
    sentence.mtProviderUsed = mtProvider;
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
 * @param {Page} targetPage
 * @param {CorporaRestoredUnit[]} corporaUnits
 * @return {Promise}
 */
const restoreCorporaDraft = (sourcePage, targetPage, corporaUnits) => {
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
        targetPage?.title || sourcePage.title,
        targetPage.language
      );

      restorationPromises.push(restorationPromise);
    }
  }

  return Promise.all(restorationPromises);
};

export default { restoreCorporaDraft };
