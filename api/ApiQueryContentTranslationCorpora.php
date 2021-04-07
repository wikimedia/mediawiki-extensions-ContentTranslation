<?php
/**
 * Api module for querying Content Translation parallel corpora.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiQueryBase;
use ContentTranslation\CorporaLookup;
use ContentTranslation\Database;
use Sanitizer;

/**
 * Api module for querying Content Translation parallel corpora.
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

		$db = Database::getConnection( DB_REPLICA );
		$lookup = new CorporaLookup( $db );
		$data = $lookup->getByTranslationId( $params['translationid'] );
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
