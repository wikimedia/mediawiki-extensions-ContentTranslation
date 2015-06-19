<?php
/**
 * Functions for getting ContentTranslation metrics.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
namespace ContentTranslation;

/**
 * Functions for getting ContentTranslation metrics.
 */
class Stats {
	/**
	 * Get CX-related stats.
	 *
	 * @return ResultWrapper Current CX stats.
	 */
	public static function getStats() {
		$dbr = wfGetDB( DB_SLAVE );

		return $dbr->select(
			array(
				'change_tag',
				'revision',
				'page',
			),
			array(
				'page_id',
				'page_namespace',
				'page_title',
				'max(ct_rev_id)',
				'ct_params',
				'rev_user',
			),
			array(
				'ct_tag' => 'contenttranslation',
				'rev_id = ct_rev_id',
				'rev_page = page_id',
			),
			__METHOD__,
			array(
				'GROUP BY' => 'page_id',
				// This prevents filesort
				'ORDER BY' => 'null',
			)
		);
	}
}
