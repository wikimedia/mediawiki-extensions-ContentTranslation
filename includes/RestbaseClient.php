<?php
/**
 * Restbase Client
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

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
	 * The Config object from the request context.
	 * @var \Config
	 */
	protected $config;

	public function __construct( $config ) {
		$this->config = $config;
		$this->serviceClient = new \VirtualRESTServiceClient(
			MediaWikiServices::getInstance()->getHttpRequestFactory()->createMultiClient()
		);
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
		// The global virtual rest service config object
		$vrs = $this->config->get( 'VirtualRestConfig' );
		// CX specific configuration override (local testing and development)
		$cxs = $this->config->get( 'ContentTranslationRESTBase' );

		if ( $cxs ) {
			$class = RestbaseVirtualRESTService::class;
			$params = $cxs;
		} elseif ( isset( $vrs['modules']['restbase'] ) ) {
			$class = RestbaseVirtualRESTService::class;
			$params = $vrs['modules']['restbase'];
			// backward compatibility
			$params['parsoidCompat'] = false;
		} elseif ( isset( $vrs['modules']['parsoid'] ) ) {
			$class = ParsoidVirtualRESTService::class;
			$params = $vrs['modules']['parsoid'];
			$params['restbaseCompat'] = true;
		} elseif (
			$this->config->has( 'VisualEditorParsoidAutoConfig' ) &&
			$this->config->get( 'VisualEditorParsoidAutoConfig' )
		) {
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
		$params = array_merge( $vrs['global'] ?? [], $params );

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
