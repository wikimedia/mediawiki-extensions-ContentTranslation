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

	public function addMissingDates( $data, $interval ) {
		$min = PHP_INT_MAX;
		$max = 0;
		foreach ( $data as $column ) {
			foreach ( array_keys( $column ) as $date ) {
				$min = min( $min, strtotime( $date ) );
			}
		}
		// We need statistics till the end of the ongoing week.
		$unix = wfTimestamp( TS_UNIX );
		$n = 7 - date( 'w', $unix );
		$max = strtotime( "+$n days", $unix );
		$counts = [];
		foreach ( array_keys( $data ) as $type ) {
			$counts[$type] = 0;
		}

		$steps = $this->getSteps( $min, $max, $interval );

		$out = [];
		foreach ( $steps as $step ) {
			foreach ( $data as $type => $column ) {
				if ( isset( $column[$step] ) ) {
					$column[$step]['date'] = $step;
					$out[$type][] = $column[$step];
					$counts[$type] = $column[$step]['count'];
				} else {
					$out[$type][] = [
						'count' => $counts[$type],
						'delta' => 0,
						'date' => $step,
					];
				}
			}
		}

		return $out;
	}

	protected function getSteps( $min, $max, $interval ) {
		$steps = [];
		while ( true ) {
			// Lets not overflow
			$min = min( $min, $max );
			if ( $interval === 'month' ) {
				$uniq = $label = date( 'Y-m', $min );
			} else {
				$uniq = date( 'o-W', $min );
				$label = date( 'Y-m-d', $min );
			}

			$steps[$uniq] = $label;

			if ( $min === $max ) {
				break;
			}
			$min += 3600 * 24;
		}

		return $steps;
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
