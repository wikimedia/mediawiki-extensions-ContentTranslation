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

export default {
  fetchTranslations
};
