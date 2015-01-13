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
		$user = $this->getUser();

		if ( $params['sourcetitle'] && $params['from'] && $params['to'] ) {
			return $this->find(
				$params['sourcetitle'],
				$params['from'],
				$params['to']
			);
		}
		if ( $params['translationid'] ) {
			$translator = new ContentTranslation\Translator( $user );
			$translation = $translator->getTranslation( $params['translationid'] );
			if ( $translation !== null ) {
				$result->addValue(
					array( 'query', 'contenttranslation' ),
					'translation',
					$translation->translation
				);
			} else {
				$this->dieUsage( 'Draft does not exist', $params['translationid']  );
			}
		} else {
			$translator = new ContentTranslation\Translator( $user );
			$translations = $translator->getAllTranslations();
			$result->addValue(
				array( 'query', 'contenttranslation' ),
				'translations',
				$translations
			);
		}
	}

	/**
	 * Find a translation with any status for the given language pair and title.
	 */
	public function find( $sourceTitle, $sourceLanguage, $targetLanguage ) {
		$result = $this->getResult();
		$translation = ContentTranslation\Translation::find(
			$sourceLanguage,
			$targetLanguage,
			$sourceTitle
		);
		if ( $translation !== null ) {
			$translator = $translation->translation['lastUpdatedTranslator'];
			$translation->translation['translatorName'] =
				ContentTranslation\GlobalUser::newFromId( $translator )->getName();
			$result->addValue(
				array( 'query', 'contenttranslation' ),
				'translation', $translation->translation
			);
		}
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		$allowedParams = array(
			'translationid' => array(
				ApiBase::PARAM_TYPE => 'string',
			),
			'from' => array(
				ApiBase::PARAM_TYPE => 'string',
			),
			'to' => array(
				ApiBase::PARAM_TYPE => 'string',
			),
			'sourcetitle' => array(
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
			'action=query&list=contenttranslation' =>
				'apihelp-query+contenttranslation-example-1',
			'action=query&list=contenttranslation&translationid=94' =>
				'apihelp-query+contenttranslation-example-2',
			'action=query&list=contenttranslation&from=en&to=es&sourcetitle=Hibiscus' =>
				'apihelp-query+contenttranslation-example-3',
		);
	}
}
