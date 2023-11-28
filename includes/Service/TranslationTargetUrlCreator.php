<?php
declare( strict_types = 1 );

namespace ContentTranslation\Service;

use ContentTranslation\SiteMapper;
use MediaWiki\Config\ServiceOptions;
use MediaWiki\Title\TitleFactory;
use MediaWiki\User\UserIdentity;

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

	/**
	 * Given the user, the target page title as a string and the target language of the translation,
	 * this method returns a string containing the URL of the target page.
	 *
	 * @param UserIdentity $user
	 * @param string $targetTitleRaw
	 * @param string $targetLanguage
	 * @return string the translation target URL
	 */
	public function createTargetUrl( UserIdentity $user, string $targetTitleRaw, string $targetLanguage ): string {
		if ( $this->contentTranslationTranslateInTarget ) {
			$targetPage = SiteMapper::getTargetTitle( $targetTitleRaw, $user->getName() );
			return SiteMapper::getPageURL( $targetLanguage, $targetPage );
		}
		$targetTitle = $this->titleFactory->newFromText( $targetTitleRaw );
		return $targetTitle->getCanonicalURL();
	}
}
