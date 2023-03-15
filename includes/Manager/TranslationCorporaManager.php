<?php
declare( strict_types = 1 );

namespace ContentTranslation\Manager;

use ContentTranslation\DTO\TranslationUnitDTO;
use ContentTranslation\Entity\TranslationUnit;
use ContentTranslation\Exception\InvalidSectionDataException;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Translation;
use FormatJson;

/**
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 *
 * The TranslationCorporaManager service intends to serve all Action API classes, or other
 * scripts, that need to fetch data from the "cx_corpora" table in some specific form.
 * This service depends on the TranslationCorporaStore service to interact with the
 * database table. The difference between these two classes, is that TranslationCorporaStore
 * intends to represent the Data Access Layer, while the TranslationCorporaManager lives in
 * the Domain Layer of the application, meaning that it modifies data fetched from the database
 * to serve them to its "clients" as needed.
 */
class TranslationCorporaManager {

	private const CATEGORIES = 'CX_CATEGORY_METADATA';

	private TranslationCorporaStore $corporaStore;

	public function __construct( TranslationCorporaStore $corporaStore ) {
		$this->corporaStore = $corporaStore;
	}

	public function getCorporaDumpArraysByTranslationId( int $translationId, bool $sanitize ): array {
		$sections = $this->getTranslationUnitDTOsByTranslationId( $translationId );
		// Filter out units which don't have user provided input or source
		$sections = array_filter( $sections, static function ( TranslationUnitDTO $unit ) {
			return $unit->hasUserBlob() && $unit->hasSourceBlob();
		} );

		return array_map( static function ( TranslationUnitDTO $unit ) use ( $sanitize ) {
			return $unit->toCorporaDumpArray( $sanitize );
		}, $sections );
	}

	/**
	 * Translation units and target categories. Only target categories are fetched
	 * when translation draft is restored. Source categories are saved into cx_corpora table for
	 * pairing with target categories, but not retrieved when translation draft is restored.
	 *
	 * @param int $translationId
	 * @return array { translationUnits: TranslationUnitDTO[], categories: ?string }
	 */
	public function getUnitsAndCategoriesByTranslationId( int $translationId ): array {
		$unitsAndCategories = $this->getTranslationUnitDTOsAndCategoriesByTranslationId( $translationId );
		$translationUnits = array_map(
			static function ( TranslationUnitDTO $unit ) {
				return $unit->toArray();
			}, $unitsAndCategories['sections']
		);

		return [
			'translationUnits' => $translationUnits,
			'categories' => $unitsAndCategories['categories']
		];
	}

	/**
	 * @param Translation $translation Recently saved parent translation object
	 * @param string $content
	 * @return TranslationUnit[]
	 * @throws InvalidSectionDataException
	 */
	public function saveTranslationUnits( Translation $translation, string $content ): array {
		$translationUnits = $this->createTranslationUnitsFromContent( $content, $translation->getTranslationId() );

		$isNewTranslation = $translation->isNew();
		foreach ( $translationUnits as $translationUnit ) {
			$this->corporaStore->save( $translationUnit, $isNewTranslation );
		}

		return $translationUnits;
	}

	/**
	 * @param int $translationId
	 * @param array $types should be an array of valid types. e.g. ['user', 'mt', 'source']
	 * @param bool $sanitize
	 * @return array
	 */
	public function getFilteredCorporaUnits( int $translationId, array $types, bool $sanitize ): array {
		$sections = $this->getTranslationUnitDTOsByTranslationId( $translationId );

		return array_map( static function ( TranslationUnitDTO $unit ) use ( $types, $sanitize ) {
			return $unit->toCustomArray( $types, $sanitize );
		}, $sections );
	}

