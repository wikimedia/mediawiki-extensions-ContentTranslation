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

		$data = array(
			'translations' => Translation::getPublishTrend( $source, $target, $interval ),
			'drafts' => Translation::getDraftTrend( $source, $target, $interval ),
		);

		if ( $target !== null ) {
			// We can give deletion rates for only local wiki. We cannot give
			// deletion stats for all wikis.
			$data['deletions'] = Translation::getDeletionTrend( $interval );
		}

		$out = $this->addMissingDates( $data, $interval );
		$result->addValue( array( 'query' ), 'contenttranslationlangtrend', $out );
	}

	public function addMissingDates( $data, $interval ) {
		$min = PHP_INT_MAX;
		$max = 0;
		foreach ( $data as $column ) {
			foreach ( array_keys( $column ) as $date ) {
				$min = min( $min, strtotime( $date ) );
				$max = max( $max, strtotime( $date ) );
			}
		}

		$counts = array();
		foreach ( array_keys( $data ) as $type ) {
			$counts[$type] = 0;
		}

		$steps = $this->getSteps( $min, $max, $interval );

		$out = array();
		foreach ( $steps as $step ) {
			foreach ( $data as $type => $column ) {
				if ( isset( $column[$step] ) ) {
					$column[$step]['date'] = $step;
					$out[$type][] = $column[$step];
					$counts[$type] = $column[$step]['count'];
				} else {
					$out[$type][] = array(
						'count' => $counts[$type],
						'delta' => 0,
						'date' => $step,
					);
				}
			}
		}

		return $out;
	}

	protected function getSteps( $min, $max, $interval ) {
		$steps = array();
		while ( true ) {
			// Lets not overflow
			$min = min( $min, $max );
			if ( $interval === 'month' ) {
				$uniq = $label = date( 'Y-m', $min );
			} else {
				$uniq = date( 'Y-W', $min );
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
		$allowedParams = array(
			'source' => array(
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			),
			'target' => array(
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_REQUIRED => false,
			),
			'interval' => array(
				ApiBase::PARAM_DFLT => 'week',
				ApiBase::PARAM_TYPE => array( 'week','month' ),
			)
		);
		return $allowedParams;
	}

	protected function getExamplesMessages() {
		return array(
			'action=query&list=contenttranslationlangtrend&source=es&target=ca&interval=week' =>
				'apihelp-query+contenttranslationlangtrend-example-1',
			'action=query&list=contenttranslationlangtrend' =>
				'apihelp-query+contenttranslationlangtrend-example-2',
		);
	}
}
