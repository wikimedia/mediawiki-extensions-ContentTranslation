<?php
/**
 * Saving a page created in ContentTranslation.
 * The main change from usual saving is that a tag is added.
 * Borrows heavily from ApiVisualEditorEdit.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

class ApiContentTranslationPublish extends ApiBase {
	protected function saveWikitext( $title, $wikitext, $params ) {
		$summary = $this->msg(
			'cx-publish-summary',
			$params['sourcetitle']
		)->inContentLanguage()->text();

		$apiParams = array(
			'action' => 'edit',
			'title' => $title->getPrefixedDBkey(),
			'text' => $wikitext,
			'summary' => $summary,
		);

		$api = new ApiMain(
			new DerivativeRequest(
				$this->getRequest(),
				$apiParams + $this->getRequest()->getValues(),
				true // was posted
			),
			true // enable write
		);

		$api->execute();

		return $api->getResultData();
	}

	public function execute() {
		$params = $this->extractRequestParams();
		$title = Title::newFromText( $params['title'] );

		if ( !$title ) {
			$this->dieUsageMsg( 'invalidtitle', $params['title'] );
		}

		// TODO Should convert contenteditable HTML to Wikitext
		$saveresult = $this->saveWikitext( $title, $params['text'], $params );
		$editStatus = $saveresult['edit']['result'];

		if ( isset( $saveresult['edit']['result'] ) || $editStatus === 'Success' ) {
			// TODO Can it be false?
			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				ChangeTags::addTags( 'contenttranslation', null,
					intval( $saveresult['edit']['newrevid'] ),
					null
				);
			}

			$result = array(
				'result' => 'success',
			);

			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				$result['newrevid'] = intval( $saveresult['edit']['newrevid'] );
			}
		} else {
			$result = array(
				'result' => 'error',
				'edit' => $saveresult['edit']
			);
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function getAllowedParams() {
		return array(
			'title' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'token' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'text' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'sourcetitle' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
		);
	}

	public function needsToken() {
		return true;
	}

	public function getTokenSalt() {
		return '';
	}

	public function mustBePosted() {
		return true;
	}

	public function isWriteMode() {
		return true;
	}

	public function getParamDescription() {
		return array(
			'title' => 'The title of the page to perform actions on.',
			'token' => 'Edit token',
			'text' => 'The wikitext to save in the page.',
			'sourcetitle' => 'The title of the source page.',
		);
	}

	public function getDescription() {
		return 'Save a page created using ContentTranslation to MediaWiki.';
	}
}
