import { logEvent } from "./";
global.fetch = jest.fn((url) => {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        query: {
          globaluserinfo: {
            editcount: 2021,
          },
        },
      }),
  });
});

describe("Event logging", () => {
  it("Event is being logged properly", async () => {
    const event = { foo: "bar" };
    await logEvent(event);
    const eventPayload = {
      $schema: "/analytics/mediawiki/content_translation_event/1.2.0",
      translation_type: "section",
      wiki_db: "test-db",
      access_method: "mobile web",
      user_name: "test-username",
      web_pageview_id: "ecd3eeb13fde5ab4d7da",
      web_session_id: "test-session-id",
      user_is_anonymous: false,
      content_translation_session_id: `cx_sx_test-session-id_mobile web_test-db`,
      user_global_edit_count: 2021,
      user_global_edit_count_bucket: "1000+ edits",
    };
    expect(mw.eventLog.submit).toHaveBeenCalledWith(
      "mediawiki.content_translation_event",
      Object.assign({}, eventPayload, event)
    );
  });
});
