<?php

declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use ContentTranslation\PreferenceHelper;
use MediaWiki\Extension\SiteMatrix\SiteMatrix;
use MediaWiki\MediaWikiServices;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Registration\ExtensionRegistry;
use MediaWiki\ResourceLoader\Context;
use MobileContext;

class ULSRelevantLanguagesEntrypointRegistrationHandler implements BeforePageDisplayHook {

	/** @var PreferenceHelper */
	private $preferenceHelper;

	public function __construct( PreferenceHelper $preferenceHelper ) {
		$this->preferenceHelper = $preferenceHelper;
	}

	/** @inheritDoc */
	public function onBeforePageDisplay( $out, $skin ): void {
		$isMobileView = false;
		if ( ExtensionRegistry::getInstance()->isLoaded( 'MobileFrontend' ) ) {
			/** @var MobileContext $mobileContext */
			$mobileContext = MediaWikiServices::getInstance()->getService( 'MobileFrontend.Context' );
			$isMobileView = $mobileContext->shouldDisplayMobileView();
		}

		// The entrypoint module should only be registered for desktop devices
		if ( $isMobileView ) {
			return;
		}

		$user = $out->getUser();
		// Enable entrypoint only on Wikipedias where Content Translation is enabled and only for users
		// that have not disabled CX entrypoints
		if (
			!$this->preferenceHelper->isEnabledForUser( $user )
			|| $this->preferenceHelper->isCXEntrypointDisabled( $user )
		) {
			return;
		}

		$isContentPage = $out->getTitle()->isContentPage();

		if ( !$isContentPage ) {
			return;
		}

		$out->addModules( 'ext.cx.entrypoints.ulsrelevantlanguages' );
	}

