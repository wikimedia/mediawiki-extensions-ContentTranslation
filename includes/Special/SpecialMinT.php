<?php

declare( strict_types = 1 );

namespace ContentTranslation\Special;

use ContentTranslation\SiteMapper;
use MediaWiki\Html\TemplateParser;
use MediaWiki\Languages\LanguageNameUtils;
use SpecialPage;

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
class SpecialMinT extends SpecialPage {

	private LanguageNameUtils $languageNameUtils;

	public function __construct( LanguageNameUtils $languageNameUtils ) {
		parent::__construct( 'MinT' );
		$this->languageNameUtils = $languageNameUtils;
	}

	public function execute( $subPage ) {
		parent::execute( $subPage );

		$out = $this->getOutput();
		// Setting the page title to an empty string, leads to an empty title in the browser tab title.
		// TODO: Check if this is acceptable and fix the page title if needed
		$out->setPageTitle( '' );
		$targetLanguageCode = SiteMapper::getCurrentLanguageCode();
		$targetLanguage = $this->languageNameUtils->getLanguageName( $targetLanguageCode );
		$out->addHTML( $this->getHtml( $targetLanguage ) );

		$out->addModuleStyles( "mint.styles" );
	}

	private function getHtml( string $targetLanguage ): string {
		$templateParser = new TemplateParser( __DIR__ . '/../templates/minT' );
		$data = [
			'headerTitle' => $this->msg( 'mint-home-header-title' ),
			'inputPlaceholder' => $this->msg( 'mint-home-input-placeholder' ),
			'sourceLanguage' => $this->msg( 'mint-translation-list-all-languages-option-label' ),
			'sourceLanguageCode' => 'all',
			'targetLanguage' => $targetLanguage,
			'infoPanelText' => $this->msg( 'mint-home-info-panel-text', $targetLanguage ),
			'randomTopicButtonLabel' => $this->msg( 'mint-home-random-topic-button-label' )
		];

		return $templateParser->processTemplate( 'Home', $data );
	}

	public function getDescription() {
		return $this->msg( 'mint' );
	}
}
