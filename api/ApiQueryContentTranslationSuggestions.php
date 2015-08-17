<?php
/**
 * Api module for querying translation suggestions.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\Translator;
use ContentTranslation\SuggestionListManager;

/**
 * Api module for querying translation suggestions.
 *
 * @ingroup API ContentTranslationAPI
 */
class ApiQueryContentTranslationSuggestions extends ApiQueryGeneratorBase {
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
		$config = $this->getConfig();
		if ( !$config->get( 'ContentTranslationEnableSuggestions' ) ) {
			$this->dieUsage( 'Suggestions not enabled for this wiki', 'suggestionsdisabled' );
		}
		$params = $this->extractRequestParams();
		$result = $this->getResult();
		$user = $this->getUser();

		if ( $params['from'] === $params['to'] ) {
			$this->dieUsage(
				'Source and target languages cannot be the same. Use from, to API params.',
				'invalidparam'
			);
		}

		$translator = new Translator( $user );
		$manager = new SuggestionListManager();
		$data = $manager->getRelevantSuggestions( $translator, $params['from'], $params['to'] );

		$lists = array();
		foreach ( $data['lists'] as $list ) {
			$lists[$list->getId()] = array(
				'displayName' => $list->getDisplayNameMessage( $this->getContext() )->text(),
				'name' => $list->getName(),
				'type' => $list->getType(),
				'suggestions' => array(),
			);
			foreach ( $data['suggestions'] as $suggestion ) {
				$lists[$suggestion->getListId()]['suggestions'][] = array(
					'title' => $suggestion->getTitle()->getPrefixedText(),
					'sourceLanguage' => $suggestion->getSourceLanguage(),
					'targetLanguage' => $suggestion->getTargetLanguage(),
					'listId' => $suggestion->getListId(),
				);
			}
		}

		$result->addValue( array( 'query', $this->getModuleName() ), 'lists', $lists );
	}

	public function getAllowedParams() {
		$allowedParams = array(
			'from' => array(
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => true,
			),
			'to' => array(
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => true,
			),
		);
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return array(
			'action=query&list=contenttranslationsuggestions&from=en&to=es' =>
				'apihelp-query+contenttranslationsuggestions-example-1',
		);
	}
}
