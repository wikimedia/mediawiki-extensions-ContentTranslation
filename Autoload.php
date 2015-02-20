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
	'ApiContentTranslationConfiguration' => "$dir/api/ApiContentTranslationConfiguration.php",
	'ApiContentTranslationPublish' => "$dir/api/ApiContentTranslationPublish.php",
	'ApiContentTranslationDelete' => "$dir/api/ApiContentTranslationDelete.php",
	'ApiQueryContentTranslation' => "$dir/api/ApiQueryContentTranslation.php",
	'ApiQueryContentTranslationStats' => "$dir/api/ApiQueryContentTranslationStats.php",
	'ApiQueryPublishedTranslations' => "$dir/api/ApiQueryPublishedTranslations.php",
	'ContentTranslationHooks' => "$dir/ContentTranslation.hooks.php",
	'ContentTranslation\Database' => "$dir/includes/Database.php",
	'ContentTranslation\Draft' => "$dir/includes/Draft.php",
	'ContentTranslation\GlobalUser' => "$dir/includes/GlobalUser.php",
	'ContentTranslation\SiteMapper' => "$dir/includes/SiteMapper.php",
	'ContentTranslation\Stats' => "$dir/includes/Stats.php",
	'ContentTranslation\Translation' => "$dir/includes/Translation.php",
	'ContentTranslation\Translator' => "$dir/includes/Translator.php",
	'SpecialContentTranslation' => "$dir/specials/SpecialContentTranslation.php",
	'SpecialContentTranslationStats' => "$dir/specials/SpecialContentTranslationStats.php",
);
