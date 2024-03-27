import siteApi from "@/wiki/mw/api/site";
import useApplicationState from "@/composables/useApplicationState";
import { useStore } from "vuex";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentPages from "@/composables/useCurrentPages";

const usePublishingComplete = () => {
  const store = useStore();
  const { currentSourcePage } = useCurrentPages();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);
  const { sourceSection, targetPageTitleForPublishing } =
    useCurrentPageSection();

  /**
   * @param {string|null} targetUrl
   * @return {Promise<void>}
   */
  return async (targetUrl) => {
    const targetPageTitle = targetPageTitleForPublishing.value;
    const isSandboxTarget = store.getters["application/isSandboxTarget"];

    const sourceTitle = currentSourcePage.value.title;

    const sourceMwTitle = new mw.Title(sourceTitle);
    const namespaceIds = mw.config.get("wgNamespaceIds");

    // the rest of the code inside this method is only executed when publishing is successful
    if (
      sourceSection.value.isLeadSection &&
      !isSandboxTarget &&
      sourceMwTitle.getNamespaceId() !== namespaceIds.user
    ) {
      // Add wikibase link, wait for it, but failure is acceptable
      try {
        await siteApi.addWikibaseLink(
          sourceLanguage.value,
          targetLanguage.value,
          sourceTitle,
          targetPageTitle
        );
      } catch (error) {
        mw.log.error("Error while adding wikibase link", error);
      }
    }

    // for successful publishing, targetUrl is required to be a non-empty string
    if (!targetUrl) {
      const errorMessage =
        "[CX] Target URL is empty after successful publishing";
      mw.log.error(errorMessage);
      throw new Error(errorMessage);
    }

    // sx-published-section query param will trigger 'sx.publishing.followup'
    // module to be loaded inside target article's page, after redirection.
    location.href = targetUrl;
  };
};

export default usePublishingComplete;
