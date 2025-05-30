<?php

namespace ContentTranslation;

use Wikimedia\Rdbms\IConnectionProvider;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IReadableDatabase;

/**
 * ContentTranslation Database Connection abstraction
 */
class LoadBalancer {
	private const VIRTUAL_DOMAIN = 'virtual-cx';
	private IConnectionProvider $connectionProvider;

	public function __construct( IConnectionProvider $connectionProvider ) {
		$this->connectionProvider = $connectionProvider;
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
