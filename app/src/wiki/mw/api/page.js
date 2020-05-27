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
    origin: "*",
    redirects: true
  };
  const api = `https://${language}.wikipedia.org/w/api.php`;
  return axios.get(api, { params }).then(response => {
    const apiResponse = response.data.query.pages;
    const redirects = response.data.query.redirects || [];
    const redirectMap = {};
    redirects.map(item => {
      redirectMap[item.to] = item.from;
    });

    return apiResponse.map(page => {
      if (redirectMap[page.title]) {
        // Note: This does not handle double redirects.
        page._alias = redirectMap[page.title];
      }
      return Object.freeze(new Page(page));
    });
  });
}

/**
 * Fetches language codes in which an article is available and returns
 * a promise that is being resolved to an array of strings (codes)
 * @param {string} title
 * @param {string} language
 * @returns {Promise<string[]>}
 */
async function fetchAvailableSourceLanguagesForPage(title, language) {
  const params = {
    action: "query",
    prop: "langlinks",
    format: "json",
    formatversion: 2,
    origin: "*",
    titles: title,
    redirects: true
  };
  const api = `https://${language}.wikipedia.org/w/api.php`;
  const langLinks = await axios
    .get(api, { params })
    .then(response => response.data.query.pages[0])
    .then(info => info?.langlinks || []);

  const codes = langLinks.map(langlink => langlink.lang);
  codes.unshift(language);
  return codes;
}

export default {
  fetchMetadata,
  fetchAvailableSourceLanguagesForPage
};
