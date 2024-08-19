import { ref } from "vue";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import useCurrentPages from "@/composables/useCurrentPages";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

/**
 * @param {Page} sourceArticle
 * @param {SectionSuggestion} sectionSuggestion
 * @return {Promise<number>}
 */
const calculateSuggestionSectionsSize = async (
  sourceArticle,
  sectionSuggestion
) => {
  const sourceLanguage = sourceArticle.language;
  const sourceTitle = sourceArticle.title;
  const articleByteSize = sourceArticle.articleSize;
  const missingSections = sectionSuggestion.missingSections;

  const sourceSections = await cxSuggestionsApi.fetchSuggestionSourceSections(
    sourceLanguage,
    sourceTitle
  );

  const sectionsSize = sourceSections.sections
    .filter((section) => section.level === "2") // Equivalent to `section.toclevel === 1`
    .reduce((acc, section, i, arr) => {
      const nextByteOffset =
        i < arr.length - 1 ? arr[i + 1].byteoffset : articleByteSize;
      acc[section.line] = nextByteOffset - section.byteoffset;

      return acc;
    }, {});

  return Object.keys(sectionsSize)
    .filter((sectionTitle) => missingSections[sectionTitle])
    .reduce((sum, sectionTitle) => sum + sectionsSize[sectionTitle], 0);
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
 * @return {[string,number,number]}
 */
const getTranslationTimeMessagesArgsForPageSuggestions = (minutes) => {
  const hours = minutes >= 60 ? minutes / 60 : 0;
  const roundedHours = Math.round(hours * 2) / 2; // Round to nearest 0.5 hours

  return [
    "cx-sx-translation-confirmer-translation-time-whole-article",
    roundedHours,
    minutes,
  ];
};

/**
 * @param {number} minutes
 * @param {number} missingSectionsLength
 * @return {[string,number,number,number]}
 */
const getTranslationTimeMessagesArgsForSectionSuggestions = (
  minutes,
  missingSectionsLength
) => {
  const hours = minutes >= 60 ? minutes / 60 : 0;
  const roundedHours = Math.round(hours * 2) / 2; // Round to nearest 0.5 hours

  return [
    "cx-sx-translation-confirmer-translation-time-sections",
    roundedHours,
    minutes,
    missingSectionsLength,
  ];
};

/**
 * Provides tooling to indicate the estimated amount of time a given
 * translation suggestion would take to complete, for both a whole article
 * or a set of sections translations
 *
 * @return {{translationSizeMessageArgs: Ref<array|null>, bytesToMinutes: (function(number): number)}}
 */
const useTranslationSize = () => {
  const { currentSourcePage: sourceArticle } = useCurrentPages();
  const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
  const translationSizeMessageArgs = ref(null);

  if (suggestion.value) {
    // Return the translation time estimate for the missing sections
    calculateSuggestionSectionsSize(sourceArticle.value, suggestion.value).then(
      (size) => {
        translationSizeMessageArgs.value =
          getTranslationTimeMessagesArgsForSectionSuggestions(
            bytesToMinutes(size),
            Object.keys(suggestion.value.missingSections).length
          );
      }
    );
  } else if (sourceArticle.value) {
    const minutes = bytesToMinutes(sourceArticle.value.articleSize);
    // Return the translation time estimate for the whole article
    /**
     * @type {[string,number,number]}
     */
    translationSizeMessageArgs.value =
      getTranslationTimeMessagesArgsForPageSuggestions(minutes);
  }

  return { translationSizeMessageArgs, bytesToMinutes };
};

export default useTranslationSize;
