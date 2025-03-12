import cxTranslatorApi from "@/wiki/cx/api/translator";
import Page from "@/wiki/mw/models/page";
import { useStore } from "vuex";
import usePageMetadataFetch from "@/composables/usePageMetadataFetch";
import { ref } from "vue";

/** @type {Ref<UnwrapRef<{draft: boolean, published: boolean}>>} */
const translationsFetched = ref({ draft: false, published: false });

/**
 * @return {{fetchTranslationsByStatus: (function(string): Promise<void>), fetchAllTranslations: (function(): Promise<void>), translationsFetched: Ref<UnwrapRef<{draft: boolean, published: boolean}>>}}
 */
const useTranslationsFetch = () => {
  const store = useStore();
  const fetchPageMetadata = usePageMetadataFetch();

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

    translationsFetched.value[status] = true;

    for (const [sourceLanguage, translations] of Object.entries(queue)) {
      fetchPageMetadata(
        sourceLanguage,
        translations.map((translation) => translation.sourceTitle)
      );

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

  /**
   * Fetches all missing translations by checking which statuses are not yet loaded
   * and retrieving them asynchronously.
   *
   * @returns {Promise} Resolves when all missing translations are fetched.
   */
  const fetchAllTranslations = () => {
    const missingStatuses = Object.keys(translationsFetched.value).filter(
      (status) => !translationsFetched.value[status]
    );
    const missingTranslationPromises = missingStatuses.map((status) =>
      fetchTranslationsByStatus(status)
    );

    return Promise.all(missingTranslationPromises).catch((error) => {
      // Let translation fetching gracefully fail
      mw.log.error("[CX] Error while fetching translations", error);
    });
  };

  return {
    fetchTranslationsByStatus,
    fetchAllTranslations,
    translationsFetched,
  };
};

export default useTranslationsFetch;
