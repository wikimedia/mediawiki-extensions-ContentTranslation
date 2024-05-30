<?php

namespace ContentTranslation\Store;

use ContentTranslation\LoadBalancer;
use ContentTranslation\Service\UserService;
use ContentTranslation\Translation;
use DateTime;
use MediaWiki\User\UserIdentity;
use Wikimedia\Rdbms\Platform\ISQLPlatform;
use Wikimedia\Rdbms\SelectQueryBuilder;

class TranslationStore {
	public const TRANSLATION_TABLE_NAME = 'cx_translations';
	public const TRANSLATOR_TABLE_NAME = 'cx_translators';

	public const TRANSLATION_STATUS_DRAFT = 'draft';
	public const TRANSLATION_STATUS_PUBLISHED = 'published';
	public const TRANSLATION_STATUS_DELETED = 'deleted';

	private LoadBalancer $lb;
	private UserService $userService;

	public function __construct( LoadBalancer $lb, UserService $userService ) {
		$this->lb = $lb;
		$this->userService = $userService;
	}

	public function unlinkTranslationFromTranslator( int $translationId ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$dbw->newDeleteQueryBuilder()
			->deleteFrom( self::TRANSLATOR_TABLE_NAME )
			->where( [ 'translator_translation_id' => $translationId ] )
			->caller( __METHOD__ )
			->execute();
	}

	public function deleteTranslation( int $translationId ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$dbw->newUpdateQueryBuilder()
			->update( self::TRANSLATION_TABLE_NAME )
			->set( [ 'translation_status' => self::TRANSLATION_STATUS_DELETED ] )
			->where( [ 'translation_id' => $translationId ] )
			->caller( __METHOD__ )
			->execute();
	}

	/**
	 * This method finds a translation inside "cx_translations" table, that corresponds to the
	 * given source/target languages, source title and the translator of the published
	 * translation, and returns it. If no such translation exists, the method returns null.
	 *
	 * There can only ever be one translation, returned by this method.
	 *
	 * @param UserIdentity $user
	 * @param string $sourceTitle
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @param string|null $status possible status values: "published"|"draft"|"deleted"
	 * @return Translation|null
	 */
	public function findTranslationByUser(
		UserIdentity $user,
		string $sourceTitle,
		string $sourceLanguage,
		string $targetLanguage,
		string $status = null
	): ?Translation {
		$dbr = $this->lb->getConnection( DB_REPLICA );
		$globalUserId = $this->userService->getGlobalUserId( $user );

		$conditions = [
			'translation_source_language' => $sourceLanguage,
			'translation_target_language' => $targetLanguage,
			'translation_source_title' => $sourceTitle,
			'translation_started_by' => $globalUserId,
			'translation_last_update_by' => $globalUserId,
		];

		if ( $status ) {
			$conditions['translation_status'] = $status;
		}
		$row = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( $conditions )
			->caller( __METHOD__ )
			->fetchRow();

		return $row ? Translation::newFromRow( $row ) : null;
	}

	/**
	 * Given a user id, this method returns the last published translation for that translator,
	 * which have been started within the last 10 minutes. If no published translation within
	 * the last 10 minutes, null is returned.
	 */
	public function findRecentTranslationByUser( int $userId ): ?Translation {
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$conditions = [
			'translation_started_by' => $userId,
			// Only fetch translations within 10 last minutes
			// Translations older than 10 minutes, are not considered recent here
			$dbr->expr( 'translation_start_timestamp', '>=', $dbr->timestamp( time() - ( 10 * 60 ) ) ),
			// target URL is always not null for articles that have been published at some point
			$dbr->expr( 'translation_target_url', '!=', null ),
		];

		$row = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( $conditions )
			->orderBy( 'translation_start_timestamp', SelectQueryBuilder::SORT_DESC )
			->limit( 1 )
			->caller( __METHOD__ )
			->fetchRow();

		return $row ? Translation::newFromRow( $row ) : null;
	}

	/**
	 * This method finds a translation inside "cx_translations" table, that corresponds to the
	 * given id and the translator (user) of the translation, and returns it. If no such translation
	 * exists, the method returns null.
	 *
	 * @param UserIdentity $user
	 * @param int $id
	 * @return Translation|null
	 * @throws \Exception
	 */
	public function findByUserAndId( UserIdentity $user, int $id ): ?Translation {
		$dbr = $this->lb->getConnection( DB_REPLICA );
		$globalUserId = $this->userService->getGlobalUserId( $user );

		$row = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( [
				'translation_id' => $id,
				'translation_started_by' => $globalUserId,
				'translation_last_update_by' => $globalUserId,
			] )
			->caller( __METHOD__ )
			->fetchRow();

		return $row ? Translation::newFromRow( $row ) : null;
	}

