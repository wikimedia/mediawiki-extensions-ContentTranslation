<?php

namespace ContentTranslation;

use Wikimedia\Rdbms\IConnectionProvider;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IReadableDatabase;
use Wikimedia\Rdbms\LBFactory;

/**
 * ContentTranslation Database Connection abstraction
 */
class LoadBalancer {
	private const VIRTUAL_DOMAIN = 'virtual-cx';

	/** @var LBFactory */
	private $lbFactory;

	private IConnectionProvider $connectionProvider;

	public function __construct(
		LBFactory $lbFactory,
		IConnectionProvider $connectionProvider
	) {
		$this->lbFactory = $lbFactory;
		$this->connectionProvider = $connectionProvider;
	}

	/**
	 * Gets a database connection to the ContentTranslation database
	 * @param int $type Either DB_REPLICA or DB_PRIMARY
	 * @param string|string[] $group
	 * @return IDatabase
	 */
	public function getConnection( int $type, $group = [] ): IDatabase {
		return $this->lbFactory->getLoadBalancer( self::VIRTUAL_DOMAIN )
			->getConnection(
				$type,
				$group,
				$this->lbFactory->getMappedDomain( self::VIRTUAL_DOMAIN )
			);
	}

	/**
	 * Returns a database connection to the primary database with the virtual domain
	 * @return IDatabase
	 */
	public function getPrimaryConnection(): IDatabase {
		return $this->connectionProvider->getPrimaryDatabase( self::VIRTUAL_DOMAIN );
	}

	/**
	 * Returns a readable database connection to the replica database with the virtual domain
	 * @param string|null $group
	 * @return IReadableDatabase
	 */
	public function getReplicaConnection( ?string $group = null ): IReadableDatabase {
		return $this->connectionProvider->getReplicaDatabase( self::VIRTUAL_DOMAIN, $group );
	}

}
