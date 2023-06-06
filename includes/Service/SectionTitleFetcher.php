<?php

declare( strict_types=1 );

namespace ContentTranslation\Service;

use ContentTranslation\SiteMapper;
use FormatJson;
use MediaWiki\Http\HttpRequestFactory;
use Title;

class SectionTitleFetcher {

	private HttpRequestFactory $httpRequestFactory;

	public function __construct( HttpRequestFactory $httpRequestFactory ) {
		$this->httpRequestFactory = $httpRequestFactory;
	}

	/**
	 * Given a page title and a target language code, this method fetches the
	 * target page sections using the MediaWiki Action Api and returns an array containing
	 * the titles for all the first-level page sections, indexed by their section numbers.
	 *
	 * If the HTTP request for fetching the section titles fails, the method returns an
	 * empty array.
	 *
	 * If the sections cannot be successfully retrieved from the API (i.e. when the request is
	 * completed but the requested page doesn't exist), the method returns null.
	 *
	 * @param Title $pageTitle
	 * @param string $targetLanguage
	 * @return string[]|null e.g. [ 1 => "Section 1", 2 => "Section 2" ]
	 */
	public function fetchSectionTitles( Title $pageTitle, string $targetLanguage ): ?array {
		$params = [
			'action' => 'parse',
			'page' => $pageTitle->getPrefixedDBKey(),
			'prop' => 'sections',
			'format' => 'json',
			'formatversion' => 2
		];
		// Example URL:
		// https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Football&prop=sections&formatversion=2
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
				$out[(int)$section['number']] = $section['line'];
			}
		}

		return $out;
	}
}
