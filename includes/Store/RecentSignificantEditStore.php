<?php

declare( strict_types=1 );

namespace ContentTranslation\Store;

use ContentTranslation\Entity\RecentSignificantEdit;
use ContentTranslation\LoadBalancer;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\SelectQueryBuilder;

class RecentSignificantEditStore {
	// Array of supported wiki families for the 'recent significant edit' entrypoint
	// The order of the entries should never change in production, as the indexes of this array
	// are used to populate the "cxse_wiki_family" field inside "cx_significant_edits" table.
	private const SUPPORTED_WIKI_FAMILIES = [
		'wikipedia',
	];
	private const TABLE_NAME = 'cx_significant_edits';
	private const DEFAULT_WIKI_FAMILY = 'wikipedia';

	/**
	 * The index of the wiki family of the current wiki inside SUPPORTED_WIKI_FAMILIES array.
	 * Used to populate "cxse_wiki_family" field inside "cx_significant_edits" table.
	 *
	 * @var int|false
	 */
	private $currentWikiFamilyKey;

	/** @var LoadBalancer */
	private $lb;

	public function __construct( LoadBalancer $lb, ?string $currentWikiFamily ) {
		$this->lb = $lb;
		$currentWikiFamily ??= self::DEFAULT_WIKI_FAMILY;
		$this->currentWikiFamilyKey = array_search( $currentWikiFamily, self::SUPPORTED_WIKI_FAMILIES );
	}

	public function isCurrentWikiFamilySupported(): bool {
		return $this->currentWikiFamilyKey !== false;
	}

	/**
	 * Given a RecentSignificantEdit instance, this method
	 * stores its fields, as a row inside the table.
	 * To make sure that at most 10 edits per user will exist,
	 * this method keeps only the 10 newest edits and deletes the rest.
	 *
	 * @param RecentSignificantEdit $edit
	 * @return int
	 */
	public function insert( RecentSignificantEdit $edit ): int {
		$values = $this->normalizeEdit( $edit );
		$primaryDb = $this->lb->getConnection( DB_PRIMARY );
		$values['cxse_timestamp'] = $primaryDb->timestamp();

		$primaryDb->newInsertQueryBuilder()
			->insertInto( self::TABLE_NAME )
			->row( $values )
			->caller( __METHOD__ )
			->execute();
		$newId = $primaryDb->insertId();
		$edit->setId( $newId );
		// Keep only the 10 newest edits and delete the rest
		$this->deleteOldEditsByUser( $edit->getUserId() );
		return $newId;
	}

	/**
	 * Given a RecentSignificantEdit instance with a valid id,
	 * this method updates the corresponding row inside the database,
	 * with the current values of the model and an updated edit
	 * timestamp.
	 *
	 * @param RecentSignificantEdit $edit
	 */
	public function update( RecentSignificantEdit $edit ): void {
		if ( $edit->getId() === null ) {
			return;
		}
		$primaryDb = $this->lb->getConnection( DB_PRIMARY );

		$values = $this->normalizeEdit( $edit );
		$values['cxse_timestamp'] = $primaryDb->timestamp();

		$primaryDb->newUpdateQueryBuilder()
			->update( self::TABLE_NAME )
			->set( $values )
			->where( [ 'cxse_id' => $edit->getId() ] )
			->caller( __METHOD__ )
			->execute();
	}

	/**
	 * Given a user id, this method deletes all the edits done by
	 * this user, that are older than the 10 first edits. This way
	 * we ensure that the "cx_significant_edits" table will not
	 * store more than 10 edits per user. If less than 10 edits exist,
	 * it returns without doing anything.
	 *
	 * @param int $userId
	 */
	private function deleteOldEditsByUser( int $userId ) {
		$edits = $this->findEditsByUser( $userId );
		if ( count( $edits ) <= 10 ) {
			return;
		}

		$editIdsToDelete = array_map( static function ( RecentSignificantEdit $edit ) {
			return $edit->getId();
		}, array_slice( $edits, 10 ) );

		$primaryDb = $this->lb->getConnection( DB_PRIMARY );
		$primaryDb->newDeleteQueryBuilder()
			->deleteFrom( self::TABLE_NAME )
			->where( [ 'cxse_id' => $editIdsToDelete ] )
			->caller( __METHOD__ )
			->execute();
	}

	/**
	 * Returns an array of RecentSignificantEdit instances, containing all
	 * the recent significant edits done by the given user and the current
	 * wiki family, ordered by their edit timestamp, in ascending order (i.e. oldest first).
	 *
	 * @param int $userId
	 * @return RecentSignificantEdit[]
	 */
	public function findEditsByUser( int $userId ): array {
		$replicaDb = $this->lb->getConnection( DB_REPLICA );
		$result = $replicaDb->newSelectQueryBuilder()
			->select( IDatabase::ALL_ROWS )
			->from( self::TABLE_NAME )
			->where( [
				'cxse_global_user_id' => $userId,
				'cxse_wiki_family' => $this->currentWikiFamilyKey
			] )
			->orderBy( 'cxse_timestamp' )
			->caller( __METHOD__ )
			->fetchResultSet();

		$edits = [];
		foreach ( $result as $row ) {
			$edits[] = $this->createEditFromRow( $row );
		}
		return $edits;
	}

