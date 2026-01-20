import extractTitleFromPublishedUrl from "./extractTitleFromPublishedUrl";

global.mw = {
  config: {
    get: jest.fn((key) => {
      if (key === "wgArticlePath") {
        return "/wiki/$1";
      }

      if (key === "wgScript") {
        return "/w/index.php";
      }

      return undefined;
    }),
  },
  Title: {
    newFromText: jest.fn(),
  },
};

Object.defineProperty(window, "location", {
  value: new URL("https://example.test/wiki/Main_Page"),
});

describe("extractTitleFromPublishedUrl", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("index.php?title=... returns mw.Title.newFromText(title)", () => {
    extractTitleFromPublishedUrl(
      "https://el.wikipedia.org/wiki/Χρήστης:Admin/Μαρία_Κιουρί"
    );

    expect(mw.Title.newFromText).toHaveBeenCalledWith(
      "Χρήστης:Admin/Μαρία_Κιουρί"
    );
  });

  test("index.php without title param returns null", () => {
    const result = extractTitleFromPublishedUrl(
      "https://el.wikipedia.org/w/index.php?oldid=123"
    );

    expect(mw.Title.newFromText).not.toHaveBeenCalled();
    expect(result).toBeNull();
  });

  test("/wiki/... path calls mw.Title.newFromText(rawTitle)", () => {
    extractTitleFromPublishedUrl("https://el.wikipedia.org/wiki/Σαμσίρ");

    expect(mw.Title.newFromText).toHaveBeenCalledWith("Σαμσίρ");
  });

  test("pretty path decodes percent-encoding before calling mw.Title.newFromText", () => {
    extractTitleFromPublishedUrl("https://el.wikipedia.org/wiki/Foo%20bar");

    expect(mw.Title.newFromText).toHaveBeenCalledWith("Foo bar");
  });

  test("pretty path ignores query string", () => {
    extractTitleFromPublishedUrl(
      "https://el.wikipedia.org/wiki/Foo%20bar?utm=1&source=publish"
    );

    expect(mw.Title.newFromText).toHaveBeenCalledWith("Foo bar");
  });

  test("protocol-relative URL (//...) is resolved using window.location protocol", () => {
    extractTitleFromPublishedUrl(
      "//el.mediawiki.mwdd.localhost:80/wiki/Foo_bar"
    );

    expect(mw.Title.newFromText).toHaveBeenCalledWith("Foo_bar");
  });

  test("wgArticlePath prefix must match; mismatch returns null", () => {
    const result = extractTitleFromPublishedUrl("//mywiki.com/my-wiki/Foo_bar");

    expect(mw.Title.newFromText).not.toHaveBeenCalled();
    expect(result).toBeNull();
  });

  test("wgScript must match exactly; mismatch returns null even with title param", () => {
    const result = extractTitleFromPublishedUrl(
      "//mywiki.com/www/index.php?title=Foo_bar"
    );

    expect(mw.Title.newFromText).not.toHaveBeenCalled();
    expect(result).toBeNull();
  });
});
