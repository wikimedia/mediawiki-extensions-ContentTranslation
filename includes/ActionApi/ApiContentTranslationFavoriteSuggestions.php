<?php
declare( strict_types = 1 );

namespace ContentTranslation\ActionApi;

use ContentTranslation\Service\UserService;
use ContentTranslation\Store\FavoriteSuggestionStore;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiMain;
use MediaWiki\Api\ApiUsageException;
use MediaWiki\Languages\LanguageNameUtils;
use TitleFactory;
use Wikimedia\ParamValidator\ParamValidator;

/**
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2025.06
 */
class ApiContentTranslationFavoriteSuggestions extends ApiBase {
	public function __construct(
		ApiMain $mainModule,
		string $action,
		private readonly FavoriteSuggestionStore $favoriteSuggestionStore,
		private readonly UserService $userService,
		private readonly TitleFactory $titleFactory,
		private readonly LanguageNameUtils $languageNameUtils
	) {
		parent::__construct( $mainModule, $action );
	}

	/**
	 * @return void
	 * @throws ApiUsageException
	 */
	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		if ( !$this->getUser()->isRegistered() ) {
			$this->dieWithError( 'apierror-cx-mustbeloggedin-favorites', 'notloggedin' );
		}

		$this->validateLanguages();

		$page = $params['title'];
		$title = $this->titleFactory->newFromText( $page );
		if ( !$title ) {
			$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $page ) ] );
		}

		$translatorUserId = $this->userService->getGlobalUserId( $user );

		$listId = $this->favoriteSuggestionStore->findListIdByUser( $translatorUserId );

		if ( $listId === null ) {
			$listId = $this->favoriteSuggestionStore->createList( $translatorUserId );
		}

		if ( $params['listaction'] === 'add' ) {
			$success = $this->favoriteSuggestionStore->addSuggestion(
				$listId,
				$title->getPrefixedText(),
				$params['from'],
				$params['to']
			);
		} else {
			$success = $this->favoriteSuggestionStore->removeSuggestion(
				$listId,
				$title->getPrefixedText(),
				$params['from'],
				$params['to']
			);
		}

		$result = [ 'result' => $success ? 'success' : 'failure' ];

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * @throws ApiUsageException
	 */
	private function validateLanguages(): void {
		$params = $this->extractRequestParams();

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['from'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['to'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
		}
	}

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			'listaction' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => [ 'add', 'remove' ],
			],
			'title' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => 'string'
			],
			'from' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => 'string',
			],
			'to' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => 'string',
			],
		];
	}

	/** @inheritDoc */
	public function needsToken() {
		return 'csrf';
	}

	/** @inheritDoc */
	public function isWriteMode() {
		return true;
	}

	/** @inheritDoc */
	public function isInternal() {
		return true;
	}

	/** @inheritDoc */
	protected function getExamplesMessages() {
		return [
			'action=cxfavoritesuggestions&listaction=add&title=Title&from=en&to=es' =>
				'apihelp-cxfavoritesuggestions-example-1',
			'action=cxfavoritesuggestions&listaction=remove&title=Title&from=en&to=es' =>
				'apihelp-cxfavoritesuggestions-example-2'
		];
	}
}
