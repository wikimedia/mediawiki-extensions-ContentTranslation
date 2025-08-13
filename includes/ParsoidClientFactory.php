<?php

namespace ContentTranslation;

use MediaWiki\Context\RequestContext;
use MediaWiki\Rest\Handler\Helper\PageRestHelperFactory;

class ParsoidClientFactory {

	/**
	 * @internal For use by ServiceWiring.php only or when locating the service
	 */
	public const SERVICE_NAME = 'ContentTranslation.ParsoidClientFactory';

	/** @var PageRestHelperFactory */
	private $pageRestHelperFactory;

	public function __construct(
		PageRestHelperFactory $pageRestHelperFactory
	) {
		$this->pageRestHelperFactory = $pageRestHelperFactory;
	}

	/**
	 * Create a ParsoidClient for accessing Parsoid.
	 */
	public function createParsoidClient(): ParsoidClient {
		return $this->createDirectClient();
	}

	/**
	 * Create a ParsoidClient for accessing Parsoid.
	 */
	private function createDirectClient(): ParsoidClient {
		$performer = RequestContext::getMain()->getAuthority();
		return new DirectParsoidClient( $this->pageRestHelperFactory, $performer );
	}
}
