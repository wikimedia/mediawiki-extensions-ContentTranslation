/**
 * @param store
 * @return {(function(): Promise)}
 */
const useTranslationsFetch = (store) => () => {
  if (!store.state.translator.translations.length) {
    return Promise.all([
      store.dispatch("translator/fetchTranslationsByStatus", "published"),
      store.dispatch("translator/fetchTranslationsByStatus", "draft"),
    ]).catch((error) => {
      // Let translation fetching gracefully fail
      mw.log.error("[CX] Error while fetching translations", error);
    });
  }

  return Promise.resolve();
};

export default useTranslationsFetch;
