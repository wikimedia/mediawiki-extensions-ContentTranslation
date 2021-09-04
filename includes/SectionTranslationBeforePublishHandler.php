<?php
namespace ContentTranslation;

use CommentStoreComment;
use Config;
use FormatJson;
use MediaWiki\Content\ContentHandlerFactory;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Page\WikiPageFactory;
use MediaWiki\Revision\SlotRecord;
use Title;
use User;

class SectionTranslationBeforePublishHandler implements SectionTranslationBeforePublishHook {

	/** @var ContentHandlerFactory */
	private $contentHandlerFactory;

	/** @var HttpRequestFactory */
	private $httpRequestFactory;

	/** @var WikiPageFactory */
	private $wikiPageFactory;

	/** @var Config */
	private $config;

	/**
	 * @param ContentHandlerFactory $contentHandlerFactory
	 * @param HttpRequestFactory $httpRequestFactory
	 * @param WikiPageFactory $wikiPageFactory
	 * @param Config $config
	 */
	public function __construct(
		ContentHandlerFactory $contentHandlerFactory,
		HttpRequestFactory $httpRequestFactory,
		WikiPageFactory $wikiPageFactory,
		Config $config
	) {
		$this->contentHandlerFactory = $contentHandlerFactory;
		$this->httpRequestFactory = $httpRequestFactory;
		$this->wikiPageFactory = $wikiPageFactory;
		$this->config = $config;
	}

	/** @inheritDoc */
	public function onSectionTranslationBeforePublish( Title $title, string $language, User $user ): void {
		if ( !$this->config->get( 'ContentTranslationContentImportForSectionTranslation' ) ) {
			return;
		}

		$pageContent = $this->getPageContent( $title->getPrefixedDBkey(), $language );
		if ( $pageContent === null ) {
			return;
		}
		$content = $this->contentHandlerFactory->getContentHandler( CONTENT_MODEL_WIKITEXT )->unserializeContent( $pageContent );
		$editMessage = 'Auto-created by SectionTranslation:onSectionTranslationBeforePublish';

		$page = $this->wikiPageFactory->newFromTitle( $title->toPageIdentity() );
		$updater = $page->newPageUpdater( $user );
		$updater->setContent( SlotRecord::MAIN, $content );
		$updater->saveRevision( CommentStoreComment::newUnsavedComment( $editMessage ) );
	}

	protected function doAPIRequest( string $url ): ?string {
		$response = $this->httpRequestFactory->create( $url, [], __METHOD__ );
		$status = $response->execute();
		if ( !$status->isOK() ) {
			return null;
		}
		return $response->getContent();
	}

	public function getPageContent( string $title, string $language ): ?string {
		$baseUrl = SiteMapper::getApiURL( $language );
		$query = [
			'action' => 'query',
			'format' => 'json',
			'formatversion' => 2,
			'prop' => 'revisions',
			'rvprop' => 'content',
			'titles' => $title
		];
		$url = wfAppendQuery( $baseUrl, $query );
		$resp = $this->doAPIRequest( $url );

		if ( $resp === null ) {
			return null;
		}

		$json = FormatJson::decode( $resp, true );
		$page = null;
		if ( isset( $json['query']['pages'] ) ) {
			$pages = array_values( $json['query']['pages'] );
			if ( count( $pages ) === 1 ) {
				$page = $pages[0];
			}
		}

		if ( isset( $page['missing'] ) ) {
			// Page does not exist. Nothing to do.
			return null;
		}

		return $page['revisions'][0]['content'] ?? null;
	}
}
