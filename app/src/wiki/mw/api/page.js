import Page from "../models/page";
import LanguageTitleGroup from "../models/languageTitleGroup";
import segmentedContentConverter from "../../../utils/segmentedContentConverter";
import { siteMapper, getUserCoordinates } from "../../../utils/mediawikiHelper";

/**
 * Default size for thumbnail images in pixels
 * @type {number}
 */
const defaultThumbnailSize = 120;

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
    prop: "info|pageprops|pageimages|description|pageviews|langlinkscount|revisions",
    pvipdays: 7, // Last 7 days page views
    piprop: "thumbnail|name|original",
    rvprop: "size",
    pithumbsize: defaultThumbnailSize,
    titles: titles.join("|"),
    origin: "*",
    redirects: true,
  };

  const mwApi = siteMapper.getApi(language);

  return mwApi.get(params).then((response) => {
    const apiResponse = response.query.pages;
    const redirects = response.query.redirects || [];
    const redirectMap = redirects.reduce(
      (rMap, redirect) => ({ ...rMap, [redirect.to]: redirect.from }),
      {}
    );

    // consider title normalizations to also support non normalized titles for multi-word page titles
    // e.g. "Greenhouse_gas" instead of "Greenhouse gas"
    const titleNormalizations = response.query.normalized || [];
    const normalizationMap = titleNormalizations.reduce(
      (nMap, normalization) => ({
        ...nMap,
        [normalization.to]: normalization.from,
      }),
      {}
    );

    return apiResponse.map((page) => {
      // non-normalized page titles take priority over "redirect from" titles,
      // because they only exist in the response, when they have included in the
      // "titles" property of the request payload
      const _alias =
        normalizationMap[page.title] || redirectMap[page.title] || null;

      return new Page({ ...page, _alias });
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
    redirects: true,
  };
  const mwApi = siteMapper.getApi(language);

  return mwApi.get(params).then(async (response) => {
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
 * @param {String|null} revision
 * @returns {Promise<Page>}
 */
const fetchPageContent = (
  sourceLanguage,
  targetLanguage,
  sourceTitle,
  revision = null
) => {
  return fetchSegmentedContent(
    sourceLanguage,
    targetLanguage,
    sourceTitle,
    revision
  ).then(
    (segmentedContent) =>
      new Page({
        sections:
          segmentedContentConverter.convertSegmentedContentToPageSections(
            segmentedContent,
            false // No need to resolve references. Content can be used as it is
          ),
        content: segmentedContent,
        pagelanguage: sourceLanguage,
        title: sourceTitle,
      })
  );
};

/**
 * Fetches segmented content of a page for given source language,
 * target language and source title.
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string} sourceTitle
 * @param {string|null} revision
 * @return {Promise<String>}
 */
const fetchSegmentedContent = (
  sourceLanguage,
  targetLanguage,
  sourceTitle,
  revision = null
) => {
  const sourceWikiCode = siteMapper.getWikiDomainCode(sourceLanguage);
  const targetWikiCode = siteMapper.getWikiDomainCode(targetLanguage);
  const cxServerParams = {
    $sourcelanguage: sourceWikiCode,
    $targetlanguage: targetWikiCode,
    // Manual normalisation to avoid redirects on spaces but not to break namespaces
    $title: sourceTitle.replace(/ /g, "_"),
  };

  let relativeApiURL = "/page/$sourcelanguage/$targetlanguage/$title";

  // If revision is requested, load that revision of page.
  if (revision) {
    cxServerParams.$revision = revision;
    relativeApiURL += "/$revision";
  }

  // Example: https://cxserver.wikimedia.org/v2/page/en/es/Vlasovite
  const cxServerApiURL = siteMapper.getCXServerUrl(
    relativeApiURL,
    cxServerParams
  );

  return fetch(cxServerApiURL)
    .then((response) => response.json())
    .then((response) => response.segmentedContent);
};

/**
 * Fetches nearby articles in given language, based on user location as stored
 * inside GeoIP cookie and returns an array of Page models
 * If error during request, an empty array is returned
 * @param language
 * @return {Promise<Page[]>}
 */
const fetchNearbyPages = async (language) => {
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
    origin: "*",
  };

  return await siteMapper
    .getApi(language)
    .get(params)
    .then((response) => response.query.pages)
    .then((pages) => pages.map((page) => new Page(page)))
    .catch((error) => []);
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
    origin: "*",
  };

  return siteMapper
    .getApi(language)
    .get(params)
    .then((response) => response.query?.pages || [])
    .then((pages) =>
      pages
        .sort((page1, page2) => page1.index - page2.index)
        .map(
          (page) => new Page(Object.assign(page, { pagelanguage: language }))
        )
    )
    .catch((error) => []);
};

export default {
  fetchPages,
  fetchLanguageTitles,
  fetchPageContent,
  fetchSegmentedContent,
  fetchNearbyPages,
  searchPagesByTitlePrefix,
};
