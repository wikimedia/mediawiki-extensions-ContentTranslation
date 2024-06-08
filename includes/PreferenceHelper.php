<?php
/**
 * User preference helper methods for ContentTranslation extension.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
namespace ContentTranslation;

use GlobalPreferences\GlobalPreferencesFactory;
use GlobalPreferences\Storage;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Context\RequestContext;
use MediaWiki\Extension\BetaFeatures\BetaFeatures;
use MediaWiki\Preferences\PreferencesFactory;
use MediaWiki\User\Options\UserOptionsLookup;
use MediaWiki\User\User;
use MediaWiki\User\UserIdentity;

class PreferenceHelper {

	/** @var bool */
	private $contentTranslationAsBetaFeature;

	/** @var bool */
	private $isBetaFeaturesLoaded;

	/** @var bool */
	private $isGlobalPreferencesLoaded;

	/** @var PreferencesFactory */
	private $preferencesFactory;

	/** @var UserOptionsLookup */
	private $userOptionsLookup;

	/**
	 * @internal For use by ServiceWiring
	 */
	public const CONSTRUCTOR_OPTIONS = [ 'ContentTranslationAsBetaFeature' ];

	public function __construct(
		PreferencesFactory $preferencesFactory,
		UserOptionsLookup $userOptionsLookup,
		ServiceOptions $options,
		bool $isBetaFeaturesLoaded,
		bool $isGlobalPreferencesLoaded
	) {
		$options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );

		$this->preferencesFactory = $preferencesFactory;
		$this->userOptionsLookup = $userOptionsLookup;
		$this->contentTranslationAsBetaFeature = $options->get( 'ContentTranslationAsBetaFeature' );
		$this->isBetaFeaturesLoaded = $isBetaFeaturesLoaded;
		$this->isGlobalPreferencesLoaded = $isGlobalPreferencesLoaded;
	}

	/**
	 * @param UserIdentity $user
	 *
	 * @return bool
	 */
	public function isBetaFeatureEnabled( UserIdentity $user ) {
		return $this->isBetaFeaturesLoaded && BetaFeatures::isFeatureEnabled( $user, 'cx' );
	}

	/**
	 * Utility function that checks whether CX is enabled for a given user.
	 * Currently, it checks that if CX is a beta feature, whether the user has
	 * enabled it. Otherwise, it is always enabled.
	 *
	 * @param User $user
	 * @return bool
	 */
	public function isEnabledForUser( User $user ) {
		// CX is currently restricted to only logged-in users. For now treat temp users as anonymous.
		if ( !$user->isNamed() ) {
			return false;
		}

		if ( !$this->contentTranslationAsBetaFeature ) {
			return true;
		}

		return $this->isBetaFeatureEnabled( $user );
	}

	/**
	 * Set a global preference for the user.
	 * @param User $user
	 * @param string $preference
	 * @param string $value
	 */
	public function setGlobalPreference( User $user, $preference, $value ) {
		if ( !$this->isGlobalPreferencesLoaded ) {
			// Need GlobalPreferences extension.
			wfLogWarning( __METHOD__ . ': Need GlobalPreferences extension. Not setting preference.' );
			return;
		}
		/** @var GlobalPreferencesFactory $globalPref */
		$globalPref = $this->preferencesFactory;
		'@phan-var GlobalPreferencesFactory $globalPref';
		$prefs = $globalPref->getGlobalPreferencesValues( $user, Storage::SKIP_CACHE );
		$prefs[$preference] = $value;
		$user = $user->getInstanceForUpdate();
		$globalPref->setGlobalPreferences( $user, $prefs, RequestContext::getMain() );
	}

	/**
	 * Get a global preference for the user.
	 * @param User $user
	 * @param string $preference
	 * @return string|null Preference value
	 */
	public function getGlobalPreference( $user, $preference ) {
		if ( !$this->isGlobalPreferencesLoaded ) {
			// Need GlobalPreferences extension.
			wfLogWarning( __METHOD__ . ': Need GlobalPreferences extension. Not getting preference.' );
			return null;
		}
		/** @var GlobalPreferencesFactory $globalPref */
		$globalPref = $this->preferencesFactory;
		'@phan-var GlobalPreferencesFactory $globalPref';
		$prefs = $globalPref->getGlobalPreferencesValues( $user, Storage::SKIP_CACHE );
		return $prefs[ $preference ] ?? null;
	}

	/**
	 * If CX is not beta feature and user unchecked the preference
	 * to avoid seeing entry points, disable all entrypoints
	 * @param UserIdentity $user
	 * @return bool
	 */
	public function isCXEntrypointDisabled( UserIdentity $user ) {
		return !$this->contentTranslationAsBetaFeature &&
			!$this->userOptionsLookup->getBoolOption( $user, 'cx-enable-entrypoints' );
	}
}
