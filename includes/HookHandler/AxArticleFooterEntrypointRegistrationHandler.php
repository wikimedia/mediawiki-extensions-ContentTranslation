<?php
declare( strict_types = 1 );

namespace ContentTranslation\HookHandler;

use MediaWiki\Config\Config;
use MediaWiki\Config\ConfigFactory;
use MediaWiki\Context\IContextSource;
use MediaWiki\Extension\Disambiguator\Lookup as DisambiguatorLookup;
use MediaWiki\Html\Html;
use MediaWiki\Language\Language;
use MediaWiki\Output\Hook\BeforePageDisplayHook;
use MediaWiki\Output\OutputPage;
use MediaWiki\Skin\Hook\SkinAfterContentHook;
use MediaWiki\Skin\Skin;

/**
 * Hook handler that registers the "ext.ax.articlefooter.entrypoint" RL module, when the
 * appropriate conditions are met.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 * @since 2024.07
 */
class AxArticleFooterEntrypointRegistrationHandler implements BeforePageDisplayHook, SkinAfterContentHook {
	private const ALLOWED_SKINS = [ 'minerva' ];
	private Config $contentTranslationConfig;

	public function __construct(
		ConfigFactory $configFactory,
		private readonly Language $contentLanguage,
	) {
		$this->contentTranslationConfig = $configFactory->makeConfig( 'ArticleFooterEntrypoint' );
	}

	private function isEntrypointAllowedOnSkin( Skin $skin ): bool {
		$skinName = $skin->getSkinName();

		return in_array( $skinName, self::ALLOWED_SKINS );
	}

	/**
	 * Check whether the output page is a diff page
	 *
	 * @param IContextSource $context
	 * @return bool
	 */
	private static function isDiffPage( IContextSource $context ): bool {
		$request = $context->getRequest();
		$type = $request->getRawVal( 'type' );
		$diff = $request->getCheck( 'diff' );
		$oldId = $request->getCheck( 'oldid' );

		return $type === 'revision' || $diff || $oldId;
	}

	/**
	 * Whether the page is a disambiguation page.
	 *
	 * If the Disambiguator extension isn't installed, then the test always fails, i.e. the page is
	 * never a disambiguation page.
	 */
	private function isDisambiguationPage( OutputPage $outputPage ): bool {
		return class_exists( DisambiguatorLookup::class ) &&
			DisambiguatorLookup::isMarkedAsDisambiguationPage( $outputPage );
	}

	private function shouldDisplayFooterEntrypoint( Skin $skin ): bool {
		$title = $skin->getTitle();
		$action = $skin->getRequest()->getRawVal( 'action' ) ?? 'view';

		$enabledLanguages = $this->contentTranslationConfig->get(
			'AutomaticTranslationLanguageSearcherEntrypointEnabledLanguages'
		) ?? [];

		return in_array( $this->contentLanguage->getCode(), $enabledLanguages ) &&
			$title->inNamespace( NS_MAIN ) &&
			$action === 'view' &&
			!$title->isMainPage() &&
			$title->exists() &&
			!self::isDiffPage( $skin ) &&
			!$this->isDisambiguationPage( $skin->getOutput() ) &&
			$this->isEntrypointAllowedOnSkin( $skin );
	}

	/** @inheritDoc */
	public function onSkinAfterContent( &$data, $skin ) {
		if ( $this->shouldDisplayFooterEntrypoint( $skin ) ) {
			$data .= Html::element( 'div', [ 'class' => 'automatic-translation-entrypoint-container' ] );
		}
	}

	/** @inheritDoc */
	public function onBeforePageDisplay( $out, $skin ): void {
		if ( $this->shouldDisplayFooterEntrypoint( $skin ) ) {
			$out->addModules( [ 'ext.ax.articlefooter.entrypoint' ] );
		}
	}
}
