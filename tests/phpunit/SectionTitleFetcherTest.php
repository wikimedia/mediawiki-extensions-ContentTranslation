<?php

declare( strict_types=1 );

namespace ContentTranslation\Tests;

use ContentTranslation\Service\SectionTitleFetcher;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Title\Title;

/**
 * @covers \ContentTranslation\Service\SectionTitleFetcher
 * @group ContentTranslation
 */
class SectionTitleFetcherTest extends \MediaWikiIntegrationTestCase {

	public function testFetchSectionTitles() {
		$mockHttpRequestFactory = $this->createMock( HttpRequestFactory::class );
		$targetLanguage = 'gu';
		$rawTitle = 'અંધેરી';
		$title = $this->createMock( Title::class );
		$title->method( 'getPrefixedDBKey' )->willReturn( $rawTitle );
		$api = "https://$targetLanguage.wikipedia.org/w/api.php";
		$encodedTitle = rawurlencode( $rawTitle );
		$url = "$api?action=parse&prop=sections&format=json&formatversion=2&page=$encodedTitle";

		$response = [
			'parse' => [
				'sections' => [
					[
						"toclevel" => 1,
						"level" => "2",
						"line" => "ઇતિહાસ",
						"number" => "૧",
						"index" => "1",
						"fromtitle" => "અંધેરી",
						"byteoffset" => 2653,
						"anchor" => "ઇતિહાસ",
						"linkAnchor" => "ઇતિહાસ"
					],
					[
						"toclevel" => 1,
						"level" => "2",
						"line" => "સામાન્ય માહિતી",
						"number" => "૨",
						"index" => "2",
						"fromtitle" => "અંધેરી",
						"byteoffset" => 3974,
						"anchor" => "સામાન્ય_માહિતી",
						"linkAnchor" => "સામાન્ય_માહિતી"
					],
					[
						"toclevel" => 1,
						"level" => "2",
						"line" => "વાહનવ્યવહાર",
						"number" => "૩",
						"index" => "3",
						"fromtitle" => "અંધેરી",
						"byteoffset" => 5036,
						"anchor" => "વાહનવ્યવહાર",
						"linkAnchor" => "વાહનવ્યવહાર"
					],
					[
						"toclevel" => 2,
						"level" => "3",
						"line" => "મુંબઈ મેટ્રો",
						"number" => "૩.૧",
						"index" => "4",
						"fromtitle" => "અંધેરી",
						"byteoffset" => 5658,
						"anchor" => "મુંબઈ_મેટ્રો",
						"linkAnchor" => "મુંબઈ_મેટ્રો"
					],
					[
						"toclevel" => 1,
						"level" => "2",
						"line" => "આ પણ જુઓ",
						"number" => "૪",
						"index" => "5",
						"fromtitle" => "અંધેરી",
						"byteoffset" => 9060,
						"anchor" => "આ_પણ_જુઓ",
						"linkAnchor" => "આ_પણ_જુઓ"
					],
					[
						"toclevel" => 1,
						"level" => "2",
						"line" => "સંદર્ભ",
						"number" => "૫",
						"index" => "6",
						"fromtitle" => "અંધેરી",
						"byteoffset" => 9100,
						"anchor" => "સંદર્ભ",
						"linkAnchor" => "સંદર્ભ"
					],
					[
						"toclevel" => 1,
						"level" => "2",
						"line" => "નોંધ",
						"number" => "૬",
						"index" => "7",
						"fromtitle" => "અંધેરી",
						"byteoffset" => 9124,
						"anchor" => "નોંધ",
						"linkAnchor" => "નોંધ"
					]
				]
			]
		];
		$mockHttpRequestFactory->method( 'get' )
			->with( $url )
			->willReturn( \FormatJson::encode( $response ) );

		$sectionTitleFetcher = new SectionTitleFetcher( $mockHttpRequestFactory );
		$actualSectionTitles = $sectionTitleFetcher->fetchSectionTitles( $targetLanguage, $title );

		$expectedSectionTitles = [
			1 => 'ઇતિહાસ',
			2 => 'સામાન્ય માહિતી',
			3 => 'વાહનવ્યવહાર',
			5 => 'આ પણ જુઓ',
			6 => 'સંદર્ભ',
			7 => 'નોંધ'
		];
		$this->assertArrayEquals( $expectedSectionTitles, $actualSectionTitles );
	}
}
