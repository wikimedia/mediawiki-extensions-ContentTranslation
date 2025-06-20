import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import PageSection from "@/wiki/cx/models/pageSection";

/**
 * @param {Page} sourceArticle
 * @param {string[]} sectionTitles
 * @return {Promise<number>}
 */
const calculateSectionsSize = async (sourceArticle, sectionTitles) => {
  const sourceLanguage = sourceArticle.language;
  const sourceTitle = sourceArticle.title;
  const articleByteSize = sourceArticle.articleSize;

  const sourceSections = await cxSuggestionsApi.fetchArticleSections(
    sourceLanguage,
    sourceTitle
  );

  // Equivalent to `section.toclevel === 1`
  const sections = sourceSections.sections.filter(
    (section) => section.level === "2"
  );
  const sectionsSize = sections.reduce(
    (acc, section, i, arr) => {
      const nextByteOffset =
        i < arr.length - 1 ? arr[i + 1].byteoffset : articleByteSize;
      acc[section.line] = nextByteOffset - section.byteoffset;

      return acc;
    },
    { [PageSection.LEAD_SECTION_DUMMY_TITLE]: sections[0].byteoffset }
  );

  if (sectionTitles.length === 1) {
    return sectionsSize[sectionTitles[0]];
  }

  return Object.keys(sectionsSize)
    .filter((section) => sectionTitles.includes(section))
    .reduce((sum, section) => sum + sectionsSize[section], 0);
};

/**
 * Converts byte size to estimated reading time in minutes.
 *
 * @param {number} byteSize - The size of the text in bytes.
 * @return {number} - The estimated reading time in minutes.
 */
const bytesToMinutes = (byteSize) => {
  const averageWordLengthInBytes = 5;
  const averageReadingSpeedInWordsPerMinute = 200;

  const wordCount = byteSize / averageWordLengthInBytes;
  const readingTimeInMinutes = wordCount / averageReadingSpeedInWordsPerMinute;

  return Math.ceil(readingTimeInMinutes);
};

/**
 * @param {number} minutes
 * @param {string[]} sectionTitles
 */
const getTranslationTimeMessageArgs = (minutes, sectionTitles = []) => {
  const hours = minutes >= 60 ? minutes / 60 : 0;
  const roundedHours = Math.round(hours * 2) / 2; // Round to nearest 0.5 hours

  let message;

  if (!sectionTitles.length) {
    message = "cx-sx-translation-confirmer-translation-time-whole-article";

    return [message, roundedHours, minutes];
  } else if (sectionTitles.length === 1) {
    message =
      sectionTitles[0] === PageSection.LEAD_SECTION_DUMMY_TITLE
        ? "cx-sx-translation-confirmer-translation-time-lead-section"
        : "cx-sx-translation-confirmer-translation-time-single-section";

    return [message, roundedHours, minutes];
  }

  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    roundedHours,
    minutes,
    sectionTitles.length,
  ];
};

/**
 * Returns a boolean indicating whether the translation is a quick
 * translation, based on its size in bytes
 * @param {number} bytes
 * @returns {boolean}
 */
const isQuickTranslationByBytes = (bytes) => {
  const minutes = bytesToMinutes(bytes);

  return minutes < 15;
};

export {
  getTranslationTimeMessageArgs,
  bytesToMinutes,
  calculateSectionsSize,
  isQuickTranslationByBytes,
};
