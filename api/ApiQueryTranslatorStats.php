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
use ContentTranslation\DateManipulator;

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
		$translatorId = $translator->getGlobalUserId();
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

		$trend = $this->addMissingMonths( $publishedStats );

		$result = [
			'translator' => $user->getName(),
			'translatorId' => $translatorId,
			'publishTrend' => $trend,
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	private function addMissingMonths( $data ) {
		$dates = array_keys( $data );

		$dm = new DateManipulator( 'month' );
		$min = $dm->getIntervalIdentifier( min( $dates ) );
		$max = $dm->getIntervalIdentifier( 0 ); // Now

		$steps = $dm->getSteps( $min, $max, 'month' );

		$out = [];
		$count = 0;

		foreach ( $steps as $datetime ) {
			$id = $datetime->format( 'U' );
			$date = $datetime->format( 'Y-m-d' );

			if ( isset( $data[ $id ] ) ) {
				$out[ $date ] = $data[ $id ];
				$count = $data[ $id ][ 'count' ];
			} else {
				$out[ $date ] = [
					'count' => $count,
					'delta' => 0
				];
			}
		}

		return $out;
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
