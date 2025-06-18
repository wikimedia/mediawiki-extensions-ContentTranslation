<?php
declare( strict_types = 1 );

namespace ContentTranslation\Store;

use Wikimedia\Rdbms\IConnectionProvider;

/**
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2025.06
 */
class FavoriteSuggestionStore {

	public const LISTS_TABLE_NAME = 'cx_lists';
	public const SUGGESTIONS_TABLE_NAME = 'cx_suggestions';
	public const FAVORITE_LIST_NAME = 'cx-suggestionlist-favorite';
	public const FAVORITE_LIST_TYPE = 3; // As defined in legacy SuggestionList.php

	private IConnectionProvider $connectionProvider;

	public function __construct( IConnectionProvider $connectionProvider ) {
		$this->connectionProvider = $connectionProvider;
	}

	public function createList( int $translatorUserId ): int {
		$dbw = $this->connectionProvider->getPrimaryDatabase();
		$values = [
			'cxl_owner' => $translatorUserId,
			'cxl_public' => false,
			'cxl_name' => self::FAVORITE_LIST_NAME,
			'cxl_type' => self::FAVORITE_LIST_TYPE,
		];

		$dbw->newInsertQueryBuilder()
			->insertInto( self::LISTS_TABLE_NAME )
			->row( $values )
			->caller( __METHOD__ )
			->execute();

		return $dbw->insertId();
	}

	public function findListIdByUser( int $translatorUserId ): ?int {
		$dbr = $this->connectionProvider->getReplicaDatabase();
		$row = $dbr->newSelectQueryBuilder()
			->select( 'cxl_id' )
			->from( self::LISTS_TABLE_NAME )
			->where( [
				'cxl_name' => self::FAVORITE_LIST_NAME,
				'cxl_owner' => $translatorUserId,
			] )
			->caller( __METHOD__ )
			->fetchRow();

		return $row ? (int)$row->cxl_id : null;
	}

	public function addSuggestion( int $listId, string $title, string $sourceLang, string $targetLang ): bool {
		$dbw = $this->connectionProvider->getPrimaryDatabase();

		$dbw->newInsertQueryBuilder()
			->insertInto( self::SUGGESTIONS_TABLE_NAME )
			->ignore()
			->row( [
				'cxs_list_id' => $listId,
				'cxs_title' => $title,
				'cxs_source_language' => $sourceLang,
				'cxs_target_language' => $targetLang,
			] )
			->caller( __METHOD__ )
			->execute();

		return $dbw->affectedRows() > 0;
	}

	public function removeSuggestion( int $listId, string $title, string $sourceLang, string $targetLang ): bool {
		$dbw = $this->connectionProvider->getPrimaryDatabase();

		$dbw->newDeleteQueryBuilder()
			->deleteFrom( self::SUGGESTIONS_TABLE_NAME )
			->where( [
				'cxs_list_id' => $listId,
				'cxs_title' => $title,
				'cxs_source_language' => $sourceLang,
				'cxs_target_language' => $targetLang,
			] )
			->caller( __METHOD__ )
			->execute();

		return $dbw->affectedRows() > 0;
	}
}
