import axios from "axios";

// Example URL:
// https://recommend.wmflabs.org/types/translation/v1/articles?source=de&target=ml&seed=&search=morelike&application=CX

function fetchSuggestions(source, target, seedArticles) {
  const params = {
    source,
    target,
    seed: seedArticles,
    search: "related_articles",
    application: "CX"
  };
  const apiURL = mw.config.get("wgRecommendToolAPIURL");
  return axios.get(apiURL, { params }).then(response => response.data);
}

export default {
  fetchSuggestions
};
