<?php
/**
 * Delete a translation
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ContentTranslation\Store\TranslationCorporaStore;
use ContentTranslation\Store\TranslationStore;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiMain;
use Wikimedia\ParamValidator\ParamValidator;

class ApiContentTranslationDelete extends ApiBase {
	private TranslationCorporaStore $corporaStore;
	private TranslationStore $translationStore;

	public function __construct(
		ApiMain $mainModule,
		string $action,
		TranslationCorporaStore $corporaStore,
		TranslationStore $translationStore
	) {
		parent::__construct( $mainModule, $action );
		$this->corporaStore = $corporaStore;
		$this->translationStore = $translationStore;
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		$block = $user->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		[ 'sourcetitle' => $sourceTitle, 'from' => $sourceLang, 'to' => $targetLang ] = $params;
		$translation = $this->translationStore->findTranslationByUser( $user, $sourceTitle, $sourceLang, $targetLang );

		if ( $translation === null ) {
			$this->dieWithError(
				[ 'apierror-invalidtitle', wfEscapeWikiText( $sourceTitle ) ]
			);
		}

		if ( $translation->translation['targetURL'] !== null ) {
			// Translation was once published. Don't delete, move it to published status.
			$translation->translation['status'] = TranslationStore::TRANSLATION_STATUS_PUBLISHED;
			$this->translationStore->updateTranslation( $translation );
		} else {
			$translationId = $translation->getData()['id'];
			$this->translationStore->unlinkTranslationFromTranslator( $translationId );
			$this->translationStore->deleteTranslation( $translationId );
			$this->corporaStore->deleteTranslationData( $translationId );
		}

		$result = [ 'result' => 'success' ];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			'from' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'to' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
		];
	}

	/** @inheritDoc */
	public function needsToken() {
		return 'csrf';
	}

	/** @inheritDoc */
	public function isWriteMode() {
		return true;
	}

	/**
	 * @see ApiBase::getExamplesMessages()
	 * @return array
	 */
	protected function getExamplesMessages() {
		return [
			'action=cxdelete&from=en&to=es&sourcetitle=Food' => 'apihelp-cxdelete-example-1'
		];
	}

}
