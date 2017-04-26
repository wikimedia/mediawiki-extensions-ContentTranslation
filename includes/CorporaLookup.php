<?php
/**
 * Lookup data from corpora table.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

namespace ContentTranslation;

class CorporaLookup {
	const TYPE_SOURCE = 'source';
	const TYPE_MT = 'mt';
	const TYPE_USER = 'user';

	/**
	 * @var \IDatabase
	 */
	protected $db;

	public function __construct( \IDatabase $db ) {
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

	protected static function format( \ResultWrapper $rows ) {
		$sections = [];

		foreach ( $rows as $row ) {
			// Here I am assuming sequence ids are unique and wont be re-used
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
			if ( $blob['timestamp'] > $sections[$id][$type]['timestamp'] ) {
				$sections[$id][$type] = $blob;
			}
		}

		return $sections;
	}

	protected static function isMT( $type ) {
		return $type !== self::TYPE_SOURCE && $type !== self::TYPE_USER;
	}

}
