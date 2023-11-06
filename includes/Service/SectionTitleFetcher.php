<?php

declare( strict_types=1 );

namespace ContentTranslation\Service;

use ContentTranslation\SiteMapper;
use FormatJson;
use InvalidArgumentException;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Title\Title;

class SectionTitleFetcher {

	private HttpRequestFactory $httpRequestFactory;

	public function __construct( HttpRequestFactory $httpRequestFactory ) {
		$this->httpRequestFactory = $httpRequestFactory;
	}

	/**
	 * Given a target language code and a page title or a revision id (at least one of them
	 * should be provided), this method fetches the target page sections using the MediaWiki
	 * Action Api and returns an array containing the titles for all the first-level page sections,
	 * indexed by their section numbers.
	 *
	 * If the HTTP request for fetching the section titles fails, the method returns an
	 * empty array.
	 *
	 * If the sections cannot be successfully retrieved from the API (i.e. when the request is
	 * completed but the requested page doesn't exist), the method returns null.
	 *
	 * If both page title and page revision are provided, the page revision is ignored and only
	 * the page title is used.
	 *
	 * @param string $targetLanguage
	 * @param Title|null $pageTitle The title of the page
	 * @param int|null $revision
	 * @return string[]|null e.g. [ 1 => "Section 1", 2 => "Section 2" ]
	 */
	public function fetchSectionTitles( string $targetLanguage, ?Title $pageTitle, ?int $revision = null ): ?array {
		if ( !$pageTitle && !$revision ) {
			throw new InvalidArgumentException( 'Either page title or page revision should be provided' );
		}

		$params = [
			'action' => 'parse',
			'prop' => 'sections',
			'format' => 'json',
			'formatversion' => 2
		];

		if ( $pageTitle ) {
			$params['page'] = $pageTitle->getPrefixedDBKey();
		} else {
			$params['oldid'] = $revision;
		}
		// Example URLs:
		// https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=sections&formatversion=2&page=Football
		// https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=sections&formatversion=2&oldid=1161269327
		$url = SiteMapper::getApiURL( $targetLanguage, $params );

		try {
			$response = $this->httpRequestFactory->get( $url );
		} catch ( \Exception $exception ) {
			return [];
		}

		if ( !$response ) {
			return null;
		}
		$json = FormatJson::decode( $response, true );

		// if an invalid title is provided the response is a json containing an error
		// (e.g. { error: { code "missingtitle" } }
		// successful responses are json objects with "parse.sections" property set
		if ( !isset( $json['parse']['sections'] ) ) {
			return null;
		}

		$sections = $json['parse']['sections'];

		$out = [];
		foreach ( $sections as $section ) {
			if ( $section['toclevel'] === 1 ) {
				$out[(int)$section['index']] = $section['line'];
			}
		}

		return $out;
	}
}
