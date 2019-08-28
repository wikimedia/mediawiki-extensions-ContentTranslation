/**
 * UserInterface Feature Discovery widget. Used to show a pulsating blue dot
 * which, when you click, reveals a popup with useful information.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @param {Object} [config] Configuration options
 */
mw.cx.ui.FeatureDiscoveryWidget = function MwCxUiFeatureDiscoveryWidget( config ) {
	var popupCloseButton, $popupContent;

	config = config || {};
	this.$element = config.$container;
	this.onClose = config.onClose;
	popupCloseButton = new OO.ui.ButtonWidget( {
		label: config.dismissLabel,
		flags: [ 'progressive', 'primary' ],
		classes: [ 'mw-cx-ui-featureDiscoveryPopup-dismiss' ]
	} );
	popupCloseButton.connect( this, { click: 'onPopupCloseButtonClick' } );
	$popupContent = $( '<div>' ).append(
		$( '<div>' ).addClass( 'mw-cx-ui-featureDiscoveryPopup-header' ),
		$( '<h3>' ).text( config.title ),
		$( '<p>' ).text( config.content ),
		popupCloseButton.$element
	);

	this.popup = new OO.ui.PopupWidget( {
		$floatableContainer: this.$element,
		$content: $popupContent,
		classes: [ 'mw-cx-ui-featureDiscoveryPopup' ],
		padded: true,
		width: 300
	} );

	this.$pulsatingDot = $( '<div>' ).addClass( 'mw-pulsating-dot' );
	this.$element
		.addClass( 'mw-cx-ui-featureDiscoveryPopup' )
		.append( this.popup.$element, this.$pulsatingDot );
	this.$element.on( 'click', this.show.bind( this ) );
};

/* Initialization */

OO.initClass( mw.cx.ui.FeatureDiscoveryWidget );

/* Methods */

/**
 * Click handler for the popup close button
 */
mw.cx.ui.FeatureDiscoveryWidget.prototype.onPopupCloseButtonClick = function () {
	this.popup.toggle( false );
	if ( this.onClose ) {
		this.onClose();
	}
};

mw.cx.ui.FeatureDiscoveryWidget.prototype.show = function () {
	this.$pulsatingDot.addClass( 'oo-ui-element-hidden' );
	this.popup.toggle( true );
};
