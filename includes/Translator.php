<?php

namespace ContentTranslation;

use ContentTranslation\Service\UserService;
use ContentTranslation\Store\TranslationStore;
use MediaWiki\MediaWikiServices;
use MediaWiki\User\User;
use Wikimedia\Rdbms\IConnectionProvider;

class Translator {

	public function __construct( private readonly User $user ) {
	}

	private function getGlobalUserId(): int {
		/** @var UserService $userService */
		$userService = MediaWikiServices::getInstance()->getService( 'ContentTranslation.UserService' );

		return $userService->getGlobalUserId( $this->user );
	}

	public function getUser(): User {
		return $this->user;
	}

	/**
	 * @param int $translationId
	 */
	public function addTranslation( $translationId ) {
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbw = $connectionProvider->getPrimaryDatabase();
		$dbw->newReplaceQueryBuilder()
			->replaceInto( 'cx_translators' )
			->uniqueIndexFields( [ 'translator_user_id', 'translator_translation_id' ] )
			->row( [
				'translator_user_id' => $this->getGlobalUserId(),
				'translator_translation_id' => $translationId,
			] )
			->caller( __METHOD__ )
			->execute();
	}

	/**
	 * Get the number of published translation by current translator.
	 * @return int
	 */
	public function getTranslationsCount() {
		/** @var IConnectionProvider $connectionProvider */
		$connectionProvider = MediaWikiServices::getInstance()->getService( 'ContentTranslation.ConnectionProvider' );
		$dbr = $connectionProvider->getReplicaDatabase();

		$count = $dbr->newSelectQueryBuilder()
			->select( 'COUNT(*)' )
			->from( 'cx_translators' )
			->join( 'cx_translations', null, 'translator_translation_id = translation_id' )
			->where( [
				'translator_user_id' => $this->getGlobalUserId(),
				// And it is published
				TranslationStore::getPublishedCondition( $dbr )
			] )
			->caller( __METHOD__ )
			->fetchField();

		return intval( $count );
	}
}
