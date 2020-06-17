import axios from "axios";
import Page from "../models/page";
import LanguageTitleGroup from "../models/languageTitleGroup";
import PageSection from "../models/pageSection";

/**
 * Fetches metadata information for pages for the corresponding titles and language
 * and returns a promise that resolves to an array of Page objects
 * @param language
 * @param titles
 * @returns {Promise<Page[]>}
 */
function fetchPages(language, titles) {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7, // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: 100,
    titles: titles.join("|"),
    lllimit: 500, // Max limit
    origin: "*",
    redirects: true
  };

  const api = `https://${language}.wikipedia.org/w/api.php`;
  return axios.get(api, { params }).then(response => {
    const apiResponse = response.data.query.pages;
    const redirects = response.data.query.redirects || [];
    const redirectMap = redirects.reduce(
      (rMap, redirect) => ({ ...rMap, [redirect.to]: redirect.from }),
      {}
    );

    return apiResponse.map(page => {
      page = redirectMap[page.title]
        ? { ...page, _alias: redirectMap[page.title] }
        : page;
      return new Page(page);
    });
  });
}

/**
 * Fetches titles for pages in all available languages for the given title and language
 * and returns a promise that resolves to an immutable LanguageTitleGroup object
 * @param {String} language
 * @param {String} title
 * @returns {Promise<LanguageTitleGroup>}
 */
function fetchLanguageTitles(language, title) {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "langlinks|pageprops", // pageprops for wikidataId
    titles: title,
    lllimit: 500, // Max limit. We have only ~300 wikis.
    origin: "*",
    redirects: true
  };
  const api = `https://${language}.wikipedia.org/w/api.php`;
  return axios.get(api, { params }).then(async response => {
    const pages = response.data.query.pages;
    // When invalid title is provided a dummy page is return with "missing"
    // property equal to true. So we should check also for this one.
    if (!pages || !pages.length || pages[0]?.missing) {
      // Page not present
      return null;
    }
    const titles = [{ lang: language, title }, ...pages[0].langlinks];
    const wikidataId = pages[0].pageprops?.wikibase_item;
    // For test articles used in development, wikidataId will be missing. Skip
    if (!wikidataId) {
      return null;
    }
    return Object.freeze(new LanguageTitleGroup(wikidataId, titles));
  });
}

/**
 * Fetches content for a given page and returns a promise that resolves to
 * a string containing the page content (or null if page not found)
 * @param {String} language
 * @param {String} title
 * @returns {Promise<String|null>}
 */
function fetchPageContent(language, title) {
  const params = {
    action: "parse",
    format: "json",
    formatversion: 2,
    prop: "text",
    page: title,
    origin: "*",
    redirects: true
  };
  const api = `https://${language}.wikipedia.org/w/api.php`;
  return axios
    .get(api, { params })
    .then(response => response.data.parse.text)
    .catch(error => null);
}

/**
 * Fetches sections with content for a given page and returns a promise that
 * resolves to an array containing PageSection objects
 * @param {String} language
 * @param {String} title
 * @returns {Promise<PageSection[]>}
 */
function fetchPageSections(language, title) {
  const apiURL =
    `https://${language}.wikipedia.org/api/rest_v1/page/mobile-sections/${title}`;
  return axios
    .get(apiURL)
    .then(response => {
      const sections = response.data?.remaining?.sections || [];
      return sections.map(section => new PageSection(section));
    });
}

export default {
  fetchPages,
  fetchLanguageTitles,
  fetchPageContent,
  fetchPageSections
};
