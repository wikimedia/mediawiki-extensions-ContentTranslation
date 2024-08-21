<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\SiteMapper;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Title\TitleFactory;

/**
 * @author Nik Gkountas
 * @license GPL-2.0-or-later
 *
 * The TranslationTargetUrlCreator service creates the target URL for a translation,
 * to be used inside "cx_translations" DB table or to be returned to the UI for proper
 * redirection after successful publishing.
 */
class TranslationTargetUrlCreator {
	private TitleFactory $titleFactory;
	/** @var bool */
	private $contentTranslationTranslateInTarget;

	/**
	 * @internal For use by ServiceWiring
	 */
	public const CONSTRUCTOR_OPTIONS = [
		'ContentTranslationTranslateInTarget'
	];

	public function __construct( TitleFactory $titleFactory, ServiceOptions $options ) {
		$options->assertRequiredOptions( self::CONSTRUCTOR_OPTIONS );

		$this->titleFactory = $titleFactory;
		$this->contentTranslationTranslateInTarget = $options->get( 'ContentTranslationTranslateInTarget' );
	}

	public function createUrlForSXRedirection(
		string $targetTitle,
		string $targetLanguage,
		string $sourceLanguage,
		string $sourceTitle,
		string $targetSectionTitle
	): string {
		$url = $this->createTargetUrl( $targetTitle, $targetLanguage );
		$params = [
			"sx-source-page-title" => $sourceTitle,
			"sx-published-section" => $targetSectionTitle,
			"sx-source-language" => $sourceLanguage,
			"sx-target-language" => $targetLanguage
		];

		return wfAppendQuery( $url, $params );
	}

	/**
	 * Given the user, the target page title as a string and the target language of the translation,
	 * this method returns a string containing the URL of the target page.
	 *
	 * @param string $targetTitleRaw
	 * @param string $targetLanguage
	 * @return string the translation target URL
	 */
	public function createTargetUrl( string $targetTitleRaw, string $targetLanguage ): string {
		if ( $this->contentTranslationTranslateInTarget ) {
			return SiteMapper::getPageURL( $targetLanguage, $targetTitleRaw );
		}
		$targetTitle = $this->titleFactory->newFromText( $targetTitleRaw );
		return $targetTitle->getCanonicalURL();
	}
}
