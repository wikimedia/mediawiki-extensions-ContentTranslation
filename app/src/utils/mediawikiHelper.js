/**
 *  MediaWiki related helper methods
 */

const siteMapper = new mw.cx.SiteMapper();
const getUrl = mw.util.getUrl;

const getUserCoordinates = () => {
  let geoIP = mw.cookie.get("GeoIP", ""); // GeoIP format: 'FI:Helsinki:60.1756:24.9342:v4'

  const geoIPCoordsMatch = geoIP && geoIP.match(/\d+\.?\d*:\d+\.?\d*/g);
  const geoIPCoords = geoIPCoordsMatch && geoIPCoordsMatch[0].replace(":", "|");

  if (geoIPCoords) {
    return geoIPCoords;
  }

  // Outside Wikimedia, ULS stores geolocation info in 'ULSGeo' cookie
  const ulsGeo = JSON.parse(mw.cookie.get("ULSGeo"));

  return ulsGeo && ulsGeo.latitude + "|" + ulsGeo.longitude;
};

const isDesktopSite = !mw.config.get("wgMFMode");

export { siteMapper, getUrl, getUserCoordinates, isDesktopSite };