	/**
	 * Find a published translation for a given target title and language
	 *
	 * @param string $publishedTitle
	 * @param string $targetLanguage
	 * @return Translation|null
	 */
	public function findByPublishedTitle( string $publishedTitle, string $targetLanguage ): ?Translation {
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$row = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( [
				'translation_target_language' => $targetLanguage,
				'translation_target_title' => $publishedTitle,
				Translation::getPublishedCondition( $dbr ),
			] )
			->caller( __METHOD__ )
			->fetchRow();

		return $row ? Translation::newFromRow( $row ) : null;
	}

	/**
	 * Given a source title, a source language and a target language,
	 * find the oldest matching translation.
	 *
	 * @param string $sourceTitle
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @return Translation|null
	 */
	public function findTranslationByTitle(
		string $sourceTitle,
		string $sourceLanguage,
		string $targetLanguage
	): ?Translation {
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$row = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( [
				'translation_source_language' => $sourceLanguage,
				'translation_target_language' => $targetLanguage,
				'translation_source_title' => $sourceTitle
			] )
			->orderBy( 'translation_last_updated_timestamp', SelectQueryBuilder::SORT_ASC )
			->limit( 1 )
			->caller( __METHOD__ )
			->fetchRow();

		return $row ? Translation::newFromRow( $row ) : null;
	}

