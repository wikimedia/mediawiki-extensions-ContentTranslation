import { computed } from "vue";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import { siteMapper } from "@/utils/mediawikiHelper";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useURLHandler from "@/composables/useURLHandler";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";

/**
 * @return {{isProgressiveButton: ComputedRef<boolean>, targetArticlePath: ComputedRef<string>, actionInformationMessage: ComputedRef<string>, getActionButtonLabel: ((function(*): (string|undefined))|*)}}
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
    } else {
      // missing and present sections count can be undefined for a while, for example
      // when the user updates the source language for a section translation, inside
      // "Confirm a translation" step
      return "";
    }
  };

  /**
   * Here, we use "mw.message().parse()" to get the information message, as bananaI18n
   * has currently some security issues when used with v-html (or v-i18n-html), as it
   * doesn't properly escape unsafe messages (e.g. "<img src="x" onerror="alert('XSS')">)
   * At the same time, we do not pass the section title argument to "mw.message" as it
   * doesn't support HTML strings for message arguments. This is why we do a manual
   * replacement of the first ($1) argument with the section title.
   *
   * The finally produced string, is safe to be used with v-html, as the main part of
   * the message is safely escaped by "mw.message().parse()" and the section title
   * is safe to be used with v-html, given that it directly comes from cxserver and
   * is a valid page section title.
   *
   * @type {ComputedRef<string>}
   */
  const actionInformationMessage = computed(() => {
    if (missingCount.value > 1) {
      const messageKey = "cx-sx-existing-translation-additional-info";
      const messageArgs = ["$1", missingCount.value - 1];
      const message = mw.message(messageKey, ...messageArgs).parse();

      return message.replace("$1", `"${firstMissingSectionTitle.value}"`);
    } else if (missingCount.value === 1 && presentCount.value > 0) {
      const messageKey =
        "cx-sx-translation-confirmer-action-message-single-missing-multiple-present";
      const message = mw.message(messageKey, "$1").parse();

      return message.replace("$1", `"${firstMissingSectionTitle.value}"`);
    } else if (missingCount.value === 1 && presentCount.value === 0) {
      const messageKey =
        "cx-sx-translation-confirmer-action-message-single-missing-none-present";
      const message = mw.message(messageKey, "$1").parse();

      return message.replace("$1", `"${firstMissingSectionTitle.value}"`);
    } else if (presentCount.value > 0) {
      const messageKey =
        "cx-sx-translation-confirmer-action-message-none-missing-multiple-present";

      return mw.message(messageKey).parse();
    } else {
      const messageKey =
        "cx-sx-translation-confirmer-action-message-none-missing-none-present";

      return mw.message(messageKey).parse();
    }
  });

  const isProgressiveButton = computed(
    () =>
      !targetPageExists.value ||
      sectionSuggestion.value?.missingSectionsCount > 0
  );

  return {
    actionInformationMessage,
    getActionButtonLabel,
    isProgressiveButton,
    targetArticlePath,
  };
};

export default useActionPanel;
