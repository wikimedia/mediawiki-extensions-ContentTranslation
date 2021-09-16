import useApplicationState from "@/composables/useApplicationState";
import { computed } from "@vue/composition-api";
import { siteMapper } from "@/utils/mediawikiHelper";

const useActionPanel = () => {
  const { currentSectionSuggestion: sectionSuggestion } = useApplicationState();

  const firstMissingSectionTitle = computed(
    () => sectionSuggestion.value.orderedMissingSections?.[0]?.sourceTitle
  );

  const missingCount = computed(
    () => sectionSuggestion.value.missingSectionsCount
  );
  const presentCount = computed(
    () => sectionSuggestion.value.presentSectionsCount
  );

  const translationExists = computed(
    () => !!sectionSuggestion.value?.translationExists
  );

  const targetArticlePath = computed(() =>
    siteMapper.getPageUrl(
      sectionSuggestion.value?.targetLanguage || "",
      sectionSuggestion.value?.targetTitle || ""
    )
  );

  const getActionButtonLabel = isPrefilledSection => {
    if (isPrefilledSection) {
      return "cx-sx-translation-confirmer-translate-prefilled-section-button-label";
    }

    if (!translationExists.value) {
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
        missingCount.value - 1
      ];
    } else if (missingCount.value === 1 && presentCount.value > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-multiple-present",
        `"${firstMissingSectionTitle.value}"`
      ];
    } else if (missingCount.value === 1 && presentCount.value === 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-single-missing-none-present",
        `"${firstMissingSectionTitle.value}"`
      ];
    } else if (presentCount.value > 0) {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-multiple-present"
      ];
    } else {
      i18nArgs = [
        "cx-sx-translation-confirmer-action-message-none-missing-none-present"
      ];
    }

    return i18nArgs;
  });

  const isProgressiveButton = computed(
    () =>
      !translationExists.value ||
      sectionSuggestion.value?.missingSectionsCount > 0
  );

  return {
    actionInformationMessageArgs,
    getActionButtonLabel,
    isProgressiveButton,
    targetArticlePath,
    translationExists
  };
};

export default useActionPanel;