	/**
	 * Get the list of Wikipedia languages
	 *
	 * @param Context $context
	 * @return string[] Array of language codes
	 * @suppress PhanUndeclaredClassMethod
	 */
	public static function getWikipediaList( Context $context ): array {
		// If SiteMatrix extension is loaded, get the list of languages from it.
		// Note that the sitematrix can also be fetched by calling the action=sitematrix api,
		// But it is discouraged to have http requests generated from a ResourceLoader callback.
		if ( ExtensionRegistry::getInstance()->isLoaded( 'SiteMatrix' ) ) {
			$sitematrix = new SiteMatrix();
			$languages = $sitematrix->getLangList();
			$filteredLanguages = array_filter( $languages, static function ( $langCode ) use ( $sitematrix ) {
				// Check if the language is a Wikipedia
				// @phan-suppress-next-line PhanUndeclaredClassMethod
				return $sitematrix->exist( $langCode, 'wiki' );
			} );
			return array_values( $filteredLanguages );
		}

		// If SiteMatrix extension is not loaded, known wikis are hardcoded here.
		// This is based on the list of wikipedias available on November 2024.
		// This code should be useful only for development and testing purposes.
		// Production wikis will have SiteMatrix extension loaded.
		// There are ways to get the list of wikis by installing sitematrix extension locally.
		// But it requires additional setup and configuration - a text file with known wikis is part of that setup.
		// So it is not much different from hardcoding the list here.
		// Updating this list is not that important as we have enough languages for testing and debugging.

		return [
			'aa', 'ab', 'ace', 'ady', 'af', 'ak', 'alt', 'am', 'ami', 'an', 'ang', 'ann', 'anp', 'ar', 'arc', 'ary',
			'arz', 'as', 'ast', 'atj', 'av', 'avk', 'awa', 'ay', 'az', 'azb', 'ba', 'ban', 'bar', 'bbc', 'bcl', 'bdr',
			'be', 'be-tarask', 'bew', 'bg', 'bh', 'bi', 'bjn', 'blk', 'bm', 'bn', 'bo', 'bpy', 'br', 'bs', 'btm',
			'bug', 'bxr', 'ca', 'cbk-zam', 'cdo', 'ce', 'ceb', 'ch', 'cho', 'chr', 'chy', 'ckb', 'co', 'cr', 'crh',
			'cs', 'csb', 'cu', 'cv', 'cy', 'da', 'dag', 'de', 'dga', 'din', 'diq', 'dsb', 'dtp', 'dty', 'dv', 'dz',
			'ee', 'el', 'eml', 'en', 'eo', 'es', 'et', 'eu', 'ext', 'fa', 'fat', 'ff', 'fi', 'fj', 'fo', 'fon', 'fr',
			'frp', 'frr', 'fur', 'fy', 'ga', 'gag', 'gan', 'gcr', 'gd', 'gl', 'glk', 'gn', 'gom', 'gor', 'got', 'gpe',
			'gsw', 'gu', 'guc', 'gur', 'guw', 'gv', 'ha', 'hak', 'haw', 'he', 'hi', 'hif', 'ho', 'hr', 'hsb', 'ht',
			'hu', 'hy', 'hyw', 'hz', 'ia', 'iba', 'id', 'ie', 'ig', 'igl', 'ii', 'ik', 'ilo', 'inh', 'io', 'is', 'it',
			'iu', 'ja', 'jam', 'jbo', 'jv', 'ka', 'kaa', 'kab', 'kbd', 'kbp', 'kcg', 'kg', 'kge', 'ki', 'kj', 'kk',
			'kl', 'km', 'kn', 'ko', 'koi', 'kr', 'krc', 'ks', 'ksh', 'ku', 'kus', 'kv', 'kw', 'ky', 'la', 'lad', 'lb',
			'lbe', 'lez', 'lfn', 'lg', 'li', 'lij', 'lld', 'lmo', 'ln', 'lo', 'lrc', 'lt', 'ltg', 'lv', 'lzh', 'mad',
			'mai', 'map-bms', 'mdf', 'mg', 'mh', 'mhr', 'mi', 'min', 'mk', 'ml', 'mn', 'mni', 'mnw', 'mo', 'mos', 'mr',
			'mrj', 'ms', 'mt', 'mus', 'mwl', 'my', 'myv', 'mzn', 'na', 'nah', 'nan', 'nap', 'nds', 'nds-nl', 'ne',
			'new', 'ng', 'nia', 'nl', 'nn', 'no', 'nov', 'nqo', 'nr', 'nrm', 'nso', 'nv', 'ny', 'oc', 'olo', 'om',
			'or', 'os', 'pa', 'pag', 'pam', 'pap', 'pcd', 'pcm', 'pdc', 'pfl', 'pi', 'pih', 'pl', 'pms', 'pnb', 'pnt',
			'ps', 'pt', 'pwn', 'qu', 'rm', 'rmy', 'rn', 'ro', 'roa-tara', 'rsk', 'ru', 'rue', 'rup', 'rw', 'sa',
			'sah', 'sat', 'sc', 'scn', 'sco', 'sd', 'se', 'sg', 'sgs', 'sh', 'shi', 'shn', 'shy', 'si', 'simple',
			'sk', 'skr', 'sl', 'sm', 'smn', 'sn', 'so', 'sq', 'sr', 'srn', 'ss', 'st', 'stq', 'su', 'sv', 'sw', 'szl',
			'szy', 'ta', 'tay', 'tcy', 'tdd', 'te', 'tet', 'tg', 'th', 'ti', 'tk', 'tl', 'tly', 'tn', 'to',
			'tpi', 'tr', 'trv', 'ts', 'tt', 'tum', 'tw', 'ty', 'tyv', 'udm', 'ug', 'uk', 'ur', 'uz', 've', 'vec',
			'vep', 'vi', 'vls', 'vo', 'vro', 'wa', 'war', 'wo', 'wuu', 'xal', 'xh', 'xmf',
			'yi', 'yo', 'yue', 'za', 'zea', 'zgh', 'zh', 'zu' ];
	}

}
