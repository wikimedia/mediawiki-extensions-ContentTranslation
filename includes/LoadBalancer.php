<?php

namespace ContentTranslation;

use MediaWiki\Config\ServiceOptions;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\LBFactory;

/**
 * ContentTranslation Database Connection abstraction
 */
class LoadBalancer {

	/** @var LBFactory */
	private $lbFactory;

	/**
	 * The Database domain ID of the relevant wiki or false for the local wiki
	 * @var string|false
	 */
	private $contentTranslationDatabase;

	/**
	 * The external Database cluster name where the database lives or false if not exists
	 * @var string|false
	 */
	private $contentTranslationCluster;

	/**
	 * @internal For use by ServiceWiring
	 */
	public const CONSTRUCTOR_OPTIONS = [
		'ContentTranslationDatabase',
		'ContentTranslationCluster',
	];

	public function __construct( LBFactory $lbFactory, ServiceOptions $options ) {
		$options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );

		$this->lbFactory = $lbFactory;
		$this->contentTranslationDatabase = $options->get( 'ContentTranslationDatabase' );
		$this->contentTranslationCluster = $options->get( 'ContentTranslationCluster' );
	}

	/**
	 * Gets a database connection to the ContentTranslation database
	 * @param int $type Either DB_REPLICA or DB_PRIMARY
	 * @return IDatabase
	 */
	public function getConnection( int $type ): IDatabase {
		$lb = $this->contentTranslationCluster
			? $this->lbFactory->getExternalLB( $this->contentTranslationCluster )
			: $this->lbFactory->getMainLB( $this->contentTranslationDatabase );

		return $lb->getConnection( $type, [], $this->contentTranslationDatabase );
	}

}
