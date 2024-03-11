import { useStore } from "vuex";
import pageApi from "@/wiki/mw/api/page";

const usePageContentFetch = () => {
  const store = useStore();

  return async (
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    revision = null
  ) => {
    let existingPage = store.getters["mediawiki/getPage"](
      sourceLanguage,
      sourceTitle
    );

    if (existingPage && existingPage.content) {
      return;
    }

    /** @type {Page} */
    const fetchedPage = await pageApi.fetchPageContent(
      sourceLanguage,
      targetLanguage,
      sourceTitle,
      revision
    );

    // recheck for existing page, in case it has been saved elsewhere
    // while pageApi.fetchPageContent was being executed
    existingPage = store.getters["mediawiki/getPage"](
      sourceLanguage,
      sourceTitle
    );

    if (!existingPage) {
      store.commit("mediawiki/addPage", fetchedPage);
    } else if (!existingPage.content) {
      existingPage.content = fetchedPage.content;
      store.commit("mediawiki/setPageSections", {
        page: existingPage,
        sections: fetchedPage.sections,
      });
    }
  };
};

export default usePageContentFetch;
