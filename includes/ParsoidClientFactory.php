<?php

namespace ContentTranslation;

use MediaWiki\Context\RequestContext;
use MediaWiki\Rest\Handler\Helper\PageRestHelperFactory;

class ParsoidClientFactory {

	/**
	 * @internal For use by ServiceWiring.php only or when locating the service
	 * @var string
	 */
	public const SERVICE_NAME = 'ContentTranslation.ParsoidClientFactory';

	/** @var PageRestHelperFactory */
	private $pageRestHelperFactory;

	/**
	 * @param PageRestHelperFactory $pageRestHelperFactory
	 */
	public function __construct(
		PageRestHelperFactory $pageRestHelperFactory
	) {
		$this->pageRestHelperFactory = $pageRestHelperFactory;
	}

	/**
	 * Create a ParsoidClient for accessing Parsoid.
	 *
	 * @return ParsoidClient
	 */
	public function createParsoidClient(): ParsoidClient {
		return $this->createDirectClient();
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
}
