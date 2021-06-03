import EventLogging from "./";
const Vue = function() {};
EventLogging.install(Vue);

global.fetch = jest.fn(url => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        query: {
          globaluserinfo: {
            editcount: 2021
          }
        }
      })
  });
});

describe("Event logging", () => {
  it("Event is being logged properly", async () => {
    const instance = new Vue();
    const event = { foo: "bar" };
    await instance.$logEvent(event);
    const eventPayload = {
      $schema: "/analytics/mediawiki/content_translation_event/1.0.0",
      translation_type: "section",
      wiki_db: "test-db",
      access_method: "mobile web",
      user_name: "test-username",
      user_is_anonymous: false,
      content_translation_session_id: `cx_sx_test-session-id_mobile web_test-db`,
      user_global_edit_count: 2021,
      user_global_edit_count_bucket: "1000+ edits"
    };
    expect(mw.eventLog.submit).toHaveBeenCalledWith(
      "mediawiki.content_translation_event",
      Object.assign({}, eventPayload, event)
    );
  });
});
