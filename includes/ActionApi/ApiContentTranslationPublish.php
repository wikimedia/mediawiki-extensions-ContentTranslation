<?php
/**
 * Saving a wiki page created using ContentTranslation.
 * The following special things happen when the page is created:
 * - HTML from the translation editor's contenteditable is converted to wiki syntax using Parsoid.
 * - A change tag is added. CX2 uses an additional tag.
 * - The edit summary shows a link to the revision from which the translation was made.
 * - Optionally, a template is added if the article appears to have a lot of machine translation.
 * - Categories are hidden in <nowiki> if the page is published to the user namespace.
 * - Information about the translated page is saved to the central ContentTranslation database.
 * - When relevant, values of MediaWiki CAPTCHA can be sent.
 * - When relevant, Echo notifications about publishing milestones will be sent.
 * This borrows heavily from ApiVisualEditorEdit.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

namespace ContentTranslation\ActionApi;

use ApiBase;
use ApiMain;
use ChangeTags;
use ContentTranslation\Notification;
use ContentTranslation\RestbaseClient;
use ContentTranslation\SiteMapper;
use ContentTranslation\Translation;
use ContentTranslation\TranslationWork;
use ContentTranslation\Translator;
use DeferredUpdates;
use Deflate;
use DerivativeRequest;
use EventLogging;
use ExtensionRegistry;
use Language;
use MediaWiki\MediaWikiServices;
use MWException;
use RequestContext;
use Title;

class ApiContentTranslationPublish extends ApiBase {

	/**
	 * @var RestbaseClient
	 */
	protected $restbaseClient;
	/**
	 * @var Translation
	 */
	protected $translation;

	public function __construct( ApiMain $main, $name ) {
		parent::__construct( $main, $name );
		$config = RequestContext::getMain()->getConfig();
		$this->restbaseClient = new RestbaseClient( $config );
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

		$sourceLink = '[[:' . Sitemapper::getDomainCode( $params['from'] )
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

	protected function getTags( array $params ) {
		$tags = $params['publishtags'];
		$tags[] = 'contenttranslation';
		if ( $params['cxversion'] === 2 ) {
			$tags[] = 'contenttranslation-v2'; // Tag for CX2: contenttranslation-v2
		}
		// Remove any tags that are not registered.
		return array_intersect( $tags, ChangeTags::listSoftwareActivatedTags() );
	}

	protected function getCategories( array $params ) {
		$trackingCategoryMsg = 'cx-unreviewed-translation-category';
		$categories = [];

		if ( $params['categories'] ) {
			$categories = explode( '|', $params['categories'] );
		}

		$trackingCategoryKey = array_search( $trackingCategoryMsg, $categories );
		if ( $trackingCategoryKey !== false ) {
			$cat = $this->msg( $trackingCategoryMsg )->inContentLanguage()->plain();
			$containerCategory = Title::makeTitleSafe( NS_CATEGORY, $cat );
			if ( $cat !== '-' && $containerCategory ) {
				// Title without namespace prefix
				$categories[$trackingCategoryKey] = $containerCategory->getText();
				// Record using Graphite that the published translation is marked for review
				MediaWikiServices::getInstance()->getStatsdDataFactory()
					->increment( 'cx.publish.highmt.' . $params['to'] );
			} else {
				wfDebug( __METHOD__ . ": [[MediaWiki:$trackingCategoryMsg]] is not a valid title!\n" );
				unset( $categories[$trackingCategoryKey] );
			}
		}

		// Validate and normalize all categories.
		foreach ( $categories as $index => $category ) {
			$category = $this->removeApiCategoryNamespacePrefix( $category, $params['to'] );
			$title = Title::makeTitleSafe( NS_CATEGORY, $category );
			if ( $title !== null ) {
				$categories[$index] = $title->getPrefixedText();
			} else {
				unset( $categories[$index] );
			}
		}

		// Guard against duplicates, if any.
		$categories = array_unique( $categories );

		return $categories;
	}

	/**
	 * Removes category namespace prefix for a given category received
	 * from API, if existing, otherwise returns category as is
	 * @param string $category
	 * @param string $targetLanguage
	 * @return string
	 */
	private function removeApiCategoryNamespacePrefix( $category, $targetLanguage ) {
		$targetLanguage = MediaWikiServices::getInstance()->getLanguageFactory()->getLanguage( $targetLanguage );
		$targetLanguageCategoryPrefix = $targetLanguage->getNsText( NS_CATEGORY ) . ":";
		if ( substr( $category, 0, strlen( $targetLanguageCategoryPrefix ) ) === $targetLanguageCategoryPrefix ) {
			return substr( $category, strlen( $targetLanguageCategoryPrefix ) );
		}
		return $category;
	}

	public function execute() {
		$params = $this->extractRequestParams();

		$block = $this->getUser()->getBlock();
		if ( $block && $block->isSitewide() ) {
			$this->dieBlocked( $block );
		}

		if ( !Language::isKnownLanguageTag( $params['from'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !Language::isKnownLanguageTag( $params['to'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
		}

		if ( trim( $params['html'] ) === '' ) {
			$this->dieWithError( [ 'apierror-paramempty', 'html' ], 'invalidhtml' );
		}

		$this->publish();
	}

	public function publish() {
		global $wgContentTranslationTranslateInTarget;

		$params = $this->extractRequestParams();
		$user = $this->getUser();

		$targetTitle = Title::newFromText( $params['title'] );
		if ( !$targetTitle ) {
			$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $params['title'] ) ] );
		}

		$translator = new Translator( $user );
		$work = new TranslationWork( $params['sourcetitle'], $params['from'], $params['to'] );
		$this->translation = Translation::findForTranslator( $work, $translator );

		if ( $this->translation === null ) {
			$this->dieWithError( 'apierror-cx-translationnotfound', 'translationnotfound' );
		}

		if ( $wgContentTranslationTranslateInTarget ) {
			$targetPage = SiteMapper::getTargetTitle(
				$params['title'],
				$user->getName()
			);

			$targetURL = SiteMapper::getPageURL( $params['to'], $targetPage );
		} else {
			$targetURL = $targetTitle->getCanonicalURL();
		}

		$html = Deflate::inflate( $params['html'] );
		if ( !$html->isGood() ) {
			$this->dieWithError( 'deflate-invaliddeflate', 'invaliddeflate' );
		}
		try {
			$wikitext = $this->restbaseClient->convertHtmlToWikitext(
				// @phan-suppress-next-line PhanTypeMismatchArgumentNullable T240141
				$targetTitle,
				$html->getValue()
			);
		} catch ( MWException $e ) {
			$this->dieWithError(
				[ 'apierror-cx-docserverexception', wfEscapeWikiText( $e->getMessage() ) ], 'docserver'
			);
		}

		$saveresult = $this->saveWikitext( $targetTitle, $wikitext, $params );
		$editStatus = $saveresult['edit']['result'];

		if ( $editStatus === 'Success' ) {
			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				$tags = $this->getTags( $params );
				// Add the tags post-send, after RC row insertion
				$revId = intval( $saveresult['edit']['newrevid'] );
				DeferredUpdates::addCallableUpdate( static function () use ( $revId, $tags ) {
					ChangeTags::addTags( $tags, null, $revId, null );
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

			// Check whether the page has a "need review" category,
			// and log if necessary
			$trackingCategoryMsg = 'cx-unreviewed-translation-category';
			$categories = [];

			if ( $params['categories'] ) {
				$categories = explode( '|', $params['categories'] );
			}

			$trackingCategoryKey = array_search( $trackingCategoryMsg, $categories );
			if ( $trackingCategoryKey !== false ) {
				$extensionRegistry = ExtensionRegistry::getInstance();

				if ( $extensionRegistry->isLoaded( 'EventLogging' ) ) {
					EventLogging::logEvent(
						'ContentTranslation',
						$extensionRegistry->getAttribute( 'EventLoggingSchemas' )[ 'ContentTranslation' ],
						[
							'version' => 2,
							'token' => $this->getUser()->getName(),
							'action' => 'need-review',
							'sourceLanguage' => $params['from'],
							'targetLanguage' => $params['to'],
							'sourceTitle' => $params['sourcetitle'],
							'targetTitle' => $params['title'],
						]
					);
				}
			}
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
		if ( !ExtensionRegistry::getInstance()->isLoaded( 'Echo' ) ) {
			return;
		}

		$user = $this->getUser();
		$translator = new Translator( $user );
		$translationCount = $translator->getTranslationsCount();

		switch ( $translationCount ) {
			case 1:
				Notification::firstTranslation( $user );
				break;
			case 2:
				Notification::suggestionsAvailable( $user, $params['sourcetitle'] );
				break;
			case 10:
				Notification::tenthTranslation( $user );
				break;
			case 100:
				Notification::hundredthTranslation( $user );
				break;
		}
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
			'publishtags' => [
				ApiBase::PARAM_ISMULTI => true,
			],
			/** @todo These should be renamed to something all-lowercase and lacking a "wp" prefix */
			'wpCaptchaId' => null,
			'wpCaptchaWord' => null,
			'cxversion' => [
				ApiBase::PARAM_TYPE => 'integer',
				ApiBase::PARAM_REQUIRED => true,
				ApiBase::PARAM_RANGE_ENFORCE => true,
				ApiBase::PARAM_MIN => 1,
				ApiBase::PARAM_MAX => 2,
			],
		];
	}

	public function needsToken() {
		return 'csrf';
	}

	public function isWriteMode() {
		return true;
	}

	public function isInternal() {
		return true;
	}
}
