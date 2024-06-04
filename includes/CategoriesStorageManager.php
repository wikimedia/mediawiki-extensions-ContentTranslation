<?php
/**
 * Storage manager for source and target categories in cx_corpora table. cx_corpora was initially
 * used to store pairs of source and target (translated) sections, but extended to store pairs
 * of source and target category lists, which utilize special section ID of 'CX_CATEGORY_METADATA'.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;
use Wikimedia\Rdbms\IDatabase;

class CategoriesStorageManager {
	private const TYPE_SOURCE = 'source';
	private const TYPE_USER = 'user';

	private const CATEGORIES_SECTION = [
		'cxc_section_id' => 'CX_CATEGORY_METADATA'
	];

	/**
	 * Update source or target categories. Since API doesn't require source nor target categories
	 * while performing saving of a draft, if $categories isn't provided, do nothing.
	 *
	 * @param IDatabase $db
	 * @param int $translationId
	 * @param string $categories
	 * @param string $origin TYPE_SOURCE or TYPE_USER. Defaults to TYPE_USER
	 */
	private static function update(
		IDatabase $db, $translationId, $categories, $origin = self::TYPE_USER
	) {
		if ( !$categories ) {
			return;
		}

		$values = [
			'cxc_timestamp' => $db->timestamp(),
			'cxc_content' => $categories
		];
		$conditions = [
			'cxc_translation_id' => $translationId,
			'cxc_origin' => $origin
		] + self::CATEGORIES_SECTION;

		$db->newUpdateQueryBuilder()
			->update( 'cx_corpora' )
			->set( $values )
			->where( $conditions )
			->caller( __METHOD__ )
			->execute();
	}

	/**
	 * Insert source and target category list for the given translation identifier.
	 *
	 * @param IDatabase $db
	 * @param int $translationId
	 * @param string $sourceCategories
	 * @param string $targetCategories
	 */
	private static function create(
		IDatabase $db, $translationId, $sourceCategories, $targetCategories
	) {
		$values = [];
		$commonValues = [
			'cxc_translation_id' => $translationId,
			'cxc_timestamp' => $db->timestamp()
		] + self::CATEGORIES_SECTION;

		if ( $targetCategories ) {
			$values[] = [
				'cxc_origin' => self::TYPE_USER,
				'cxc_content' => $targetCategories
			] + $commonValues;
		}

		if ( $sourceCategories ) {
			$values[] = [
				'cxc_origin' => self::TYPE_SOURCE,
				'cxc_content' => $sourceCategories
			] + $commonValues;
		}

		if ( $values !== [] ) {
			$db->newInsertQueryBuilder()
				->insertInto( 'cx_corpora' )
				->rows( $values )
				->caller( __METHOD__ )
				->execute();
		}
	}

	/**
	 * Save the source and target category list.
	 * If the records exists, update them, otherwise create.
	 *
	 * @param int $translationId
	 * @param string $sourceCategories
	 * @param string $targetCategories
	 * @param bool $newTranslation Whether these are for a brand new Translation record
	 */
	public static function save(
		$translationId, $sourceCategories, $targetCategories, $newTranslation
	) {
		/** @var LoadBalancer $lb */
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$db = $lb->getConnection( DB_PRIMARY );

		$db->doAtomicSection(
			__METHOD__,
			function ( IDatabase $db ) use (
				$translationId, $sourceCategories, $targetCategories, $newTranslation
			) {
				if ( $newTranslation ) {
					$existing = false;
				} else {
					$existing = self::exists( $translationId );
				}

				if ( $existing ) {
					self::update( $db, $translationId, $sourceCategories, self::TYPE_SOURCE );
					self::update( $db, $translationId, $targetCategories );
				} else {
					self::create( $db, $translationId, $sourceCategories, $targetCategories );
				}
			}
		);
	}

	/**
	 * Find if there are records about source and target categories.
	 *
	 * @param int $translationId
	 * @return bool
	 */
	private static function exists( $translationId ) {
		/** @var LoadBalancer $lb */
		$lb = MediaWikiServices::getInstance()->getService( 'ContentTranslation.LoadBalancer' );
		$db = $lb->getConnection( DB_PRIMARY );

		$result = $db->newSelectQueryBuilder()
			->select( 'cxc_content' )
			->from( 'cx_corpora' )
			->where( [ 'cxc_translation_id' => $translationId ] )
			->andWhere( self::CATEGORIES_SECTION )
			->forUpdate()
			->caller( __METHOD__ )
			->fetchResultSet();

		return $result->numRows() > 0;
	}
}
