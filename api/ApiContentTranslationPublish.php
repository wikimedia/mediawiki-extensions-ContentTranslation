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

	/**
	 * Converts html to wikitext
	 *
	 * @param Title $title
	 * @param string $html
	 * @return Status
	 * @throw MWException
	 */
	protected function convertHtmlToWikitext( Title $title, $html ) {
		global $wgContentTranslationParsoid;

		$conf = $wgContentTranslationParsoid;
		$page = urlencode( $title->getPrefixedDBkey() );

		$req = MWHttpRequest::factory(
			"{$conf['url']}/{$conf['prefix']}/$page",
			array(
				'method' => 'POST',
				'postData' => array(
					'content' => $html,
				),
				'timeout' => $conf['timeout'],
			)
		);

		$status = $req->execute();
		if ( !$status->isOK() ) {
			throw new MWException( $req->getContent() );
		}

		return $req->getContent();
	}

	protected function saveWikitext( $title, $wikitext, $params ) {
		global $wgContentTranslationHighMTCategory;

		$sourceLink = '[[:' . $params['from']
			. ':Special:Redirect/revision/'
			. $params['sourcerevision']
			. '|' . $params['sourcetitle'] . ']]';

		if ( $params['categories'] ) {
			$categories = explode( '|', $params['categories'] );
			foreach ( $categories as $categoryTitle ) {
				$categoryText .= "\n[[" . $categoryTitle . "]]";
			}
		}

		// If publishing to User namespace, wrap categories in <nowiki>
		// to avoid blocks by abuse filter. See T88007.
		if ( isset( $categoryText ) && $title->inNamespace( NS_USER ) ) {
			$categoryText = "<nowiki>" . $categoryText . "\n</nowiki>";
		}

		$wikitext .= $categoryText;

		$progress = json_decode( $params['progress'], true );
		if (
			$progress &&
			$wgContentTranslationHighMTCategory &&
			$this->hasHighMT( $progress )
		) {
			$wikitext .= "\n[[" . $wgContentTranslationHighMTCategory . ']]';
		}

		$summary = $this->msg(
			'cx-publish-summary',
			$sourceLink
		)->inContentLanguage()->text();

		$apiParams = array(
			'action' => 'edit',
			'title' => $title->getPrefixedDBkey(),
			'text' => $wikitext,
			'summary' => $summary,
		);

		$request = $this->getRequest();

		$api = new ApiMain(
			new DerivativeRequest(
				$request,
				$apiParams + $request->getValues(),
				true // was posted
			),
			true // enable write
		);

		$api->execute();

		return $api->getResultData();
	}

	public function execute() {
		$params = $this->extractRequestParams();

		if ( $this->getUser()->isBlocked() ) {
			$this->dieUsageMsg( 'blockedtext' );
		}

		if ( !Language::isKnownLanguageTag( $params['from'] ) ) {
			$this->dieUsage( 'Invalid source language', 'invalidsourcelanguage' );
		}

		if ( !Language::isKnownLanguageTag( $params['to'] ) ) {
			$this->dieUsage( 'Invalid target language', 'invalidtargetlanguage' );
		}

		if ( $params['status'] === 'draft' ) {
			$this->saveAsDraft();
		} else {
			$this->publish();
		}

	}

	public function publish() {
		$params = $this->extractRequestParams();

		$targetTitle = ContentTranslation\SiteMapper::getTargetTitle(
			$params['title'],
			$this->getUser()->getName()
		);
		$title = Title::newFromText( $targetTitle );

		if ( !$title ) {
			$this->dieUsageMsg( 'invalidtitle', $params['title'] );
		}
		try {
			$wikitext = $this->convertHtmlToWikitext( $title, $params['html'] );
		} catch ( MWException $e ) {
			$this->dieUsage( $e->getMessage(), 'parsoidserver' );
		}

		$saveresult = $this->saveWikitext( $title, $wikitext, $params );
		$editStatus = $saveresult['edit']['result'];

		if ( $editStatus === 'Success' ) {
			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				ChangeTags::addTags(
					'contenttranslation',
					null,
					intval( $saveresult['edit']['newrevid'] ),
					null,
					FormatJson::encode( array(
						'from' => $params['from'],
						'to' => $params['to'],
					) )
				);
			}

			$result = array(
				'result' => 'success',
			);

			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				$result['newrevid'] = intval( $saveresult['edit']['newrevid'] );
			}
			$this->saveTranslationHistory( $params );
		} else {
			$result = array(
				'result' => 'error',
				'edit' => $saveresult['edit']
			);
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function saveAsDraft() {
		$params = $this->extractRequestParams();
		$this->saveTranslationHistory( $params );
		$result = array(
			'result' => 'success',
		);
		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	public function saveTranslationHistory( $params ) {
		global $wgContentTranslationDatabase;

		if ( $wgContentTranslationDatabase === null ) {
			// Central CX database not configured.
			return;
		}
		$user = $this->getUser();
		$translator = new ContentTranslation\Translator( $user );
		$targetTitle = ContentTranslation\SiteMapper::getTargetTitle(
			$params['title'],
			$this->getUser()->getName()
		);
		$translation = new ContentTranslation\Translation( array(
			'sourceTitle' => $params['sourcetitle'],
			'targetTitle' => $params['title'],
			'sourceLanguage' => $params['from'],
			'targetLanguage' => $params['to'],
			'sourceURL' => ContentTranslation\SiteMapper::getPageURL(
				$params['from'], $params['sourcetitle']
			),
			'targetURL' => ContentTranslation\SiteMapper::getPageURL(
				$params['to'], $targetTitle
			),
			'status' => $params['status'],
			'progress' => $params['progress'],
			// XXX Do not overwrite startedTranslator when we have "draft save" feature.
			'startedTranslator' => $translator->getGlobalUserId(),
			'lastUpdatedTranslator' => $translator->getGlobalUserId(),
		) );
		$translation->save();
		$translationId = $translation->getTranslationId();
		$translator->addTranslation(  $translationId );
		if ( $params['status'] === 'draft' ) {
			// Save the draft
			ContentTranslation\Draft::save( $translationId, $params['html'] );
		} else {
			// Delete the draft
			ContentTranslation\Draft::delete( $translationId );
		}
	}

	public function getAllowedParams() {
		return array(
			'title' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'token' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'html' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'from' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'progress' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'to' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'sourcetitle' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'sourcerevision' => array(
				ApiBase::PARAM_REQUIRED => true,
			),
			'status' => array(
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_TYPE => array( 'draft', 'published' ),
			),
			'categories' => null,
			/** @todo These should be renamed to something all-lowercase and lacking a "wp" prefix */
			'wpCaptchaId' => null,
			'wpCaptchaWord' => null,
		);
	}

	public function needsToken() {
		return 'csrf';
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

	/**
	 * @see ApiBase::getExamplesMessages()
	 */
	protected function getExamplesMessages() {
		return array(
			/** @todo Provide examples */
		);
	}

	/**
	 * Determines if the article is being published with a high amount of
	 * unedited MT content.
	 *
	 * @param {array} progress
	 * @return {boolean}
	 */
	protected function hasHighMT( $progress ) {
		if (
			isset( $progress['any'] ) &&
			isset( $progress['mt'] ) &&
			isset( $progress['mtSectionsCount'] )
		) {
			$mtPercentage = $progress['any'] !== 0 ? $progress['mt'] / $progress['any'] * 100 : 0;

			return $mtPercentage > 75 &&
				( $progress['mtSectionsCount'] > 5 || $progress['any'] * 100 > 75 );
		} else {

			return false;
		}
	}
}
