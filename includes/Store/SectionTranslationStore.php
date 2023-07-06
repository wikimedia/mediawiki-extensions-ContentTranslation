<?php

declare( strict_types = 1 );

namespace ContentTranslation\Store;

use ContentTranslation\DTO\SectionTranslationDTO;
use ContentTranslation\Entity\SectionTranslation;
use ContentTranslation\LoadBalancer;
use Wikimedia\Rdbms\Platform\ISQLPlatform;
use Wikimedia\Rdbms\SelectQueryBuilder;

class SectionTranslationStore {
	public const TABLE_NAME = 'cx_section_translations';
	public const TRANSLATION_STATUS_DRAFT = 'draft';
	public const TRANSLATION_STATUS_PUBLISHED = 'published';
	public const TRANSLATION_STATUS_DELETED = 'deleted';

	public const TRANSLATION_STATUSES = [
		self::TRANSLATION_STATUS_DRAFT,
		self::TRANSLATION_STATUS_PUBLISHED,
		self::TRANSLATION_STATUS_DELETED,
	];

	/** @var LoadBalancer */
	private $lb;

	public function __construct( LoadBalancer $loadBalancer ) {
		$this->lb = $loadBalancer;
	}

	public function insertTranslation( SectionTranslation $translation ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );
		$values = $this->translationToDBRow( $translation );
		// set start/last_updated timestamps to current timestamp
		$values['cxsx_translation_start_timestamp'] = $dbw->timestamp();
		$values['cxsx_translation_last_updated_timestamp'] = $dbw->timestamp();

		$dbw->insert( self::TABLE_NAME, $values, __METHOD__ );
		$translation->setId( $dbw->insertId() );
	}

	public function updateTranslation( SectionTranslation $translation ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );
		$values = $this->translationToDBRow( $translation );
		$values['cxsx_translation_last_updated_timestamp'] = $dbw->timestamp();

		$dbw->update(
			self::TABLE_NAME,
			$values,
			[ 'cxsx_id' => $translation->getId() ],
			__METHOD__
		);
	}

	/**
	 * @param int|null $id The "cxsx_id" of the section translation row
	 * @param int|null $translationStatus Either "deleted", "draft" or "published"
	 */
	public function updateTranslationStatusById( ?int $id, ?int $translationStatus ) {
		$dbw = $this->lb->getConnection( DB_PRIMARY );
		$dbw->update(
			self::TABLE_NAME,
			[ 'cxsx_translation_status' => $translationStatus ],
			[ 'cxsx_id' => $id ],
			__METHOD__
		);
	}

	public function findTranslation( int $translationId, string $sectionId ): ?SectionTranslation {
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$values = [ 'cxsx_translation_id' => $translationId, 'cxsx_section_id' => $sectionId ];

		$row = $dbr->selectRow( self::TABLE_NAME, \IDatabase::ALL_ROWS, $values, __METHOD__ );
		return $row ? $this->createTranslationFromRow( $row ) : null;
	}

	public function createTranslationFromRow( \stdClass $row ): SectionTranslation {
		return new SectionTranslation(
			(int)$row->cxsx_id,
			(int)$row->cxsx_translation_id,
			$row->cxsx_section_id,
			$row->cxsx_source_section_title,
			$row->cxsx_target_section_title,
			$row->cxsx_translation_status ? (int)$row->cxsx_translation_status : null,
			$row->cxsx_translation_progress,
		);
	}

	/**
	 * @param int $userId User ID
	 * @param string|null $from
	 * @param string|null $to
	 * @param string|null $status The status of the translation. Either "draft" or "published"
	 * @param int $limit How many results to return. Defaults to 100, same as for the "contenttranslation" list API
	 * @param string|null $offset Offset condition (timestamp)
	 * @return SectionTranslationDTO[]
	 */
	public function findSectionTranslationsByUser(
		int $userId,
		string $from = null,
		string $to = null,
		string $status = null,
		int $limit = 100,
		string $offset = null
	): array {
		// Note: there is no index on translation_last_updated_timestamp
		$dbr = $this->lb->getConnection( DB_REPLICA );

		$onClauseConditions = [
			'translator_translation_id = translation_id',
			'translator_user_id' => $userId
		];

		$whereConditions = [];
		if ( $status !== null ) {
			$whereConditions['translation_status'] = $status;
		}
		if ( $from !== null ) {
			$whereConditions['translation_source_language'] = $from;
		}
		if ( $to !== null ) {
			$whereConditions['translation_target_language'] = $to;
		}
		if ( $offset !== null ) {
			$ts = $dbr->addQuotes( $dbr->timestamp( $offset ) );
			$whereConditions[] = "translation_last_updated_timestamp < $ts";
		}

		$resultSet = $dbr->newSelectQueryBuilder()
			->select( ISQLPlatform::ALL_ROWS )
			->from( TranslationStore::TRANSLATION_TABLE_NAME )
			->leftJoin( self::TABLE_NAME, null, 'translation_id = cxsx_translation_id' )
			->join( TranslationStore::TRANSLATOR_TABLE_NAME, null, $onClauseConditions )
			->where( $whereConditions )
			->orderBy( 'translation_last_updated_timestamp', SelectQueryBuilder::SORT_DESC )
			->limit( $limit )
			->caller( __METHOD__ )
			->fetchResultSet();

		$result = [];
		foreach ( $resultSet as $row ) {
			$result[] = new SectionTranslationDTO(
				$row->cxsx_id ? (int)$row->cxsx_id : null,
				(int)$row->translation_id,
				$row->cxsx_section_id ?? null,
				$row->translation_source_title,
				$row->translation_source_language,
				$row->translation_target_language,
				$row->translation_start_timestamp,
				$row->translation_last_updated_timestamp,
				self::TRANSLATION_STATUSES[ $row->cxsx_translation_status ] ?? $row->translation_status,
				$row->translation_source_revision_id,
				$row->cxsx_translation_progress ?? $row->translation_progress,
				$row->translation_target_title,
				$row->cxsx_source_section_title,
				$row->cxsx_target_section_title,
			);
		}

		return $result;
	}

	/**
	 * Given the "parent" translation id and the section id
	 * (in the "${revision}_${sectionNumber} form), this method
	 * deletes the corresponding section translation from the
	 * "cx_section_translations" table.
	 *
	 * @param int $sectionTranslationId
	 * @return void
	 */
	public function deleteTranslationById( int $sectionTranslationId ): void {
		$dbw = $this->lb->getConnection( DB_PRIMARY );

		$deletedStatusIndex = array_search( self::TRANSLATION_STATUS_DELETED, self::TRANSLATION_STATUSES );
		$dbw->update(
			self::TABLE_NAME,
			[ 'cxsx_translation_status' => $deletedStatusIndex ],
			[ 'cxsx_id' => $sectionTranslationId ],
			__METHOD__
		);
	}

	private function translationToDBRow( SectionTranslation $translation ): array {
		return [
			'cxsx_translation_id' => $translation->getTranslationId(),
			'cxsx_section_id' => $translation->getSectionId(),
			'cxsx_source_section_title' => $translation->getSourceSectionTitle(),
			'cxsx_target_section_title' => $translation->getTargetSectionTitle(),
			'cxsx_translation_status' => $translation->getTranslationStatus(),
			'cxsx_translation_progress' => $translation->getProgress(),
		];
	}
}
