<?php
/**
 * Autoload definitions.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

global $wgAutoloadClasses;
$dir = __DIR__;

$wgAutoloadClasses += array(
	'ApiContentTranslationPublish' => "$dir/api/ApiContentTranslationPublish.php",
	'ContentTranslationHooks' => "$dir/ContentTranslation.hooks.php",
	'ContentTranslationStats' => "$dir/utils/ContentTranslationStats.php",
	'SpecialContentTranslation' => "$dir/specials/SpecialContentTranslation.php",
	'SpecialContentTranslationStats' => "$dir/specials/SpecialContentTranslationStats.php",
);
