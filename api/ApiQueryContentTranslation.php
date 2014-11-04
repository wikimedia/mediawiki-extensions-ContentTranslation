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
		$translator = new ContentTranslation\Translator( User::newFromName( $params['user'] ) );
		$translations = $translator->getAllTranslations();
		$result = $this->getResult();
		$result->addValue(
			array( 'query', 'contenttranslation' ),
			'translator',
			$params['user']
		);
		$result->addValue(
			array( 'query', 'contenttranslation' ),
			'translations',
			$translations
		);
		$result->addValue(
			array( 'query', 'contenttranslation' ),
			'resultsize',
			count( $translations )
		);
	}

	public function getAllowedParams() {
		$allowedParams = array(
			'user' => array(
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => true,
			),
			'limit' => array(
				ApiBase::PARAM_DFLT => 10,
				ApiBase::PARAM_TYPE => 'limit',
				ApiBase::PARAM_MIN => 1,
				ApiBase::PARAM_MAX => ApiBase::LIMIT_BIG1,
				ApiBase::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			),
		);
		return $allowedParams;
	}

	public function getParamDescription() {
		$paramDescs = array(
			'user' => 'Username of the translator.',
		);

		return $paramDescs;
	}

	public function getDescription() {
		return 'Query Content Translation database for translations.';
	}

	protected function getExamples() {
		return array(
			'api.php?action=query&list=contenttranslation&user=Santhosh',
		);
	}
}
