<?php
/**
 * Saving a wiki page created using ContentTranslation.
 * The following special things happen when the page is created:
 * - HTML from the translation editor's contenteditable is converted to wiki syntax using Parsoid.
 * - A change tag is added.
 * - The edit summary shows a link to the revision from which the translation was made.
 * - Optionally, a template is added if the article appears to have a lot of machine translation.
 * - Categories are hidden in <nowiki> if the page is not published to the main space.
 * - Information about the translated page is saved to the central ContentTranslation database.
 * - When relevant, values of MediaWiki CAPTCHA can be sent.
 * This borrows heavily from ApiVisualEditorEdit.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
class ApiContentTranslationPublish extends ApiBase {

	/**
	 * @var VirtualRESTServiceClient
	 */
	protected $serviceClient;

	public function __construct( ApiMain $main, $name ) {
		global $wgContentTranslationParsoid;
		parent::__construct( $main, $name );
		$this->serviceClient = new VirtualRESTServiceClient( new MultiHttpClient( array() ) );
		$parsoidConfig = $wgContentTranslationParsoid;
		$this->serviceClient->mount( '/parsoid/', new ParsoidVirtualRESTService( array(
			'URL' => $parsoidConfig['url'],
			'prefix' => $parsoidConfig['prefix'],
			'timeout' => $parsoidConfig['timeout'],
		) ) );
	}

	private function requestParsoid( $method, $path, $params ) {
		$request = array(
			'method' => $method,
			'url' => '/parsoid/local/v1/' . $path
		);
		if ( $method === 'GET' ) {
			$request['query'] = $params;
		} else {
			$request['body'] = $params;
		}
		$response = $this->serviceClient->run( $request );
		if ( $response['code'] === 200 && $response['error'] === '' ) {
			return $response['body'];
		} elseif ( $response['error'] !== '' ) {
			$this->dieUsage( 'parsoidserver-http-error: ' . $response['code'], $response['error'] );
		} else { // error null, code not 200
			$this->dieUsage( 'parsoidserver-http: HTTP ' . $response['code'], $response['code'] );
		}
	}

	/**
	 * Converts html to wikitext
	 *
	 * @param Title $title
	 * @param string $html
	 * @return string wikitext
	 */
	protected function convertHtmlToWikitext( Title $title, $html ) {
		$wikitext = $this->requestParsoid(
			'POST',
			'transform/html/to/wikitext/' . urlencode( $title->getPrefixedDBkey() ),
			array(
				'html' => $html,
			)
		);
		if ( $wikitext === false ) {
			$this->dieUsage( 'Error contacting the Parsoid server', 'parsoidserver' );
		}
		return $wikitext;
	}

	protected function saveWikitext( $title, $wikitext, $params ) {
		global $wgContentTranslationHighMTCategory;
		$categories = array();

		$sourceLink = '[[:' . $params['from']
			. ':Special:Redirect/revision/'
			. $params['sourcerevision']
			. '|' . $params['sourcetitle'] . ']]';

		if ( $params['categories'] ) {
			$categories = explode( '|', $params['categories'] );
		}

		$progress = json_decode( $params['progress'], true );
		if (
			$progress &&
			$wgContentTranslationHighMTCategory &&
			$this->hasHighMT( $progress )
		) {
			$categories[] = $wgContentTranslationHighMTCategory;
		}

		if ( count( $categories ) ) {
			$categoryText = "\n[[" . implode( "]]\n[[", $categories ) . ']]';
			// If publishing to User namespace, wrap categories in <nowiki>
			// to avoid blocks by abuse filter. See T88007.
			if ( $title->inNamespace( NS_USER ) ) {
				$categoryText = "\n<nowiki>$categoryText</nowiki>";
			}
			$wikitext .= $categoryText;
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

		if ( defined( 'ApiResult::META_CONTENT' ) ) {
			return $api->getResult()->getResultData();
		} else {
			return $api->getResultData();
		}
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

		if ( trim( $params['html'] ) === '' ) {
			$this->dieUsage( 'html cannot be empty', 'invalidhtml' );
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
				// Add the tags post-send, after RC row insertion
				$revId = intval( $saveresult['edit']['newrevid'] );
				DeferredUpdates::addCallableUpdate( function() use ( $revId, $params ) {
					ChangeTags::addTags(
						'contenttranslation',
						null,
						$revId,
						null,
						FormatJson::encode( array(
							'from' => $params['from'],
							'to' => $params['to'],
						) )
					);
				} );
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
		global $wgContentTranslationDatabase, $wgContentTranslationTranslateInTarget;

		if ( $wgContentTranslationDatabase === null ) {
			// Central CX database not configured.
			return;
		}
		$user = $this->getUser();
		$translator = new ContentTranslation\Translator( $user );

		if ( !$wgContentTranslationTranslateInTarget ) {
			$targetTitle = Title::newFromText( $params['title'] );
			if ( !$targetTitle ) {
				throw new InvalidArgumentException( "Invalid target title given" );
			}
			$targetURL = $targetTitle->getCanonicalUrl();
		} else {
			$targetTitle = ContentTranslation\SiteMapper::getTargetTitle(
				$params['title'],
				$this->getUser()->getName()
			);
			$targetURL = ContentTranslation\SiteMapper::getPageURL( $params['to'], $targetTitle );
		}
		$translation = array(
			'sourceTitle' => $params['sourcetitle'],
			'targetTitle' => $params['title'],
			'sourceLanguage' => $params['from'],
			'targetLanguage' => $params['to'],
			'sourceURL' => ContentTranslation\SiteMapper::getPageURL(
				$params['from'], $params['sourcetitle']
			),
			'status' => $params['status'],
			'progress' => $params['progress'],
			// XXX Do not overwrite startedTranslator when we have collaborative editing!
			'startedTranslator' => $translator->getGlobalUserId(),
			'lastUpdatedTranslator' => $translator->getGlobalUserId(),
		);
		// Save targetURL only when the status is published.
		if ( $params['status'] === 'published' ) {
			$translation['targetURL'] = $targetURL;
		};
		$cxtranslation = new ContentTranslation\Translation( $translation );
		$cxtranslation->save();
		$translationId = $cxtranslation->getTranslationId();
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