	/**
	 * @param string $content
	 * @param int $translationId
	 * @return TranslationUnit[]
	 * @throws InvalidSectionDataException
	 */
	private function createTranslationUnitsFromContent( string $content, int $translationId ): array {
		$translationUnits = [];
		$units = FormatJson::decode( $content, true );
		foreach ( $units as $translationUnitData ) {
			if ( !isset( $translationUnitData['sectionId'] ) || !is_string( $translationUnitData['origin'] ) ) {
				throw new InvalidSectionDataException();
			}

			$validate = isset( $translationUnitData['validate'] ) && $translationUnitData['validate'];
			$timestamp = $translationUnitData['timestamp'] ?? null;
			$sequenceId = isset( $translationUnitData['sequenceId'] ) ? (int)$translationUnitData['sequenceId'] : null;
			'@phan-var ?string $timestamp';
			$translationUnits[] = new TranslationUnit(
				(string)$translationUnitData['sectionId'],
				$translationUnitData['origin'],
				$sequenceId,
				(string)$translationUnitData['content'], // Content can be null in case translator clear the section.
				$translationId,
				$timestamp,
				$validate
			);
		}

		return $translationUnits;
	}

	/**
	 * @param int $id
	 * @return TranslationUnitDTO[] array indexed by the sectionId of each unit
	 */
	public function getTranslationUnitDTOsByTranslationId( int $id ): array {
		$translationUnits = $this->corporaStore->findByTranslationId( $id );
		$translationUnitDTOs = $this->createDTOsFromTranslationUnits( $translationUnits );
		unset( $translationUnitDTOs[ self::CATEGORIES ] );

		return $translationUnitDTOs;
	}

	/**
	 * @param int $id
	 * @return array { sections: TranslationUnitDTO[], categories: ?string }
	 */
	private function getTranslationUnitDTOsAndCategoriesByTranslationId( int $id ): array {
		$translationUnits = $this->corporaStore->findByTranslationId( $id );
		$translationUnitDTOs = $this->createDTOsFromTranslationUnits( $translationUnits );

		$targetCategories = null;

		if ( isset( $translationUnitDTOs[ self::CATEGORIES ] ) ) {
			// Extract target categories and return separately from translation units (sections).
			// Source categories aren't retrieved, only saved in cx_corpora for pairing
			// with target categories. Source and target categories are saved in cx_corpora table
			// with special section ID, to distinguish categories from translation units.
			$userBlob = $translationUnitDTOs[ self::CATEGORIES ]->getUserBlob();

			if ( $userBlob ) {
				$targetCategories = $userBlob[ 'content' ];
			}
			unset( $translationUnitDTOs[ self::CATEGORIES ] );
		}

		return [
			'sections' => $translationUnitDTOs,
			'categories' => $targetCategories
		];
	}

	/**
	 * @param TranslationUnit[] $translationUnits
	 * @return TranslationUnitDTO[] array indexed by the sectionId of each unit
	 */
	private function createDTOsFromTranslationUnits( array $translationUnits ): array {
		/** @type $translationDTOs TranslationUnitDTO[] */
		$translationDTOs = [];

		$isMT = static function ( $type ) {
			return $type !== TranslationUnitDTO::TYPE_SOURCE && $type !== TranslationUnitDTO::TYPE_USER;
		};

		foreach ( $translationUnits as $unit ) {
			// Here I am assuming sequence IDs are unique and won't be re-used
			$id = $unit->getSectionId();
			$translationDTO = $translationDTOs[$id] ?? new TranslationUnitDTO( $id, (int)$unit->getSequenceId() );

			$type = $isMT( $unit->getOrigin() ) ? TranslationUnitDTO::TYPE_MT : $unit->getOrigin();
			$blob = [
				'engine' => $type === TranslationUnitDTO::TYPE_MT ? $unit->getOrigin() : null,
				'content' => $unit->getContent(),
				// TS_ISO_8601 is used because it includes timezone (always Z)
				'timestamp' => wfTimestamp( TS_ISO_8601, $unit->getTimestamp() ),
			];

			$translationDTO->setBlobForType( $type, $blob );
			$translationDTOs[$id] = $translationDTO;
		}

		return $translationDTOs;
	}

}