	/**
	 * Given a user id, a page wikidata id and a language, this method
	 * searches for a recent significant edit, matching these arguments,
	 * an instance of RecentSignificantEdit class if exists.
	 *
	 * @param int $userId
	 * @param int $pageWikidataId
	 * @param string $language
	 * @return RecentSignificantEdit|null
	 */
	public function findExistingEdit( int $userId, int $pageWikidataId, string $language ): ?RecentSignificantEdit {
		$replicaDb = $this->lb->getConnection( DB_REPLICA );
		$row = $replicaDb->newSelectQueryBuilder()
			->select( IDatabase::ALL_ROWS )
			->from( self::TABLE_NAME )
			->where( [
				'cxse_global_user_id' => $userId,
				'cxse_page_wikidata_id' => $pageWikidataId,
				'cxse_language' => $language,
				'cxse_wiki_family' => $this->currentWikiFamilyKey
			] )
			->caller( __METHOD__ )
			->fetchRow();

		if ( !$row ) {
			return null;
		}

		return $this->createEditFromRow( $row );
	}

	/**
	 * Given a user id, a page wikidata id and a language code,
	 * this static method returns an array containing at most
	 * 10 instances of this class. These objects represent
	 * edits stored inside the table that:
	 * 1. were done by the given user,
	 * 2. were done to an article with the given wikidata page id
	 * 3. were done in a language different that the given one
	 *
	 * @param int $userId
	 * @param int $wikidataId
	 * @param string $language
	 * @return RecentSignificantEdit[]
	 */
	public function findEditsForPotentialSuggestions( int $userId, int $wikidataId, string $language ): array {
		$replicaDb = $this->lb->getConnection( DB_REPLICA );
		$conditions = [
			'cxse_global_user_id' => $userId,
			'cxse_page_wikidata_id' => $wikidataId,
			$replicaDb->expr( 'cxse_language', '!=', $language ),
			"cxse_wiki_family" => $this->currentWikiFamilyKey
		];

		$result = $replicaDb->newSelectQueryBuilder()
			->select( [
				'cxse_id',
				'cxse_global_user_id',
				'cxse_page_wikidata_id',
				'cxse_language',
				'cxse_wiki_family',
				'cxse_page_title',
				'cxse_section_titles',
				'cxse_timestamp'
			] )
			->from( self::TABLE_NAME )
			->where( $conditions )
			->orderBy( 'cxse_timestamp', SelectQueryBuilder::SORT_DESC )
			->limit( 10 )
			->caller( __METHOD__ )
			->fetchResultSet();

		$edits = [];
		foreach ( $result as $row ) {
			$edits[] = $this->createEditFromRow( $row );
		}
		return $edits;
	}

	/**
	 * Given an stdClass instance, that represents
	 * a row from "cx_significant_edits" table, this
	 * method creates a RecentSignificantEdit object
	 * and returns it.
	 *
	 * @param \stdClass $row
	 * @return RecentSignificantEdit
	 */
	private function createEditFromRow( \stdClass $row ): RecentSignificantEdit {
		// json_decode should always return an array and not an \stdClass instance. Although we do not
		// store associative arrays, we somehow get errors for this field. These errors can also occur
		// because of empty arrays being encoded as "{}", instead of [] by "json_encode" function. However,
		// we do not store any significant edit in the database when section titles are an empty array.
		// In any case, here we are making sure that section titles are always an indexed array, to avoid
		// such errors being thrown.
		// TODO: Investigate what value causes the error (https://phabricator.wikimedia.org/T319799) and
		// how end up with this unexpected value
		$sectionTitles = array_values( json_decode( $row->cxse_section_titles, true ) );

		return new RecentSignificantEdit(
			(int)$row->cxse_id,
			(int)$row->cxse_global_user_id,
			(int)$row->cxse_page_wikidata_id,
			$row->cxse_language,
			$row->cxse_page_title,
			$sectionTitles,
			$row->cxse_timestamp
		);
	}

	/**
	 * Given a RecentSignificantEdit model, this method
	 * returns an array containing the corresponding
	 * fields and values, to be stored in the database.
	 *
	 * @param RecentSignificantEdit $edit
	 * @return array
	 */
	private function normalizeEdit( RecentSignificantEdit $edit ): array {
		return [
			'cxse_global_user_id' => $edit->getUserId(),
			'cxse_page_wikidata_id' => $edit->getPageWikidataId(),
			'cxse_language' => $edit->getLanguage(),
			'cxse_wiki_family' => $this->currentWikiFamilyKey,
			'cxse_page_title' => $edit->getPageTitle(),
			'cxse_section_titles' => json_encode( $edit->getSectionTitles() ),
			'cxse_timestamp' => $edit->getTimestamp(),
		];
	}

}
