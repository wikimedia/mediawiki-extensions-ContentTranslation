<?php

declare( strict_types=1 );

use ContentTranslation\LoadBalancer;
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
];
