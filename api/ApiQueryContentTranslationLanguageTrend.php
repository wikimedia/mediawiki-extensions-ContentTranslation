<?php
/**
 * Api module for querying Content translations trend over a period of time.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Api module for querying ContentTranslation stats.
 *
 * @ingroup API ContentTranslationAPI
 */
use ContentTranslation\Translation;

class ApiQueryContentTranslationLanguageTrend extends ApiQueryBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$result = $this->getResult();
		$params = $this->extractRequestParams();
		$source = $target = null;
		if ( isset( $params['source'] ) && Language::isValidBuiltInCode( $params['source'] ) ) {
			$source = $params['source'];
		}
		if ( isset( $params['target'] ) && Language::isValidBuiltInCode( $params['target'] ) ) {
			$target = $params['target'];
		}
		$interval = $params['interval'];
		$result->addValue(
			array( 'query' ),
			'contenttranslationlangtrend',
			array(
				'translations' =>
					Translation::getPublishTrend( $source, $target, $interval ),
				'drafts' => Translation::getDraftTrend( $source, $target, $interval )
			)
		);
	}

	public function getAllowedParams() {
		$allowedParams = array(
			'source' => array(
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			),
			'target' => array(
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			),
			'interval' => array(
				ApiBase::PARAM_DFLT => 'week',
				ApiBase::PARAM_TYPE => array( 'week','month' ),
			)
		);
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return array(
			'action=query&list=contenttranslationlangtrend&source=es&target=ca&interval=week' =>
				'apihelp-query+contenttranslationlangtrend-example-1',
			'action=query&list=contenttranslationlangtrend' =>
				'apihelp-query+contenttranslationlangtrend-example-2',
		);
	}
}
