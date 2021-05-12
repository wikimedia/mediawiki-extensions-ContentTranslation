<?php

namespace ContentTranslation;

use MediaWiki\MediaWikiServices;

/**
 * ContentTranslation Database Connection abstraction
 */
class Database {
	/**
	 * Gets a database connection to the ContentTranslation database
	 * @param int $type Either DB_REPLICA or DB_PRIMARY
	 * @return \Wikimedia\Rdbms\IDatabase
	 */
	public static function getConnection( $type ) {
		global $wgContentTranslationDatabase, $wgContentTranslationCluster;

		$lbFactory = MediaWikiServices::getInstance()->getDBLoadBalancerFactory();
		$lb = $wgContentTranslationCluster
			? $lbFactory->getExternalLB( $wgContentTranslationCluster )
			: $lbFactory->getMainLB( $wgContentTranslationDatabase );

		return $lb->getConnectionRef( $type, [], $wgContentTranslationDatabase );
	}

}
