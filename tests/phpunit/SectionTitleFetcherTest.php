<?php

declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\Service\SectionTitleFetcher;
use MediaWiki\Http\HttpRequestFactory;

/**
 * @covers \ContentTranslation\Service\SectionTitleFetcher
 * @group ContentTranslation
 */
class SectionTitleFetcherTest extends \MediaWikiIntegrationTestCase {

	public function testFetchSectionTitles() {
		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );
		$targetLanguage = 'en';
		$rawTitle = 'Football';
		$title = $this->createMock( \Title::class );
		$title->method( 'getPrefixedDBKey' )->willReturn( $rawTitle );
		$api = 'https://en.wikipedia.org/w/api.php';
		$url = "$api?action=parse&prop=sections&format=json&formatversion=2&page=$rawTitle";

		$response = [
			'parse' => [
				'sections' => [
					[
						'toclevel' => 1,
						'level' => "2",
						'line' => "Common elements",
						'number' => "1",
					],
					[
						'toclevel' => 1,
						'level' => "2",
						'line' => "Etymology",
						'number' => "2",
					],
					[
						'toclevel' => 1,
						'level' => "2",
						'line' => "Early history",
						'number' => "3",
					],
					[
						'toclevel' => 2,
						'level' => "3",
						'line' => "Ancient games",
						'number' => "3.1",
					],
					[
						'toclevel' => 3,
						'level' => "4",
						'line' => "Ancient China",
						'number' => "3.1.1",
					],
					[
						'toclevel' => 1,
						'level' => "2",
						'line' => "Establishment of modern codes",
						'number' => "4",
					]
				]
			]
		];
		$mockHttpRequestFactory->method( 'get' )
			->with( $this->equalTo( $url ) )
			->willReturn( \FormatJson::encode( $response ) );

		$sectionTitleFetcher = new SectionTitleFetcher( $mockHttpRequestFactory );
		$actualSectionTitles = $sectionTitleFetcher->fetchSectionTitles( $targetLanguage, $title );

		$expectedSectionTitles = [
			1 => 'Common elements',
			2 => 'Etymology',
			3 => 'Early history',
			4 => 'Establishment of modern codes',
		];
		$this->assertArrayEquals( $expectedSectionTitles, $actualSectionTitles );
	}
}
