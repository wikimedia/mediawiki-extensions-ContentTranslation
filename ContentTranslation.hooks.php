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
		global $wgContentTranslationEventLogging;

		$title = $out->getTitle();
		$user = $out->getUser();

		if ( $user->isLoggedIn() &&
			$title->getNamespace() === NS_MAIN &&
			$out->getLanguage()->getCode() !== $title->getPageLanguage()->getCode()
		) {
			$out->addModules( 'ext.cx.redlink' );
		}

		// If EventLogging integration is enabled, load the schema module
		// and the event logging functions module
		if ( $wgContentTranslationEventLogging ) {
			$out->addModules( array(
				'schema.ContentTranslation',
				'ext.cx.eventlogging',
			) );
		}

		return true;
	}

	/**
	 * Hook: ResourceLoaderGetConfigVars
	 * @param array $vars
	 * @return bool
	 */
	public static function addConfig( &$vars ) {
		global $wgContentTranslationServerURL, $wgContentTranslationDomainTemplate;

		$vars['wgContentTranslationServerURL'] = $wgContentTranslationServerURL;
		$vars['wgContentTranslationDomainTemplate'] = $wgContentTranslationDomainTemplate;

		return true;
	}
}
