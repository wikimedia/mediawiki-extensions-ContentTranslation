import axios from "axios";
import { Page } from "../models/page";

function fetchMetadata(language, titles) {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7, // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: 100,
    titles: titles.join("|"),
    origin: "*"
  };
  const api = `https://${language}.wikipedia.org/w/api.php`;
  return axios.get(api, { params }).then(response => {
    const apiResponse = response.data.query.pages;
    return apiResponse.map(page => Object.freeze(new Page(page)));
  });
}

export default { fetchMetadata };
