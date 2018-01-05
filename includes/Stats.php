<?php
/**
 * Functions for getting ContentTranslation metrics.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
namespace ContentTranslation;

use Wikimedia\Rdbms\ResultWrapper;

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
		$dbr = wfGetDB( DB_REPLICA );

		return $dbr->select(
			[
				'change_tag',
				'revision',
				'page',
			],
			[
				'page_id',
				'page_namespace',
				'page_title',
				'max(ct_rev_id)',
				'ct_params',
				'rev_user',
			],
			[
				'ct_tag' => 'contenttranslation',
				'rev_id = ct_rev_id',
				'rev_page = page_id',
			],
			__METHOD__,
			[
				'GROUP BY' => 'page_id',
				// This prevents filesort
				'ORDER BY' => 'null',
			]
		);
	}
}
