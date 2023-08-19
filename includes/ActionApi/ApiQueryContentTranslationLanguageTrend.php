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

use ApiQueryBase;
use ContentTranslation\DateManipulator;
use ContentTranslation\Translation;
use MediaWiki\Languages\LanguageNameUtils;
use Wikimedia\ParamValidator\ParamValidator;

class ApiQueryContentTranslationLanguageTrend extends ApiQueryBase {

	/** @var LanguageNameUtils */
	private $languageNameUtils;

	public function __construct(
		$query,
		$moduleName,
		LanguageNameUtils $languageNameUtils
	) {
		parent::__construct( $query, $moduleName );
		$this->languageNameUtils = $languageNameUtils;
	}

	public function execute() {
		$result = $this->getResult();
		$params = $this->extractRequestParams();
		$source = $target = null;
		if ( isset( $params['source'] ) && $this->languageNameUtils->isValidBuiltInCode( $params['source'] ) ) {
			$source = $params['source'];
		}
		if ( isset( $params['target'] ) && $this->languageNameUtils->isValidBuiltInCode( $params['target'] ) ) {
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
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => false,
			],
			'target' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => false,
			],
			'interval' => [
				ParamValidator::PARAM_DEFAULT => 'week',
				ParamValidator::PARAM_TYPE => [ 'week', 'month' ],
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
