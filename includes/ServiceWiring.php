<?php

declare( strict_types=1 );

use ContentTranslation\LoadBalancer;
use ContentTranslation\PreferenceHelper;
use ContentTranslation\Store\RecentSignificantEditStore;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\MediaWikiServices;
use Wikibase\Lib\Store\SiteLinkLookup;
use Wikimedia\Services\NoSuchServiceException;

/** @phpcs-require-sorted-array */
return [
	'ContentTranslation.LoadBalancer' =>
		static function ( MediaWikiServices $services ): LoadBalancer {
			return new LoadBalancer(
				$services->getDBLoadBalancerFactory(),
				new ServiceOptions( LoadBalancer::CONSTRUCTOR_OPTIONS, $services->getMainConfig() )
			);
		},
	'ContentTranslation.PreferenceHelper' =>
		static function ( MediaWikiServices $services ): PreferenceHelper {
			return new PreferenceHelper(
				$services->getPreferencesFactory(),
				$services->getUserOptionsLookup(),
				new ServiceOptions( PreferenceHelper::CONSTRUCTOR_OPTIONS, $services->getMainConfig() ),
				ExtensionRegistry::getInstance()->isLoaded( 'BetaFeatures' ),
				ExtensionRegistry::getInstance()->isLoaded( 'GlobalPreferences' )
			);
		},
	'ContentTranslation.RecentSignificantEditStore' =>
		static function ( MediaWikiServices $services ): RecentSignificantEditStore {
			global $wgConf;
			[ $wikiFamily ] = $wgConf->siteFromDB( WikiMap::getCurrentWikiId() );
			return new RecentSignificantEditStore(
				$services->getService( 'ContentTranslation.LoadBalancer' ),
				$wikiFamily
			);
		},
	'ContentTranslation.SiteLinkLookup' =>
		/** @phan-suppress-next-line PhanUndeclaredTypeReturnType */
		static function ( MediaWikiServices $services ): ?SiteLinkLookup {
			try {
				$wikibaseClientStore = $services->getService( 'WikibaseClient.Store' );
				return $wikibaseClientStore->getSiteLinkLookup();
			} catch ( NoSuchServiceException $exception ) {
				return null;
			}
		}
];
