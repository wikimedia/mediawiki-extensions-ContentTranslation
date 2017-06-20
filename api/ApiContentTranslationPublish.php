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
 * - When relevant, Echo notifications about publishing milestones will be sent.
 * This borrows heavily from ApiVisualEditorEdit.
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

use ContentTranslation\Translation;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;

class ApiContentTranslationPublish extends ApiBase {

	/**
	 * @var VirtualRESTServiceClient
	 */
	protected $restbaseClient;
	/**
	 * @var Translation
	 */
	protected $translation;

	public function __construct( ApiMain $main, $name ) {
		parent::__construct( $main, $name );
		$config = RequestContext::getMain()->getConfig();
		$this->restbaseClient = new ContentTranslation\RestbaseClient( $config );
	}

	protected function saveWikitext( $title, $wikitext, $params ) {
		$categories = $this->getCategories( $params );
		if ( count( $categories ) ) {
			$categoryText = "\n[[" . implode( "]]\n[[", $categories ) . ']]';
			// If publishing to User namespace, wrap categories in <nowiki>
			// to avoid blocks by abuse filter. See T88007.
			if ( $title->inNamespace( NS_USER ) ) {
				$categoryText = "\n<nowiki>$categoryText</nowiki>";
			}
			$wikitext .= $categoryText;
		}

		$sourceLink = '[[:' . $params['from']
			. ':Special:Redirect/revision/'
			. $this->translation->translation['sourceRevisionId']
			. '|' . $params['sourcetitle'] . ']]';

		$summary = $this->msg(
			'cx-publish-summary',
			$sourceLink
		)->inContentLanguage()->text();

		$apiParams = [
			'action' => 'edit',
			'title' => $title->getPrefixedDBkey(),
			'text' => $wikitext,
			'summary' => $summary,
		];

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

		return $api->getResult()->getResultData();
	}

	protected function getCategories( array $params ) {
		global $wgContentTranslationHighMTCategory;
		$categories = [];

		if ( $params['categories'] ) {
			$categories = explode( '|', $params['categories'] );
		}

		$progress = json_decode( $this->translation->translation['progress'], true );
		if (
			$progress &&
			$wgContentTranslationHighMTCategory &&
			$this->hasHighMT( $progress )
		) {
			$categories[] = $wgContentTranslationHighMTCategory;
		}
		return $categories;
	}

	public function execute() {
		$params = $this->extractRequestParams();

		if ( $this->getUser()->isBlocked() ) {
			$this->dieBlocked( $this->getUser()->getBlock() );
		}

		if ( !Language::isKnownLanguageTag( $params['from'] ) ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
			} else {
				$this->dieUsage( 'Invalid source language', 'invalidsourcelanguage' );
			}
		}

