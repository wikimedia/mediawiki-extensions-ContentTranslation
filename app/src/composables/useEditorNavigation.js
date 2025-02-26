import { siteMapper, isDesktopSite } from "@/utils/mediawikiHelper";
import useURLHandler from "@/composables/useURLHandler";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

/**
 * Handles navigation logic for the editor, determining whether users should be
 * redirected based on their device type, language settings, and quick tutorial status.
 *
 * - Redirects to the target wiki if translation should always happen in target wiki,
 *   and target language is different from the current wiki language code.
 * - Navigates to the correct editor (desktop or mobile).
 * - Determines if the quick tutorial should be shown.
 *
 * @returns {Function<void>} A function that handles the navigation logic and executes redirections as needed.
 */
const useEditorNavigation = () => {
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
    pageURLParameter: pageTitle,
    sectionURLParameter: sectionTitle,
    isQuickTutorialForced,
  } = useURLHandler();
  const store = useStore();
  const router = useRouter();

  const getDesiredRoute = () => {
    // For now, we don't display the quick tutorial for any desktop translations.
    // In the future, we may want to support quick tutorial for (some) desktop
    // translations, too.
    const shouldDisplayQuickTutorial =
      router.currentRoute.value.name !== "sx-quick-tutorial" &&
      (isQuickTutorialForced() ||
        !store.getters["translator/userHasSectionTranslations"]);

    const desiredRouteName = shouldDisplayQuickTutorial
      ? "sx-quick-tutorial"
      : "sx-sentence-selector";

    return router.getRoutes().find((route) => route.name === desiredRouteName);
  };

  /**
   * @return {boolean} a boolean indicating whether redirection is needed
   */
  const redirectToTargetMobileEditor = () => {
    const translateInTarget = mw.config.get(
      "wgContentTranslationTranslateInTarget"
    );
    const wikiLanguage = siteMapper.getCurrentWikiLanguageCode();

    if (!translateInTarget || targetLanguage.value === wikiLanguage) {
      return false;
    }

    const extra = sectionTitle.value ? { section: sectionTitle.value } : {};

    const targetWikiUrl = siteMapper.getCXUrl(
      pageTitle.value,
      null,
      sourceLanguage.value,
      targetLanguage.value,
      extra
    );

    location.href = targetWikiUrl + "#" + getDesiredRoute().path;

    return true;
  };

  const redirectToDesktopEditor = () => {
    location.href = siteMapper.getCXUrl(
      pageTitle.value,
      null,
      sourceLanguage.value,
      targetLanguage.value,
      sectionTitle.value ? { sourcesection: sectionTitle.value } : {}
    );
  };

  return () => {
    siteMapper.setCXToken(
      sourceLanguage.value,
      targetLanguage.value,
      pageTitle.value
    );

    if (isDesktopSite) {
      redirectToDesktopEditor();

      return;
    }

    const redirectNeeded = redirectToTargetMobileEditor();

    if (redirectNeeded) {
      return;
    }

    const desiredRoute = getDesiredRoute();
    router.push({ name: desiredRoute.name });
  };
};

export default useEditorNavigation;
