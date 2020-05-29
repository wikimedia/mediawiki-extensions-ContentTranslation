import axios from "axios";

function fetchLanguageInfo(licontinue) {
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
  return axios
    .get(mw.util.wikiScript("api"), { params })
    .then(async response => {
      let licontinue = response.data.continue?.licontinue;
      let results = response.data.query.languageinfo;
      if (licontinue) {
        results = Object.assign(
          {},
          results,
          await fetchLanguageInfo(licontinue)
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
