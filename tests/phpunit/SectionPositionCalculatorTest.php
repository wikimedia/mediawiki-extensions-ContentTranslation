<?php

declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\SectionPositionCalculator;
use MediaWiki\Http\HttpRequestFactory;

/**
 * @covers \ContentTranslation\SectionPositionCalculator
 */
class SectionPositionCalculatorTest extends \MediaWikiIntegrationTestCase {

	public function testCalculateSectionPositionWithAppendixSections() {
		$appendixSections = [
			[ 'id' => 7, 'toclevel' => 1, 'line' => 'References' ],
			[ 'id' => 8, 'toclevel' => 1, 'line' => 'Notes' ]
		];
		$responseSections = array_merge( $this->getNonAppendixTestSections(), $appendixSections );
		$this->testCalculateSectionPositionForNonLeadSection( $responseSections, 7 );
	}

	public function testCalculateSectionPositionWithoutAppendixSections() {
		$this->testCalculateSectionPositionForNonLeadSection( $this->getNonAppendixTestSections(), "new" );
	}

	private function testCalculateSectionPositionForNonLeadSection( array $responseSections, $expectedPosition ) {
		$title = $this->createMock( \Title::class );
		$title->method( 'getPrefixedDBKey' )->willReturn( 'Test_article' );
		$targetLanguage = 'en';
		$url = "https://$targetLanguage.wikipedia.org/api/rest_v1/page/mobile-sections/Test_article";

		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );
		$response = [
			'lead' => [],
			'remaining' => [
				'sections' => $responseSections
			]
		];
		$mockHttpRequestFactory->method( 'get' )
			->with( $this->equalTo( $url ) )
			->willReturn( \FormatJson::encode( $response ) );

		$sectionPositionCalculator = new SectionPositionCalculator( $mockHttpRequestFactory );

		$position = $sectionPositionCalculator->calculateSectionPosition( $title, $targetLanguage, false );
		$this->assertEquals( $expectedPosition, $position );
	}

	private function getNonAppendixTestSections(): array {
		return [
			[ 'id' => 1, 'toclevel' => 1, 'line' => 'Section 1' ],
			[ 'id' => 2, 'toclevel' => 2, 'line' => 'Sub Section 1.1' ],
			[ 'id' => 3, 'toclevel' => 2, 'line' => 'Sub Section 1.2' ],
			[ 'id' => 4, 'toclevel' => 1, 'line' => 'Section 2' ],
			[ 'id' => 5, 'toclevel' => 2, 'line' => 'Section 2.1' ],
			[ 'id' => 6, 'toclevel' => 3, 'line' => 'Section 2.1.1' ]
		];
	}

	public function testCalculateSectionPositionForSandboxTarget() {
		$title = $this->createMock( \Title::class );
		$targetLanguage = 'en';
		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );

		$sectionPositionCalculator = new SectionPositionCalculator( $mockHttpRequestFactory );

		$position = $sectionPositionCalculator->calculateSectionPosition( $title, $targetLanguage, true );
		$this->assertEquals( "new", $position );
	}

	public function testCalculateSectionPositionForLeadSection() {
		$title = $this->createMock( \Title::class );
		$title->method( 'getPrefixedDBKey' )->willReturn( 'Non_existing_page' );
		$targetLanguage = 'en';
		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );

		$sectionPositionCalculator = new SectionPositionCalculator( $mockHttpRequestFactory );

		$position = $sectionPositionCalculator->calculateSectionPosition( $title, $targetLanguage, false );
		$this->assertSame( 0, $position );
	}
}
