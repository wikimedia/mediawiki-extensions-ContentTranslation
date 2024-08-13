<?php
declare( strict_types = 1 );

namespace ContentTranslation\ActionApi;

use ApiQueryGeneratorBase;
use MediaWiki\Http\HttpRequestFactory;
use WANObjectCache;
use Wikimedia\LightweightObjectStore\ExpirationAwareness;
use Wikimedia\ParamValidator\ParamValidator;

/**
 * Api module for fetching the list of sitelinks for the article that corresponds
 * to the Wikidata ID that is given as request parameter, ordered by article size.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2024.06
 */
class ApiQueryAutomaticTranslationDenseLanguages extends ApiQueryGeneratorBase {

	private const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php';
	private const WIKIDATA_API_URL = 'https://www.wikidata.org/w/api.php';
	private const WIKIPEDIA_URL_FRAGMENT = 'wikipedia';

	private HttpRequestFactory $httpRequestFactory;
	private WANObjectCache $cache;

	public function __construct(
		$query,
		$moduleName,
		HttpRequestFactory $httpRequestFactory,
		WANObjectCache $cache
	) {
		parent::__construct( $query, $moduleName );
		$this->httpRequestFactory = $httpRequestFactory;
		$this->cache = $cache;
	}

	/**
	 * @return array e.g. [ 'aawiki' => [ 'code' => 'aa', 'url' => 'https://aa.wikipedia.org/w/api.php' ]
	 */
	private function fetchWikipediaSites(): array {
		$queryParams = [
			'action' => 'sitematrix',
			'format' => 'json',
			'formatversion' => 2,
			'smtype' => 'language',
			'smlangprop' => 'site|code',
			'smsiteprop' => 'dbname|url',
			'origin' => '*'
		];

		$apiUrl = wfAppendQuery( self::WIKIPEDIA_API_URL, $queryParams );

		$response = $this->httpRequestFactory->get( $apiUrl );

		$responseBody = json_decode( $response, true ) ?: [];

		$siteMatrix = $responseBody['sitematrix'];
		unset( $siteMatrix['count'] );

		$results = [];

		foreach ( $siteMatrix as $site ) {
			$code = $site['code'];
			$subSites = $site['site'];
			$wikipediaSiteUrl = null;
			$wikipediaSiteDb = null;
			foreach ( $subSites as $subSite ) {
				if ( strpos( $subSite['url'], self::WIKIPEDIA_URL_FRAGMENT ) !== false ) {
					$wikipediaSiteUrl = $subSite['url'];
					$wikipediaSiteDb = $subSite['dbname'];
					break;
				}
			}

			if ( $wikipediaSiteUrl ) {
				$results[ $wikipediaSiteDb ] = [
					'code' => $code,
					'url' => $wikipediaSiteUrl
				];
			}
		}

		return $results;
	}

	private function getWikipediaSites(): array {
		return $this->cache->getWithSetCallback(
			$this->cache->makeGlobalKey( 'ax-wikipedia-sites' ),
			ExpirationAwareness::TTL_DAY,
			fn () => $this->fetchWikipediaSites()
		);
	}

	/**
	 * @param string $qid
	 * @return array ['site' => string, 'title' => string, 'siteUrl' => string, 'siteCode' => string]
	 */
	private function getArticleSiteLinks( string $qid ): array {
		$queryParams = [
			'action' => 'wbgetentities',
			'format' => 'json',
			'props' => 'sitelinks',
			'ids' => $qid,
		];

		$apiUrl = wfAppendQuery( self::WIKIDATA_API_URL, $queryParams );

		$response = $this->httpRequestFactory->get( $apiUrl );
		if ( !$response ) {
			$this->dieWithError( 'apierror-query+automatictranslationdenselanguages-sitelink-request-failure' );
		}

		$responseBody = json_decode( $response, true ) ?: [];

		$siteLinks = $responseBody['entities'][$qid]['sitelinks'] ?? [];

		$sites = $this->getWikipediaSites();
		$results = [];

		foreach ( $siteLinks as $siteDb => $siteLink ) {
			$currentSite = $sites[$siteDb] ?? null;
			if ( !$currentSite ) {
				continue;
			}

			$results[] = [
				'site' => $siteDb,
				'title' => $siteLink['title'],
				'siteUrl' => $currentSite['url'],
				'siteCode' => $currentSite['code']
			];
		}

		return $results;
	}

