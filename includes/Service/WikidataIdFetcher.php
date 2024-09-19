<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\SiteMapper;
use FormatJson;
use MediaWiki\Http\HttpRequestFactory;

class WikidataIdFetcher {
	private HttpRequestFactory $httpRequestFactory;

	public function __construct( HttpRequestFactory $httpRequestFactory ) {
		$this->httpRequestFactory = $httpRequestFactory;
	}

	/**
	 * @param string $title
	 * @return array
	 */
	protected function getQuery( string $title ): array {
		return [
			'action' => 'query',
			'format' => 'json',
			'formatversion' => 2,
			'prop' => 'pageprops',
			'titles' => $title
		];
	}

	public function getWikidataId( string $title, string $language ): ?string {
		$query = $this->getQuery( $title );

		$page = null;

		$baseUrl = SiteMapper::getApiURL( $language );
		$url = wfAppendQuery( $baseUrl, $query );

		try {
			$response = $this->httpRequestFactory->get( $url, [], __METHOD__ );
		} catch ( \Exception $exception ) {
			return null;
		}

		if ( $response === null ) {
			return null;
		}

		$response = FormatJson::decode( $response, true );

		if ( isset( $response['query']['pages'] ) ) {
			$pages = array_values( $response['query']['pages'] );
			if ( count( $pages ) === 1 ) {
				$page = $pages[0];
			}
		}

		if ( isset( $page['missing'] ) ) {
			// Page does not exist. Nothing to do.
			return null;
		}

		return $page['pageprops']['wikibase_item'] ?? null;
	}
}
