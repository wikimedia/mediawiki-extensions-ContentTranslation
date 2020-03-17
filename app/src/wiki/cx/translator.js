import axios from "axios";

function fetchTranslations(status) {
  const params = {
    action: "query",
    format: "json",
    assert: "user",
    formatversion: 2,
    list: "contenttranslation",
    type: status
  };
  const api = mw.util.wikiScript("api");
  return axios({
    method: "get",
    url: api,
    api,
    params,
    withCredentials: true
  }).then(response => {
    return response.data.query.contenttranslation.translations;
  });
}

function fetchPublishedTranslations() {
  return fetchTranslations("published");
}

function fetchDraftTranslations() {
  return fetchTranslations("draft");
}

export default {
  fetchDraftTranslations,
  fetchPublishedTranslations
};
