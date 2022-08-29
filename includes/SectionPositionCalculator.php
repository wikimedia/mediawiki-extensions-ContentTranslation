<?php
declare( strict_types = 1 );

namespace ContentTranslation;

use FormatJson;
use MediaWiki\Http\HttpRequestFactory;
use Title;

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
	/** @var HttpRequestFactory */
	private $httpRequestFactory;

	/**
	 * @param HttpRequestFactory $httpRequestFactory
	 */
	public function __construct( HttpRequestFactory $httpRequestFactory ) {
		$this->httpRequestFactory = $httpRequestFactory;
	}

	/**
	 * This method returns the appropriate number indicating the position in
	 * which the new section should be published inside the target page,
	 * according to the following logic:
	 *
	 * 1. If the section is being published to user's sandbox, then the section
	 * position should be "new"
	 * 2. If section is a lead section then its position should be equal to 0.
	 * 3. If the section is neither a sandbox section nor a lead section:
	 *    a. If at least one appendix section exists then it equals to the
	 * 	  index of the first appendix section (in order of appearance)
	 *    b. If not, it's equal to "new".
	 *
	 * @param Title $targetTitle
	 * @param string $targetLanguage
	 * @param bool $isSandbox
	 * @return int|string
	 */
	public function calculateSectionPosition( Title $targetTitle, string $targetLanguage, bool $isSandbox ) {
		if ( $isSandbox ) {
			return "new";
		}

		$encodedTitle = rawurlencode( $targetTitle->getPrefixedDBKey() );
		$targetSections = $this->fetchTargetSections( $encodedTitle, $targetLanguage );

		// if target sections are null, this page doesn't exist, and this is a lead section
		if ( $targetSections === null ) {
			return 0;
		}

		if ( $targetSections ) {
			$appendixTitles = $this->fetchAppendixTitles( $targetLanguage );

			$firstAppendixSectionResult = array_filter(
				$targetSections,
				static function ( $section ) use ( $appendixTitles ) {
					return in_array( $section['line'], $appendixTitles ) && $section['toclevel'] === 1;
				}
			);

			$firstAppendixSection = reset( $firstAppendixSectionResult );

			if ( $firstAppendixSection ) {
				$sectionPosition = $firstAppendixSection['id'];
			}
		}
		return $sectionPosition ?? "new";
	}

	/**
	 * Given an encode page title and a target language code, this method fetches the
	 * target page sections from the Wikipedia REST Api and returns an array containing
	 * sub-arrays with the required information (id, toclevel, line - which is the title
	 * of the section) for all the page sections (from all TOC levels).
	 *
	 * If no such page exists (i.e. the HTTP requests returns 404 status code), this method returns null.
	 * If HTTP request cannot be completed, an empty array is returned.
	 *
	 * @param string $encodedTitle
	 * @param string $targetLanguage
	 * @return array|null ['id' => int, 'toclevel' => int, 'line' => string][]
	 */
	public function fetchTargetSections( string $encodedTitle, string $targetLanguage ): ?array {
		$url = SiteMapper::getRestApiURL( $targetLanguage, "/page/mobile-sections/$encodedTitle" );

		try {
			$response = $this->httpRequestFactory->get( $url );
		} catch ( \Exception $exception ) {
			return [];
		}

		if ( !$response ) {
			return null;
		}
		$json = FormatJson::decode( $response, true );

		return $json['remaining']['sections'];
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

		$englishAppendixTitles = array_map( static function ( $param ) {
			return urlencode( $param );
		}, self::APPENDIX_TITLES['en'] );
		$titlesUrlParam = implode( "|", $englishAppendixTitles );

		$baseUrl = "/suggest/sections/titles/en/$targetLanguage?titles=$titlesUrlParam";

		$cxServerUrl = SiteMapper::getCXServerURL( $baseUrl );
		try {
			$response = $this->httpRequestFactory->get( $cxServerUrl );
		} catch ( \Exception $exception ) {
			return [];
		}

		if ( !$response ) {
			return [];
		}

		$json = FormatJson::decode( $response, true );
		return array_merge( ...array_values( $json ) );
	}
}
