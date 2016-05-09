<?php
/**
 * Api module for querying Content Translation parallel corpora.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\Database;
use ContentTranslation\CorporaLookup;

/**
 * Api module for querying Content Translation parallel corpora.
 *
 * @ingroup API ContentTranslationAPI
 */
class ApiQueryContentTranslationCorpora extends ApiQueryBase {
	protected $types = [
		CorporaLookup::TYPE_SOURCE,
		CorporaLookup::TYPE_MT,
		CorporaLookup::TYPE_USER,
	];

	public function execute() {
		$params = $this->extractRequestParams();
		$result = $this->getResult();

		$db = Database::getConnection( DB_SLAVE );
		$lookup = new CorporaLookup( $db );
		$data = $lookup->getByTranslationId( $params['translationid'] );

		$types = array_flip( $params['types'] );
		$data = $this->filterTypes( $data, $types );

		if ( $params['striphtml'] ) {
			$data = $this->stripHtml( $data );
		}

		$result->addValue( [ 'query', $this->getModuleName() ], 'sections', $data );
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
				ApiBase::PARAM_TYPE => 'integer',
				ApiBase::PARAM_REQUIRED => true,
			],
			'striphtml' => [
				ApiBase::PARAM_TYPE => 'boolean',
				ApiBase::PARAM_DFLT => false,
			],
			'types' => [
				ApiBase::PARAM_TYPE => [ 'source', 'mt', 'user' ],
				ApiBase::PARAM_DFLT => 'source|mt|user',
				ApiBase::PARAM_ISMULTI => true,
			],
		];

		return $params;
	}
}
