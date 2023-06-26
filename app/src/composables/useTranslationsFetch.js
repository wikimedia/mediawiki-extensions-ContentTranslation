/**
 * @param store
 * @return {(function(): Promise)}
 */
const useTranslationsFetch = (store) => () => {
  if (!store.state.translator.translations.length) {
    return store.dispatch("translator/fetchTranslations").catch((error) => {
      // Let translation fetching gracefully fail
      mw.log.error("[CX] Error while fetching translations", error);
    });
  }

  return Promise.resolve();
};

export default useTranslationsFetch;
