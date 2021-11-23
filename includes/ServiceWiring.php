<?php

declare( strict_types=1 );

use ContentTranslation\LoadBalancer;
use ContentTranslation\Store\RecentSignificantEditStore;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\MediaWikiServices;

/** @phpcs-require-sorted-array */
return [
	'ContentTranslation.LoadBalancer' =>
		static function ( MediaWikiServices $services ): LoadBalancer {
			return new LoadBalancer(
				$services->getDBLoadBalancerFactory(),
				new ServiceOptions( LoadBalancer::CONSTRUCTOR_OPTIONS, $services->getMainConfig() )
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
];
