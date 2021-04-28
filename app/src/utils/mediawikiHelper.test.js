import { getUserCoordinates } from "./mediawikiHelper";

describe("userCoordinatesGetter test", () => {
  it("getUserCoordinates", () => {
    // mocked GeoIP cookie value: FI:Helsinki:60.1756:24.9342:v4
    expect(getUserCoordinates()).toEqual("60.1756|24.9342");
  });
});