	/**
	 * Given an array of source titles, a source language and a target language,
	 * find all matching translations.
	 *
	 * @param string[] $titles
	 * @param string $sourceLanguage
	 * @param string $targetLanguage
	 * @return Translation[]
	 */
	public function findTranslationsByTitles( array $titles, string $sourceLanguage, string $targetLanguage ): array {
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$resultSet = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( [
				'translation_source_language' => $sourceLanguage,
				'translation_target_language' => $targetLanguage,
				'translation_source_title' => $titles
			] )
			->orderBy( 'translation_last_updated_timestamp', SelectQueryBuilder::SORT_ASC )
			->caller( __METHOD__ )
			->fetchResultSet();

		$result = [];
		foreach ( $resultSet as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		return $result;
	}

	/**
	 * Given a source title, a source language and a target language, find all conflicting translations.
	 * Conflicting translations are translations in progress ("draft") for same language pair and source
	 * page in last 24 hours.
	 *
	 * Here we assume that the caller already checked that no draft for the user already exists.
	 *
	 * @param string $title
	 * @param string $sourceLang
	 * @param string $targetLang
	 * @return Translation[]
	 * @throws \Exception
	 */
	public function findConflictingDraftTranslations( string $title, string $sourceLang, string $targetLang ): array {
		$translations = $this->findTranslationsByTitles( [ $title ], $sourceLang, $targetLang );

		$conflicts = array_filter( $translations, static function ( Translation $translation ) {
			$isDraft = $translation->getData()['status'] === self::TRANSLATION_STATUS_DRAFT;

			// filter out non-draft translations
			if ( !$isDraft ) {
				return false;
			}

			$lastUpdateTime = new DateTime( $translation->getData()['lastUpdateTimestamp'] );

			// Only keep translations that have been updated in the last 24 hours
			return (bool)$lastUpdateTime->diff( new DateTime( '-24 hours' ) )->invert;
		} );

		return array_values( $conflicts );
	}

	/**
	 * @param int $userId
	 * @param int $limit How many results to return
	 * @param string|null $offset Offset condition (timestamp)
	 * @param string|null $type
	 * @param string|null $from
	 * @param string|null $to
	 * @return Translation[]
	 */
	public function getAllTranslationsByUserId(
		int $userId,
		int $limit,
		?string $offset = null,
		?string $type = null,
		?string $from = null,
		?string $to = null
	): array {
		// Note: there is no index on translation_last_updated_timestamp
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$whereConditions = [ 'translation_started_by' => $userId ];

		if ( $type !== null ) {
			$whereConditions['translation_status'] = $type;
		}
		if ( $from !== null ) {
			$whereConditions['translation_source_language'] = $from;
		}
		if ( $to !== null ) {
			$whereConditions['translation_target_language'] = $to;
		}
		if ( $offset !== null ) {
			$whereConditions[] = $dbr->expr( 'translation_last_updated_timestamp', '<', $dbr->timestamp( $offset ) );
		}

		$resultSet = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( self::TRANSLATION_TABLE_NAME )
			->where( $whereConditions )
			->orderBy( 'translation_last_updated_timestamp', SelectQueryBuilder::SORT_DESC )
			->limit( $limit )
			->caller( __METHOD__ )
			->fetchResultSet();

		$result = [];
		foreach ( $resultSet as $row ) {
			$result[] = Translation::newFromRow( $row );
		}

		return $result;
	}

	public function insertTranslation( Translation $translation, UserIdentity $user ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$row = [
			'translation_source_title' => $translation->translation['sourceTitle'],
			'translation_target_title' => $translation->translation['targetTitle'],
			'translation_source_language' => $translation->translation['sourceLanguage'],
			'translation_target_language' => $translation->translation['targetLanguage'],
			'translation_source_revision_id' => $translation->translation['sourceRevisionId'],
			'translation_source_url' => $translation->translation['sourceURL'],
			'translation_status' => $translation->translation['status'],
			'translation_progress' => $translation->translation['progress'],
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_last_update_by' => $this->userService->getGlobalUserId( $user ),
			'translation_start_timestamp' => $dbw->timestamp(),
			'translation_started_by' => $this->userService->getGlobalUserId( $user ),
			'translation_cx_version' => $translation->translation['cxVersion'],
		];

		if ( $translation->translation['status'] === self::TRANSLATION_STATUS_PUBLISHED ) {
			$row['translation_target_url'] = $translation->translation['targetURL'];
			$row['translation_target_revision_id'] = $translation->translation['targetRevisionId'];
		}

		$dbw->newInsertQueryBuilder()
			->insertInto( self::TRANSLATION_TABLE_NAME )
			->row( $row )
			->caller( __METHOD__ )
			->execute();

		$translation->translation['id'] = (int)$dbw->insertId();
		$translation->setIsNew( true );
	}

	public function updateTranslation( Translation $translation, array $options = [] ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$set = [
			'translation_target_title' => $translation->translation['targetTitle'],
			'translation_source_revision_id' => $translation->translation['sourceRevisionId'],
			'translation_source_url' => $translation->translation['sourceURL'],
			'translation_status' => $translation->translation['status'],
			'translation_last_updated_timestamp' => $dbw->timestamp(),
			'translation_progress' => $translation->translation['progress'],
			'translation_cx_version' => $translation->translation['cxVersion'],
		];

		if ( $translation->translation['status'] === self::TRANSLATION_STATUS_PUBLISHED ) {
			$set['translation_target_url'] = $translation->translation['targetURL'];
			$set['translation_target_revision_id'] = $translation->translation['targetRevisionId'];
		}

		$isFreshTranslation = $options['freshTranslation'] ?? false;
		if ( $isFreshTranslation ) {
			$set['translation_start_timestamp'] = $dbw->timestamp();
		}

		$dbw->newUpdateQueryBuilder()
			->update( self::TRANSLATION_TABLE_NAME )
			->set( $set )
			->where( [ 'translation_id' => $translation->getTranslationId() ] )
			->caller( __METHOD__ )
			->execute();

		$translation->setIsNew( false );
	}

	/**
	 * A convenient abstraction of create and update methods. Checks if
	 * translation exists and chooses either of create or update actions.
	 *
	 * @param Translation $translation
	 * @param UserIdentity $user
	 */
	public function saveTranslation( Translation $translation, UserIdentity $user ): void {
		$existingTranslation = $this->findTranslationByUser(
			$user,
			$translation->getSourceTitle(),
			$translation->getSourceLanguage(),
			$translation->getTargetLanguage()
		);

		if ( $existingTranslation === null ) {
			$this->insertTranslation( $translation, $user );
		} else {
			$options = [];
			if ( $existingTranslation->translation['status'] === self::TRANSLATION_STATUS_DELETED ) {
				// Existing translation is deleted, so this is a fresh start of same
				// language pair and source title.
				$options['freshTranslation'] = true;
			}
			$translation->translation['id'] = $existingTranslation->getTranslationId();
			$this->updateTranslation( $translation, $options );
		}
	}
}
