<?php

declare( strict_types = 1 );

namespace ContentTranslation\Special;

use ContentTranslation\SiteMapper;
use MediaWiki\Html\TemplateParser;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\SpecialPage\SpecialPage;

/**
 * A special page for translating Wikipedia pages using MinT.
 *
 * This page provides the user the capability to search for an Wikipedia
 * article in any language, and get the automatic (machine) translation for
 * this article, by the MinT translation service.
 *
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 */
class SpecialAutomaticTranslation extends SpecialPage {

	private LanguageNameUtils $languageNameUtils;

	public function __construct( LanguageNameUtils $languageNameUtils ) {
		parent::__construct( 'AutomaticTranslation' );
		$this->languageNameUtils = $languageNameUtils;
	}

	public function execute( $subPage ) {
		parent::execute( $subPage );

		$this->setHeaders();
		$out = $this->getOutput();
		$targetLanguageCode = SiteMapper::getCurrentLanguageCode();
		$targetLanguage = $this->languageNameUtils->getLanguageName( $targetLanguageCode );
		$out->addHTML( $this->getHtml( $targetLanguage ) );

		$out->addModuleStyles( 'mint.styles' );
		$out->addModules( 'mint.app' );

		// TODO: is there a way to get URL params in "getInitialLanguagesData" hook?
		$out->addJsConfigVars( 'mintUrlSourceLanguageCode', $out->getRequest()->getVal( 'from' ) );
		$out->addJsConfigVars( 'mintUrlTargetLanguageCode', $out->getRequest()->getVal( 'to' ) );
	}

	/**
	 * Callback used to share MinT initial languages JS code
	 */
	public static function getInitialLanguagesData(): array {
		return [
			'mintInitialSourceLanguageCode' => 'all',
			'mintInitialTargetLanguageCode' => SiteMapper::getCurrentLanguageCode()
		];
	}

	private function getHtml( string $targetLanguage ): string {
		$templateParser = new TemplateParser( __DIR__ . '/../templates/minT' );
		$data = [
			'headerTitle' => $this->msg( 'mint-home-header-title' )->text(),
			'inputPlaceholder' => $this->msg( 'mint-home-input-placeholder' )->text(),
			'sourceLanguage' => $this->msg( 'mint-translation-list-all-languages-option-label' )->text(),
			'sourceLanguageCode' => 'all',
			'targetLanguage' => $targetLanguage,
			'infoPanelText' => $this->msg( 'mint-home-info-panel-text', $targetLanguage )->text(),
			'randomTopicButtonLabel' => $this->msg( 'mint-home-random-topic-button-label' )->text(),
		];

		return $templateParser->processTemplate( 'Home', $data );
	}

	public function getDescription() {
		return $this->msg( 'automatic-translation-special-page-description' );
	}
}
