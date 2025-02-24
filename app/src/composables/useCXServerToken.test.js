import useCXServerToken from "@/composables/useCXServerToken";
import siteApi from "@/wiki/mw/api/site";

jest.mock("@/wiki/mw/api/site", () => ({
  fetchCXServerToken: jest.fn(),
}));

describe("useCXServerToken tests", () => {
  const getCXServerToken = useCXServerToken();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches and returns a new token when no token exists", async () => {
    const mockToken = { jwt: "test-jwt", age: 3600 };
    siteApi.fetchCXServerToken.mockResolvedValue(mockToken);

    const jwt = await getCXServerToken();
    expect(siteApi.fetchCXServerToken).toHaveBeenCalled();
    expect(jwt).toBe("test-jwt");
  });

  it("returns the existing token if it's valid", async () => {
    const jwt = await getCXServerToken();
    expect(siteApi.fetchCXServerToken).not.toHaveBeenCalled();
    expect(jwt).toBe("test-jwt");
  });

  it("fetches a new token when the existing one is expired", async () => {
    // Mock the Date.now() to return a future value, to "reset" the token
    const futureTime = Math.floor(Date.now() / 1000) + 5000;
    jest.spyOn(Date, "now").mockImplementation(() => futureTime * 1000);
    const newToken = { jwt: "updated-jwt", age: 3600 };
    siteApi.fetchCXServerToken.mockResolvedValue(newToken);

    const jwt = await getCXServerToken();
    expect(siteApi.fetchCXServerToken).toHaveBeenCalled();
    expect(jwt).toBe("updated-jwt");
  });

  it("returns an empty token when the API request fails", async () => {
    // Mock the Date.now() to return a future value, to "reset" the token
    const futureTime = Math.floor(Date.now() / 1000) + 5000;
    jest.spyOn(Date, "now").mockImplementation(() => futureTime * 1000);

    siteApi.fetchCXServerToken.mockRejectedValue("token-impossible");
    const jwt = await getCXServerToken();
    expect(siteApi.fetchCXServerToken).toHaveBeenCalled();
    expect(jwt).toBe("");
  });
});
