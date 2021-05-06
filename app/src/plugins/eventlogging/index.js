// EventLogging plugin
// https://wikitech.wikimedia.org/wiki/Event_Platform

const EventLogging = {
  install(Vue) {
    Vue.prototype.$logEvent = event => {
      const accessMethod =
        mw.config.get("skin") === "minerva" ? "mobile web" : "desktop";
      const wikiDB = mw.config.get("wgDBname");
      const sessionId = `cx_sx_${mw.user.sessionId()}_${accessMethod}_${wikiDB}`;
      const streamName = "mediawiki.content_translation_event";

      const eventDefaults = {
        $schema: "/analytics/mediawiki/content_translation_event/1.0.0",
        translation_type: "section",
        wiki_db: wikiDB,
        access_method: accessMethod,
        user_name: mw.user.getName(),
        user_is_anonymous: mw.user.isAnon(),
        content_translation_session_id: sessionId,
        user_global_edit_count: mw.config.get("wgUserEditCount"),
        user_global_edit_count_bucket: mw.config.get("wgUserEditCountBucket")
      };

      mw.eventLog.submit(streamName, Object.assign({}, eventDefaults, event));
    };
  }
};

export default EventLogging;
