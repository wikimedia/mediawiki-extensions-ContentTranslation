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
define( 'CONTENTTRANSLATION_VERSION', '1.0.0+20140422' );

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
$GLOBALS['wgAPIModules']['cxpublish'] = 'ApiContentTranslationPublish';
$GLOBALS['wgAPIListModules']['contenttranslation'] = 'ApiQueryContentTranslation';

// Hooks
$GLOBALS['wgHooks']['BeforePageDisplay'][] = 'ContentTranslationHooks::addModules';
$GLOBALS['wgHooks']['GetBetaFeaturePreferences'][] = 'ContentTranslationHooks::getPreferences';
$GLOBALS['wgHooks']['ResourceLoaderGetConfigVars'][] = 'ContentTranslationHooks::addConfig';
$GLOBALS['wgHooks']['SpecialContributionsBeforeMainOutput'][] =
	'ContentTranslationHooks::addNewContributionButton';

$GLOBALS['wgExtensionFunctions'][] = function () {
	global $wgResourceModules, $wgContentTranslationEventLogging;

	// If EventLogging integration is enabled, first ensure that the
	// EventLogging extension is present, then declare the schema module.
	// If it is not present, emit a warning and disable logging.
	if ( $wgContentTranslationEventLogging ) {
		if ( class_exists( 'ResourceLoaderSchemaModule' ) ) {
			/// @see https://meta.wikimedia.org/wiki/Schema:ContentTranslation
			$wgResourceModules[ 'schema.ContentTranslation' ] = array(
				'class'  => 'ResourceLoaderSchemaModule',
				'schema' => 'ContentTranslation',
				'revision' => 7146627,
			);
		} else {
			wfWarn(
				'ContentTranslation is configured to use EventLogging, ' .
				'but the extension is is not available. ' .
				'Disabling $wgContentTranslationEventLogging.'
			);
			$wgContentTranslationEventLogging = false;
		}
	}

	return true;
};

// Globals for this extension

$GLOBALS['wgContentTranslationExperimentalFeatures'] = false;
$GLOBALS['wgContentTranslationParsoid'] = array(
	'url' => 'http://parsoid.wmflabs.org/',
	'timeout' => 100 * 1000, // Parsoid timeout in milliseconds
	'prefix' => 'enwiki',
);

/**
 * Content translaton database to provide dashboard and other features.
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
	'api' => '//$1.wikipedia.org/w/api.php',
	'cx' => 'http://localhost:8080',
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
