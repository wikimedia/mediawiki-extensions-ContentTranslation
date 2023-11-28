<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\SiteMapper;
use FormatJson;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Title\Title;

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

	private HttpRequestFactory $httpRequestFactory;
	private SectionTitleFetcher $sectionTitleFetcher;

	public function __construct( HttpRequestFactory $httpRequestFactory, SectionTitleFetcher $sectionTitleFetcher ) {
		$this->httpRequestFactory = $httpRequestFactory;
		$this->sectionTitleFetcher = $sectionTitleFetcher;
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
			$appendixTitles = $this->fetchAppendixTitles( $targetLanguage );

			$targetAppendixTitles = array_intersect( $targetSectionTitles, $appendixTitles );
			if ( $targetAppendixTitles ) {
				$sectionPosition = array_key_first( $targetAppendixTitles );
			}
		}
		return $sectionPosition;
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
