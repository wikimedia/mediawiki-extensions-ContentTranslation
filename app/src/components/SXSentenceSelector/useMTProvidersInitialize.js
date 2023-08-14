import useApplicationState from "@/composables/useApplicationState";
import siteApi from "@/wiki/mw/api/site";
import { useStore } from "vuex";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";

/**
 * This method returns a function which checks for already existing MT providers
 * for the current language pair, in the store, and if none, it fetches the supported
 * MT providers from cxserver API and saves them to the store.

 * @return {function: Promise<void>}
 */
const useMTProvidersFetch = () => {
  const store = useStore();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  return async () => {
    if (
      store.getters["mediawiki/getSupportedMTProviders"](
        sourceLanguage.value,
        targetLanguage.value
      ).length
    ) {
      return;
    }

    const mtProviderGroup = await siteApi.fetchSupportedMTProviders(
      sourceLanguage.value,
      targetLanguage.value
    );

    store.commit("mediawiki/addMtProviderGroup", mtProviderGroup);
  };
};

/**
 * This method returns a function that checks if the current MT provider exists
 * and is valid for the current language pair. If not, it selects the first provider
 * among the supported ones and sets it as the current MT provider.
 *
 * @return {function: Promise<void>}
 */
const useMTProvidersInitialize = () => {
  const store = useStore();
  const { currentMTProvider, sourceLanguage, targetLanguage } =
    useApplicationState(store);
  const fetchMTProviders = useMTProvidersFetch();

  return async () => {
    store.commit("application/increaseTranslationDataLoadingCounter");

    await fetchMTProviders();

    const supportedProviders = store.getters[
      "mediawiki/getSupportedMTProviders"
    ](sourceLanguage.value, targetLanguage.value);

    if (
      !currentMTProvider.value ||
      !supportedProviders.includes(currentMTProvider.value)
    ) {
      const storageKey = MTProviderGroup.getStorageKey(
        sourceLanguage.value,
        targetLanguage.value
      );
      const defaultProvider =
        mw.storage.get(storageKey) || supportedProviders[0];
      store.commit("application/setCurrentMTProvider", defaultProvider);
    }
    store.commit("application/decreaseTranslationDataLoadingCounter");
  };
};

export default useMTProvidersInitialize;
