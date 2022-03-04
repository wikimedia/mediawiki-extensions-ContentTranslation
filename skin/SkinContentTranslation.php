<?php

namespace ContentTranslation\Skin;

use SkinMustache;
use Title;

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
			'data-personal' => $this->getPortletData( 'personal',
				$this->getPersonalToolsForMakeListItem( $personalToolsUrlsPrimary )
			),
			'data-personal-dropdown' => $this->getPortletData( 'personal',
				$this->getPersonalToolsForMakeListItem( $personalToolsUrls )
			)
		];
	}
}
