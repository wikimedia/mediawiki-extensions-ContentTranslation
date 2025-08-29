<?php

declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\Service\CxServerClient;
use ContentTranslation\Service\SectionMappingFetcher;
use ContentTranslation\Service\SectionPositionCalculator;
use ContentTranslation\Service\SectionTitleFetcher;
use MediaWiki\Title\Title;
use PHPUnit\Framework\MockObject\MockObject;

/**
 * @covers \ContentTranslation\Service\SectionPositionCalculator
 * @group ContentTranslation
 */
class SectionPositionCalculatorTest extends \MediaWikiIntegrationTestCase {

	private const SOURCE_LANGUAGE = 'en';
	private const TARGET_LANGUAGE = 'es';
	private const SOURCE_TITLE = 'Dummy source title';
	private const SOURCE_SECTION_TITLE = 'Dummy source section title';
	private const NON_APPENDIX_SECTIONS = [
		1 => 'Section 1',
		2 => 'Section 2',
		3 => 'Section 3',
	];
	private const TARGET_SECTIONS_WITH_APPENDIX = [
		1 => 'Section 1',
		2 => 'Section 2',
		3 => 'Section 3',
		4 => 'Referencias',
	];
	/** @var Title&MockObject */
	private $mockTargetTitle;

	/** @var CxServerClient&MockObject */
	private $mockCxServerClient;

	/** @var SectionTitleFetcher&MockObject */
	private $mockSectionTitleFetcher;

	/** @var SectionMappingFetcher&MockObject */
	private $mockSectionMappingFetcher;

	protected function setUp(): void {
		parent::setUp();
		$this->mockTargetTitle = $this->createMock( Title::class );
		$this->mockTargetTitle->method( 'getPrefixedDBKey' )->willReturn( 'Test target article' );

		$this->mockCxServerClient = $this->createMock( CxServerClient::class );
		$this->mockSectionTitleFetcher = $this->createMock( SectionTitleFetcher::class );
		$this->mockSectionMappingFetcher = $this->createMock( SectionMappingFetcher::class );
	}

