<?php
/**
 * ContentTranslation Database Connection abstraction
 */
namespace ContentTranslation;

class Database {
	/**
	 * Gets a database connection to the ContentTranslation database
	 * @param int $type Either DB_REPLICA or DB_MASTER
	 * @return \Wikimedia\Rdbms\IDatabase
	 */
	public static function getConnection( $type ) {
		global $wgContentTranslationDatabase, $wgContentTranslationCluster;

		$lb = $wgContentTranslationCluster
			? wfGetLBFactory()->getExternalLB( $wgContentTranslationCluster )
			: wfGetLB( $wgContentTranslationDatabase );

		return $lb->getConnectionRef( $type, [], $wgContentTranslationDatabase );
	}

}
