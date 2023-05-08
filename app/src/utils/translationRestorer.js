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
 */
const restoreDraftForSubSection = (subSection, corporaUnit) => {
  subSection.corporaRestoredUnit = corporaUnit;

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
 * @param {Page} sourcePage
 * @param {Page} targetPage
 * @param {CorporaRestoredUnit[]} corporaUnits
 */
const restoreCorporaDraft = (sourcePage, targetPage, corporaUnits) => {
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

      restoreDraftForSubSection(subSection, corporaUnit);
    }
  }
};

export default { restoreCorporaDraft };
