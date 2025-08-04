const Api = function () {
  // here we also mock Api.get() method, to avoid errors on SFC tests where router is injected.
  // This is needed because userApi.assertUser() is called before each router navigation, and
  // "userApi.assertUser()" uses "mw.Api().get" under the hood.
  this.get = () => Promise.resolve();
};

const toQueryStringValue = (value) => {
  return encodeURIComponent(
    typeof value === "object" ? value.join("|") : value
  );
};

const namespaceIds = {
  "": 0, // main namespace
  user: 2, // user namespace
};

Api.prototype.ajax = function (params) {
  params["origin"] = "*";
  const q = Object.keys(params)
    .map((key) => {
      return `${key}=${toQueryStringValue(params[key])}`;
    })
    .join("&");

  return fetch(`https://en.wikipedia.org/w/api.php?${q}`).then((r) => r.json());
};

class SiteMapper {
  getPageUrl(language, title) {
    return `https://${language}.wikipedia.org/wiki/${title}`;
  }

  getCXServerUrl(url) {
    return url;
  }

  getCurrentWikiLanguageCode() {
    return "en";
  }
}

const localStorage = {};

const mw = {
  storage: {
    store: localStorage,
    set: (key, value) => (localStorage[key] = value),
    get: (key) => localStorage[key],
    remove: (key) => delete localStorage[key],
  },
  Api,
  eventLog: {
    submit: jest.fn(),
  },
  user: {
    sessionId: () => "test-session-id",
    getPageviewToken: () => "ecd3eeb13fde5ab4d7da",
    getName: () => "test-username",
    isAnon: () => false,
  },
  util: {},
  log: {
    error: console.error,
  },
  config: {
    get: (name) => {
      switch (name) {
        case "wgUserName":
          return "MWProxyUser";
        case "wgUserLanguage":
          return "en";
        case "wgContentLanguage":
          return "en";
        case "wgPageName":
          return "Special:ContentTranslation";
        case "wgDBname":
          return "test-db";
        case "wgUserEditCount":
          return 2021;
        case "wgUserEditCountBucket":
          return "1000+ edits";
        case "wgRecommendToolAPIURL":
          return "https://api.wikimedia.org/service/lw/recommendation/api/v1/translation";
        case "wgNamespaceIds":
          return namespaceIds;
        case "wgContentTranslationUnmodifiedMTThresholdForPublish":
          return 95;
        default:
          return null;
      }
    },
  },
  message: (...args) => new mw.Message(...args),
  Message: class {
    static messages = {};

    static getMessages() {
      return self.messages;
    }

    static setMessages(value) {
      self.messages = value;
    }

    constructor(...args) {
      const [key, ...messageArgs] = args;
      this.key = key;
      this.messageArgs = messageArgs;
    }

    toString() {
      return this.key;
    }

    params(param) {
      return { parse: () => this.parse() };
    }

    parse() {
      let message = this.key;

      if (this.key in (self.messages || {})) {
        message = self.messages[this.key];

        for (let i = 0; i < this.messageArgs.length; i++) {
          message = message.replace(`$${i + 1}`, this.messageArgs[i]);
        }
      }

      return message;
    }

    plain() {
      return this.key;
    }
  },
  cookie: {
    get: (key) =>
      [{ key: "GeoIP", value: "FI:Helsinki:60.1756:24.9342:v4" }].find(
        (cookie) => cookie.key === key
      ).value,
  },
  cx: { SiteMapper },
  Title: function (title) {
    this.title = title;

    if (this.title.startsWith("User:")) {
      this.namespace = namespaceIds.user;
    } else {
      this.namespace = namespaceIds[""];
    }

    this.getNamespaceId = function () {
      return this.namespace;
    };
  },
  loader: {
    require: (filename) => {
      if (filename === "ext.cx.articlefilters") {
        return {
          topics: [
            {
              groupId: "culture",
              label: "Culture",
              topics: [
                { topicId: "Art", label: "Art" },
                { topicId: "History", label: "History" },
                { topicId: "Music", label: "Music" },
              ],
            },
            {
              groupId: "science",
              label: "Science",
              topics: [
                { topicId: "Biology", label: "Biology" },
                { topicId: "Physics", label: "Physics" },
                { topicId: "Chemistry", label: "Chemistry" },
              ],
            },
          ],
          regions: [
            {
              id: "Europe",
              label: "Europe",
              countries: [
                { id: "France", label: "France" },
                { id: "Germany", label: "Germany" },
                { id: "Spain", label: "Spain" },
              ],
            },
            {
              id: "Asia",
              label: "Asia",
              countries: [
                { id: "Japan", label: "Japan" },
                { id: "China", label: "China" },
                { id: "India", label: "India" },
              ],
            },
          ],
        };
      }
    },
  },
};

global.mw = mw;
