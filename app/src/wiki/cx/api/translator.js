import axios from "axios";
import { Translation } from "../models/translation";

async function fetchTranslations(offset) {
  const params = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    list: "contenttranslation"
  };
  const api = mw.util.wikiScript("api");
  if (offset) {
    params["offset"] = offset;
  }
  return axios({
    method: "get",
    url: api,
    params,
    withCredentials: true
  }).then(async response => {
    const apiResponse = response.data.query.contenttranslation.translations;
    let results = apiResponse.map(item => new Translation(item.translation));
    if (response.data.continue?.offset) {
      const restOfResults = await fetchTranslations(
        response.data.continue.offset
      );
      results = results.concat(restOfResults);
    }
    return results;
  });
}

export default {
  fetchTranslations
};
