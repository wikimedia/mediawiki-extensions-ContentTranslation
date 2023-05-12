<?php
/**
 * Lookup data from corpora table.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

use ContentTranslation\DTO\TranslationUnitDTO;
use ContentTranslation\Store\TranslationCorporaStore;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IResultWrapper;

class CorporaLookup {
	public const TYPE_SOURCE = 'source';
	public const TYPE_MT = 'mt';
	public const TYPE_USER = 'user';
	private const CATEGORIES = 'CX_CATEGORY_METADATA';

	/**
	 * @var IDatabase
	 */
	protected $db;

	public function __construct( IDatabase $db ) {
		$this->db = $db;
	}

	/**
	 * Returned fields: array{ sections: TranslationUnitDTO[], categories: array }
	 * @param int $id Translation id
	 * @return array
	 */
	public function getByTranslationId( int $id ): array {
		$result = $this->db->newSelectQueryBuilder()
			->select( [
				'cxc_translation_id',
				'cxc_origin',
				'cxc_section_id',
				'cxc_timestamp',
				'cxc_sequence_id',
				'cxc_content',
			] )
			->from( TranslationCorporaStore::TABLE_NAME )
			->where( [ 'cxc_translation_id' => $id ] )
			->caller( __METHOD__ )
			->fetchResultSet();

		return self::format( $result );
	}

	/**
	 * Returned fields: { sections: TranslationUnitDTO[], categories: array }
	 * @param IResultWrapper $rows
	 * @return array
	 */
	protected static function format( IResultWrapper $rows ): array {
		/** @type $sections TranslationUnitDTO[] */
		$sections = [];

		foreach ( $rows as $row ) {
			// Here I am assuming sequence IDs are unique and won't be re-used
			$id = $row->cxc_section_id;
			$section = $sections[$id] ?? new TranslationUnitDTO( $id, (int)$row->cxc_sequence_id );

			$type = self::isMT( $row->cxc_origin ) ? self::TYPE_MT : $row->cxc_origin;
			$blob = [
				'engine' => $type === self::TYPE_MT ? $row->cxc_origin : null,
				'content' => $row->cxc_content,
				// TS_ISO_8601 is used because it includes timezone (always Z)
				'timestamp' => wfTimestamp( TS_ISO_8601, $row->cxc_timestamp ),
			];

			$section->setBlobForType( $type, $blob );
			$sections[$id] = $section;
		}

		$targetCategories = null;

		if ( isset( $sections[ self::CATEGORIES ] ) ) {
			// Extract target categories and return separately from translation units (sections).
			// Source categories aren't retrieved, only saved in cx_corpora for pairing
			// with target categories. Source and target categories are saved in cx_corpora table
			// with special section ID, to distinguish categories from translation units.
			$userBlob = $sections[ self::CATEGORIES ]->getUserBlob();

			if ( $userBlob ) {
				$targetCategories = $userBlob[ 'content' ];
			}
			unset( $sections[ self::CATEGORIES ] );
		}

		return [
			'sections' => $sections,
			'categories' => $targetCategories
		];
	}

	protected static function isMT( $type ) {
		return $type !== self::TYPE_SOURCE && $type !== self::TYPE_USER;
	}

}
