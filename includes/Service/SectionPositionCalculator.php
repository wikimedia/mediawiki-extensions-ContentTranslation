<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\SiteMapper;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Json\FormatJson;
use MediaWiki\Title\Title;
use Psr\Log\LoggerInterface;

class SectionPositionCalculator {
	private const APPENDIX_TITLES = [
		"en" => [
			"Works",
			"Publications",
			"Bibliography",
			"Discography",
			"Filmography",
			"See also",
			"Notes",
			"Citations",
			"References",
			"Further reading",
			"External links"
		],
		"es" => [
			"Bibliografía",
			"Referencias",
			"Citas",
			"Discografía",
			"Filmografía",
			"Notas",
			"Publicaciones",
			"Obra",
			"Enlaces externos",
			"Otras lecturas",
			"Lecturas relacionadas",
			"Véase también"
		],
		"bn" => [
			"গ্রন্থপঞ্জী",
			"গ্রন্থপঞ্জি",
			"তথ্যাবলি",
			"উদ্ধৃতিসমূহ",
			"বর্ণনসমূহ",
			"উদ্ধৃতি",
			"উদ্ধ্বৃতি",
			"তথ্যসূত্র",
			"ডিস্কোগ্রাফি",
			"বহিঃসংযোগ",
			"চলচ্চিত্রের তালিকা",
			"আরও পড়ুন",
			"আরও পড়ুন",
			"আরো পড়ুন",
			"টীকা",
			"নোট",
			"প্রকাশনা",
			"প্রকাশিত গ্রন্থ",
			"আরও দেখুন",
			"আরো দেখুন",
			"কাজ",
			"কর্মজীবন"
		],
		"fr" => [
			"Bibliographie",
			"Références",
			"Discographie",
			"Filmographie",
			"Travaux",
			"Liens externes",
			"Principales publications",
			"Voir aussi"
		],
		"de" => [
			"Literatur",
			"Bibliographie",
			"Anmerkungen",
			"Zitate",
			"Belege",
			"Diskografie",
			"Diskographie",
			"Weblinks",
			"Filmografie",
			"Literatur",
			"Einzelnachweise",
			"Veröffentlichungen",
			"Einzelnachweise",
			"Arbeit",
			"Siehe auch"
		]
	];

	public function __construct(
		private readonly HttpRequestFactory $httpRequestFactory,
		private readonly SectionTitleFetcher $sectionTitleFetcher,
		private readonly SectionMappingFetcher $sectionMappingFetcher,
		private readonly LoggerInterface $logger
	) {
	}

	/**
	 * This method returns the appropriate number indicating the position in
	 * which the new section should be published inside the target page,
	 * according to the following logic:
	 *
	 * 1. If the section is being published to user's sandbox, then the section
	 * position should be "new"
	 * 2. If section is a lead section then its position should be equal to 0.
	 * 3. If existingSectionTitle is provided and exists in target article, use its position
	 *    (for expanding/updating existing sections)
	 * 4. If source article information is available, calculate position based on
	 *    source article section order and existing target sections.
	 * 5. If at least one appendix section exists then it equals to the
	 *    index of the first appendix section (in order of appearance)
	 * 6. Otherwise, it's equal to "new".
	 *
	 * @param Title $targetTitle
	 * @param string $targetLanguage
	 * @param bool $isSandbox
	 * @param string $sourceLanguage Source article language for position calculation
	 * @param string $sourceTitle Source article title for position calculation
	 * @param string $sourceSectionTitle Title of source section being translated
	 * @param string|null $existingTargetSectionTitle Title of existing target section being expanded
	 * @return int|string
	 */
	public function calculateSectionPosition(
		Title $targetTitle,
		string $targetLanguage,
		bool $isSandbox,
		string $sourceLanguage,
		string $sourceTitle,
		string $sourceSectionTitle,
		?string $existingTargetSectionTitle = null
	): int|string {
		$sectionPosition = "new";
		if ( $isSandbox ) {
			return $sectionPosition;
		}

		$targetSectionTitles = $this->sectionTitleFetcher->fetchSectionTitles( $targetLanguage, $targetTitle );

		// if target sections are null, this page doesn't exist, and this is a lead section
		if ( $targetSectionTitles === null ) {
			return 0;
		}

		if ( $targetSectionTitles ) {
			// If expanding existing section, use its current position
			if ( $existingTargetSectionTitle !== null ) {
				$existingSectionPosition = array_search( $existingTargetSectionTitle, $targetSectionTitles );
				if ( $existingSectionPosition !== false ) {
					return $existingSectionPosition;
				}
			}

			// Try to calculate position based on source article order if source info is available
			$sourceBasedPosition = $this->calculatePositionFromSourceOrder(
				$sourceLanguage,
				$sourceTitle,
				$targetLanguage,
				$sourceSectionTitle,
				$targetSectionTitles
			);
			if ( $sourceBasedPosition !== null ) {
				return $sourceBasedPosition;
			}

			// Fall back to appendix-based logic
			$appendixTitles = $this->fetchAppendixTitles( $targetLanguage );
			$targetAppendixTitles = array_intersect( $targetSectionTitles, $appendixTitles );
			if ( $targetAppendixTitles ) {
				$sectionPosition = array_key_first( $targetAppendixTitles );
			}
		}
		return $sectionPosition;
	}

