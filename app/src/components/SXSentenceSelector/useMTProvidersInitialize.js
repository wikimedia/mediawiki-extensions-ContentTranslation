import useApplicationState from "@/composables/useApplicationState";
import siteApi from "@/wiki/mw/api/site";
import { useStore } from "vuex";
import MTProviderGroup from "@/wiki/mw/models/mtProviderGroup";
import useURLHandler from "@/composables/useURLHandler";

/**
 * This method returns a function which checks for already existing MT providers
 * for the current language pair, in the store, and if none, it fetches the supported
 * MT providers from cxserver API and saves them to the store.

 * @return {function: Promise<void>}
 */
const useMTProvidersFetch = () => {
  const store = useStore();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();

  return async () => {
    if (
      store.getters["mediawiki/getSupportedMTProviders"](
        sourceLanguage.value,
        targetLanguage.value
      ).length
    ) {
      return;
    }

    // Check if machine translation is enabled
    const isMTEnabled = mw.config.get("wgContentTranslationEnableMT");

    let mtProviderGroup;

    if (isMTEnabled) {
      mtProviderGroup = await siteApi.fetchSupportedMTProviders(
        sourceLanguage.value,
        targetLanguage.value
      );
    } else {
      // Create an empty MT provider group with only non-MT providers
      mtProviderGroup = new MTProviderGroup(
        sourceLanguage.value,
        targetLanguage.value,
        [] // Empty providers array - only "original" and "empty" will be added by constructor
      );
    }

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
  const { currentMTProvider } = useApplicationState(store);
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();
  const fetchMTProviders = useMTProvidersFetch();

  return async () => {
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
      let defaultProvider = mw.storage.get(storageKey);

      if (!defaultProvider || !supportedProviders.includes(defaultProvider)) {
        // Storage value is invalid/unavailable, pick a new default
        defaultProvider = supportedProviders[0];
      }

      store.commit("application/setCurrentMTProvider", defaultProvider);
    }
  };
};

export default useMTProvidersInitialize;
