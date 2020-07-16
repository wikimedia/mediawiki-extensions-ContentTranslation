import Translation from "../models/translation";

async function fetchTranslations(offset) {
  const params = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    list: "contenttranslation"
  };
  if (offset) {
    params["offset"] = offset;
  }

  const api = new mw.Api();
  //   withCredentials: true
  return api.get(params).then(async response => {
    const apiResponse = response.query.contenttranslation.translations;
    let results = apiResponse.map(item => new Translation(item.translation));
    if (response.continue?.offset) {
      const restOfResults = await fetchTranslations(response.continue.offset);
      results = results.concat(restOfResults);
    }
    return results;
  });
}

/**
 * Fetches translation for a given sentence, language pair and MT provider service
 * and a promise that resolves to the translation. In case of api call failure,
 * it returns a promise that resolves to the provided sentence as is.
 * @param sourceLanguage
 * @param targetLanguage
 * @param provider
 * @param sentence
 * @return {Promise<String>}
 */
async function fetchSentenceTranslation(
  sourceLanguage,
  targetLanguage,
  provider,
  sentence
) {
  if (!provider || !sentence) {
    return;
  }
  const sitemapper = new mw.cx.SiteMapper();
  const cxserverAPI = sitemapper.getCXServerUrl(
    `/mt/${sourceLanguage}/${targetLanguage}/${provider}`
  );

  return fetch(cxserverAPI, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ html: sentence })
  })
    .then(response => response.json())
    .then(data => data.contents)
    .catch(error => sentence);
}

export default {
  fetchTranslations,
  fetchSentenceTranslation
};
