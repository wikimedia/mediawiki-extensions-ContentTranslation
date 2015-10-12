<?php
/**
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\Translator;
use ContentTranslation\Suggestion;
use ContentTranslation\SuggestionList;
use ContentTranslation\SuggestionListManager;

class ApiContentTranslationSuggestionList extends ApiBase {

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		if ( !$this->getUser()->isLoggedIn() ) {
			$this->dieUsage( 'You must be logged-in to manage your suggestions', 'notloggedin' );
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

		$suggestions = array();
		foreach ( $params['titles'] as $page ) {
			if ( !Title::newFromText( $page ) ) {
				$this->dieUsageMsg( array( 'invalidtitle', $page ) );
			}
			$suggestions[] = new Suggestion( array(
				'listId' => $listId,
				'title' => $page,
				'sourceLanguage' => $params['from'],
				'targetLanguage' => $params['to']
			) );
		}

		if ( $params['listaction'] === 'add' ) {
			$manager->addSuggestions( $suggestions );
		} elseif ( $params['listaction'] === 'remove' ) {
			$manager->removeSuggestions( $suggestions );
		}

		$result = array(
			'result' => 'success'
		);
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	private function createList( $translator, $listName ) {
		$manager = new SuggestionListManager();
		$type = SuggestionList::TYPE_DEFAULT;

		if ( $listName === 'cx-suggestionlist-discarded' ) {
			$type = SuggestionList::TYPE_DISCARDED;
		} elseif ( $listName=== 'cx-suggestionlist-favorite' ) {
			$type = SuggestionList::TYPE_FAVORITE;
		}

		$list = new SuggestionList( array(
			'type' => $type,
			'name' => $listName,
			'public' => false,
			'owner'  => $translator->getGlobalUserId(),
		) );
		return $manager->insertList( $list );
	}

	public function getAllowedParams() {
		return array(
			'listname' => array(
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			),
			'listaction' => array(
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => array( 'add', 'remove' ),
			),
			'titles' => array(
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
				ApiBase::PARAM_ISMULTI => true,
			),
			'from' => array(
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => 'string',
			),
			'to' => array(
				ApiBase::PARAM_REQUIRED => false,
				ApiBase::PARAM_TYPE => 'string',
			),
			'token' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
		);
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}

	protected function getExamplesMessages() {
		return array(
			'action=cxsuggestionlist&listname=List&listaction=add&' .
				'titles=Title&from=en&to=es&token=123ABC'
				=> 'apihelp-cxsuggestionlist-example-1'
		);
	}
}
