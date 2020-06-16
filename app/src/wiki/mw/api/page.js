import axios from "axios";
import Page from "../models/page";
import LanguageTitleGroup from "../models/languageTitleGroup";

const getParams = (titles, props, extraProperties = {}) => ({
  action: "query",
  format: "json",
  formatversion: 2,
  prop: props,
  titles: titles.join("|"),
  origin: "*",
  redirects: true,
  ...extraProperties
});

/**
 * Fetches metadata information for pages for the corresponding titles and language
 * and returns a promise that resolves to an array of immutable Page objects
 * @param language
 * @param titles
 * @returns {Promise<Page[]>}
 */
function fetchPages(language, titles) {
  const params = getParams(
    titles,
    "info|pageprops|pageimages|description|pageviews|langlinkscount",
    {
      pvipdays: 7, // Last 7 days page views
      piprop: "thumbnail|name|original",
      pithumbsize: 100
    }
  );

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
      return Object.freeze(new Page(page));
    });
  });
}

/**
 * Fetches langlinks for pages for the corresponding titles and language
 * and returns a promise that resolves to an array of immutable LanguageTitleGroup objects
 * @param language
 * @param titles
 * @param llcontinue
 * @returns {Promise<LanguageTitleGroup[]>}
 */
function fetchTitles(language, titles, llcontinue = "") {
  const extraProperties = llcontinue ? { llcontinue } : {};
  const params = getParams(titles, "langlinks|pageprops|info", extraProperties);
  const api = `https://${language}.wikipedia.org/w/api.php`;

  return axios.get(api, { params }).then(async response => {
    const apiResponse = response.data.query.pages;
    let languageTitleGroups = apiResponse.map(page =>
      Object.freeze(createLanguageTitleGroupFromApiResponse(page))
    );
    llcontinue = response.data.continue?.llcontinue;
    if (llcontinue) {
      const newLanguageTitleGroups = await fetchTitles(
        language,
        titles,
        llcontinue
      );
      languageTitleGroups = languageTitleGroups.reduce((mergedArray, group) => {
        const updatedGroup = newLanguageTitleGroups.find(
          newGroup => newGroup.wikidataId === group.wikidataId
        );
        mergedArray.push(
          Object.freeze(mergeLanguageTitleGroups(group, updatedGroup))
        );
        return mergedArray;
      }, []);
    }

    return languageTitleGroups;
  });
}

function createLanguageTitleGroupFromApiResponse({
  title,
  langlinks,
  pageprops,
  pagelanguage
} = {}) {
  langlinks = langlinks || [];
  const titles = [{ lang: pagelanguage, title }, ...langlinks];
  return new LanguageTitleGroup(pageprops.wikibase_item, titles);
}

function mergeLanguageTitleGroups(groupA, groupB) {
  const titles = [...groupA.titles, ...groupB.titles].filter(
    (title, index, self) =>
      self.findIndex(searchTitle => searchTitle.lang === title.lang) === index
  );

  return new LanguageTitleGroup(groupA.wikidataId, titles);
}

export default {
  fetchPages,
  fetchTitles
};
