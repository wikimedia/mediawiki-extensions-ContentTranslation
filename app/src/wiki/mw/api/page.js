import Page from "../models/page";
import LanguageTitleGroup from "../models/languageTitleGroup";
import segmentedContentConverter from "../../../utils/segmentedContentConverter";
import { siteMapper, getUserCoordinates } from "../../../utils/mediawikiHelper";

/**
 * Default size for thumbnail images in pixels
 * @type {number}
 */
const defaultThumbnailSize = 80;

/**
 * Fetches metadata information for pages for the corresponding titles and language
 * and returns a promise that resolves to an array of Page objects
 * @param language
 * @param titles
 * @returns {Promise<Page[]>}
 */
const fetchPages = (language, titles) => {
  const params = {
    action: "query",
    format: "json",
    formatversion: 2,
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount",
    pvipdays: 7, // Last 7 days page views
    piprop: "thumbnail|name|original",
    pithumbsize: defaultThumbnailSize,
    titles: titles.join("|"),
    origin: "*",
    redirects: true
  };

  const mwApi = siteMapper.getApi(language);

  return mwApi.get(params).then(response => {
    const apiResponse = response.query.pages;
    const redirects = response.query.redirects || [];
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
};

/**
 * Fetches titles for pages in all available languages for the given title and language
 * and returns a promise that resolves to an immutable LanguageTitleGroup object
 * @param {String} language
 * @param {String} title
 * @returns {Promise<LanguageTitleGroup>}
 */
const fetchLanguageTitles = (language, title) => {
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
  const mwApi = siteMapper.getApi(language);

  return mwApi.get(params).then(async response => {
    const pages = response.query.pages;

    // When invalid title is provided a dummy page is return with "missing"
    // property equal to true. So we should check also for this one.
    if (!pages || !pages.length || pages[0]?.missing) {
      // Page not present
      return null;
    }
    const titles = [{ lang: language, title }, ...(pages[0].langlinks || [])];
    const wikidataId = pages[0].pageprops?.wikibase_item;

    // For test articles used in development, wikidataId will be missing. Skip
    if (!wikidataId) {
      return null;
    }

    return Object.freeze(new LanguageTitleGroup(wikidataId, titles));
  });
};

/**
 * Fetches segmented content of a page for given source language,
 * target language and source title. It returns a promise that
 * resolves to a Page object with sections and content properties set.
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String} sourceTitle
 * @returns {Promise<Page>}
 */
const fetchPageContent = (sourceLanguage, targetLanguage, sourceTitle) => {
  return fetchSegmentedContent(
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ).then(
    segmentedContent =>
      new Page({
        sections: segmentedContentConverter.convertSegmentedContentToPageSections(
          segmentedContent
        ),
        content: segmentedContent,
        pagelanguage: sourceLanguage,
        title: sourceTitle
      })
  );
};

/**
 * Fetches segmented content of a page for given source language,
 * target language and source title. Returns a promise that resolves
 * to a string containing HTML segmented content.
 * @param {String} sourceLanguage
 * @param {String} targetLanguage
 * @param {String} sourceTitle
 * @returns {Promise<PageSection[]>}
 */
const fetchPageSections = (sourceLanguage, targetLanguage, sourceTitle) => {
  return fetchSegmentedContent(
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ).then(segmentedContent =>
    segmentedContentConverter.convertSegmentedContentToPageSections(
      segmentedContent
    )
  );
};

/**
 * Fetches segmented content of a page for given source language,
 * target language and source title.
 * @param sourceLanguage
 * @param targetLanguage
 * @param sourceTitle
 * @return {Promise<String>}
 */
const fetchSegmentedContent = (sourceLanguage, targetLanguage, sourceTitle) => {
  const cxServerParams = [
    sourceLanguage,
    targetLanguage,
    sourceTitle
  ].map(param => encodeURIComponent(param));
  // Example: https://cxserver.wikimedia.org/v2/page/en/es/Vlasovite
  const cxserverAPI = siteMapper.getCXServerUrl(
    `/page/${cxServerParams.join("/")}`
  );

  return fetch(cxserverAPI)
    .then(response => response.json())
    .then(response => response.segmentedContent);
};

/**
 * Fetches nearby articles in given language, based on user location as stored
 * inside GeoIP cookie and returns an array of Page models
 * If error during request, an empty array is returned
 * @param language
 * @return {Promise<Page[]>}
 */
const fetchNearbyPages = async language => {
  const coords = getUserCoordinates();

  if (!coords) {
    return Promise.resolve([]);
  }
  const params = {
    action: "query",
    prop: ["pageimages", "description", "langlinks", "langlinkscount"],
    generator: "geosearch",
    piprop: "thumbnail",
    pithumbsize: defaultThumbnailSize,
    lllang: language,
    ggscoord: coords,
    ggsradius: 1000, // Search radius in meters
    ggslimit: 3,
    ggsnamespace: mw.config.get("wgNamespaceIds")[""], // Main namespace
    format: "json",
    formatversion: 2,
    origin: "*"
  };

  return await siteMapper
    .getApi(language)
    .get(params)
    .then(response => response.query.pages)
    .then(pages => pages.map(page => new Page(page)))
    .catch(error => []);
};

/**
 * Given a query string and a language, this method
 * is calling Action API to search pages matching
 * this query and language, and returns an array of Page
 * models as result. In case of failed request, an empty
 * array is returned.
 *
 * @param {string} query
 * @param {string} language
 * @return {Promise<Page[]>}
 */
const searchPagesByTitlePrefix = (query, language) => {
  const titleQuery = query.trim();
  const params = {
    action: "query",
    generator: "prefixsearch",
    gpssearch: titleQuery,
    prop: "pageimages|description|langlinkscount",
    piprop: "thumbnail",
    pithumbsize: defaultThumbnailSize,
    pilimit: 10,
    format: "json",
    formatversion: 2,
    origin: "*"
  };

  return siteMapper
    .getApi(language)
    .get(params)
    .then(response => response.query.pages)
    .then(pages =>
      pages
        .sort((page1, page2) => page1.index - page2.index)
        .map(page => new Page(page))
    )
    .catch(error => []);
};

export default {
  fetchPages,
  fetchLanguageTitles,
  fetchPageContent,
  fetchPageSections,
  fetchNearbyPages,
  searchPagesByTitlePrefix
};
