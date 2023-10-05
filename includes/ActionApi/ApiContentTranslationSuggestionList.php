<?php
/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiMain;
use ContentTranslation\Service\UserService;
use ContentTranslation\Suggestion;
use ContentTranslation\SuggestionList;
use ContentTranslation\SuggestionListManager;
use MediaWiki\Title\Title;
use Wikimedia\ParamValidator\ParamValidator;

class ApiContentTranslationSuggestionList extends ApiBase {

	private UserService $userService;

	public function __construct( ApiMain $mainModule, $action, UserService $userService ) {
		parent::__construct( $mainModule, $action );
		$this->userService = $userService;
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		if ( !$this->getUser()->isRegistered() ) {
			$this->dieWithError( 'apierror-cx-mustbeloggedin-suggestions', 'notloggedin' );
		}

		$translatorUserId = $this->userService->getGlobalUserId( $user );
		$listName = $params['listname'];
		$manager = new SuggestionListManager();

		$list = $manager->getListByName( $listName, $translatorUserId );

		if ( $list === null ) {
			$listId = $this->createList( $translatorUserId, $listName );
		} else {
			$listId = $list->getId();
		}

		$suggestions = [];
		foreach ( $params['titles'] as $page ) {
			if ( !Title::newFromText( $page ) ) {
				$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $page ) ] );
			}
			$suggestions[] = new Suggestion( [
				'listId' => $listId,
				'title' => $page,
				'sourceLanguage' => $params['from'],
				'targetLanguage' => $params['to']
			] );
		}

		if ( $params['listaction'] === 'add' ) {
			$listAction = $manager->addSuggestions( $suggestions );
		} elseif ( $params['listaction'] === 'remove' ) {
			$listAction = $manager->removeSuggestions( $suggestions );
		} elseif ( $params[ 'listaction' ] === 'view' ) {
			$listAction = $manager->doesSuggestionExist( $suggestions[ 0 ] );
		} else {
			return;
		}

		$result = [
			'result' => 'success',
			'listaction' => $listAction
		];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	private function createList( $translatorUserId, $listName ) {
		$manager = new SuggestionListManager();
		$type = SuggestionList::TYPE_DEFAULT;

		if ( $listName === 'cx-suggestionlist-discarded' ) {
			$type = SuggestionList::TYPE_DISCARDED;
		} elseif ( $listName === 'cx-suggestionlist-favorite' ) {
			$type = SuggestionList::TYPE_FAVORITE;
		}

		$list = new SuggestionList( [
			'type' => $type,
			'name' => $listName,
			'public' => false,
			'owner'  => $translatorUserId,
		] );
		return $manager->insertList( $list );
	}

	public function getAllowedParams() {
		return [
			'listname' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => 'string',
			],
			'listaction' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => [ 'add', 'remove', 'view' ],
			],
			'titles' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_ISMULTI => true,
			],
			'from' => [
				ParamValidator::PARAM_REQUIRED => true,
				ParamValidator::PARAM_TYPE => 'string',
			],
			'to' => [
				ParamValidator::PARAM_REQUIRED => false,
				ParamValidator::PARAM_TYPE => 'string',
			],
			'token' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
		];
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}

	protected function getExamplesMessages() {
		return [
			'action=cxsuggestionlist&listname=List&listaction=add&' .
				'titles=Title&from=en&to=es&token=123ABC'
				=> 'apihelp-cxsuggestionlist-example-1'
		];
	}
}
