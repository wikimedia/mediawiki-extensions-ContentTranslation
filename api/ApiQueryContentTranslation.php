<?php
/**
 * Api module for querying Content translations.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Api module for querying ContentTranslation.
 *
 * @ingroup API ContentTranslationAPI
 */
class ApiQueryContentTranslation extends ApiQueryGeneratorBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$this->run();
	}

	public function executeGenerator( $resultPageSet ) {
		$this->run( $resultPageSet );
	}

	/**
	 * @param ApiPageSet $resultPageSet
	 * TODO: Use the limit parameter
	 */
	private function run( $resultPageSet = null ) {
		$params = $this->extractRequestParams();
		$result = $this->getResult();

		if ( $params['translationid'] ) {
			$translation = ContentTranslation\Translation::newFromId( $params['translationid'] );
			$result->addValue(
				array( 'query', 'contenttranslation' ),
				'translations',
				$translation
			);
		} else {
			if ( !isset( $params['user'] ) ) {
				$this->dieUsageMsg( array( 'missingparam', 'user' ) );
			}
			$translator = new ContentTranslation\Translator( User::newFromName( $params['user'] ) );
			$translations = $translator->getAllTranslations();
			$result->addValue(
				array( 'query', 'contenttranslation' ),
				'translations',
				$translations
			);
			$result->addValue(
				array( 'query', 'contenttranslation' ),
				'translator',
				$params['user']
			);
		}
	}

	public function getAllowedParams() {
		$allowedParams = array(
			'user' => array(
				ApiBase::PARAM_TYPE => 'string',
			),
			'translationid' => array(
				ApiBase::PARAM_TYPE => 'string',
			),/*
			'limit' => array(
				ApiBase::PARAM_DFLT => 10,
				ApiBase::PARAM_TYPE => 'limit',
				ApiBase::PARAM_MIN => 1,
				ApiBase::PARAM_MAX => ApiBase::LIMIT_BIG1,
				ApiBase::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			),*/
		);
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return array(
			'action=query&list=contenttranslation&user=Santhosh' =>
				'apihelp-query+contenttranslation-example-1',
			'action=query&list=contenttranslation&translationid=94' =>
				'apihelp-query+contenttranslation-example-2',
		);
	}
}
