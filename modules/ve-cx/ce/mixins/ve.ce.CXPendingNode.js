'use strict';

/**
 * An abstract class used as mixin to provide pending indicator support
 * for the nodes. An overlay on top of the node is shown.
 *
 * @abstract
 * @class
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @cfg {jQuery} [$pending] Element to mark as pending, defaults to this.$element
 */
ve.ce.CXPendingNode = function VeCeMixinsCxPendingNode( config ) {
	// Configuration initialization
	config = config || {};
	this.pending = false;
	// Initialisation
	this.$pending = config.$pending || this.$element;
};

/* Methods */

/**
 * Check if an element is pending.
 *
 * @return {boolean} Element is pending
 */
ve.ce.CXPendingNode.prototype.isPending = function () {
	return this.pending;
};

/**
 * Mark the element as pending or not based on boolean pending argument
 *
 * @param {boolean} pending
 */
ve.ce.CXPendingNode.prototype.setPending = function ( pending ) {
	this.pending = pending;

	if ( this.pending ) {
		this.$pending.append( this.getPendingIndicator() );
		this.$pending.addClass( 've-ce-cxPendingNode-pending' );
	} else {
		// The pending indicator might be already overwritten when the content changed
		// But in case of failures or errors, if that did not happen, remove it.
		this.$pending.find( '.ve-ce-cxPendingNode-indicator' ).remove();
		this.$pending.removeClass( 've-ce-cxPendingNode-pending' );

		// Highlight the resulting paragraph for a second.
		this.$pending.addClass( 've-ce-cxPendingNode-flash' );
		setTimeout( function () {
			this.$pending.removeClass( 've-ce-cxPendingNode-flash' );
		}.bind( this ), 2000 ); // More than 1s to wait for finish animation
	}
};

/**
 * Get the indicator element to be used in the overlay
 *
 * @return {jQuery} Pending indicator
 */
ve.ce.CXPendingNode.prototype.getPendingIndicator = function () {
	return $( '<div>' )
		.addClass( 've-ce-cxPendingNode-indicator' )
		.append( mw.cx.widgets.spinner() );
};
