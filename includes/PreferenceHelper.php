<?php
/**
 * User preference helper methods for ContentTranslation extension.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
namespace ContentTranslation;

use BetaFeatures;
use ExtensionRegistry;
use GlobalPreferences\GlobalPreferencesFactory;
use MediaWiki\MediaWikiServices;
use RequestContext;
use User;

class PreferenceHelper {

	/**
	 * @param User $user
	 *
	 * @return bool
	 */
	public static function isBetaFeatureEnabled( User $user ) {
		return ExtensionRegistry::getInstance()->isLoaded( 'BetaFeatures' )
			&& BetaFeatures::isFeatureEnabled( $user, 'cx' );
	}

	/**
	 * Utility function that checks whether CX is enabled for a given user.
	 * Currently it checks that if CX is a beta feature, whether the user has
	 * enabled it. Otherwise it is always enabled.
	 *
	 * @param User $user
	 * @return bool
	 */
	public static function isEnabledForUser( User $user ) {
		global $wgContentTranslationAsBetaFeature;

		// CX is currently restricted to only logged in users
		if ( $user->isAnon() ) {
			return false;
		}

		if ( !$wgContentTranslationAsBetaFeature ) {
			return true;
		}

		return self::isBetaFeatureEnabled( $user );
	}

	/**
	 * Set a global preference for the user.
	 * @param User $user
	 * @param string $preference
	 * @param string $value
	 */
	public static function setGlobalPreference( User $user, $preference, $value ) {
		if ( !ExtensionRegistry::getInstance()->isLoaded( 'GlobalPreferences' ) ) {
			// Need GlobalPreferences extension.
			wfLogWarning( __METHOD__ . ': Need GlobalPreferences extension. Not setting preference.' );
			return;
		}
		/** @var GlobalPreferencesFactory $globalPref */
		$globalPref = MediaWikiServices::getInstance()->getPreferencesFactory();
		'@phan-var GlobalPreferencesFactory $globalPref';
		$globalPref->setUser( $user->getInstanceForUpdate() );
		$prefs = $globalPref->getGlobalPreferencesValues( true );
		$prefs[$preference] = $value;
		$globalPref->setGlobalPreferences( $prefs, RequestContext::getMain() );
	}

	/**
	 * Get a global preference for the user.
	 * @param User $user
	 * @param string $preference
	 * @return string|null Preference value
	 */
	public static function getGlobalPreference( $user, $preference ) {
		if ( !ExtensionRegistry::getInstance()->isLoaded( 'GlobalPreferences' ) ) {
			// Need GlobalPreferences extension.
			wfLogWarning( __METHOD__ . ': Need GlobalPreferences extension. Not getting preference.' );
			return null;
		}
		/** @var GlobalPreferencesFactory $globalPref */
		$globalPref = MediaWikiServices::getInstance()->getPreferencesFactory();
		'@phan-var GlobalPreferencesFactory $globalPref';
		$globalPref->setUser( $user );
		$prefs = $globalPref->getGlobalPreferencesValues( true );
		return $prefs[$preference] ?? null;
	}

	/**
	 * If CX is not beta feature and user unchecked the preference
	 * to avoid seeing entry points, disable all entrypoints
	 * @param User $user
	 * @return bool
	 */
	public static function isCXEntrypointDisabled( $user ) {
		global $wgContentTranslationAsBetaFeature;
		return !$wgContentTranslationAsBetaFeature && !$user->getBoolOption( 'cx-enable-entrypoints' );
	}
}
