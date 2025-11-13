<?php
declare( strict_types = 1 );

namespace ContentTranslation\ActionApi;

use Exception;
use MediaWiki\Api\ApiQuery;
use MediaWiki\Api\ApiQueryBase;
use MediaWiki\Config\Config;
use MediaWiki\WikiMap\WikiMap;

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
			$featuredCollectionDescription =
				$this->communityConfig->get( 'ContentTranslationFeaturedCollectionDescription' );
			$featuredCollectionLink = $this->communityConfig->get( 'ContentTranslationFeaturedCollectionLink' );

			$communityNameMsg = $this->msg( 'project-localized-name-' . WikiMap::getCurrentWikiId() );
			$communityName = $communityNameMsg->IsDisabled() ? null : $communityNameMsg->text();

			$responseData = [
				'featuredcollectionname' => $featuredCollection,
				'featuredcollectioncommunityname' => $communityName,
				'featuredcollectiondescription' => $featuredCollectionDescription,
				'featuredcollectionlink' => $featuredCollectionLink
			];

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
