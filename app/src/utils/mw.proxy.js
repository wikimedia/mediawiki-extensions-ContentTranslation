const Api = function () {};

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
  static isMobileDomainVar = true;
  getPageUrl(language, title) {
    return `https://${language}.wikipedia.org/wiki/${title}`;
  }

  getCXServerUrl(url) {
    return url;
  }

  getCurrentWikiLanguageCode() {
    return "en";
  }

  isMobileDomain() {
    return this.isMobileDomainVar;
  }
}

const mw = {
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
        case "wgNamespaceIds":
          return namespaceIds;
        default:
          return null;
      }
    },
  },
  message: (message) => ({
    toString: () => message,
    params: (param) => ({ parse: () => message }),
    parse: () => message,
    plain: () => message,
  }),
  Message: class {},
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
};

global.mw = mw;
