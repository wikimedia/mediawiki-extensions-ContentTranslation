import { computed, ref, watchEffect } from "vue";
import {
  getArticleDifficultyBySize,
  getSectionDifficultyBySize,
  DifficultyEnum,
} from "@/utils/translationDifficulty";
import useCurrentPages from "@/composables/useCurrentPages";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useURLHandler from "@/composables/useURLHandler";
import { isDesktopSite } from "@/utils/mediawikiHelper";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";

/** @type {Map<string, Promise<number>>} */
const leadSectionSizePromiseCache = new Map();

/**
 * @param sourceLanguage
 * @param sourceTitle
 * @returns {Promise<number>}
 */
const calculateLeadSectionSize = async (sourceLanguage, sourceTitle) => {
  const sourceSections = await cxSuggestionsApi.fetchArticleSections(
    sourceLanguage,
    sourceTitle
  );

  // Equivalent to `section.toclevel === 1`
  const sections = sourceSections.sections.filter(
    (section) => section.level === "2"
  );

  return sections[0].byteoffset;
};

/**
 * @param {string} sourceLanguage
 * @param {string} sourceTitle
 * @returns {Promise<number>}
 */
const getLeadSectionSize = (sourceLanguage, sourceTitle) => {
  const cacheKey = `${sourceLanguage}:${sourceTitle}`;

  if (leadSectionSizePromiseCache.has(cacheKey)) {
    return leadSectionSizePromiseCache.get(cacheKey);
  }

  const promise = calculateLeadSectionSize(sourceLanguage, sourceTitle);
  leadSectionSizePromiseCache.set(cacheKey, promise);

  return promise;
};

/**
 * Returns translation size information including difficulty
 * for both whole articles and section translations
 *
 * @return {{sizeInBytes: Ref<number|null>, isQuickTranslation: ComputedRef<boolean>, difficulty: ComputedRef<string>}}
 */
const useTranslationSize = () => {
  const { currentSourcePage: sourceArticle } = useCurrentPages();
  const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();

  const { sectionURLParameter: sectionTitle } = useURLHandler();

  const sizeInBytes = ref(null);

  watchEffect(async () => {
    if (suggestion.value && sectionTitle.value) {
      sizeInBytes.value = suggestion.value.getSectionSize(sectionTitle.value);
    } else if (suggestion.value) {
      const { missingSections } = suggestion.value;
      sizeInBytes.value = Object.keys(missingSections).reduce(
        (totalSize, section) =>
          totalSize + suggestion.value.getSectionSize(section),
        0
      );
    } else if (sourceArticle.value && !isDesktopSite) {
      const sourceLanguage = sourceArticle.value.language;
      const sourceTitle = sourceArticle.value.title;
      sizeInBytes.value = await getLeadSectionSize(sourceLanguage, sourceTitle);
    } else {
      sizeInBytes.value = sourceArticle.value?.articleSize || null;
    }
  });

  const difficulty = computed(() => {
    if (!sizeInBytes.value) {
      return DifficultyEnum.unknown;
    }

    // If we have sections to translate (including lead section on mobile),
    // we should use section difficulty thresholds since we're evaluating section sizes
    if (!suggestion.value && isDesktopSite) {
      return getArticleDifficultyBySize(sizeInBytes.value);
    } else {
      return getSectionDifficultyBySize(sizeInBytes.value);
    }
  });

  const isQuickTranslation = computed(() => {
    return (
      difficulty.value === DifficultyEnum.stub ||
      difficulty.value === DifficultyEnum.easy
    );
  });

  return { isQuickTranslation, difficulty, sizeInBytes };
};

export default useTranslationSize;
