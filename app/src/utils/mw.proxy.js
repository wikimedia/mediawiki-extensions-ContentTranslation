const Api = function() {};

const toQueryStringValue = value => {
  return encodeURIComponent(
    typeof value === "object" ? value.join("|") : value
  );
};

Api.prototype.ajax = function(params) {
  params["origin"] = "*";
  const q = Object.keys(params)
    .map(key => {
      return `${key}=${toQueryStringValue(params[key])}`;
    })
    .join("&");

  return fetch(`https://en.wikipedia.org/w/api.php?${q}`).then(r => r.json());
};

class SiteMapper {
  getPageUrl(language, title) {
    return `https://${language}.wikipedia.org/wiki/${title}`;
  }

  getCXServerUrl(url) {
    return url;
  }
}

const mw = {
  Api,
  util: {},
  config: {
    get: name => {
      switch (name) {
        case "wgUserName":
          return "MWProxyUser";
        case "wgUserLanguage":
          return "en";
        case "wgPageName":
          return "Special:ContentTranslation";
        default:
          return null;
      }
    }
  },
  message: message => ({
    toString: () => message,
    params: param => ({ parse: () => message }),
    parse: () => message
  }),
  Message: class {},
  cookie: {
    get: key =>
      [{ key: "GeoIP", value: "FI:Helsinki:60.1756:24.9342:v4" }].find(
        cookie => cookie.key === key
      ).value
  },
  cx: { SiteMapper }
};

global.mw = mw;
