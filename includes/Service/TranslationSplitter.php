<?php

declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\DTO\TranslationUnitDTO;
use ContentTranslation\Entity\SectionTranslation;
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Translation;
use DOMDocument;

/**
 * This class implements a service that given a specific translation (from cx_translations table),
 * and it creates a new section translation (rows for the cx_section_translations table) for each
 * article section that has been translated in this translation - except for the lead section.
 * The information about which sections have been translated, is extracted from the translation
 * parallel corpora (cx_corpora table).
 *
 * @author Nik Gkountas
 */
class TranslationSplitter {
	private const LEAD_SECTION_DUMMY_TITLE = '__LEAD_SECTION__';

	private TranslationCorporaManager $corporaManager;
	private SectionTitleFetcher $sectionTitleFetcher;

	public function __construct( TranslationCorporaManager $corporaManager, SectionTitleFetcher $sectionTitleFetcher ) {
		$this->corporaManager = $corporaManager;
		$this->sectionTitleFetcher = $sectionTitleFetcher;
	}

	/**
	 * @param Translation $translation
	 * @return SectionTranslation[]
	 */
	public function splitIntoSectionTranslations( Translation $translation ): array {
		$translationUnits = $this->corporaManager->getTranslationUnitDTOsByTranslationId(
			$translation->getTranslationId()
		);

		if ( !$translationUnits || !$this->validateMwSectionNumbers( $translationUnits ) ) {
			// TODO: Should we throw an exception or log something here?
			return [];
		}

		$translationUnitsBySections = [];
		foreach ( $translationUnits as $unit ) {
			// @phan-suppress-next-line PhanTypeMismatchDimAssignment False positive
			$translationUnitsBySections[$unit->getMwSectionNumber()][] = $unit;
		}

		$revision = array_values( $translationUnits )[0]->getRevision();
		$sourceSectionTitles = $this->sectionTitleFetcher->fetchSectionTitles(
			$translation->getSourceLanguage(),
			null,
			$revision
		);

		if ( !$sourceSectionTitles ) {
			return [];
		}

		$mwSectionNumbers = array_keys( $translationUnitsBySections );
		$mwSectionNumbers = array_filter( $mwSectionNumbers, static function ( int $value ) {
			return $value !== 0;
		} );

		if ( !$this->validateSourceSectionKeys( $mwSectionNumbers, array_keys( $sourceSectionTitles ) ) ) {
			// TODO: Throw an exception (maybe a custom one) or log something here
			return [];
		}

		$draftStatusIndex = array_search(
			SectionTranslationStore::TRANSLATION_STATUS_DRAFT,
			SectionTranslationStore::TRANSLATION_STATUSES
		);

		$newSectionTranslations = [];

		foreach ( $translationUnitsBySections as $mwSectionNumber => $translationUnitDTOs ) {
			$translationUnitDTO = $translationUnitDTOs[0];
			// It's guaranteed that the "$mwSectionNumber" index exists inside $sectionTitles, as we have
			// already validated source section titles above. Lead section is also guaranteed to be present
			// inside the target article.
			if ( $mwSectionNumber === 0 ) {
				$sourceSectionTitle = self::LEAD_SECTION_DUMMY_TITLE;
				$targetSectionTitle = self::LEAD_SECTION_DUMMY_TITLE;
			} else {
				$sourceSectionTitle = $sourceSectionTitles[$mwSectionNumber];
				$targetSectionTitle =
					$this->searchForTargetTitleInCorporaUnits( $translationUnitDTOs ) ?? $sourceSectionTitle;
			}

			$newSectionTranslations[] = new SectionTranslation(
				null,
				$translation->getTranslationId(),
				$translationUnitDTO->getBaseSectionId(),
				$sourceSectionTitle,
				$targetSectionTitle,
				$draftStatusIndex,
				json_encode( [ "any" => null, "mt" => null, "human" => null ] )
			);
		}

		return $newSectionTranslations;
	}

	/**
	 * Given an array of TranslationUnitDTO objects, this method returns a boolean
	 * indicating whether all translation units refer to valid (not-null) mw section
	 * numbers (that is when sectionId is in the "$revision_$mwSectionNumber_$subSectionNumber" form)
	 *
	 * @param TranslationUnitDTO[] $translationUnits
	 * @return bool
	 */
	private function validateMwSectionNumbers( array $translationUnits ): bool {
		foreach ( $translationUnits as $translationUnit ) {
			if ( $translationUnit->getMwSectionNumber() === null ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Given an array of integers representing the mw section numbers of corpora translation units,
	 * and an array of integers representing the section keys of the section titles fetched from the API,
	 * this method returns a boolean indicating if every corpora translation units has a section number
	 * that belongs in the list of keys returned by the API.
	 *
	 * @param int[] $mwSectionNumbers
	 * @param int[] $sectionKeys
	 * @return bool
	 */
	private function validateSourceSectionKeys( array $mwSectionNumbers, array $sectionKeys ): bool {
		return !array_diff( $mwSectionNumbers, $sectionKeys );
	}

	/**
	 * Given an array of translation unit DTOs, this method concatenates the contents of these DTOs
	 * and search for first level section titles inside these contents. Such section titles are only
	 * contained inside <h2> elements, so we are only searching for such elements.
	 *
	 * @param TranslationUnitDTO[] $translationUnitDTOs
	 * @return string|null
	 */
	private function searchForTargetTitleInCorporaUnits( array $translationUnitDTOs ): ?string {
		$translatedContent = array_reduce(
			$translationUnitDTOs,
			static function ( string $html, TranslationUnitDTO $translationUnitDTO ) {
				$translatedContent = $translationUnitDTO->getUserBlob() ?? $translationUnitDTO->getMtBlob();
				$translatedContent = $translatedContent['content'] ?? '';

				return $html . $translatedContent;
			},
			""
		);

		$doc = new DOMDocument();
		libxml_use_internal_errors( true );
		$doc->loadHTML(
			'<!doctype html><html><head><meta charset="UTF-8"/></head><body>' .
			$translatedContent .
			'</body></html>'
		);
		$h2ElementsList = $doc->getElementsByTagName( 'h2' );

		if ( $h2ElementsList->count() ) {
			$h2Element = $h2ElementsList->item( 0 );
			return $h2Element->textContent;
		}

		return null;
	}
}
