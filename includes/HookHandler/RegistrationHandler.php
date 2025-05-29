<?php
declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

class RegistrationHandler {
	public static function onRegistration() {
		global $wgVirtualDomainsMapping, $wgContentTranslationDatabase, $wgContentTranslationCluster;
		// If a virtual domain is not set, use the value set for $wgContentTranslationDatabase or the main database
		if ( !isset( $wgVirtualDomainsMapping['virtual-cx'] ) ) {
			// TODO: Deprecate $wgContentTranslationDatabase config options in the future
			$wgVirtualDomainsMapping['virtual-cx'] = [
				'db' => $wgContentTranslationDatabase ?? false,
				'cluster' => $wgContentTranslationCluster ?: null
			];
		}
	}
}
