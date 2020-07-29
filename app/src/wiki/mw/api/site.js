import Language from "../models/language";

/**
 * Fetch languages information for the supported languages in wikipedia.
 * The api can be used with any wikipedia since output is same. Hence the
 * default value 'en'.
 * @param {String} language The language code for the wiki to query
 * @param {String} [licontinue] continue parameter for the api
 * @returns {Promise<Language[]>}
 */
function fetchLanguages(language = "en", licontinue) {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    meta: "languageinfo",
    liprop: "autonym|dir|name|code|bcp47|fallbacks|variants",
    origin: "*"
  };
  if (licontinue) {
    params["licontinue"] = licontinue;
  }
  const sitemapper = new mw.cx.SiteMapper();
  const mwApi = sitemapper.getApi(language);
  return mwApi.get(params).then(async response => {
    let licontinue = response.continue?.licontinue;
    let results = response.query.languageinfo;
    if (licontinue) {
      results = Object.assign(
        {},
        results,
        await fetchLanguages(language, licontinue)
      );
    }
    return Object.values(results).map(result => {
      return Object.freeze(new Language(result));
    });
  });
}

async function fetchSupportedLanguageCodes() {
  const sitemapper = new mw.cx.SiteMapper();
  return await sitemapper
    .getLanguagePairs()
    .then(response => response.sourceLanguages);
}

export default {
  fetchLanguages,
  fetchSupportedLanguageCodes
};
