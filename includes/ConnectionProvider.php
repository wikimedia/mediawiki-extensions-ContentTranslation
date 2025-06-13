<?php
declare( strict_types = 1 );

namespace ContentTranslation;

use Wikimedia\Rdbms\IConnectionProvider;
use Wikimedia\Rdbms\IDatabase;
use Wikimedia\Rdbms\IReadableDatabase;

/**
 * Decorator for IConnectionProvider that enforces the virtual-cx domain
 */
class ConnectionProvider implements IConnectionProvider {
	public const VIRTUAL_DOMAIN = 'virtual-cx';
	private IConnectionProvider $inner;

	public function __construct( IConnectionProvider $inner ) {
		$this->inner = $inner;
	}

	/** @inheritDoc */
	public function getPrimaryDatabase( $domain = false ): IDatabase {
		return $this->inner->getPrimaryDatabase( self::VIRTUAL_DOMAIN );
	}

	/** @inheritDoc */
	public function getReplicaDatabase( $domain = false, $group = null ): IReadableDatabase {
		return $this->inner->getReplicaDatabase( self::VIRTUAL_DOMAIN, $group );
	}

	/** @inheritDoc */
	public function commitAndWaitForReplication( $fname, $ticket, array $opts = [] ) {
		return $this->inner->commitAndWaitForReplication( $fname, $ticket, $opts );
	}

	/** @inheritDoc */
	public function getEmptyTransactionTicket( $fname ) {
		return $this->inner->getEmptyTransactionTicket( $fname );
	}
}
