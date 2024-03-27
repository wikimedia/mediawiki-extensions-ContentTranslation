import { computed } from "vue";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import { siteMapper } from "@/utils/mediawikiHelper";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";

/**
 * @return {{isProgressiveButton: ComputedRef<boolean>, targetArticlePath: ComputedRef<string>, actionInformationMessageArgs: ComputedRef<string[]>, getActionButtonLabel: ((function(*): (string|undefined))|*)}}
 */
const useActionPanel = () => {
  const { sectionSuggestion } = useCurrentSectionSuggestion();
  const { targetLanguageURLParameter: targetLanguage } = useURLHandler();
  const { currentTranslation } = useCurrentDraftTranslation();
  const firstMissingSectionTitle = computed(
    () => sectionSuggestion.value?.orderedMissingSections?.[0]?.sourceTitle
  );

  const missingCount = computed(
    () => sectionSuggestion.value?.missingSectionsCount
  );
  const presentCount = computed(
    () => sectionSuggestion.value?.presentSectionsCount
  );
  const { targetPageExists, getCurrentTitleByLanguage } =
    useLanguageTitleGroup();

  const targetArticlePath = computed(() => {
    if (!targetPageExists) {
      return null;
    }

    return siteMapper.getPageUrl(
      targetLanguage.value || "",
      // no need for fallback language, since we know that current target page exists
      getCurrentTitleByLanguage(targetLanguage.value, null)
    );
  });

  const getActionButtonLabel = (isPrefilledSection) => {
    if (!!currentTranslation.value) {
      return "cx-sx-translation-confirmer-continue-translation-button-label";
    }

    if (isPrefilledSection) {
      return "cx-sx-translation-confirmer-translate-prefilled-section-button-label";
    }

    if (!targetPageExists.value) {
      return "cx-sx-start-translation-button-label";
    }

    if (
      missingCount.value > 1 ||
      (missingCount.value === 1 && presentCount.value > 0)
    ) {
      return "cx-sx-select-section";
    } else if (missingCount.value === 1 && presentCount.value === 0) {
      return "cx-sx-translation-confirmer-action-view-section";
    } else if (missingCount.value === 0 && presentCount.value > 0) {
      return "cx-sx-select-section";
    } else if (missingCount.value === 0 && presentCount.value === 0) {
      return "cx-sx-translation-confirmer-action-new-translation";
    }
  };

  const actionInformationMessageArgs = computed(() => {
    let i18nArgs;

    if (missingCount.value > 1) {
      i18nArgs = [
        "cx-sx-existing-translation-additional-info",
        `"${firstMissingSectionTitle.value}"`,
        missingCount.value - 1,
      ];
    } else if (missingCount.value === 1 && presentCount.value > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
        `"${firstMissingSectionTitle.value}"`,
      ];
    } else if (missingCount.value === 1 && presentCount.value === 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-none-present",
        `"${firstMissingSectionTitle.value}"`,
      ];
    } else if (presentCount.value > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-multiple-present",
      ];
    } else {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-none-present",
      ];
    }

    return i18nArgs;
  });

  const isProgressiveButton = computed(
    () =>
      !targetPageExists.value ||
      sectionSuggestion.value?.missingSectionsCount > 0
  );

  return {
    actionInformationMessageArgs,
    getActionButtonLabel,
    isProgressiveButton,
    targetArticlePath,
  };
};

export default useActionPanel;
