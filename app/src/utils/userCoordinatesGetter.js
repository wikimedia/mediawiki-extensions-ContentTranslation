// Copied from mw.cx.ui.PageSelectorWidget.js
const getUserCoordinates = () => {
  let geoIP = mw.cookie.get("GeoIP", ""); // GeoIP format: 'FI:Helsinki:60.1756:24.9342:v4'
  const geoIPCoordsMatch = geoIP && geoIP.match(/\d+\.?\d*:\d+\.?\d*/g);
  const geoIPCoords = geoIPCoordsMatch && geoIPCoordsMatch[0].replace(":", "|");
  if (geoIPCoords) {
    return geoIPCoords;
  }
  const ulsGeo = JSON.parse(mw.cookie.get("ULSGeo")); // Outside Wikimedia, ULS stores geolocation info in 'ULSGeo' cookie
  return ulsGeo && ulsGeo.latitude + "|" + ulsGeo.longitude;
};

export { getUserCoordinates };
