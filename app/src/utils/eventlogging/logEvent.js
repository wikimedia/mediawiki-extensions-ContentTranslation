import { nextSessionPosition } from "./translationSessionPosition";

let cachedEditCount = null;

/**
 * Get global edit count for the user
 * @param {string} userName User name
 * @returns {Promise<number>}
 */
function getGlobalEditCount(userName) {
  if (cachedEditCount) {
    return Promise.resolve(cachedEditCount);
  }
  // Any wikipedia domain will do.
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

  return fetch(`${apiURL}?${queryParams}`)
    .then((response) => response.json())
    .then((response) => response.query.globaluserinfo.editcount)
    .catch((error) => {
      // Eventlogging errors are not critical error to handle and interrupt users.
      mw.log.error("Error while fetching global edit count for user. ", error);
    });
}

/**
 * Provide the user's edit count as a low-granularity bucket name
 *
 * @param {number|null} editCount User edit count, or null for anonymous performers.
 * @return {string|null} `null` for anonymous performers.
 *
 * Do not use this value in conjunction with other edit count
 * bucketing, or you will deanonymize users to some degree.
 */
function getUserEditCountBucket(editCount) {
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
}

/**
 * Log an event to eventlogging system
 *
 * @param {Object} event
 * @returns {Promise}
 */
function logEvent(event) {
  if (!mw.eventLog) {
    // Eventlogging extension not installed or enabled.
    // We don't want it as a hard dependency. Skip.
    mw.log({ event });

    return Promise.resolve();
  }

  const webSessionId = mw.user.sessionId();
  const wikiDB = mw.config.get("wgDBname");
  const sessionId = `cx_sx_${webSessionId}_${event.access_method}_${wikiDB}`;
  const streamName = "mediawiki.content_translation_event";
  const isAnonUser = mw.user.isAnon();
  const userName = mw.user.getName();

  const eventDefaults = {
    $schema: "/analytics/mediawiki/content_translation_event/1.11.0",
    wiki_db: wikiDB,
    user_name: userName,
    web_session_id: webSessionId,
    web_pageview_id: mw.user.getPageviewToken(),
    user_is_anonymous: isAnonUser,
    content_translation_session_id: sessionId,
    content_translation_session_position: nextSessionPosition(),
  };

  if (isAnonUser) {
    return Promise.resolve(
      mw.eventLog.submit(streamName, Object.assign({}, eventDefaults, event))
    );
  }

  return getGlobalEditCount(userName).then((editCount) => {
    cachedEditCount = editCount;
    mw.eventLog.submit(
      streamName,
      Object.assign({}, eventDefaults, event, {
        user_global_edit_count: editCount,
        user_global_edit_count_bucket: getUserEditCountBucket(editCount),
      })
    );
  });
}

export default logEvent;
