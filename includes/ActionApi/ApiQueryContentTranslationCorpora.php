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
use ContentTranslation\DTO\TranslationUnitDTO;
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

		$data = $this->corporaLookup->getByTranslationId( (int)$params['translationid'] );
		$sections = $data[ 'sections' ];

		// 'types' parameter should be an array of valid types. e.g. ['user', 'mt', 'source']
		$types = $params['types'];
		$stripHtml = $params['striphtml'];
		$sections = array_map( static function ( TranslationUnitDTO $unit ) use ( $types, $stripHtml ) {
			return $unit->toCustomArray( $types, $stripHtml );
		}, $sections );

		$result->addValue( [ 'query', $this->getModuleName() ], 'sections', $sections );
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
