import cxTranslatorApi from "@/wiki/cx/api/translator";
import Page from "@/wiki/mw/models/page";
import { useStore } from "vuex";

/**
 * @return {{fetchTranslationsByStatus: (function(string): Promise<void>), fetchAllTranslations: (function(): Promise<void>)}}
 */
const useTranslationsFetch = () => {
  const store = useStore();

  /**
   * @param {"draft"|"published"} status
   * @return {Promise<void>}
   */
  const fetchTranslationsByStatus = async (status) => {
    let translations = await cxTranslatorApi.fetchTranslations(status);
    store.commit("translator/clearTranslationsByStatus", status);

    translations.forEach((translation) =>
      store.commit("translator/addTranslation", translation)
    );

    const queue = {};

    for (const translation of translations) {
      const language = translation.sourceLanguage;
      queue[language] = queue[language] || [];
      queue[language].push(translation);
    }

    store.commit("translator/setTranslationsLoaded", { status, value: true });

    for (const [sourceLanguage, translations] of Object.entries(queue)) {
      store.dispatch("mediawiki/fetchPageMetadata", {
        language: sourceLanguage,
        titles: translations.map((translation) => translation.sourceTitle),
      });

      translations.forEach((translation) => {
        const { targetLanguage, targetTitle } = translation;
        const targetPageExists = !!store.getters["mediawiki/getPage"](
          targetLanguage,
          targetTitle
        );

        if (!!targetTitle && !targetPageExists) {
          store.commit(
            "mediawiki/addPage",
            new Page({ title: targetTitle, pagelanguage: targetLanguage })
          );
        }
      });
    }
  };

  const fetchAllTranslations = () => {
    if (!store.state.translator.translations.length) {
      return Promise.all([
        fetchTranslationsByStatus("published"),
        fetchTranslationsByStatus("draft"),
      ]).catch((error) => {
        // Let translation fetching gracefully fail
        mw.log.error("[CX] Error while fetching translations", error);
      });
    }

    return Promise.resolve();
  };

  return { fetchTranslationsByStatus, fetchAllTranslations };
};

export default useTranslationsFetch;
