<?php

declare( strict_types = 1 );

namespace ContentTranslation\Store;

use ContentTranslation\Service\UserService;
use MediaWiki\User\UserIdentity;
use Wikimedia\Rdbms\IConnectionProvider;

class TranslatorStore {
	public function __construct(
		private readonly IConnectionProvider $connectionProvider,
		private readonly UserService $userService
	) {
	}

	public function linkTranslationToTranslator( int $translationId, UserIdentity $user ): void {
		$dbw = $this->connectionProvider->getPrimaryDatabase();
		$globalUserId = $this->userService->getGlobalUserId( $user );

		$dbw->newReplaceQueryBuilder()
			->replaceInto( 'cx_translators' )
			->uniqueIndexFields( [ 'translator_user_id', 'translator_translation_id' ] )
			->row( [
				'translator_user_id' => $globalUserId,
				'translator_translation_id' => $translationId,
			] )
			->caller( __METHOD__ )
			->execute();
	}

	/**
	 * Get the number of published translation by current translator.
	 */
	public function getTranslationCountForTranslator( UserIdentity $user ): int {
		$dbr = $this->connectionProvider->getReplicaDatabase();
		$globalUserId = $this->userService->getGlobalUserId( $user );

		$count = $dbr->newSelectQueryBuilder()
			->select( 'COUNT(*)' )
			->from( 'cx_translators' )
			->join( 'cx_translations', null, 'translator_translation_id = translation_id' )
			->where( [
				'translator_user_id' => $globalUserId,
				// And it is published
				TranslationStore::getPublishedCondition( $dbr )
			] )
			->caller( __METHOD__ )
			->fetchField();

		return intval( $count );
	}
}