	/**
	 * Calculate section position based on source article order and existing target sections.
	 * Uses CX server section mappings to determine the optimal insertion position that
	 * preserves the source article's section ordering in the target article.
	 *
	 * Algorithm:
	 * 1. Fetch section mappings from CX server
	 * 2. Find which source section corresponds to the target section being inserted
	 * 3. Look for the next section in source order that already exists in target
	 * 4. Insert before that section, or at end if no such section exists
	 *
	 * @param string $sourceLanguage
	 * @param string $sourceTitle
	 * @param string $targetLanguage
	 * @param string $sourceSectionTitle
	 * @param array $targetSectionTitles Existing sections in target article (indexed by position)
	 * @return int|null Position index or null if unable to determine
	 */
	private function calculatePositionFromSourceOrder(
		string $sourceLanguage,
		string $sourceTitle,
		string $targetLanguage,
		string $sourceSectionTitle,
		array $targetSectionTitles
	): int|null {
		// Fetch section mappings from CX server
		$sectionMappings = $this->sectionMappingFetcher->fetchSectionMapping(
			$sourceLanguage,
			$sourceTitle,
			$targetLanguage
		);

		if ( !$sectionMappings ) {
			return null;
		}

		// Calculate the optimal insertion position
		return $this->calculateInsertionPosition(
			$sourceSectionTitle,
			$sectionMappings['sourceSections'],
			$sectionMappings['present'],
			$targetSectionTitles
		);
	}

	/**
	 * Calculate the optimal insertion position for a section based on source article order.
	 * Finds the next section in source order that already exists in the target article,
	 * and returns its position as the insertion point.
	 *
	 * @param string $sourceSectionTitle The source section being positioned
	 * @param array $sourceSections All source sections in order
	 * @param array $presentMappings Mapping of existing source->target sections
	 * @param array $targetSectionTitles Existing target sections (indexed by position)
	 * @return int|null Position index or null if no insertion point found
	 */
	private function calculateInsertionPosition(
		string $sourceSectionTitle,
		array $sourceSections,
		array $presentMappings,
		array $targetSectionTitles
	): ?int {
		// Find the position of our source section in the source article
		$sourceSectionIndex = array_search( $sourceSectionTitle, $sourceSections );
		if ( $sourceSectionIndex === false ) {
			// This shouldn't happen if data is consistent, but handle gracefully
			return null;
		}

		$correspondingTargetSection = $presentMappings[$sourceSectionTitle] ?? null;
		// if the corresponding target section exists, the user translated an existing section
		// and wants to publish it as a new section (in case of section expansion, the positioning
		// should be controlled by the "existingsectiontitle" endpoint parameter
		if ( $correspondingTargetSection ) {
			// Find where the existing target section appears in the actual target article
			$targetPosition = array_search( $correspondingTargetSection, $targetSectionTitles );

			// the new section should be published right after the existing one
			return $targetPosition + 1;
		}

		// Look for the next section in source order that already exists in target
		// Insert new section before that existing section to maintain order
		for ( $i = $sourceSectionIndex + 1; $i < count( $sourceSections ); $i++ ) {
			$laterSourceSection = $sourceSections[$i];

			// Check if this later source section has a corresponding target section
			if ( !isset( $presentMappings[$laterSourceSection] ) ) {
				continue;
			}

			$correspondingTargetSection = $presentMappings[$laterSourceSection];

			// Find where this target section appears in the actual target article
			$targetPosition = array_search( $correspondingTargetSection, $targetSectionTitles );
			if ( $targetPosition !== false ) {
				// Found a section to insert before - return its position
				return $targetPosition;
			}
		}

		// No later sections found in target - no insertion point found
		return null;
	}

	/**
	 * Given a target language code, this method returns an array of
	 * strings containing the appendix section titles for this language.
	 *
	 * @param string $targetLanguage
	 * @return string[]
	 */
	public function fetchAppendixTitles( string $targetLanguage ): array {
		if ( isset( self::APPENDIX_TITLES[$targetLanguage] ) ) {
			return self::APPENDIX_TITLES[$targetLanguage];
		}

		$baseUrl = "/suggest/sections/titles/en/$targetLanguage";
		$params = [ 'titles' => implode( '|', self::APPENDIX_TITLES['en'] ) ];
		$cxServerUrl = SiteMapper::getCXServerUrl( $baseUrl, $params );
		try {
			$response = $this->httpRequestFactory->get( $cxServerUrl, [], __METHOD__ );
		} catch ( \Exception $exception ) {
			$logParams = [ 'url' => $cxServerUrl, 'exception' => $exception->getMessage() ];
			$this->logger->info( 'Request to fetch appendix titles failed', $logParams );
			return [];
		}

		if ( !$response ) {
			$logParams = [ 'url' => $cxServerUrl ];
			$this->logger->info( 'Request to fetch section titles returned empty response', $logParams );
			return [];
		}

		$json = FormatJson::decode( $response, true );
		return array_merge( ...array_values( $json ) );
	}
}
