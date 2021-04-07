<?php
/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ContentTranslation\Suggestion;
use ContentTranslation\SuggestionList;
use ContentTranslation\SuggestionListManager;
use ContentTranslation\Translator;
use Title;

class ApiContentTranslationSuggestionList extends ApiBase {

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		if ( !$this->getUser()->isRegistered() ) {
			$this->dieWithError( 'apierror-cx-mustbeloggedin-suggestions', 'notloggedin' );
		}

		$translator = new Translator( $user );
		$listName = $params['listname'];
		$manager = new SuggestionListManager();

		$list = $manager->getListByName( $listName, $translator->getGlobalUserId() );

		if ( $list === null ) {
			$listId = $this->createList( $translator, $listName );
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

	private function createList( $translator, $listName ) {
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
			'owner'  => $translator->getGlobalUserId(),
		] );
		return $manager->insertList( $list );
	}

	public function getAllowedParams() {
		return [
			'listname' => [
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			],
			'listaction' => [
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => [ 'add', 'remove', 'view' ],
			],
			'titles' => [
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_ISMULTI => true,
			],
			'from' => [
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			],
			'to' => [
				ApiBase::PARAM_REQUIRED => false,
				ApiBase::PARAM_TYPE => 'string',
			],
			'token' => [
				ApiBase::PARAM_REQUIRED => true,
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
