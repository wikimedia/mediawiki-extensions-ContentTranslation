<?php

declare( strict_types = 1 );

/**
 * Api module for querying user's favorite translation suggestions.
 *
 * @author Nik Gkountas
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ContentTranslation\Service\UserService;
use ContentTranslation\Store\FavoriteSuggestionStore;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiQuery;
use MediaWiki\Api\ApiQueryBase;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\ParamValidator\TypeDef\IntegerDef;

/**
 * Api module for fetching favorite translation suggestions.
 */
class ApiQueryContentTranslationFavoriteSuggestions extends ApiQueryBase {
	public function __construct(
		ApiQuery $query,
		string $moduleName,
		private readonly UserService $userService,
		private readonly FavoriteSuggestionStore $favoriteSuggestionStore
	) {
		parent::__construct( $query, $moduleName );
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$result = $this->getResult();
		$user = $this->getUser();

		if ( !$user->isRegistered() ) {
			$this->dieWithError( 'apierror-cx-mustbeloggedin-get-suggestions', 'notloggedin' );
		}

		$translatorUserId = $this->userService->getGlobalUserId( $user );

		// Get personalized suggestions.
		// We do not want to send personalized suggestions in paginated results
		// other than the first page. Hence, checking offset.

		$favoriteSuggestions = $this->favoriteSuggestionStore->getFavoriteSuggestions( $translatorUserId );
		$suggestions = [];
		foreach ( $favoriteSuggestions as $suggestion ) {
			$suggestions[] = [
				'title' => $suggestion->getTitle()->getPrefixedText(),
				'sourceLanguage' => $suggestion->getSourceLanguage(),
				'targetLanguage' => $suggestion->getTargetLanguage(),
			];
		}

		$result->addValue( [ 'query', $this->getModuleName() ], 'suggestions', $suggestions );
	}

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			// 'limit' and 'offset' are not really used by any API client, as users are never expected to have
			// more than 100 favorite suggestions at the same time, but we still keep them here, in case we
			// need to support 'continue' functionality in the future
			'limit' => [
				ParamValidator::PARAM_DEFAULT => 100,
				ParamValidator::PARAM_TYPE => 'limit',
				IntegerDef::PARAM_MIN => 1,
				IntegerDef::PARAM_MAX => ApiBase::LIMIT_BIG1,
				IntegerDef::PARAM_MAX2 => ApiBase::LIMIT_BIG2
			],
			'offset' => [
				ParamValidator::PARAM_TYPE => 'string',
			]
		];
	}

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=query&list=contenttranslationfavoritesuggestions' =>
				'apihelp-query+contenttranslationfavoritesuggestions-example-1',
		];
	}
}
