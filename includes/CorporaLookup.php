<?php
/**
 * Lookup data from corpora table.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

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
	 * @param int $id Translation id
	 * @return array
	 */
	public function getByTranslationId( $id ) {
		$fields = [
			'cxc_translation_id',
			'cxc_origin',
			'cxc_section_id',
			'cxc_timestamp',
			'cxc_sequence_id',
			'cxc_content',
		];

		$conds = [
			'cxc_translation_id' => intval( $id ),
		];

		$res = $this->db->select( 'cx_corpora', $fields, $conds, __METHOD__ );

		return self::format( $res );
	}

	protected static function format( IResultWrapper $rows ) {
		$sections = [];

		foreach ( $rows as $row ) {
			// Here I am assuming sequence IDs are unique and won't be re-used
			$id = $row->cxc_section_id;
			$type = self::isMT( $row->cxc_origin ) ? self::TYPE_MT : $row->cxc_origin;

			if ( !isset( $sections[$id] ) ) {
				$sections[$id] = [
					'sequenceid' => (int)$row->cxc_sequence_id,
					self::TYPE_SOURCE => null,
					self::TYPE_MT => null,
					// In the future this could be an array, but for now to
					// keep it simple just show one version
					self::TYPE_USER => null,
				];
			}

			$blob = [
				'engine' => $type === self::TYPE_MT ? $row->cxc_origin : null,
				'content' => $row->cxc_content,
				// TS_ISO_8601 is used because it includes timezone (always Z)
				'timestamp' => wfTimestamp( TS_ISO_8601, $row->cxc_timestamp ),
			];

			if ( !isset( $sections[$id][$type] ) ) {
				$sections[$id][$type] = $blob;
				continue;
			}

			// It's possible we have a "conflict", since we don't enforce uniqueness
			// in the database. In this case, the one with latest timestamp is used.
			// Note: TS_ISO_8601 is suitable for string comparison if timezone is Z.
			/** @phan-suppress-next-line PhanTypeArraySuspiciousNullable */
			if ( $blob['timestamp'] > $sections[$id][$type]['timestamp'] ) {
				$sections[$id][$type] = $blob;
			}
		}

		$targetCategories = null;

		if ( isset( $sections[ self::CATEGORIES ] ) ) {
			// Extract target categories and return separately from translation units (sections).
			// Source categories aren't retrieved, only saved in cx_corpora for pairing
			// with target categories. Source and target categories are saved in cx_corpora table
			// with special section ID, to distinguish categories from translation units.
			// @phan-suppress-next-line PhanTypeArraySuspiciousNull
			$targetCategories = $sections[ self::CATEGORIES ][ self::TYPE_USER ][ 'content' ];
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
