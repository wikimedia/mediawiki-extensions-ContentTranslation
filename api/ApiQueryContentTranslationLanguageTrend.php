<?php
/**
 * Api module for querying Content translations trend over a period of time.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

/**
 * Api module for querying ContentTranslation stats.
 */

use ApiBase;
use ApiQueryBase;
use ContentTranslation\DateManipulator;
use ContentTranslation\Translation;
use Language;

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

		$data = [
			'translations' => Translation::getTrendByStatus(
				$source, $target, 'published', $interval, null
			),
			'drafts' => Translation::getTrendByStatus( $source, $target, 'draft', $interval, null ),
		];

		if ( $target !== null ) {
			// We can give deletion rates for only local wiki. We cannot give
			// deletion stats for all wikis.
			$data['deletions'] = Translation::getDeletionTrend( $interval );
		}

		$out = $this->addMissingDates( $data, $interval );
		$result->addValue( [ 'query' ], 'contenttranslationlangtrend', $out );
	}

	/**
	 * @param array $data
	 * @param string $interval
	 * @return array
	 */
	public function addMissingDates( $data, $interval ) {
		$dates = call_user_func_array( 'array_merge', array_map( 'array_keys', $data ) );
		if ( $dates === [] ) {
			return [];
		}

		$dm = new DateManipulator( $interval );
		$min = $dm->getIntervalIdentifier( min( $dates ) );
		$max = $dm->getIntervalIdentifier( 0 ); // 0 means now

		$steps = $dm->getSteps( $min, $max );

		$counts = [];
		foreach ( array_keys( $data ) as $type ) {
			$counts[$type] = 0;
		}

		$out = [];
		foreach ( $steps as $datetime ) {
			foreach ( $data as $type => $column ) {
				$id = $datetime->format( 'U' );
				$date = $datetime->format( 'Y-m-d' );

				if ( isset( $column[$id] ) ) {
					$column[$id]['date'] = $date;
					$out[$type][] = $column[$id];
					// @phan-suppress-next-line PhanTypeInvalidDimOffset
					$counts[$type] = $column[$id]['count'];
				} else {
					$out[$type][] = [
						'count' => $counts[$type],
						'delta' => 0,
						'date' => $date,
					];
				}
			}
		}

		return $out;
	}

	public function getAllowedParams() {
		$allowedParams = [
			'source' => [
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			],
			'target' => [
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			],
			'interval' => [
				ApiBase::PARAM_DFLT => 'week',
				ApiBase::PARAM_TYPE => [ 'week','month' ],
			]
		];
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=contenttranslationlangtrend&source=es&target=ca&interval=week' =>
				'apihelp-query+contenttranslationlangtrend-example-1',
			'action=query&list=contenttranslationlangtrend' =>
				'apihelp-query+contenttranslationlangtrend-example-2',
		];
	}
}
