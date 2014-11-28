<?php
/**
 * ContentTranslation Database Connection abstraction
 */
namespace ContentTranslation;

class Database {
	/**
	 * Gets a database connection to the ContentTranslation database
	 * @param int $type Either DB_SLAVE or DB_MASTER
	 * @return DatabaseBase
	 */
	public static function getConnection( $type ) {
		global $wgContentTranslationDatabase, $wgContentTranslationCluster;

		$lb = $wgContentTranslationCluster
			? wfGetLBFactory()->getExternalLB( $wgContentTranslationCluster )
			: wfGetLB( $wgContentTranslationDatabase );

		return $lb->getConnectionRef( $type, array(), $wgContentTranslationDatabase );
	}

}
