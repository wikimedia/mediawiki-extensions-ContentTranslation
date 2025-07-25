import { nextSessionPosition } from "./translationSessionPosition";
import {
  fetchGlobalEditCount,
  getUserEditCountBucket,
} from "../userEditCountBucket";

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

  return fetchGlobalEditCount(userName).then((editCount) => {
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
