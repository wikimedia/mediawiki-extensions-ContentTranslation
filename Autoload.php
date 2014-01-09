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

$wgAutoloadClasses['SpecialContentTranslation'] = "$dir/specials/SpecialContentTranslation.php";
$wgAutoloadClasses['ContentTranslationHooks'] = "$dir/ContentTranslation.hooks.php";
