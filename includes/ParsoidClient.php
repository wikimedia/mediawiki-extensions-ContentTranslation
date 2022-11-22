<?php
namespace ContentTranslation;

use MediaWiki\Page\PageIdentity;

interface ParsoidClient {

	/**
	 * Transform HTML to wikitext via Parsoid
	 *
	 * @param PageIdentity $page The page the content belongs to
	 * @param string $html The HTML of the page to be transformed
	 *
	 * @return array An array containing the keys 'body', 'headers', and optionally 'error'
	 */
	public function convertHtmlToWikitext(
		PageIdentity $page,
		string $html
	): array;

	/**
	 * Transform wikitext to HTML via Parsoid.
	 *
	 * @param PageIdentity $page The page the content belongs to
	 * @param string $wikitext The wikitext fragment to parse
	 *
	 * @return array An array containing the keys 'body', 'headers', and optionally 'error'
	 */
	public function convertWikitextToHtml(
		PageIdentity $page,
		string $wikitext
	): array;
}
