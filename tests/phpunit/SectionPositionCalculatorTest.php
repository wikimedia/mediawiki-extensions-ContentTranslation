<?php

declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\Service\SectionPositionCalculator;
use ContentTranslation\Service\SectionTitleFetcher;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Title\Title;

/**
 * @covers \ContentTranslation\Service\SectionPositionCalculator
 * @group ContentTranslation
 */
class SectionPositionCalculatorTest extends \MediaWikiIntegrationTestCase {

	private const NON_APPENDIX_SECTIONS = [
		1 => 'Section 1',
		2 => 'Section 2',
		3 => 'Section 3',
	];

	/**
	 * For this test, the appendix titles do not need to be fetched as they already
	 * exist for "en" language, inside the SectionPositionCalculator::APPENDIX_TITLES constant.
	 */
	public function testCalculateSectionPositionWithAppendixSections() {
		$appendixSections = [ 4 => 'References', 5 => 'Notes' ];
		$responseSections = self::NON_APPENDIX_SECTIONS + $appendixSections;
		$this->testCalculateSectionPositionForNonLeadSection( $responseSections, 4 );
	}

	public function testCalculateSectionPositionWithoutAppendixSections() {
		$this->testCalculateSectionPositionForNonLeadSection( self::NON_APPENDIX_SECTIONS, "new" );
	}

	private function testCalculateSectionPositionForNonLeadSection( array $responseSections, $expectedPosition ) {
		$title = $this->createMock( Title::class );
		$title->method( 'getPrefixedDBKey' )->willReturn( 'Test_article' );
		$targetLanguage = 'en';

		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );
		$mockSectionTitleFetcher = $this->createMock( SectionTitleFetcher::class );

		$mockSectionTitleFetcher->method( 'fetchSectionTitles' )
			->with( $targetLanguage, $title )
			->willReturn( $responseSections );

		$sectionPositionCalculator = new SectionPositionCalculator( $mockHttpRequestFactory, $mockSectionTitleFetcher );

		$position = $sectionPositionCalculator->calculateSectionPosition( $title, $targetLanguage, false );
		$this->assertEquals( $expectedPosition, $position );
	}

	public function testCalculateSectionPositionForSandboxTarget() {
		$title = $this->createMock( Title::class );
		$targetLanguage = 'en';
		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );
		$mockSectionTitleFetcher = $this->createMock( SectionTitleFetcher::class );

		$sectionPositionCalculator = new SectionPositionCalculator( $mockHttpRequestFactory, $mockSectionTitleFetcher );

		$position = $sectionPositionCalculator->calculateSectionPosition( $title, $targetLanguage, true );
		$this->assertEquals( "new", $position );
	}

	public function testCalculateSectionPositionForLeadSection() {
		$title = $this->createMock( Title::class );
		$title->method( 'getPrefixedDBKey' )->willReturn( 'Non_existing_page' );
		$targetLanguage = 'en';
		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );
		$mockSectionTitleFetcher = $this->createMock( SectionTitleFetcher::class );

		$sectionPositionCalculator = new SectionPositionCalculator( $mockHttpRequestFactory, $mockSectionTitleFetcher );

		$position = $sectionPositionCalculator->calculateSectionPosition( $title, $targetLanguage, false );
		$this->assertSame( 0, $position );
	}
}
