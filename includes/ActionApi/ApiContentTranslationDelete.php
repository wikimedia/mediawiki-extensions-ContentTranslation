<?php
/**
 * Delete a translation
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ContentTranslation\Translation;
use ContentTranslation\TranslationStorageManager;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;

class ApiContentTranslationDelete extends ApiBase {
	public function execute() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		$block = $user->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		$translator = new Translator( $user );
		$work = new TranslationWork( $params['sourcetitle'], $params['from'], $params['to'] );
		$translation = Translation::findForTranslator( $work, $translator );

		if ( $translation === null ) {
			$this->dieWithError(
				[ 'apierror-invalidtitle', wfEscapeWikiText( $work->getPage() ) ]
			);
		}

		if ( $translation->translation['targetURL'] !== null ) {
			// Translation was once published. Don't delete, move it to published status.
			$translation->translation['status'] = 'published';
			$translation->update( [], $translator );
		} else {
			$translationId = $translation->getData()['id'];
			Translator::removeTranslation( $translationId );
			Translation::delete( $translationId );
			TranslationStorageManager::deleteTranslationData( $translationId );
		}

		$result = [ 'result' => 'success' ];
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		return [
			'from' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'to' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ApiBase::PARAM_REQUIRED => true,
			],
		];
	}

	public function needsToken() {
		return 'csrf';
	}

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
