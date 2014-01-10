<?php
/**
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation aids
 *
 * @file
 * @ingroup Extensions
 * @copyright 2014 ContentTranslation Team and others; see AUTHORS.txt
 * @license GPL-2.0+; see LICENSE.txt
 */

class ContentTranslationHooks {
	/**
	 * This is attached to the MediaWiki 'BeforePageDisplay' hook.
	 * @param OutputPage $out
	 * @param Skin $skin
	 * @return bool
	 * Hook: BeforePageDisplay
	 */
	public static function onBeforePageDisplay( &$output, &$skin ) {
		$output->addModules( 'ext.cx.base' );
		return true;
	}
}
