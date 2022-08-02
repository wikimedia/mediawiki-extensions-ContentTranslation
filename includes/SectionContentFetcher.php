<?php

namespace ContentTranslation;

use FormatJson;
use MediaWiki\Http\HttpRequestFactory;

class SectionContentFetcher {
	/**
	 * @var HttpRequestFactory
	 */
	private $httpRequestFactory;

	/**
	 * @param HttpRequestFactory $httpRequestFactory
	 */
	public function __construct( HttpRequestFactory $httpRequestFactory ) {
		$this->httpRequestFactory = $httpRequestFactory;
	}

	public function getSectionHtml( string $title, string $language, $sectionNumber ): ?string {
		$query = [
			'action' => 'parse',
			'format' => 'json',
			'formatversion' => 2,
			'prop' => 'text',
			'section' => $sectionNumber,
			'page' => $title,
			'wrapoutputclass' => '',
			'disablelimitreport' => true,
			'disableeditsection' => true,
			'disablestylededuplication' => true,
			'disabletoc' => true,
		];

		$baseUrl = SiteMapper::getApiURL( $language );

		$url = wfAppendQuery( $baseUrl, $query );

		try {
			$response = $this->httpRequestFactory->get( $url );
		} catch ( \Exception $exception ) {
			return null;
		}

		if ( $response === null ) {
			return null;
		}

		$json = FormatJson::decode( $response, true );
		return $json['parse']['text'] ?? null;
	}
}
