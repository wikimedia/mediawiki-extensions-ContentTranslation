<?php

declare( strict_types=1 );

use ContentTranslation\AbuseFilterChecker;
use ContentTranslation\CorporaLookup;
use ContentTranslation\EditedSectionFinder;
use ContentTranslation\LoadBalancer;
use ContentTranslation\ParsoidClientFactory;
use ContentTranslation\PreferenceHelper;
use ContentTranslation\SandboxTitleMaker;
use ContentTranslation\SectionPositionCalculator;
use ContentTranslation\Service\TranslatorService;
use ContentTranslation\Store\RecentSignificantEditStore;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Validator\TranslationUnitValidator;
use ContentTranslation\WikidataIdFetcher;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Logger\LoggerFactory;
use MediaWiki\MediaWikiServices;
use MediaWiki\WikiMap\WikiMap;
use Wikimedia\Services\NoSuchServiceException;

// PHP unit does not understand code coverage for this file
// as the @covers annotation cannot cover a specific file
// This is fully tested in ServiceWiringTest.php
// @codeCoverageIgnoreStart

/** @phpcs-require-sorted-array */
return [
	'ContentTranslation.AbuseFilterChecker' =>
		static function ( MediaWikiServices $services ): AbuseFilterChecker {
			try {
				$variableGeneratorFactory = $services->getService( 'AbuseFilterVariableGeneratorFactory' );
				$consequencesLookup = $services->getService( 'AbuseFilterConsequencesLookup' );
				$filterLookup = $services->getService( 'AbuseFilterFilterLookup' );
				$filterRunnerFactory = $services->getService( 'AbuseFilterRunnerFactory' );
			} catch ( NoSuchServiceException $exception ) {
				$variableGeneratorFactory = null;
				$consequencesLookup = null;
				$filterLookup = null;
				$filterRunnerFactory = null;
			}
			return new AbuseFilterChecker(
				ExtensionRegistry::getInstance()->isLoaded( 'Abuse Filter' ),
				$services->getWikiPageFactory(),
				$variableGeneratorFactory,
				$consequencesLookup,
				$filterLookup,
				$filterRunnerFactory
			);
		},
	'ContentTranslation.CorporaLookup' =>
		static function ( MediaWikiServices $services ): CorporaLookup {
			return new CorporaLookup(
				$services->getService( 'ContentTranslation.LoadBalancer' )->getConnection( DB_REPLICA )
			);
		},
	'ContentTranslation.EditedSectionFinder' =>
		static function (): EditedSectionFinder {
			return new EditedSectionFinder();
		},
	'ContentTranslation.LoadBalancer' =>
		static function ( MediaWikiServices $services ): LoadBalancer {
			return new LoadBalancer(
				$services->getDBLoadBalancerFactory(),
				new ServiceOptions( LoadBalancer::CONSTRUCTOR_OPTIONS, $services->getMainConfig() )
			);
		},
	'ContentTranslation.ParsoidClientFactory' => static function (
			MediaWikiServices $services
		): ParsoidClientFactory {
			return new ParsoidClientFactory(
				new ServiceOptions( ParsoidClientFactory::CONSTRUCTOR_OPTIONS, $services->getMainConfig() ),
				$services->getHttpRequestFactory(),
				LoggerFactory::getInstance( 'ContentTranslation' ),
				$services->getPageRestHelperFactory()
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
	'ContentTranslation.SandboxTitleMaker' =>
		static function ( MediaWikiServices $services ): SandboxTitleMaker {
			$isSandboxLinkLoaded = ExtensionRegistry::getInstance()->isLoaded( 'SandboxLink' );
			return new SandboxTitleMaker( $services->getTitleFactory(), $isSandboxLinkLoaded );
		},
	'ContentTranslation.SectionPositionCalculator' =>
		static function ( MediaWikiServices $services ): SectionPositionCalculator {
			return new SectionPositionCalculator( $services->getHttpRequestFactory() );
		},
	'ContentTranslation.SectionTranslationStore' =>
		static function ( MediaWikiServices $services ): SectionTranslationStore {
			return new SectionTranslationStore(
				$services->getService( 'ContentTranslation.LoadBalancer' )
			);
		},
	'ContentTranslation.TranslationCorporaStore' =>
		static function ( MediaWikiServices $services ): TranslationCorporaStore {
			return new TranslationCorporaStore(
				$services->getService( 'ContentTranslation.LoadBalancer' ),
				$services->getDBLoadBalancerFactory()
			);
		},
	'ContentTranslation.TranslationStore' =>
		static function ( MediaWikiServices $services ): TranslationStore {
			return new TranslationStore(
				$services->getService( 'ContentTranslation.LoadBalancer' )
			);
		},
	'ContentTranslation.TranslationUnitValidator' =>
		static function ( MediaWikiServices $services ): TranslationUnitValidator {
			return new TranslationUnitValidator(
				$services->getService( 'ContentTranslation.AbuseFilterChecker' ),
				$services->getService( 'ContentTranslation.ParsoidClientFactory' )
			);
		},
	'ContentTranslation.TranslatorService' =>
		static function ( MediaWikiServices $services ): TranslatorService {
			return new TranslatorService(
				$services->getCentralIdLookup(),
				$services->getService( 'ContentTranslation.TranslationStore' )
			);
		},
	'ContentTranslation.WikidataIdFetcher' =>
		static function ( MediaWikiServices $services ): WikidataIdFetcher {
			return new WikidataIdFetcher( $services->getHttpRequestFactory() );
		}
];

// @codeCoverageIgnoreEnd
