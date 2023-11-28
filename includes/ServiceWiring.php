<?php

declare( strict_types=1 );

use ContentTranslation\AbuseFilterChecker;
use ContentTranslation\LoadBalancer;
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\ParsoidClientFactory;
use ContentTranslation\PreferenceHelper;
use ContentTranslation\Service\EditedSectionFinder;
use ContentTranslation\Service\SandboxTitleMaker;
use ContentTranslation\Service\SectionPositionCalculator;
use ContentTranslation\Service\SectionTitleFetcher;
use ContentTranslation\Service\TranslationSplitter;
use ContentTranslation\Service\TranslationTargetUrlCreator;
use ContentTranslation\Service\TranslatorService;
use ContentTranslation\Service\UserService;
use ContentTranslation\Service\WikidataIdFetcher;
use ContentTranslation\Store\RecentSignificantEditStore;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Validator\TranslationUnitValidator;
use MediaWiki\Config\ServiceOptions;
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
				$filterRunnerFactory = $services->getService( 'AbuseFilterFilterRunnerFactory' );
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
			return new SectionPositionCalculator(
				$services->getHttpRequestFactory(),
				$services->getService( 'ContentTranslation.SectionTitleFetcher' )
			);
		},
	'ContentTranslation.SectionTitleFetcher' =>
		static function ( MediaWikiServices $services ): SectionTitleFetcher {
			return new SectionTitleFetcher( $services->getHttpRequestFactory() );
		},
	'ContentTranslation.SectionTranslationStore' =>
		static function ( MediaWikiServices $services ): SectionTranslationStore {
			return new SectionTranslationStore(
				$services->getService( 'ContentTranslation.LoadBalancer' )
			);
		},
	'ContentTranslation.TranslationCorporaManager' =>
		static function ( MediaWikiServices $services ): TranslationCorporaManager {
			return new TranslationCorporaManager(
				$services->getService( 'ContentTranslation.TranslationCorporaStore' )
			);
		},
	'ContentTranslation.TranslationCorporaStore' =>
		static function ( MediaWikiServices $services ): TranslationCorporaStore {
			return new TranslationCorporaStore(
				$services->getService( 'ContentTranslation.LoadBalancer' ),
				$services->getDBLoadBalancerFactory()
			);
		},
	'ContentTranslation.TranslationSplitter' =>
		static function ( MediaWikiServices $services ): TranslationSplitter {
			return new TranslationSplitter(
				$services->getService( 'ContentTranslation.TranslationCorporaManager' ),
				$services->getService( 'ContentTranslation.SectionTitleFetcher' )
			);
		},
	'ContentTranslation.TranslationStore' =>
		static function ( MediaWikiServices $services ): TranslationStore {
			return new TranslationStore(
				$services->getService( 'ContentTranslation.LoadBalancer' ),
				$services->getService( 'ContentTranslation.UserService' )
			);
		},
	'ContentTranslation.TranslationTargetUrlCreator' =>
		static function ( MediaWikiServices $services ): TranslationTargetUrlCreator {
			return new TranslationTargetUrlCreator(
				$services->getTitleFactory(),
				new ServiceOptions( TranslationTargetUrlCreator::CONSTRUCTOR_OPTIONS, $services->getMainConfig() )
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
				$services->getService( 'ContentTranslation.UserService' ),
				$services->getService( 'ContentTranslation.TranslationStore' )
			);
		},
	'ContentTranslation.UserService' =>
		static function ( MediaWikiServices $services ): UserService {
			return new UserService( $services->getCentralIdLookup(), $services->getGenderCache() );
		},
	'ContentTranslation.WikidataIdFetcher' =>
		static function ( MediaWikiServices $services ): WikidataIdFetcher {
			return new WikidataIdFetcher( $services->getHttpRequestFactory() );
		}
];

// @codeCoverageIgnoreEnd
