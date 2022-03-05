<?php
/**
 * Api module for querying translation statistics for a translator.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiQueryBase;
use ContentTranslation\DateManipulator;
use ContentTranslation\Translation;
use ContentTranslation\Translator;
use Exception;

class ApiQueryTranslatorStats extends ApiQueryBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		if ( isset( $params['translator'] ) ) {
			$user = \User::newFromName( $params['translator'] );
		}

		if ( !$user ) {
			$this->dieWithError( 'apierror-cx-invalidtranslator', 'invalidtranslator' );
		}

		$translator = new Translator( $user );

		try {
			$translatorId = $translator->getGlobalUserId();
		} catch ( Exception $e ) {
			$this->dieWithError( 'apierror-cx-invalidtranslator', 'invalidtranslator' );
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
		// If there is no data, just use zero (represents now)
		// to avoid passing empty array into min method
		$min = $dm->getIntervalIdentifier( !$dates ? 0 : min( $dates ) );
		$max = $dm->getIntervalIdentifier( 0 ); // Now

		$steps = $dm->getSteps( $min, $max );

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
		return [
			'translator' => [
				ApiBase::PARAM_TYPE => 'string',
			]
		];
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=cxtranslatorstats&translator=TranslatorName' =>
				'apihelp-query+cxtranslatorstats-example-1',
		];
	}
}
