<?php

namespace ContentTranslation\Skin;

use MediaWiki\Linker\Linker;
use MediaWiki\Parser\Sanitizer;
use MediaWiki\Title\Title;
use SkinMustache;

/**
 * Skin subclass for Content Translation
 *
 * @ingroup Skins
 * @internal
 */
class SkinContentTranslation extends SkinMustache {
	/**
	 * @inheritDoc
	 */
	public function __construct( $options = [] ) {
		$options['templateDirectory'] = __DIR__ . '/templates';
		parent::__construct( $options );
	}

	/**
	 * @inheritDoc
	 */
	public function getTemplateData(): array {
		$config = $this->getConfig();

		// is-vue parameter seems unused project-wide
		// TODO: Consider removing it
		return parent::getTemplateData() + [
			'cx-version' => $config->get( 'ContentTranslationVersion' ),
			'is-vue' => $config->get( 'ContentTranslationEnableSectionTranslation' ),
			'main-page-href' => Title::newMainPage()->getLinkURL(),
			'user-name' => $this->getUser()->getName(),
		] + $this->getNavigationTemplateData();
	}

	/**
	 * Generate data for a custom p-personal menu
	 * @param array $items
	 * @return array
	 */
	private function getCustomPortletData( array $items ): array {
		$data = [
			'class' => 'mw-portlet ' . Sanitizer::escapeClass( "mw-portlet-personal" ),
			'html-tooltip' => Linker::tooltip( 'p-personal' ),
			'html-items' => '',
			'html-after-portal' => '',
			'html-before-portal' => '',
		];

		foreach ( $items as $key => $item ) {
			$data['html-items'] .= $this->makeListItem( $key, $item );
		}

		$data['label'] = $this->msg( 'personaltools' )->text();
		$data['is-empty'] = count( $items ) === 0;
		$data['class'] .= $data['is-empty'] ? ' emptyPortlet' : '';
		return $data;
	}

	/**
	 * @return array of portlet data for navigation
	 */
	private function getNavigationTemplateData(): array {
		$personalToolsUrls = $this->buildPersonalUrls();

		// Extract some of the items to a separate list.
		// Rest of them goes to a dropdown menu.
		$ptoolPrimaryKeys = [ 'uls', 'notifications-alert', 'notifications-notice' ];
		$personalToolsUrlsPrimary = [];
		foreach ( $ptoolPrimaryKeys as $key ) {
			if ( isset( $personalToolsUrls[ $key ] ) ) {
				$personalToolsUrlsPrimary[ $key ] = $personalToolsUrls[ $key ];
				unset( $personalToolsUrls[ $key ] );
			}
		}
		return [
			'data-personal' => $this->getCustomPortletData(
				$this->getPersonalToolsForMakeListItem( $personalToolsUrlsPrimary )
			),
			'data-personal-dropdown' => $this->getCustomPortletData(
				$this->getPersonalToolsForMakeListItem( $personalToolsUrls )
			)
		];
	}
}
