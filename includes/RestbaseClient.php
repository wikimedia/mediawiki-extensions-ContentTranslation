<?php
/**
 * Restbase Client
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation;

use MediaWiki\Page\PageIdentity;
use Psr\Log\LoggerInterface;
use Title;
use VirtualRESTServiceClient;

class RestbaseClient implements ParsoidClient {

	/**
	 * @var \VirtualRESTServiceClient
	 */
	protected $serviceClient;

	/**
	 * @var LoggerInterface
	 */
	private $logger;

	public function __construct(
		VirtualRESTServiceClient $serviceClient,
		LoggerInterface $logger
	) {
		$this->serviceClient = $serviceClient;
		$this->logger = $logger;
	}

	/**
	 * Make a RESTBase v1 API request (which could be to either Parsoid or
	 * RESTBase; the VRS makes these appear identical).
	 * @param string $method
	 * @param string $path
	 * @param array $params
	 * @param array $reqheaders
	 * @return array If successful, the value is the RESTbase server's response as an array
	 *   with keys 'code', 'error', 'headers' and 'body'
	 */
	private function requestRestbase(
		string $method, string $path, array $params, array $reqheaders = []
	): array {
		$request = [
			'method' => $method,
			'url' => '/restbase/local/v1/' . $path
		];
		if ( $method === 'GET' ) {
			$request['query'] = $params;
		} else {
			$request['body'] = $params;
		}
		// See https://www.mediawiki.org/wiki/Specs/HTML/2.6.0
		$reqheaders['Accept'] =
			'text/html; charset=utf-8; profile="https://www.mediawiki.org/wiki/Specs/HTML/' .
			DirectParsoidClient::PARSOID_VERSION;
		$reqheaders['User-Agent'] = 'ContentTranslation-MediaWiki/' . MW_VERSION;
		$request['headers'] = $reqheaders;
		$response = $this->serviceClient->run( $request );

		if ( !empty( $response['error'] ) ) {
			$response['error'] = [
				'apierror-cx-docserverexception',
				wfEscapeWikiText( $response['error'] )
			];
		} elseif ( $response['code'] >= 400 ) {
			// no error message, but code indicates an error
			$json = json_decode( $response['body'], true );
			$text = $json['detail'] ?? '(no message)';
			$response['error'] = [
				'apierror-cx-docserverexception',
				$response['code'],
				wfEscapeWikiText( $text )
			];
		} else {
			// Needed because $response['error'] may be '' on success!
			$response['error'] = null;
		}

		return $response;
	}

	/**
	 * Converts html to wikitext
	 *
	 * @param PageIdentity $page
	 * @param string $html
	 * @return array The response
	 */
	public function convertHtmlToWikitext( PageIdentity $page, string $html ): array {
		$title = Title::castFromPageIdentity( $page );
		return $this->requestRestbase(
			'POST',
			'transform/html/to/wikitext/' . urlencode( $title->getPrefixedDBkey() ),
			[
				'html' => $html,
				'scrub_wikitext' => 1,
			]
		);
	}

	/**
	 * Converts wikitext to html
	 *
	 * @param PageIdentity $page
	 * @param string $wikitext
	 * @return array The response
	 */
	public function convertWikitextToHtml( PageIdentity $page, string $wikitext ): array {
		$title = Title::castFromPageIdentity( $page );
		return $this->requestRestbase(
			'POST',
			'transform/wikitext/to/html/' . urlencode( $title->getPrefixedDBkey() ),
			[
				'wikitext' => $wikitext,
				'body_only' => 1,
			]
		);
	}
}
