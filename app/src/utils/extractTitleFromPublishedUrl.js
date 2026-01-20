/**
 * Extract a MediaWiki page title from a published target URL.
 * If the given URL is relative (e.g. "//el.mediawiki.mwdd.localhost:80/wiki/Foo_bar"), the protocol of the
 * location's URL is added. Also works for URLs using: /w/index.php?title=Foo_bar.
 *
 * This method only works if the current wiki’s wgArticlePath and wgScript configuration parameters match
 * those of the published URL's wiki. In production, all wikis share the same wgArticlePath and wgScript
 * configuration, so this should work as expected.
 *
 * @param {string} publishedUrl e.g. "https://bn.wikipedia.org/wiki/User:Admin/Marie_Curie"
 * @return {mw.Title|null} e.g. Title object for "User:Admin/Marie_Curie" (DB-key form) or null if not a page view URL
 */
export default (publishedUrl) => {
  // Make protocol-relative URLs absolute
  const url = new URL(publishedUrl, location.href);

  const articlePath = mw.config.get("wgArticlePath"); // e.g. "/wiki/$1"
  const scriptPath = mw.config.get("wgScript"); // e.g. "/w/index.php"

  // 1) Handle index.php?title=...
  if (url.pathname === scriptPath) {
    const titleUrlParameter = url.searchParams.get("title");

    if (titleUrlParameter) {
      return mw.Title.newFromText(titleUrlParameter);
    }

    return null;
  }

  // 2) Handle "pretty" paths like /wiki/Foo (wgArticlePath)
  // Convert wgArticlePath to a prefix by splitting at $1 (e.g. /wiki/$1 -> /wiki/
  const [prefix /*, suffix*/] = articlePath.split("$1");

  if (prefix && url.pathname.startsWith(prefix)) {
    let raw = url.pathname.slice(prefix.length);

    // MediaWiki URLs are percent-encoded; decode, and ignore query
    raw = decodeURIComponent(raw);

    return mw.Title.newFromText(raw);
  }

  return null;
};
