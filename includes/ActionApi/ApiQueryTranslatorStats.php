<?php
/**
 * Api module for querying translation statistics for a translator.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ContentTranslation\DateManipulator;
use ContentTranslation\Service\UserService;
use ContentTranslation\Translation;
use Exception;
use MediaWiki\Api\ApiQuery;
use MediaWiki\Api\ApiQueryBase;
use MediaWiki\User\User;
use Wikimedia\ParamValidator\ParamValidator;

class ApiQueryTranslatorStats extends ApiQueryBase {

	private UserService $userService;

	public function __construct(
		ApiQuery $query,
		string $moduleName,
		UserService $userService
	) {
		parent::__construct( $query, $moduleName );
		$this->userService = $userService;
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		if ( isset( $params['translator'] ) ) {
			$user = User::newFromName( $params['translator'] );
		}

		if ( !$user ) {
			$this->dieWithError( 'apierror-cx-invalidtranslator', 'invalidtranslator' );
		}

		try {
			$translatorId = $this->userService->getGlobalUserId( $user );
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

	private function addMissingMonths( array $data ): array {
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

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			'translator' => [
				ParamValidator::PARAM_TYPE => 'string',
			]
		];
	}

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&list=cxtranslatorstats&translator=TranslatorName' =>
				'apihelp-query+cxtranslatorstats-example-1',
		];
	}
}
