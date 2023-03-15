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
use ContentTranslation\Manager\TranslationCorporaManager;
use Wikimedia\ParamValidator\ParamValidator;

/**
 * Api module for querying Content Translation parallel corpora.
 */
class ApiQueryContentTranslationCorpora extends ApiQueryBase {
	private TranslationCorporaManager $corporaManager;

	public function __construct( ApiQuery $queryModule, $moduleName, TranslationCorporaManager $corporaManager ) {
		parent::__construct( $queryModule, $moduleName );

		$this->corporaManager = $corporaManager;
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$result = $this->getResult();

		$sections = $this->corporaManager->getFilteredCorporaUnits(
			(int)$params['translationid'],
			$params['types'],
			$params['striphtml']
		);
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
