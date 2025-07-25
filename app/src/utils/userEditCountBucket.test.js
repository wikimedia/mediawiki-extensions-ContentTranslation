import { getUserEditCountBucket } from "./userEditCountBucket";

describe("getUserEditCountBucket", () => {
  it.each([
    [null, null],
    [0, "0 edits"],
    [1, "1-4 edits"],
    [4, "1-4 edits"],
    [5, "5-99 edits"],
    [99, "5-99 edits"],
    [100, "100-999 edits"],
    [999, "100-999 edits"],
    [1000, "1000+ edits"],
    [15000, "1000+ edits"],
  ])("returns correct bucket for editCount=%s", (editCount, expected) => {
    expect(getUserEditCountBucket(editCount)).toBe(expected);
  });
});

global.fetch = jest.fn();
global.mw = { log: { error: jest.fn() } };

describe("fetchGlobalEditCount", () => {
  it("fetches and caches the global edit count", async () => {
    jest.resetModules();
    const { fetchGlobalEditCount } = await import("./userEditCountBucket");

    const mockResponse = { query: { globaluserinfo: { editcount: 123 } } };

    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });

    const result1 = await fetchGlobalEditCount("TestUser");
    expect(result1).toBe(123);
    expect(global.fetch).toHaveBeenCalledTimes(1);

    const result2 = await fetchGlobalEditCount("TestUser");
    expect(result2).toBe(123);
    expect(global.fetch).toHaveBeenCalledTimes(1); // Should still be 1: cached
  });

  it("handles fetch error gracefully and logs it", async () => {
    jest.resetModules();
    const { fetchGlobalEditCount } = await import("./userEditCountBucket");

    global.fetch.mockRejectedValueOnce(new Error("Network error"));

    const result = await fetchGlobalEditCount("TestUser");

    expect(result).toBeUndefined();
    expect(global.mw.log.error).toHaveBeenCalledWith(
      "Error while fetching global edit count for user. ",
      expect.any(Error)
    );
  });
});
