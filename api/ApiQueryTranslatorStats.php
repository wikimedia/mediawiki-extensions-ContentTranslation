<?php
/**
 * Api module for querying translation statistics for a translator.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\Translation;
use ContentTranslation\Translator;

/**
 * @ingroup API ContentTranslationAPI
 */
class ApiQueryTranslatorStats extends ApiQueryBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$result = $this->getResult();
		$params = $this->extractRequestParams();
		$user = $this->getUser();
		if ( isset( $params['translator'] ) ) {
			$user = \User::newFromName( $params['translator'] );
		}
		$translator = new Translator( $user );
		$translatorId =  $translator->getGlobalUserId();
		if ( !$translatorId ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-cx-invalidtranslator', 'invalidtranslator' );
			} else {
				$this->dieUsage( 'Invalid translator name', 'invalidtranslator' );
			}
		}
		$publishedStats = Translation::getTrendByStatus(
			null, null, 'published', 'month', $translatorId
		);
		// TODO: The $publishedStats does not contain data for all months,
		// if there is not translation in that month. ApiQueryContentTranslationLanguageTrend
		// has utility methods to fill it. But it is not important for the graph we render
		// from the output of this data.
		$result = [
			'translator' => $user->getName(),
			'translatorId' => $translatorId,
			'publishTrend' => $publishedStats,
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		$allowedParams = [
			'translator' => [
				ApiBase::PARAM_TYPE => 'string',
			]
		];
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=cxtranslatorstats&translator=TranslatorName' =>
				'apihelp-query+cxtranslatorstats-example-1',
		];
	}
}
