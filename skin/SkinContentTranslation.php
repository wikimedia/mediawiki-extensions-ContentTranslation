<?php
/**
 * Skin subclass for Content Translation
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
		$skinData = parent::getTemplateData() + [
			'cx-version' => $config->get( 'ContentTranslationVersion' ),
			'is-vue' => $config->get( 'ContentTranslationEnableSectionTranslation' ),
			'main-page-href' => Skin::makeMainPageUrl(),
			'user-name' => $this->getUser()->getName(),
		] + $this->getNavigationTemplateData();

		return $skinData;
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
				self::getPersonalToolsForMakeListItem( $personalToolsUrlsPrimary )
			),
			'data-personal-dropdown' => $this->getPortletData( 'personal',
				self::getPersonalToolsForMakeListItem( $personalToolsUrls )
			)
		];
	}
}
