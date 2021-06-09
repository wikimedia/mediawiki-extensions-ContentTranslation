import { getAutonym, getScript, sortByAutonym } from "@wikimedia/language-data";

/**
 * @param {string} [query]
 * @return {Promise<string[]>}
 */
async function search(languages, query, searchApi) {
  if (!query || query.trim().length === 0) {
    return languages;
  }

  // See if the search query is a language code
  const exactMatch = languages.filter(
    code => query.toLowerCase() === code.toLowerCase()
  );

  if (exactMatch.length) {
    return exactMatch;
  }

  const filterResults = languages.filter(
    code =>
      // Search using autonym
      getAutonym(code)
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      // Search using script name
      getScript(code)
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  if (filterResults.length) {
    return filterResults;
  }

  // We did not find any results from client side search.
  // Attempt a search using the given search API
  if (searchApi) {
    const searchApiResults = await searchWithAPI(query, searchApi);

    // Remove the languages not known to this selector.
    return searchApiResults.filter(code => languages.includes(code));
  }

  return [];
}

/**
 * @param {string} [query]
 * @return {Promise<string[]>}
 */
async function searchByQuery(languages, query, searchApi) {
  if (!query || query.trim().length === 0) {
    return languages.sort(sortByAutonym);
  } else {
    return (await search(languages, query, searchApi)).sort(sortByAutonym);
  }
}

/**
 * @param {string} query
 * @return {Promise<string[]>}
 */
function searchWithAPI(query, searchApi) {
  const apiURL = new URL(searchApi);
  apiURL.searchParams.set("search", query);

  return fetch(apiURL.toString())
    .then(response => response.json())
    .then(result => Object.keys(result.languagesearch || {}));
}

function getSearchApi() {
  const apiURL = new URL("https://en.wikipedia.org/w/api.php");
  apiURL.searchParams.set("action", "languagesearch");
  apiURL.searchParams.set("format", "json");
  apiURL.searchParams.set("origin", "*");
  apiURL.searchParams.set("formatversion", 2);

  return apiURL.toString();
}

function getSearchResultsByScript(searchResults) {
  let chunkSize;
  let languagesByScript = [...searchResults];
  const resultsCount = searchResults.length;
  if (resultsCount < 10) chunkSize = resultsCount;
  if (resultsCount < 30) chunkSize = 10;
  if (resultsCount >= 30) chunkSize = 15;
  const chunks = [];

  while (languagesByScript.length) {
    chunks.push(languagesByScript.splice(0, chunkSize));
  }

  return chunks;
}

function getResultsDisplayClass(searchResults) {
  const resultsCount = searchResults.length;
  if (resultsCount < 10) return "few-results";
  if (resultsCount < 30) return "some-results";

  return "many-results";
}

export {
  getSearchApi,
  searchByQuery,
  getSearchResultsByScript,
  getResultsDisplayClass
};
