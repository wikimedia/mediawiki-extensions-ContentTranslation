import MTProviderGroup from "../models/mtProviderGroup";
import { siteMapper } from "../../../utils/mediawikiHelper";

async function fetchSupportedLanguageCodes() {
  return await siteMapper
    .getLanguagePairs()
    .then(response => response.sourceLanguages);
}

/**
 * Fetches supported MT providers for a given language pair
 * and returns a Promise that resolves to a read-only MTProviderGroup object
 * @param sourceLanguage
 * @param targetLanguage
 * @return {Promise<Readonly<MTProviderGroup>>}
 */
async function fetchSupportedMTProviders(sourceLanguage, targetLanguage) {
  const cxserverAPI = siteMapper.getCXServerUrl(
    `/list/pair/${sourceLanguage}/${targetLanguage}`
  );

  return fetch(cxserverAPI)
    .then(response => response.json())
    .then(data =>
      Object.freeze(
        new MTProviderGroup(sourceLanguage, targetLanguage, data.mt)
      )
    );
}

function fetchCXServerToken() {
  return new mw.Api().postWithToken("csrf", {
    action: "cxtoken",
    assert: "user"
  });
}

export default {
  fetchSupportedLanguageCodes,
  fetchSupportedMTProviders,
  fetchCXServerToken
};