	/**
	 * Test that when existingTargetSectionTitle is provided and exists in target article,
	 * its position is returned (Priority 1)
	 */
	public function testCalculateSectionPositionWithExistingSection() {
		$sectionPositionCalculator = $this->createSectionPositionCalculator(
			self::TARGET_SECTIONS_WITH_APPENDIX,
			null
		);

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			self::SOURCE_SECTION_TITLE,
			'Section 2' // this is a valid existing target section
		);
		$this->assertEquals( 2, $position );
	}

	/**
	 * Test that when existingSectionTitle is provided but doesn't exist in target article,
	 * it falls back to the next priority - in this case 'appendix' titles as section mappings are not returned
	 */
	public function testCalculateSectionPositionWithNonExistingSection() {
		$sectionPositionCalculator = $this->createSectionPositionCalculator(
			self::TARGET_SECTIONS_WITH_APPENDIX,
			null // simulate failure to get section mappings
		);

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			self::SOURCE_SECTION_TITLE,
			'Non-existing Section'
		);
		// Should fall back to appendix logic and return position 4 (the position of 'Referencias' section)
		$this->assertSame( 4, $position );
	}

	/**
	 * Test source-order calculation when CX server returns valid section mappings
	 * Source order: Introduction, History, Geography, References
	 * Target has: Geografía(1), Cultura(2), Referencias(3)
	 * Inserting: 'History' -> should go to position 2 (before Geografía that maps to 'Geography')
	 */
	public function testCalculateSectionPositionWithSourceOrder() {
		$targetSections = [
			1 => 'Introducción',
			2 => 'Geografía',
			3 => 'Referencias'
		];

		$sectionMappings = [
			'sourceSections' => [ 'Introduction', 'History', 'Geography', 'References' ],
			'present' => [
				'Introduction' => 'Introducción',
				'Geography' => 'Geografía',
				'References' => 'Referencias'
			]
		];

		$sectionPositionCalculator = $this->createSectionPositionCalculator( $targetSections, $sectionMappings );

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'History',
		);
		// Should return position 2 (before Geografía section)
		$this->assertEquals( 2, $position );
	}

	/**
	 * Test that when source-order calculation fails, it falls back to appendix logic
	 */
	public function testCalculateSectionPositionSourceOrderFallback() {
		$targetSections = [ 1 => 'Introducción', 2 => 'Geografía', 3 => 'Referencias' ];

		$sectionPositionCalculator = $this->createSectionPositionCalculator(
			$targetSections,
			null // Simulate CX server failure
		);

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'Culture',
		);
		// Should fall back to appendix logic and return position 3 (before 'Referencias')
		$this->assertSame( 3, $position );
	}

	/**
	 * Test priority order: existing section takes precedence over source-order calculation
	 */
	public function testCalculateSectionPositionPriorityOrder() {
		$targetSections = [
			1 => 'Introducción',
			2 => 'Geografía',
			3 => 'Random',
			4 => 'Referencias'
		];

		$sectionMappings = [
			'sourceSections' => [ 'Introduction', 'History', 'Geography', 'References' ],
			'present' => [
				'Introduction' => 'Introducción',
				'Geography' => 'Geografía',
				'References' => 'Referencias'
			]
		];

		$sectionPositionCalculator = $this->createSectionPositionCalculator(
			$targetSections,
			$sectionMappings
		);

		$position1 = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'Geography',
			'Geografía' // this is a valid existing target section
		);

		$position2 = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'Geography',
			null
		);
		$this->assertNotEquals( $position2, $position1 );
	}

	public function testCalculateSectionPositionForExistingSourceSection(): void {
		$targetSections = [
			1 => 'Introducción',
			2 => 'Random',
			3 => 'Geografía',
			4 => 'Referencias'
		];

		$sectionMappings = [
			'sourceSections' => [ 'Introduction', 'Geography', 'History', 'References' ],
			'present' => [
				'Introduction' => 'Introducción',
				'Geography' => 'Geografía',
				'References' => 'Referencias'
			]
		];

		$sectionPositionCalculator = $this->createSectionPositionCalculator(
			$targetSections,
			$sectionMappings
		);

		$actualPosition = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'Geography',
		);

		// We expect it to be 4 (because 'Geografía' is at index 3, so insert after)
		$this->assertSame( 4, $actualPosition );
	}

	/**
	 * Test insertion at the beginning: target section should be inserted before all existing sections
	 * Source order: Introduction, History, Geography, Culture, References
	 * Target has: Geografía(1), Cultura(2), Referencias(3)
	 * Inserting: History -> should go to position 1 (before Geografía which maps to 'Geography')
	 */
	public function testCalculateInsertionPositionAtBeginning() {
		$targetSections = [ 1 => 'Geografía', 2 => 'Cultura', 3 => 'Referencias' ];

		$sectionMappings = [
			'sourceSections' => [ 'Introduction', 'History', 'Geography', 'Culture', 'References' ],
			'present' => [
				'Geography' => 'Geografía',
				'Culture' => 'Cultura',
				'References' => 'Referencias'
			]
		];

		$sectionPositionCalculator = $this->createSectionPositionCalculator(
			$targetSections,
			$sectionMappings
		);

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'History' // new target section title
		);
		// Should insert before Geografía at position 1
		$this->assertSame( 1, $position );
	}

	/**
	 * Test insertion at the end: when no later sections and no appendix sections exist in target
	 * Source order: Introduction, History, Geography, Culture, References
	 * Target has: Introduction(1), History(2), Geography(3)
	 * Inserting: Culture -> source-order calculation returns null, appendix sections empty, so falls back to "new"
	 */
	public function testCalculateInsertionPositionAtEnd() {
		$responseSections = [
			1 => 'Introducción',
			2 => 'Historia',
			3 => 'Geografía'
		];

		$sectionMappings = [
			'sourceSections' => [ 'Introduction', 'History', 'Geography', 'Culture', 'References' ],
			'present' => [
				'Introduction' => 'Introducción',
				'History' => 'Historia',
				'Geography' => 'Geografía'
			],
			'missing' => [
				'Culture' => 'Cultura',
				'References' => 'Referencias'
			]
		];

		$this->mockSectionMappingFetcher->method( 'fetchSectionMapping' )->willReturn( $sectionMappings );
		$this->mockSectionTitleFetcher->method( 'fetchSectionTitles' )->willReturn( $responseSections );

		$sectionPositionCalculator = new SectionPositionCalculator(
			$this->mockCxServerClient,
			$this->mockSectionTitleFetcher,
			$this->mockSectionMappingFetcher,
		);
		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'Culture'
		);
		// Source-order calculation returns null, falls back to "new" (no appendix sections)
		$this->assertSame( "new", $position );
	}

	/**
	 * Test edge case with empty present mappings: when no source sections exist in target
	 * Source order: Introduction, History, Geography, Culture, References
	 * Target has: 'Otra Sección'(1), 'Sección Diferente'(2) - no appendix titles
	 * Inserting: History -> source-order calculation returns null, appendix sections empty, so falls back to "new"
	 */
	public function testCalculateInsertionPositionEmptyPresentMappings() {
		$sectionMappings = [
			'sourceSections' => [ 'Introduction', 'History', 'Geography', 'Culture', 'References' ],
			'present' => [], // No sections from source exist in target
		];

		$sectionPositionCalculator = $this->createSectionPositionCalculator(
			self::NON_APPENDIX_SECTIONS,
			$sectionMappings
		);

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'History'
		);
		// Source-order calculation returns null, falls back to "new" (no appendix sections)
		$this->assertSame( "new", $position );
	}

	/**
	 * For this test, the appendix titles do not need to be fetched as they already
	 * exist for "en" language, inside the SectionPositionCalculator::APPENDIX_TITLES constant.
	 */
	public function testCalculateSectionPositionWithAppendixSections() {
		$this->testCalculateSectionPositionForNonLeadSection( self::TARGET_SECTIONS_WITH_APPENDIX, 4 );
	}

	public function testCalculateSectionPositionWithoutAppendixSections() {
		$this->testCalculateSectionPositionForNonLeadSection( self::NON_APPENDIX_SECTIONS, "new" );
	}

	public function testCalculateSectionPositionForSandboxTarget() {
		$sectionPositionCalculator = $this->createSectionPositionCalculator( [], null );

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			true,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'Sandbox section'
		);
		$this->assertSame( "new", $position );
	}

	public function testCalculateSectionPositionForLeadSection() {
		// returning "null" target sections simulate the inexistence of the target page
		$sectionPositionCalculator = $this->createSectionPositionCalculator( null, null );

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			'Lead section'
		);
		$this->assertSame( 0, $position );
	}

	private function createSectionPositionCalculator(
		?array $targetSections,
		?array $sectionMappings
	): SectionPositionCalculator {
		$this->mockSectionMappingFetcher->method( 'fetchSectionMapping' )->willReturn( $sectionMappings );
		$this->mockSectionTitleFetcher->method( 'fetchSectionTitles' )->willReturn( $targetSections );

		return new SectionPositionCalculator(
			$this->mockCxServerClient,
			$this->mockSectionTitleFetcher,
			$this->mockSectionMappingFetcher,
		);
	}

	private function testCalculateSectionPositionForNonLeadSection( array $targetSections, $expectedPosition ) {
		$sectionPositionCalculator = $this->createSectionPositionCalculator( $targetSections, null );

		$position = $sectionPositionCalculator->calculateSectionPosition(
			$this->mockTargetTitle,
			self::TARGET_LANGUAGE,
			false,
			self::SOURCE_LANGUAGE,
			self::SOURCE_TITLE,
			self::SOURCE_SECTION_TITLE
		);
		$this->assertSame( $expectedPosition, $position );
	}
}
