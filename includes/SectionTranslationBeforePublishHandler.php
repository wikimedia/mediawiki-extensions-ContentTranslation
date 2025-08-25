<?php
namespace ContentTranslation;

use MediaWiki\CommentStore\CommentStoreComment;
use MediaWiki\Config\Config;
use MediaWiki\Content\ContentHandlerFactory;
use MediaWiki\Http\HttpRequestFactory;
use MediaWiki\Json\FormatJson;
use MediaWiki\Page\WikiPageFactory;
use MediaWiki\Revision\SlotRecord;
use MediaWiki\Title\Title;
use MediaWiki\User\User;

class SectionTranslationBeforePublishHandler implements SectionTranslationBeforePublishHook {

	public function __construct(
		private readonly ContentHandlerFactory $contentHandlerFactory,
		private readonly HttpRequestFactory $httpRequestFactory,
		private readonly WikiPageFactory $wikiPageFactory,
		private readonly Config $config
	) {
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
		$contentHandler = $this->contentHandlerFactory->getContentHandler( CONTENT_MODEL_WIKITEXT );
		$content = $contentHandler->unserializeContent( $pageContent );
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
