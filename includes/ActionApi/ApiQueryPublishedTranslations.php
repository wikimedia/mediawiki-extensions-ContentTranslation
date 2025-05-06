<?php
/**
 * Api module for querying published translations.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ContentTranslation\Translation;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiQuery;
use MediaWiki\Api\ApiQueryBase;
use MediaWiki\Languages\LanguageNameUtils;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\ParamValidator\TypeDef\IntegerDef;

class ApiQueryPublishedTranslations extends ApiQueryBase {

	private LanguageNameUtils $languageNameUtils;

	public function __construct(
		ApiQuery $query,
		string $moduleName,
		LanguageNameUtils $languageNameUtils
	) {
		parent::__construct( $query, $moduleName );
		$this->languageNameUtils = $languageNameUtils;
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
		if ( $from !== null && !$this->languageNameUtils->isValidBuiltInCode( $from ) ) {
			$this->dieWithError( 'apierror-cx-invalidlanguage', 'invalidlanguage' );
		}
		if ( $to !== null && !$this->languageNameUtils->isValidBuiltInCode( $to ) ) {
				$this->dieWithError( 'apierror-cx-invalidlanguage', 'invalidlanguage' );
		}
		$translations = Translation::getAllPublishedTranslations(
			$from, $to, $limit, $offset
		);

		$result->addValue( [ 'result' ], 'translations', $translations );
	}

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			'from' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'to' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'limit' => [
				ParamValidator::PARAM_DEFAULT => 500,
				ParamValidator::PARAM_TYPE => 'limit',
				IntegerDef::PARAM_MIN => 1,
				IntegerDef::PARAM_MAX => ApiBase::LIMIT_BIG1,
				IntegerDef::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			],
			'offset' => [
				ParamValidator::PARAM_DEFAULT => '',
				ParamValidator::PARAM_TYPE => 'string',
				ApiBase::PARAM_HELP_MSG => 'api-help-param-continue',
			],
		];
	}

	/** @inheritDoc */
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
