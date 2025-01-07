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

use ContentTranslation\Notification;
use ContentTranslation\ParsoidClient;
use ContentTranslation\ParsoidClientFactory;
use ContentTranslation\Service\TranslationTargetUrlCreator;
use ContentTranslation\SiteMapper;
use ContentTranslation\Store\TranslationStore;
use ContentTranslation\Translation;
use ContentTranslation\Translator;
use Deflate;
use Exception;
use MediaWiki\Api\ApiBase;
use MediaWiki\Api\ApiMain;
use MediaWiki\ChangeTags\ChangeTagsStore;
use MediaWiki\Deferred\DeferredUpdates;
use MediaWiki\Languages\LanguageFactory;
use MediaWiki\Languages\LanguageNameUtils;
use MediaWiki\Registration\ExtensionRegistry;
use MediaWiki\Request\DerivativeRequest;
use MediaWiki\Title\Title;
use Wikimedia\ParamValidator\ParamValidator;
use Wikimedia\ParamValidator\TypeDef\IntegerDef;
use Wikimedia\Stats\StatsFactory;

class ApiContentTranslationPublish extends ApiBase {

	protected ParsoidClientFactory $parsoidClientFactory;
	protected ?Translation $translation;
	private LanguageFactory $languageFactory;
	private StatsFactory $statsFactory;
	private LanguageNameUtils $languageNameUtils;
	private TranslationStore $translationStore;
	private TranslationTargetUrlCreator $targetUrlCreator;
	private ChangeTagsStore $changeTagsStore;

	public function __construct(
		ApiMain $main,
		string $name,
		ParsoidClientFactory $parsoidClientFactory,
		LanguageFactory $languageFactory,
		StatsFactory $statsFactory,
		LanguageNameUtils $languageNameUtils,
		TranslationStore $translationStore,
		TranslationTargetUrlCreator $targetUrlCreator,
		ChangeTagsStore $changeTagsStore
	) {
		parent::__construct( $main, $name );
		$this->parsoidClientFactory = $parsoidClientFactory;
		$this->languageFactory = $languageFactory;
		$this->statsFactory = $statsFactory;
		$this->languageNameUtils = $languageNameUtils;
		$this->translationStore = $translationStore;
		$this->targetUrlCreator = $targetUrlCreator;
		$this->changeTagsStore = $changeTagsStore;
	}

	protected function getParsoidClient(): ParsoidClient {
		return $this->parsoidClientFactory->createParsoidClient();
	}

	/**
	 * @param Title $title
	 * @param string $wikitext
	 * @param array $params
	 * @return array
	 */
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

	protected function getTags( array $params ): array {
		$tags = $params['publishtags'];
		$tags[] = 'contenttranslation';
		if ( $params['cxversion'] === 2 ) {
			$tags[] = 'contenttranslation-v2'; // Tag for CX2: contenttranslation-v2
		}
		// Remove any tags that are not registered.
		return array_intersect(
			$tags,
			$this->changeTagsStore->listSoftwareActivatedTags()
		);
	}