		if ( !Language::isKnownLanguageTag( $params['to'] ) ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
			} else {
				$this->dieUsage( 'Invalid target language', 'invalidtargetlanguage' );
			}
		}

		if ( trim( $params['html'] ) === '' ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( [ 'apierror-paramempty', 'html' ], 'invalidhtml' );
			} else {
				$this->dieUsage( 'html cannot be empty', 'invalidhtml' );
			}
		}

		$this->publish();
	}

	public function publish() {
		global $wgContentTranslationTranslateInTarget;

		$params = $this->extractRequestParams();
		$user = $this->getUser();

		$targetTitle = Title::newFromText( $params['title'] );
		if ( !$targetTitle ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $params['title'] ) ] );
			} else {
				$this->dieUsageMsg( [ 'invalidtitle', $params['title'] ] );
			}
		}

		$translator = new Translator( $user );
		$work = new TranslationWork( $params['sourcetitle'], $params['from'], $params['to'] );
		$this->translation = Translation::findForTranslator( $work, $translator );

		if ( $this->translation === null ) {
			$this->dieWithError( 'apierror-cx-translationnotfound', 'translationnotfound' );
		}

		if ( $wgContentTranslationTranslateInTarget ) {
			$targetPage = ContentTranslation\SiteMapper::getTargetTitle(
				$params['title'],
				$user->getName()
			);

			$targetURL = ContentTranslation\SiteMapper::getPageURL( $params['to'], $targetPage );
		} else {
			$targetURL = $targetTitle->getCanonicalUrl();
		}

		try {
			$wikitext = $this->restbaseClient->convertHtmlToWikitext( $targetTitle, $this->getHtml() );
		} catch ( MWException $e ) {
			if ( is_callable( [ $this, 'dieWithError' ] ) ) {
				$this->dieWithError(
					[ 'apierror-cx-docserverexception', wfEscapeWikiText( $e->getMessage() ) ], 'docserver'
				);
			} else {
				$this->dieUsage( $e->getMessage(), 'docserver' );
			}
		}

		$saveresult = $this->saveWikitext( $targetTitle, $wikitext, $params );
		$editStatus = $saveresult['edit']['result'];

		if ( $editStatus === 'Success' ) {
			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				// Add the tags post-send, after RC row insertion
				$revId = intval( $saveresult['edit']['newrevid'] );
				DeferredUpdates::addCallableUpdate( function () use ( $revId, $params ) {
					ChangeTags::addTags(
						'contenttranslation',
						null,
						$revId,
						null,
						FormatJson::encode( [
							'from' => $params['from'],
							'to' => $params['to'],
						] )
					);
				} );
			}

			$result = [
				'result' => 'success',
			];

			$this->translation->translation['status'] = 'published';
			$this->translation->translation['targetURL'] = $targetURL;

			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				$result['newrevid'] = intval( $saveresult['edit']['newrevid'] );
				$this->translation->translation['targetRevisionId'] = $result['newrevid'];
			}

			// Save the translation history.
			$this->translation->save( $translator );

			// Notify user about milestones
			$this->notifyTranslator();
		} else {
			$result = [
				'result' => 'error',
				'edit' => $saveresult['edit']
			];
		}

		$this->getResult()->addValue( null, $this->getModuleName(), $result );
	}

	/**
	 * Notify user about milestones.
	 */
	public function notifyTranslator() {
		$params = $this->extractRequestParams();

		// Check if Echo is available. If not, skip.
		if ( !class_exists( 'EchoEvent' ) ) {
			return;
		}

		$user = $this->getUser();
		$translator = new ContentTranslation\Translator( $user );
		$translationCount = $translator->getTranslationsCount();

		switch ( $translationCount ) {
			case 1:
				ContentTranslation\Notification::firstTranslation( $user );
				break;
			case 2:
				ContentTranslation\Notification::suggestionsAvailable( $user, $params['sourcetitle'] );
				break;
			case 10:
				ContentTranslation\Notification::tenthTranslation( $user );
				break;
			case 100:
				ContentTranslation\Notification::hundredthTranslation( $user );
				break;
		}
	}

	/**
	 * Get the HTML content from request and abstract the compression it may have.
	 * @return string The HTML content in the request. Decompressed, if it was compressed.
	 */
	protected function getHtml() {
		$params = $this->extractRequestParams();
		$data = $params['html'];

		if ( substr( $params['html'], 0, 11 ) === 'rawdeflate,' ) {
			$data = gzinflate( base64_decode( substr( $params[ 'html' ], 11 ) ) );
			// gzinflate returns false on error.
			if ( $data === false ) {
				throw new InvalidArgumentException( 'Invalid HTML content.' );
			}
		}

		return $data;
	}

	public function getAllowedParams() {
		return [
			'title' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'html' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'from' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'to' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ApiBase::PARAM_REQUIRED => true,
			],
			'categories' => null,
			/** @todo These should be renamed to something all-lowercase and lacking a "wp" prefix */
			'wpCaptchaId' => null,
			'wpCaptchaWord' => null,
		];
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
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
