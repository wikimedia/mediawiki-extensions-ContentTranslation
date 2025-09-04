<?php

declare( strict_types = 1 );

/**
 * Category store for source and target categories in cx_corpora table. cx_corpora was initially
 * used to store pairs of source and target (translated) sections, but extended to store pairs
 * of source and target category lists, which utilize special section ID of 'CX_CATEGORY_METADATA'.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

use Wikimedia\Rdbms\IConnectionProvider;

class CategoryStore {
	private const TYPE_SOURCE = 'source';
	private const TYPE_USER = 'user';

	private const CATEGORIES_SECTION = [
		'cxc_section_id' => 'CX_CATEGORY_METADATA'
	];

	public function __construct( private readonly IConnectionProvider $connectionProvider ) {
	}

	/**
	 * Save the source and target category list.
	 * If the record exists, update it, otherwise create.
	 */
	public function save(
		int $translationId,
		?string $sourceCategories,
		string $targetCategories,
		bool $newTranslation
	): void {
		$db = $this->connectionProvider->getPrimaryDatabase();

		$db->doAtomicSection(
			__METHOD__,
			function () use (
				$translationId, $sourceCategories, $targetCategories, $newTranslation
			) {
				if ( $newTranslation ) {
					$existing = false;
				} else {
					$existing = $this->exists( $translationId );
				}

				if ( $existing ) {
					$this->update( $translationId, $sourceCategories, self::TYPE_SOURCE );
					$this->update( $translationId, $targetCategories, self::TYPE_USER );
				} else {
					$this->create( $translationId, $sourceCategories, $targetCategories );
				}
			}
		);
	}

	/**
	 * Update source or target categories. Since API doesn't require source nor target categories
	 * while performing saving of a draft, if $categories isn't provided, do nothing.
	 */
	private function update(
		int $translationId,
		?string $categories,
		string $origin
	): void {
		if ( !$categories ) {
			return;
		}

		$db = $this->connectionProvider->getPrimaryDatabase();
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
	 */
	private function create(
		int $translationId,
		?string $sourceCategories,
		string $targetCategories
	): void {
		$db = $this->connectionProvider->getPrimaryDatabase();

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
	 * Find if there are records about source and target categories.
	 */
	private function exists( int $translationId ): bool {
		$db = $this->connectionProvider->getPrimaryDatabase();

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