	protected function getCategories( array $params ): array {
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
				// Record using Prometheus that the published translation is marked for review
				$this->statsFactory->getCounter( 'ContentTranslation_publish_highmt_total' )
					->setLabel( 'langCode', $params['to'] )
					->copyToStatsdAt( 'cx.publish.highmt.' . $params['to'] )
					->increment();
			} else {
				wfDebug( __METHOD__ . ": [[MediaWiki:$trackingCategoryMsg]] is not a valid title!\n" );
				unset( $categories[$trackingCategoryKey] );
			}
		}

		// Validate and normalize all categories.
		foreach ( $categories as $index => $category ) {
			$category = $this->removeApiCategoryNamespacePrefix( $category, $params['to'] );
			// Also remove the namespace in English, if any. May be from T264490
			$category = $this->removeApiCategoryNamespacePrefix( $category, 'en' );
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
		$targetLanguage = $this->languageFactory->getLanguage( $targetLanguage );
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

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['from'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidsourcelanguage', 'invalidsourcelanguage' );
		}

		if ( !$this->languageNameUtils->isKnownLanguageTag( $params['to'] ) ) {
			$this->dieWithError( 'apierror-cx-invalidtargetlanguage', 'invalidtargetlanguage' );
		}

		if ( trim( $params['html'] ) === '' ) {
			$this->dieWithError( [ 'apierror-paramempty', 'html' ], 'invalidhtml' );
		}

		$this->publish();
	}

	public function publish() {
		$params = $this->extractRequestParams();
		$user = $this->getUser();

		$targetTitle = Title::newFromText( $params['title'] );
		if ( !$targetTitle ) {
			$this->dieWithError( [ 'apierror-invalidtitle', wfEscapeWikiText( $params['title'] ) ] );
		}

		[ 'sourcetitle' => $sourceTitle, 'from' => $sourceLanguage, 'to' => $targetLanguage ] = $params;
		$this->translation = $this->translationStore->findTranslationByUser(
			$user,
			$sourceTitle,
			$sourceLanguage,
			$targetLanguage
		);

		if ( $this->translation === null ) {
			$this->dieWithError( 'apierror-cx-translationnotfound', 'translationnotfound' );
		}

		$html = Deflate::inflate( $params['html'] );
		if ( !$html->isGood() ) {
			$this->dieWithError( 'deflate-invaliddeflate', 'invaliddeflate' );
		}
		try {
			$wikitext = $this->getParsoidClient()->convertHtmlToWikitext(
				// @phan-suppress-next-line PhanTypeMismatchArgumentNullable T240141
				$targetTitle,
				$html->getValue()
			)['body'];
		} catch ( Exception $e ) {
			$this->dieWithError(
				[ 'apierror-cx-docserverexception', wfEscapeWikiText( $e->getMessage() ) ], 'docserver'
			);
		}

		// @phan-suppress-next-line PhanTypeMismatchArgumentNullable T240141
		$saveresult = $this->saveWikitext( $targetTitle, $wikitext, $params );
		$editStatus = $saveresult['edit']['result'];

		if ( $editStatus === 'Success' ) {
			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				$tags = $this->getTags( $params );
				// Add the tags post-send, after RC row insertion
				$revId = intval( $saveresult['edit']['newrevid'] );
				DeferredUpdates::addCallableUpdate( function () use ( $revId, $tags ) {
					$this->changeTagsStore->addTags( $tags, null, $revId, null );
				} );
			}

			$targetURL = $this->targetUrlCreator->createTargetUrl( $targetTitle->getPrefixedDBkey(), $params['to'] );
			$result = [
				'result' => 'success',
				'targeturl' => $targetURL
			];

			$this->translation->translation['status'] = TranslationStore::TRANSLATION_STATUS_PUBLISHED;
			$this->translation->translation['targetURL'] = $targetURL;

			if ( isset( $saveresult['edit']['newrevid'] ) ) {
				$result['newrevid'] = intval( $saveresult['edit']['newrevid'] );
				$this->translation->translation['targetRevisionId'] = $result['newrevid'];
			}

			// Save the translation history.
			$this->translationStore->saveTranslation( $this->translation, $user );

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

	/** @inheritDoc */
	public function getAllowedParams() {
		return [
			'title' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'html' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'from' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'to' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'sourcetitle' => [
				ParamValidator::PARAM_REQUIRED => true,
			],
			'categories' => null,
			'publishtags' => [
				ParamValidator::PARAM_ISMULTI => true,
			],
			/** @todo These should be renamed to something all-lowercase and lacking a "wp" prefix */
			'wpCaptchaId' => null,
			'wpCaptchaWord' => null,
			'cxversion' => [
				ParamValidator::PARAM_TYPE => 'integer',
				ParamValidator::PARAM_REQUIRED => true,
				ApiBase::PARAM_RANGE_ENFORCE => true,
				IntegerDef::PARAM_MIN => 1,
				IntegerDef::PARAM_MAX => 2,
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

	/** @inheritDoc */
	public function isInternal() {
		return true;
	}
}
