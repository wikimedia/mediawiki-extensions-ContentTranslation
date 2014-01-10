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
	'descriptionmsg' => 'cot-desc',
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
