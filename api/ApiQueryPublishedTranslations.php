<?php
/**
 * Api module for querying published translations.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiQueryBase;
use ContentTranslation\Translation;
use Language;

class ApiQueryPublishedTranslations extends ApiQueryBase {

	public function __construct( $query, $moduleName ) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$from = $to = null;
		$params = $this->extractRequestParams();
		$result = $this->getResult();
		$user = $this->getUser();
		if ( isset( $params['from'] ) ) {
			$from = $params['from'];
		}
		if ( isset( $params['to'] ) ) {
			$to = $params['to'];
		}
		$limit = $params['limit'];
		$offset = $params['offset'];
		if ( $from !== null && !Language::isValidBuiltInCode( $from ) ) {
			$this->dieWithError( 'apierror-cx-invalidlanguage', 'invalidlanguage' );
		}
		if ( $to !== null && !Language::isValidBuiltInCode( $to ) ) {
				$this->dieWithError( 'apierror-cx-invalidlanguage', 'invalidlanguage' );
		}
		$translations = Translation::getAllPublishedTranslations(
			$from, $to, $limit, $offset
		);

		$result->addValue( [ 'result' ], 'translations', $translations );
	}

	public function getAllowedParams() {
		return [
			'from' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'to' => [
				ApiBase::PARAM_TYPE => 'string',
			],
			'limit' => [
				ApiBase::PARAM_DFLT => 500,
				ApiBase::PARAM_TYPE => 'limit',
				ApiBase::PARAM_MIN => 1,
				ApiBase::PARAM_MAX => ApiBase::LIMIT_BIG1,
				ApiBase::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			],
			'offset' => [
				ApiBase::PARAM_DFLT => '',
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_HELP_MSG => 'api-help-param-continue',
			],
		];
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=cxpublishedtranslations' =>
				'apihelp-query+cxpublishedtranslations-example-1',
			'action=query&list=cxpublishedtranslations&from=en' =>
				'apihelp-query+cxpublishedtranslations-example-2',
			'action=query&list=cxpublishedtranslations&from=en&to=es' =>
				'apihelp-query+cxpublishedtranslations-example-3',
		];
	}
}
