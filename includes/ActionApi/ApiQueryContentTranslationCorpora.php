<?php
/**
 * Api module for querying Content Translation parallel corpora.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiQuery;
use ApiQueryBase;
use ContentTranslation\CorporaLookup;
use Sanitizer;
use Wikimedia\ParamValidator\ParamValidator;

/**
 * Api module for querying Content Translation parallel corpora.
 */
class ApiQueryContentTranslationCorpora extends ApiQueryBase {
	protected $types = [
		CorporaLookup::TYPE_SOURCE,
		CorporaLookup::TYPE_MT,
		CorporaLookup::TYPE_USER,
	];
	/** @var CorporaLookup */
	private $corporaLookup;

	public function __construct( ApiQuery $queryModule, $moduleName, CorporaLookup $corporaLookup ) {
		parent::__construct( $queryModule, $moduleName );

		$this->corporaLookup = $corporaLookup;
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$result = $this->getResult();

		$data = $this->corporaLookup->getByTranslationId( $params['translationid'] );
		$sections = $data[ 'sections' ];

		$types = array_flip( $params['types'] );
		$sections = $this->filterTypes( $sections, $types );

		if ( $params['striphtml'] ) {
			$sections = $this->stripHtml( $sections );
		}

		$result->addValue( [ 'query', $this->getModuleName() ], 'sections', $sections );
	}

	protected function filterTypes( array $data, array $prop ) {
		foreach ( $data as $id => $section ) {
			foreach ( $this->types as $type ) {
				if ( !isset( $prop[$type] ) ) {
					unset( $data[$id][$type] );
				}
			}
		}

		return $data;
	}

	protected function stripHtml( array $data ) {
		foreach ( $data as $id => $section ) {
			foreach ( $this->types as $type ) {
				if ( isset( $data[$id][$type] ) ) {
					$data[$id][$type]['content'] = Sanitizer::stripAllTags( $data[$id][$type]['content'] );
				}
			}
		}

		return $data;
	}

	public function getAllowedParams() {
		$params = [
			'translationid' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'striphtml' => [
				ParamValidator::PARAM_TYPE => 'boolean',
				ParamValidator::PARAM_DEFAULT => false,
			],
			'types' => [
				ParamValidator::PARAM_TYPE => [ 'source', 'mt', 'user' ],
				ParamValidator::PARAM_DEFAULT => 'source|mt|user',
				ParamValidator::PARAM_ISMULTI => true,
			],
		];

		return $params;
	}
}
