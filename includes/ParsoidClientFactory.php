<?php

namespace ContentTranslation;

use MediaWiki\Config\ServiceOptions;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\MainConfigNames;
use MediaWiki\Rest\Handler\Helper\PageRestHelperFactory;
use ParsoidVirtualRESTService;
use Psr\Log\LoggerInterface;
use RequestContext;
use RestbaseVirtualRESTService;
use VirtualRESTService;
use VirtualRESTServiceClient;

class ParsoidClientFactory {

	/**
	 * @internal For use by ServiceWiring.php only or when locating the service
	 * @var string
	 */
	public const SERVICE_NAME = 'ContentTranslation.ParsoidClientFactory';

	/**
	 * @internal For used by ServiceWiring.php
	 *
	 * @var array
	 */
	public const CONSTRUCTOR_OPTIONS = [
		'VirtualRestConfig',
		'ContentTranslationRESTBase',
		self::DEFAULT_PARSOID_CLIENT_SETTING,
	];

	/** @var string */
	public const DEFAULT_PARSOID_CLIENT_SETTING = 'ContentTranslationDefaultParsoidClient';

	/** @var HttpRequestFactory */
	private $httpRequestFactory;

	/** @var VirtualRESTServiceClient */
	private $serviceClient = null;

	/** @var ServiceOptions */
	private $options;

	/** @var LoggerInterface */
	private $logger;

	/** @var PageRestHelperFactory */
	private $pageRestHelperFactory;

	/**
	 * @param ServiceOptions $options
	 * @param HttpRequestFactory $httpRequestFactory
	 * @param LoggerInterface $logger
	 * @param PageRestHelperFactory $pageRestHelperFactory
	 */
	public function __construct(
		ServiceOptions $options,
		HttpRequestFactory $httpRequestFactory,
		LoggerInterface $logger,
		PageRestHelperFactory $pageRestHelperFactory
	) {
		$this->options = $options;
		$this->options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );

		$this->httpRequestFactory = $httpRequestFactory;
		$this->logger = $logger;
		$this->pageRestHelperFactory = $pageRestHelperFactory;
	}

	/**
	 * Create a ParsoidClient for accessing Parsoid.
	 *
	 * @return ParsoidClient
	 */
	public function createParsoidClient(): ParsoidClient {
		if ( $this->useParsoidOverHTTP() ) {
			$client = new RestbaseClient(
				$this->getVRSClient(),
				$this->logger
			);
		} else {
			$client = $this->createDirectClient();
		}

		return $client;
	}

	/**
	 * Whether Parsoid should be used over HTTP, according to the configuration.
	 * Note that we may still end up using direct mode, depending on information
	 * from the request.
	 *
	 * @return bool
	 */
	public function useParsoidOverHTTP(): bool {
		$shouldUseVRS = ( $this->options->get( self::DEFAULT_PARSOID_CLIENT_SETTING ) === 'vrs' );
		return $this->canUseParsoidOverHTTP() && $shouldUseVRS;
	}

	/**
	 * Whether Parsoid could be used over HTTP, based on the configuration provided.
	 * @return bool
	 */
	private function canUseParsoidOverHTTP(): bool {
		// If we have VRS modules configured, use them
		$vrs = $this->options->get( MainConfigNames::VirtualRestConfig );
		if ( isset( $vrs['modules'] ) &&
			( isset( $vrs['modules']['restbase'] ) ||
				isset( $vrs['modules']['parsoid'] ) )
		) {
			return true;
		}

		$cxVRS = $this->options->get( 'ContentTranslationRESTBase' );
		if ( isset( $cxVRS['url'] ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Create a ParsoidClient for accessing Parsoid.
	 *
	 * @return ParsoidClient
	 */
	private function createDirectClient(): ParsoidClient {
		$performer = RequestContext::getMain()->getAuthority();
		return new DirectParsoidClient( $this->pageRestHelperFactory, $performer );
	}

	/**
	 * Creates the virtual REST service object to be used in CX's API calls. The
	 * method determines whether to instantiate a ParsoidVirtualRESTService or a
	 * RestbaseVirtualRESTService object based on configuration directives: if
	 * $wgVirtualRestConfig['modules']['restbase'] is defined, RESTBase is chosen,
	 * otherwise Parsoid is used (either by using the MW Core config, or the
	 * CX-local one).
	 *
	 * @return VirtualRESTService the VirtualRESTService object to use
	 */
	private function createVRSObject(): VirtualRESTService {
		$vrs = $this->options->get( MainConfigNames::VirtualRestConfig );
		if ( $this->options->get( 'ContentTranslationRESTBase' ) ) {
			$class = RestbaseVirtualRESTService::class;
			$params = $this->options->get( 'ContentTranslationRESTBase' );
		} elseif ( isset( $vrs['modules'] ) && isset( $vrs['modules']['restbase'] ) ) {
			$class = RestbaseVirtualRESTService::class;
			$params = $vrs['modules']['restbase'];
			// backward compatibility
			$params['parsoidCompat'] = false;
		} elseif ( isset( $vrs['modules'] ) && isset( $vrs['modules']['parsoid'] ) ) {
			$class = ParsoidVirtualRESTService::class;
			$params = $vrs['modules']['parsoid'];
			$params['restbaseCompat'] = true;
		} else {
			// No global modules defined, so no way to contact the document server.
			throw new \MWException( 'Parsoid/RESTBase unconfigured' );
		}

		// Merge the global and service-specific params
		if ( isset( $vrs['global'] ) ) {
			$params = array_merge( $vrs['global'], $params );
		}

		// Set up cookie forwarding
		if ( ( $params['forwardCookies'] ?? false ) === true ) {
			$context = RequestContext::getMain();
			$params['forwardCookies'] = $context->getRequest()->getHeader( 'Cookie' );
		}

		return new $class( $params );
	}

	/**
	 * Creates the object which directs queries to the virtual REST service, depending on the path.
	 *
	 * @return VirtualRESTServiceClient
	 */
	private function getVRSClient(): VirtualRESTServiceClient {
		if ( !$this->serviceClient ) {
			$this->serviceClient = new VirtualRESTServiceClient( $this->httpRequestFactory->createMultiClient() );
			$this->serviceClient->mount( '/restbase/', $this->createVRSObject() );
		}
		return $this->serviceClient;
	}
}
