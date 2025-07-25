let cachedEditCount = null;

/**
 * Get global edit count for the user
 *
 * @param {string} userName User name
 * @return {Promise<number>}
 */
const fetchGlobalEditCount = (userName) => {
  if (cachedEditCount) {
    return Promise.resolve(cachedEditCount);
  }
  // Any Wikipedia domain will do.
  const apiURL = "https://en.wikipedia.org/w/api.php";
  const queryParams = new URLSearchParams({
    action: "query",
    meta: "globaluserinfo",
    guiuser: userName,
    guiprop: "editcount",
    formatversion: 2,
    origin: "*",
    format: "json",
  });

  const url = apiURL + "?" + queryParams;

  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      cachedEditCount = response.query.globaluserinfo.editcount;

      return cachedEditCount;
    })
    .catch((error) => {
      // Eventlogging errors are not critical error to handle and interrupt users.
      mw.log.error("Error while fetching global edit count for user. ", error);
    });
};

/**
 * Provide the user's edit count as a low-granularity bucket name
 *
 * Do not use this value in conjunction with other edit count
 * bucketing, or you will de-anonymize users to some degree.
 *
 * @param {number|null} editCount User edit count, or null for anonymous performers.
 * @return {string|null} `null` for anonymous performers.
 */
const getUserEditCountBucket = (editCount) => {
  if (editCount === null) {
    return null;
  }

  if (editCount === 0) {
    return "0 edits";
  }

  if (editCount < 5) {
    return "1-4 edits";
  }

  if (editCount < 100) {
    return "5-99 edits";
  }

  if (editCount < 1000) {
    return "100-999 edits";
  }

  return "1000+ edits";
};

export { fetchGlobalEditCount, getUserEditCountBucket };
