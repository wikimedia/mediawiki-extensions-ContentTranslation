<?php
/**
 * Hooks for ContentTranslation extension.
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

class ContentTranslationHooks {
	/**
	 * @param OutputPage $out
	 * @param Skin $skin
	 * @return bool
	 * Hook: BeforePageDisplay
	 */
	public static function addModules( $out, $skin ) {
		global $wgContentTranslationEventLogging, $wgContentTranslationServerURL;

		// If EventLogging integration is enabled, load the schema module
		// and the event logging functions module
		if ( $wgContentTranslationEventLogging ) {
			$out->addModules( array(
				'schema.ContentTranslation',
				'ext.cx.eventlogging',
			) );
		}

		$title = $out->getTitle();
		list( $alias, ) = SpecialPageFactory::resolveAlias( $title->getText() );

		if ( $title->isSpecialPage() && ( $alias === 'CX'
			|| $alias === 'ContentTranslation' )
		) {
			$out->addScript(
				Html::linkedScript( "$wgContentTranslationServerURL/socket.io/socket.io.js" )
			);
		}

		return true;
	}

	/**
	 * Hook: ResourceLoaderGetConfigVars
	 * @param array $vars
	 * @return bool
	 */
	public static function addConfig( &$vars ) {
		global $wgContentTranslationServerURL;

		$vars['wgContentTranslationServerURL'] = $wgContentTranslationServerURL;

		return true;
	}

}
