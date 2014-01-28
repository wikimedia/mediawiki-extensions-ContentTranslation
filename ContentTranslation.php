<?php
/**
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation aids
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

/**
 * Version number used in extension credits and in other places where needed.
 */
define( 'CONTENTTRANSLATION_VERSION', '1.0.0' );

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

$GLOBALS['wgContentTranslationServerURL'] = false;
$GLOBALS['wgContentTranslationServerTimeout'] = 15;

$GLOBALS['wgExtensionMessagesFiles']['ContentTranslationAlias'] =
	"$dir/ContentTranslation.alias.php";

// Special pages
$GLOBALS['wgSpecialPages']['ContentTranslation'] = 'SpecialContentTranslation';

// API modules
$GLOBALS['wgAPIModules']['cxpublish'] = 'ApiContentTranslationPublish';

// Hooks
$GLOBALS['wgHooks']['BeforePageDisplay'][] = 'ContentTranslationHooks::addModules';

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
/**
 * Whether to use EventLogging.
 * The EventLogging extension must be installed if this option is enabled.
 */
$GLOBALS['wgContentTranslationEventLogging'] = false;
