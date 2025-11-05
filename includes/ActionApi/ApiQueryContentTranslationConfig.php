<?php
declare( strict_types = 1 );

namespace ContentTranslation\ActionApi;

use Exception;
use MediaWiki\Api\ApiQuery;
use MediaWiki\Api\ApiQueryBase;
use MediaWiki\Config\Config;

/**
 * API module to query ContentTranslation configuration
 */
class ApiQueryContentTranslationConfig extends ApiQueryBase {
	public function __construct(
		ApiQuery $query,
		string $moduleName,
		private readonly Config $communityConfig
	) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		try {
			$featuredCollection = $this->communityConfig->get( 'ContentTranslationFeaturedCollection' );
			$responseData = [ 'featuredcollection' => $featuredCollection ];

			$this->getResult()->addValue( [ 'query' ], $this->getModuleName(), $responseData );
		} catch ( Exception ) {
			$this->dieWithError( 'apierror-contenttranslationconfig-load-error' );
		}
	}

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&meta=cxconfig'
				=> 'apihelp-query+cxconfig-example-simple',
		];
	}
}
