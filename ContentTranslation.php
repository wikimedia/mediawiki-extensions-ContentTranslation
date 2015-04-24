<?php
/**
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Version number used in extension credits and in other places where needed.
 */
define( 'CONTENTTRANSLATION_VERSION', '1.0.0+20150401' );

/**
 * Extension credits properties.
 */
$wgExtensionCredits['specialpage'][] = array(
	'path' => __FILE__,
	'name' => 'ContentTranslation',
	'version' => CONTENTTRANSLATION_VERSION,
	'author' => array(
		'Amir Aharoni',
		'David Chan',
		'Kartik Mistry',
		'Joel Sahleen',
		'Niklas Laxström',
		'Pau Giner',
		'Runa Bhattacharjee',
		'Santhosh Thottingal',
		'Siebrand Mazeland',
		'Sucheta Ghoshal',
	),
	'descriptionmsg' => 'cx-desc',
	'url' => 'https://www.mediawiki.org/wiki/Extension:ContentTranslation',
	'license-name' => 'GPL-2.0+',
);

$dir = __DIR__;

require_once "$dir/Resources.php";
require_once "$dir/Autoload.php";

$GLOBALS['wgMessagesDirs']['ContentTranslation'] = "$dir/i18n";

$GLOBALS['wgExtensionMessagesFiles']['ContentTranslationAlias'] =
	"$dir/ContentTranslation.alias.php";

// Special pages
$GLOBALS['wgSpecialPages']['ContentTranslation'] = 'SpecialContentTranslation';
$GLOBALS['wgSpecialPages']['ContentTranslationStats'] = 'SpecialContentTranslationStats';

// API modules
$GLOBALS['wgAPIModules']['cxconfiguration'] = 'ApiContentTranslationConfiguration';
$GLOBALS['wgAPIModules']['cxpublish'] = 'ApiContentTranslationPublish';
$GLOBALS['wgAPIModules']['cxdelete'] = 'ApiContentTranslationDelete';
$GLOBALS['wgAPIListModules']['contenttranslation'] = 'ApiQueryContentTranslation';
$GLOBALS['wgAPIListModules']['contenttranslationstats'] = 'ApiQueryContentTranslationStats';
$GLOBALS['wgAPIListModules']['contenttranslationlangtrend'] =
	'ApiQueryContentTranslationLanguageTrend';
$GLOBALS['wgAPIListModules']['cxpublishedtranslations' ]= 'ApiQueryPublishedTranslations';
// Hooks
$GLOBALS['wgHooks']['BeforePageDisplay'][] = 'ContentTranslationHooks::addModules';
$GLOBALS['wgHooks']['GetBetaFeaturePreferences'][] = 'ContentTranslationHooks::getPreferences';
$GLOBALS['wgHooks']['ResourceLoaderGetConfigVars'][] = 'ContentTranslationHooks::addConfig';
$GLOBALS['wgHooks']['EventLoggingRegisterSchemas'][] = 'ContentTranslationHooks::addEventLogging';
$GLOBALS['wgHooks']['SpecialContributionsBeforeMainOutput'][] =
	'ContentTranslationHooks::addNewContributionButton';
$GLOBALS['wgHooks']['ListDefinedTags'][] = 'ContentTranslationHooks::registerTags';
$GLOBALS['wgHooks']['ChangeTagsListActive'][] = 'ContentTranslationHooks::registerTags';
$GLOBALS['wgHooks']['UserSaveOptions'][] =  'ContentTranslationHooks::onSaveOptions';
$GLOBALS['wgHooks']['EditPage::showEditForm:initial'][] =
	'ContentTranslationHooks::newArticleCampaign';
$GLOBALS['wgHooks']['ResourceLoaderTestModules'][] =
	'ContentTranslationHooks::onResourceLoaderTestModules';

// Globals for this extension

$GLOBALS['wgContentTranslationExperimentalFeatures'] = false;
$GLOBALS['wgContentTranslationParsoid'] = array(
	'url' => 'http://parsoid-lb.eqiad.wikimedia.org/',
	'timeout' => 100 * 1000, // Parsoid timeout in milliseconds
	'prefix' => 'enwiki',
);

/**
 * Content translation database to provide dashboard and other features.
 * Provide the database name as the value.
 * @see sql/contenttranslation.sql for scripts to create this database.
 */
$GLOBALS['wgContentTranslationDatabase'] = null;

/**
 * If the content translation database is located in a different cluster,
 * specify the name of the cluster.
 */
$GLOBALS['wgContentTranslationCluster'] = false;

/**
 * Whether to use EventLogging.
 * The EventLogging extension must be installed if this option is enabled.
 */
$GLOBALS['wgContentTranslationEventLogging'] = false;

/**
 * Category to add to published translations if there is a high amount
 * of unedited machine translation. E.g., "Category:HighMT"
 */
$GLOBALS['wgContentTranslationHighMTCategory'] = null;

/**
 * Patterns to access MediaWiki pages, APIs and cxserver in different languages
 * for the site family.
 */
$GLOBALS['wgContentTranslationSiteTemplates'] = array(
	'view' => '//$1.wikipedia.org/wiki/$2',
	'action' => '//$1.wikipedia.org/w/index.php?title=$2',
	'api' => '//$1.wikipedia.org/w/api.php',
	'cx' => 'http://localhost:8080/v1',
);

/**
 * Whether to open Special:ContentTranslation in the target wiki
 * when clicking the button in the entry point.
 * The domain will be based on $wgContentTranslationSiteTemplates.
 * The default is to open Special:ContentTranslation on the same wiki.
 */
$GLOBALS['wgContentTranslationTranslateInTarget'] = false;

/**
 * Whether to have CX available only as a beta feature and only shown to the
 * users who have enabled the beta feature.
 */
$GLOBALS['wgContentTranslationAsBetaFeature'] = true;

/*
 * Target namespace to publish articles. Values can be 'Main'
 * or any valid Namespace without leading column.
 * Example: 'User', 'MediaWiki', 'Draft'
 * If the value is Main, article will be published in Main namespace.
 * If the value is User, article will be published under User:UserName/PageTitle
 * If it is another value like Foo, It will get published in Foo:PageTitle
 */
$GLOBALS['wgContentTranslationTargetNamespace'] = 'Main';

// List of campaigns enabled. Available campaigns: newarticle, cxstats
$GLOBALS['wgContentTranslationCampaigns'] = array( 'cxstats' );

/*
 * Whether the Magnus tool to find missing articles to be enabled or not.
 * This is initially made to experiment with an article comparison tool at
 * http://tools.wmflabs.org/not-in-the-other-language/
 * See https://phabricator.wikimedia.org/T76843
 */
$GLOBALS['wgContentTranslationUseMagnusTool'] = true;

// List of browsers Content Translation is incompatibe with
// See jQuery.client for specification
$GLOBALS['wgContentTranslationBrowserBlacklist'] = array(
	// IE < 10 has various incompatibilities in layout and feature support
	'msie' => array ( array( '<', 10 ) ),
);
