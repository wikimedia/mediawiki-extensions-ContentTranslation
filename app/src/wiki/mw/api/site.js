import axios from "axios";

/**
 * Fetch languages information for the supported languages in wikipedia.
 * The api can be used with any wikipedia since output is same. Hence the
 * default value 'en'.
 * @param {String} language The language code for the wiki to query
 * @param {String} [licontinue] continue parameter for the api
 */
function fetchLanguageInfo(language='en', licontinue) {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    meta: "languageinfo",
    liprop: "autonym|dir",
    origin: "*"
  };
  if (licontinue) {
    params["licontinue"] = licontinue;
  }
  const api= `https://${language}.wikipedia.org/w/api.php`;
  return axios
    .get(api, { params })
    .then(async response => {
      let licontinue = response.data.continue?.licontinue;
      let results = response.data.query.languageinfo;
      if (licontinue) {
        results = Object.assign(
          {},
          results,
          await fetchLanguageInfo(language, licontinue)
        );
      }
      return results;
    });
}

async function fetchSupportedLanguageCodes() {
  const api = "https://cxserver.wikimedia.org/v1/list/languagepairs";
  return await axios
    .get(api, { origin: "*" })
    .then(response => response.data.source);
}

export default {
  fetchLanguageInfo,
  fetchSupportedLanguageCodes
};
