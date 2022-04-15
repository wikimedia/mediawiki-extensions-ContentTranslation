<?php
/**
 * Restbase Client
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

use MediaWiki\Config\ServiceOptions;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\MediaWikiServices;
use ParsoidVirtualRESTService;
use RequestContext;
use RestbaseVirtualRESTService;

class RestbaseClient {

	/**
	 * @var \VirtualRESTServiceClient
	 */
	protected $serviceClient;

	/**
	 * @internal For use by ServiceWiring
	 */
	public const CONSTRUCTOR_OPTIONS = [
		'VirtualRestConfig',
		'ContentTranslationRESTBase',
		'VisualEditorParsoidAutoConfig'
	];

	/**
	 * The global virtual rest service config object
	 * @var array
	 */
	private $virtualRestConfig;

	/**
	 * CX specific configuration override (local testing and development)
	 * @var array
	 */
	private $contentTranslationRESTBase;

	/** @var bool */
	private $visualEditorParsoidAutoConfig;

	public function __construct( HttpRequestFactory $httpRequestFactory, ServiceOptions $options ) {
		$options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );

		$this->virtualRestConfig = $options->get( 'VirtualRestConfig' );
		$this->contentTranslationRESTBase = $options->get( 'ContentTranslationRESTBase' );
		$this->visualEditorParsoidAutoConfig = $options->get( 'VisualEditorParsoidAutoConfig' );

		$this->serviceClient = new \VirtualRESTServiceClient( $httpRequestFactory->createMultiClient() );
		// Mounted at /restbase/ because it is a service speaking the
		// RESTBase v1 API -- but the service responding to these API
		// requests could be either Parsoid or RESTBase.
		$this->serviceClient->mount( '/restbase/', $this->getVRSObject() );
	}

	/**
	 * Creates the virtual REST service object to be used in CX's API calls.
	 *
	 * See ApiParsoidTrait::getVRSObject() in VisualEditor (which should
	 * eventually be upstreamed to core, T261310).
	 *
	 * @return \VirtualRESTService the VirtualRESTService object to use
	 */
	private function getVRSObject() {
		if ( $this->contentTranslationRESTBase ) {
			$class = RestbaseVirtualRESTService::class;
			$params = $this->contentTranslationRESTBase;
		} elseif ( isset( $this->virtualRestConfig['modules']['restbase'] ) ) {
			$class = RestbaseVirtualRESTService::class;
			$params = $this->virtualRestConfig['modules']['restbase'];
			// backward compatibility
			$params['parsoidCompat'] = false;
		} elseif ( isset( $this->virtualRestConfig['modules']['parsoid'] ) ) {
			$class = ParsoidVirtualRESTService::class;
			$params = $this->virtualRestConfig['modules']['parsoid'];
			$params['restbaseCompat'] = true;
		} elseif ( $this->visualEditorParsoidAutoConfig ) {
			$class = ParsoidVirtualRESTService::class;
			$params = [];
			$params['restbaseCompat'] = true;
			// forward cookies on private wikis
			$params['forwardCookies'] = !MediaWikiServices::getInstance()
				->getPermissionManager()->isEveryoneAllowed( 'read' );
		} else {
			// No global modules defined, so no way to contact the document server.
			throw new \MWException( 'Parsoid/RESTBase unconfigured' );
		}

		// Merge the global and service-specific params
		$params = array_merge( $this->virtualRestConfig['global'] ?? [], $params );

		// Set up cookie forwarding
		if ( ( $params['forwardCookies'] ?? false ) === true ) {
			$context = RequestContext::getMain();
			$params['forwardCookies'] = $context->getRequest()->getHeader( 'Cookie' );
		}

		return new $class( $params );
	}

	/**
	 * Make a RESTBase v1 API request (which could be to either Parsoid or
	 * RESTBase; the VRS makes these appear identical).
	 * @param string $method
	 * @param string $path
	 * @param array $params
	 * @param array $reqheaders
	 * @return string|false
	 */
	private function requestRestbase( $method, $path, $params, $reqheaders = [] ) {
		$request = [
			'method' => $method,
			'url' => '/restbase/local/v1/' . $path
		];
		if ( $method === 'GET' ) {
			$request['query'] = $params;
		} else {
			$request['body'] = $params;
		}
		// See https://www.mediawiki.org/wiki/Specs/HTML/2.1.0
		$reqheaders['Accept'] =
			'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/2.1.0"';
		$reqheaders['User-Agent'] = 'ContentTranslation-MediaWiki/' . MW_VERSION;
		$request['headers'] = $reqheaders;
		$response = $this->serviceClient->run( $request );
		if ( $response['code'] === 200 && $response['error'] === '' ) {
			return $response['body'];
		} elseif ( $response['error'] !== '' ) {
			throw new \MWException( "docserver-http-error: {$response['error']}" );
		} else { // error null, code not 200
			throw new \MWException( "docserver-http: HTTP {$response['code']}: {$response['body']}" );
		}
	}

	/**
	 * Converts html to wikitext
	 *
	 * @param \Title $title
	 * @param string $html
	 * @return string wikitext
	 */
	public function convertHtmlToWikitext( \Title $title, $html ) {
		$wikitext = $this->requestRestbase(
			'POST',
			'transform/html/to/wikitext/' . urlencode( $title->getPrefixedDBkey() ),
			[
				'html' => $html,
				'scrub_wikitext' => 1,
			]
		);
		if ( $wikitext === false ) {
			$vrsInfo = $this->serviceClient->getMountAndService( '/restbase/' );
			$name = $vrsInfo[1] ? $vrsInfo[1]->getName() : 'unknown VRS service';
			throw new \MWException( 'Error contacting ' . $name );
		}
		return $wikitext;
	}

	/**
	 * Converts wikitext to html
	 *
	 * @param \Title $title
	 * @param string $wikitext
	 * @return string html
	 */
	public function convertWikitextToHtml( \Title $title, $wikitext ) {
		$html = $this->requestRestbase(
			'POST',
			'transform/wikitext/to/html/' . urlencode( $title->getPrefixedDBkey() ),
			[
				'wikitext' => $wikitext,
				'body_only' => 1,
			]
		);
		if ( $html === false ) {
			$vrsInfo = $this->serviceClient->getMountAndService( '/restbase/' );
			$name = $vrsInfo[1] ? $vrsInfo[1]->getName() : 'unknown VRS service';
			throw new \MWException( 'Error contacting ' . $name );
		}
		return $html;
	}
}