	/**
	 * @param string $qid
	 * @return array ['site', 'title', 'siteUrl', 'siteCode', 'sections' => int, 'size' => int ]
	 */
	private function getArticleSizeInformation( string $qid ): array {
		$siteLinks = $this->getArticleSiteLinks( $qid );
		if ( !$siteLinks ) {
			return [];
		}

		$requests = array_map( static function ( $siteLink ) {
			$queryParams = [
				'action' => 'parse',
				'format' => 'json',
				'formatversion' => 2,
				'prop' => 'sections',
				'page' => $siteLink['title']
			];
			$siteUrl = $siteLink['siteUrl'];
			$apiUrl = wfAppendQuery( $siteUrl . '/w/api.php', $queryParams );

			return [ 'method' => 'GET', 'url' => $apiUrl ];
		}, $siteLinks );

		$multiHttpClient = $this->httpRequestFactory->createMultiClient();
		$responses = $multiHttpClient->runMulti( $requests );

		$params = $this->extractRequestParams();
		$sectionTitlesOn = $params['section-titles'];

		$sizeInfos = array_map(
			static function ( $response, $siteLink ) use ( $sectionTitlesOn ) {
				$responseBody = json_decode( $response['response']['body'], true ) ?: [];
				if ( !isset( $responseBody['parse'] ) ) {
					return null;
				}
				$sections = $responseBody['parse']['sections'];
				$lastSection = end( $sections );

				$size = 0;
				if ( $lastSection ) {
					$size = $lastSection['byteoffset'];
				}

				$sections = array_filter( $sections, static function ( $section ) {
					return $section['toclevel'] === 1;
				} );

				$infos = [
					'siteUrl' => $siteLink['siteUrl'],
					'language' => $siteLink['siteCode'],
					'title' => $siteLink['title'],
					'sections' => count( $sections ),
					'size' => $size,
				];

				if ( $sectionTitlesOn ) {
					$sectionTitles = array_values( array_map( static function ( $section ) {
						return $section['line'];
					}, $sections ) );

					$infos['sectionTitles'] = $sectionTitles;
				}

				return $infos;
			},
			$responses,
			$siteLinks
		);

		$sizeInfos = array_filter( $sizeInfos );

		usort( $sizeInfos, static function ( $a, $b ) {
			return $b['size'] <=> $a['size'];
		} );

		return $sizeInfos;
	}

	public function execute() {
		$this->run();
	}

	public function executeGenerator( $resultPageSet ) {
		$this->run();
	}

	private function run() {
		$params = $this->extractRequestParams();
		$qid = $params['qid'];

		$sizeInformationArray = $this->getArticleSizeInformation( $qid );

		$result = $this->getResult();
		$result->addValue( [ 'query', $this->getModuleName() ], 'sizeInfo', $sizeInformationArray );
	}

	public function getAllowedParams() {
		return [
			'qid' => [
				ParamValidator::PARAM_TYPE => 'string',
				ParamValidator::PARAM_REQUIRED => true,
			],
			'section-titles' => [
				ParamValidator::PARAM_TYPE => 'boolean',
				ParamValidator::PARAM_DEFAULT => false
			]
		];
	}

	protected function getExamplesMessages() {
		return [
			'action=query&list=automatictranslationdenselanguages&qid=Q405' =>
				'apihelp-query+automatictranslationdenselanguages-example-1',
			'action=query&list=automatictranslationdenselanguages&qid=Q405&section-titles=true' =>
				'apihelp-query+automatictranslationdenselanguages-example-2'
		];
	}
}
