<?php

declare( strict_types=1 );

use ContentTranslation\AbuseFilterChecker;
use ContentTranslation\ConnectionProvider;
use ContentTranslation\LogNames;
use ContentTranslation\Manager\TranslationCorporaManager;
use ContentTranslation\ParsoidClientFactory;
use ContentTranslation\PreferenceHelper;
use ContentTranslation\Service\ContentCompressionService;
use ContentTranslation\Service\CxServerClient;
use ContentTranslation\Service\EditedSectionFinder;
use ContentTranslation\Service\SandboxTitleMaker;
use ContentTranslation\Service\SectionContentEvaluator;
use ContentTranslation\Service\SectionMappingFetcher;
use ContentTranslation\Service\SectionPositionCalculator;
use ContentTranslation\Service\SectionTitleFetcher;
use ContentTranslation\Service\TranslationSplitter;
use ContentTranslation\Service\TranslationTargetUrlCreator;
use ContentTranslation\Service\TranslatorService;
use ContentTranslation\Service\UserPermissionChecker;
use ContentTranslation\Service\UserService;
use ContentTranslation\Service\WikidataIdFetcher;
use ContentTranslation\Store\FavoriteSuggestionStore;
use ContentTranslation\Store\RecentSignificantEditStore;
use ContentTranslation\Store\SectionTranslationStore;
use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Store\TranslatorStore;
use ContentTranslation\Validator\TranslationUnitValidator;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Logger\LoggerFactory;
use MediaWiki\MediaWikiServices;
use MediaWiki\Registration\ExtensionRegistry;
use MediaWiki\WikiMap\WikiMap;
use Wikimedia\Rdbms\IConnectionProvider;
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
			} catch ( NoSuchServiceException ) {
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
	'ContentTranslation.ConnectionProvider' => static function ( MediaWikiServices $services ): IConnectionProvider {
		return new ConnectionProvider( $services->getConnectionProvider() );
	},
	'ContentTranslation.ContentCompressionService' =>
		static function (): ContentCompressionService {
			return new ContentCompressionService();
		},
	'ContentTranslation.CxServerClient' =>
		static function ( MediaWikiServices $services ): CxServerClient {
			return new CxServerClient(
				$services->getHttpRequestFactory(),
				LoggerFactory::getInstance( LogNames::MAIN ),
				new ServiceOptions( CxServerClient::CONSTRUCTOR_OPTIONS, $services->getMainConfig() )
			);
		},
	'ContentTranslation.EditedSectionFinder' =>
		static function (): EditedSectionFinder {
			return new EditedSectionFinder();
		},
	'ContentTranslation.FavoriteSuggestionStore' =>
		static function ( MediaWikiServices $services ): FavoriteSuggestionStore {
			return new FavoriteSuggestionStore( $services->getService( 'ContentTranslation.ConnectionProvider' ) );
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
				$services->getService( 'ContentTranslation.ConnectionProvider' ),
				$wikiFamily
			);
		},
	'ContentTranslation.SandboxTitleMaker' =>
		static function ( MediaWikiServices $services ): SandboxTitleMaker {
			$isSandboxLinkLoaded = ExtensionRegistry::getInstance()->isLoaded( 'SandboxLink' );
			return new SandboxTitleMaker( $services->getTitleFactory(), $isSandboxLinkLoaded );
		},
	'ContentTranslation.SectionContentEvaluator' =>
		static function ( MediaWikiServices $services ): SectionContentEvaluator {
			return new SectionContentEvaluator(
				$services->getWikiPageFactory(),
				$services->getService( 'ContentTranslation.ParsoidClientFactory' )
			);
		},
	'ContentTranslation.SectionMappingFetcher' =>
		static function ( MediaWikiServices $services ): SectionMappingFetcher {
			return new SectionMappingFetcher(
				$services->getService( 'ContentTranslation.CxServerClient' ),
				LoggerFactory::getInstance( LogNames::MAIN )
			);
		},
	'ContentTranslation.SectionPositionCalculator' =>
		static function ( MediaWikiServices $services ): SectionPositionCalculator {
			return new SectionPositionCalculator(
				$services->getService( 'ContentTranslation.CxServerClient' ),
				$services->getService( 'ContentTranslation.SectionTitleFetcher' ),
				$services->getService( 'ContentTranslation.SectionMappingFetcher' ),
			);
		},
	'ContentTranslation.SectionTitleFetcher' =>
		static function ( MediaWikiServices $services ): SectionTitleFetcher {
			return new SectionTitleFetcher(
				$services->getHttpRequestFactory(),
				LoggerFactory::getInstance( LogNames::MAIN )
			);
		},
	'ContentTranslation.SectionTranslationStore' =>
		static function ( MediaWikiServices $services ): SectionTranslationStore {
			return new SectionTranslationStore(
				$services->getService( 'ContentTranslation.ConnectionProvider' )
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
				$services->getService( 'ContentTranslation.ConnectionProvider' ),
				LoggerFactory::getInstance( LogNames::MAIN ),
				$services->getService( 'ContentTranslation.ContentCompressionService' )
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
				$services->getService( 'ContentTranslation.ConnectionProvider' ),
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
	'ContentTranslation.TranslatorStore' =>
		static function ( MediaWikiServices $services ): TranslatorStore {
			return new TranslatorStore(
				$services->getService( 'ContentTranslation.ConnectionProvider' ),
				$services->getService( 'ContentTranslation.UserService' )
			);
		},
	'ContentTranslation.UserPermissionChecker' =>
		static function ( MediaWikiServices $services ): UserPermissionChecker {
			return new UserPermissionChecker(
				$services->getTitleFactory(),
				$services->getUserGroupManager(),
				new ServiceOptions(
					UserPermissionChecker::CONSTRUCTOR_OPTIONS,
					$services->getMainConfig()
				)
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
