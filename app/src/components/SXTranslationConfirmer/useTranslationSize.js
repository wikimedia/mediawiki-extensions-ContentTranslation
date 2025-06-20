import { computed, ref, watchEffect } from "vue";
import {
  calculateSectionsSize,
  bytesToMinutes,
  getTranslationTimeMessageArgs,
  isQuickTranslationByBytes,
} from "@/utils/translationTimeEstimator";
import useCurrentPages from "@/composables/useCurrentPages";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useURLHandler from "@/composables/useURLHandler";
import { useI18n } from "vue-banana-i18n";
import { isDesktopSite } from "@/utils/mediawikiHelper";
import PageSection from "@/wiki/cx/models/pageSection";

/**
 * Returns a message indicating the estimated amount of time a given
 * translation would take to complete, for both a whole article
 * or a set of sections translations
 *
 * @return {{timeEstimateMessage: string, isQuickTranslation: ComputedRef<boolean>}
 */
const useTranslationSize = () => {
  const { currentSourcePage: sourceArticle } = useCurrentPages();
  const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
  const bananaI18n = useI18n();

  const { sectionURLParameter: sectionTitle } = useURLHandler();

  const sizeInBytes = ref(null);
  const sectionsToTranslate = ref([]);

  watchEffect(async () => {
    if (suggestion.value && sectionTitle.value) {
      sectionsToTranslate.value = [sectionTitle.value];
    } else if (suggestion.value) {
      const { missingSections } = suggestion.value;
      sectionsToTranslate.value = Object.keys(missingSections);
    } else if (sourceArticle.value && !isDesktopSite) {
      sectionsToTranslate.value = [PageSection.LEAD_SECTION_DUMMY_TITLE];
    } else {
      sectionsToTranslate.value = [];
    }

    if (sectionsToTranslate.value.length) {
      // Return the translation time estimate for the missing sections
      sizeInBytes.value = await calculateSectionsSize(
        sourceArticle.value,
        sectionsToTranslate.value
      );
    } else {
      sizeInBytes.value = sourceArticle.value?.articleSize || null;
    }
  });

  const minutes = computed(() => bytesToMinutes(sizeInBytes.value || 0));

  const timeEstimateMessage = computed(() => {
    if ((!suggestion.value && !sourceArticle.value) || !minutes.value) {
      return "";
    }

    const translationArgs = getTranslationTimeMessageArgs(
      minutes.value,
      sectionsToTranslate.value
    );

    return bananaI18n.i18n(...translationArgs);
  });

  const isQuickTranslation = computed(() =>
    isQuickTranslationByBytes(sizeInBytes.value)
  );

  return { timeEstimateMessage, isQuickTranslation };
};
export default useTranslationSize;
